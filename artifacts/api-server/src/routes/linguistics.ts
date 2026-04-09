import { Router, type Request, type Response } from "express";
import { fetchRows } from "../lib/hf-client.js";

const router = Router();

/**
 * Dataset: chinese-enthusiasts/idiom-embeddings
 * Format per row: { text: "一成不变: (idiom) immutable; impervious to change; set in stone" }
 * 2,999 total rows
 */
function parseIdiomEmbedding(text: string) {
  const colonIdx = text.indexOf(":");
  if (colonIdx === -1) return null;
  const characters = text.slice(0, colonIdx).trim();
  const definition = text.slice(colonIdx + 1).replace(/^\s*\(idiom\)\s*/i, "").trim();
  return { characters, definition };
}

/**
 * Dataset: yunxiao11xie/chengyu_chinese
 * Format: { instruction: "暗度陈仓\n成语释义：", output: "指正面迷惑敌人..." }
 * 111 total rows, human-verified
 */
function parseChengyu(row: Record<string, unknown>) {
  const instruction = String(row["instruction"] ?? "");
  const output = String(row["output"] ?? "");
  const characters = instruction.split("\n")[0]?.trim() ?? "";
  return { characters, explanation: output.trim() };
}

/**
 * Dataset: mmdjiji/bert-chinese-idioms (ChID-like)
 * Format: { candidates: [...10 idioms...], content: [...sentences with #idiomN# placeholders...] }
 * 84,709 total rows
 */
function parseContextRow(row: Record<string, unknown>) {
  const candidates = (row["candidates"] as string[]) ?? [];
  const content = (row["content"] as string[]) ?? [];
  return { candidates, contexts: content.slice(0, 3) };
}

/**
 * GET /api/linguistics/idioms
 * Fetch paginated idioms from Chinese-enthusiasts/idiom-embeddings (PETCI-like)
 */
router.get("/idioms", async (req: Request, res: Response) => {
  const offset = Math.max(0, Number(req.query["offset"]) || 0);
  const length = Math.min(50, Math.max(1, Number(req.query["length"]) || 20));

  const data = await fetchRows("chinese-enthusiasts/idiom-embeddings", "train", offset, length);

  const idioms = data.rows
    .map((r) => parseIdiomEmbedding(String(r.row["text"] ?? "")))
    .filter(Boolean);

  res.json({
    source: "chinese-enthusiasts/idiom-embeddings",
    dataset: "PETCI-compatible (Parallel idiom embeddings)",
    total: data.num_rows_total,
    offset,
    length: idioms.length,
    idioms,
  });
});

/**
 * GET /api/linguistics/idioms/random
 * Random idiom from the embeddings dataset
 */
router.get("/idioms/random", async (_req: Request, res: Response) => {
  const total = 2999;
  const offset = Math.floor(Math.random() * (total - 5));
  const data = await fetchRows("chinese-enthusiasts/idiom-embeddings", "train", offset, 5);

  const idx = Math.floor(Math.random() * data.rows.length);
  const row = data.rows[idx];
  if (!row) {
    res.status(404).json({ error: "No data" });
    return;
  }

  const parsed = parseIdiomEmbedding(String(row.row["text"] ?? ""));
  res.json({
    source: "chinese-enthusiasts/idiom-embeddings",
    idiom: parsed,
  });
});

/**
 * GET /api/linguistics/chengyu
 * Detailed chengyu from yunxiao11xie/chengyu_chinese (ChID-compatible)
 * 111 human-verified entries with full Chinese explanations and origins
 */
router.get("/chengyu", async (req: Request, res: Response) => {
  const offset = Math.max(0, Number(req.query["offset"]) || 0);
  const length = Math.min(50, Math.max(1, Number(req.query["length"]) || 10));

  const data = await fetchRows("yunxiao11xie/chengyu_chinese", "train", offset, length);

  const entries = data.rows.map((r) => parseChengyu(r.row));

  res.json({
    source: "yunxiao11xie/chengyu_chinese",
    dataset: "ChID-compatible (Chinese Idiom Dataset)",
    total: data.num_rows_total,
    offset,
    length: entries.length,
    chengyu: entries,
  });
});

/**
 * GET /api/linguistics/context
 * Usage context examples from mmdjiji/bert-chinese-idioms
 * Returns candidates + real-text sentences with idiom placeholders
 */
router.get("/context", async (req: Request, res: Response) => {
  const offset = Math.max(0, Number(req.query["offset"]) || 0);
  const length = Math.min(10, Math.max(1, Number(req.query["length"]) || 5));

  const data = await fetchRows("mmdjiji/bert-chinese-idioms", "train", offset, length);

  const entries = data.rows.map((r) => parseContextRow(r.row));

  res.json({
    source: "mmdjiji/bert-chinese-idioms",
    dataset: "ChID (Chinese Idiom Dataset) — fill-in-the-blank corpus",
    total: data.num_rows_total,
    offset,
    length: entries.length,
    entries,
  });
});

/**
 * GET /api/linguistics/datasets
 * Report on available datasets and their row counts
 */
router.get("/datasets", async (_req: Request, res: Response) => {
  const datasets = [
    {
      id: "chinese-enthusiasts/idiom-embeddings",
      label: "PETCI — Parallel Idiom Embeddings",
      description: "Словарь 成语 с английскими определениями",
      rows: 2999,
      endpoint: "/api/linguistics/idioms",
    },
    {
      id: "yunxiao11xie/chengyu_chinese",
      label: "ChID — Chinese Idiom Dataset (detailed)",
      description: "111 идиом с полными китайскими пояснениями и источниками",
      rows: 111,
      endpoint: "/api/linguistics/chengyu",
    },
    {
      id: "mmdjiji/bert-chinese-idioms",
      label: "ChID — BERT fill-in-the-blank corpus",
      description: "84 709 предложений с пропущенными идиомами из реальных текстов",
      rows: 84709,
      endpoint: "/api/linguistics/context",
    },
  ];

  res.json({ datasets });
});

export default router;
