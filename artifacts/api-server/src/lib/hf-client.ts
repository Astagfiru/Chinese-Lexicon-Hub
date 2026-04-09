const HF_BASE = "https://datasets-server.huggingface.co";

export interface HFRowsResponse {
  rows: Array<{ row_idx: number; row: Record<string, unknown> }>;
  num_rows_total: number;
  features: Array<{ name: string; type: unknown }>;
}

const cache = new Map<string, { data: HFRowsResponse; expires: number }>();
const CACHE_TTL_MS = 5 * 60 * 1000;

export async function fetchRows(
  dataset: string,
  split = "train",
  offset = 0,
  length = 20,
): Promise<HFRowsResponse> {
  const key = `${dataset}|${split}|${offset}|${length}`;
  const cached = cache.get(key);
  if (cached && cached.expires > Date.now()) return cached.data;

  const url = `${HF_BASE}/rows?dataset=${encodeURIComponent(dataset)}&config=default&split=${split}&offset=${offset}&length=${length}`;
  const res = await fetch(url, {
    headers: { "Accept": "application/json" },
    signal: AbortSignal.timeout(10000),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HuggingFace API error ${res.status}: ${text.slice(0, 200)}`);
  }

  const data = (await res.json()) as HFRowsResponse;
  cache.set(key, { data, expires: Date.now() + CACHE_TTL_MS });
  return data;
}

export async function fetchInfo(dataset: string): Promise<unknown> {
  const url = `${HF_BASE}/info?dataset=${encodeURIComponent(dataset)}`;
  const res = await fetch(url, {
    headers: { "Accept": "application/json" },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`HuggingFace API error ${res.status}`);
  return res.json();
}
