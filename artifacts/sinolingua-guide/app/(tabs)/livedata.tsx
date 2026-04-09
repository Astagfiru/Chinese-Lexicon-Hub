import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const REPL_ID = process.env.EXPO_PUBLIC_REPL_ID ?? "";
const DEV_DOMAIN = process.env.EXPO_PUBLIC_DOMAIN ?? "";

function getApiBase() {
  if (DEV_DOMAIN && REPL_ID) return `https://${DEV_DOMAIN}/api`;
  return "http://localhost:8080/api";
}

const API = getApiBase();

type Tab = "idioms" | "chengyu" | "context" | "datasets";

interface Dataset {
  id: string;
  label: string;
  description: string;
  rows: number;
  endpoint: string;
}

export default function LiveDataScreen() {
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = (Platform.OS === "web" ? 0 : insets.bottom) + 84;

  const [activeTab, setActiveTab] = useState<Tab>("datasets");
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);

  const load = useCallback(async (tab: Tab, off = 0) => {
    setLoading(true);
    setError(null);
    try {
      let url = "";
      if (tab === "datasets") url = `${API}/linguistics/datasets`;
      else if (tab === "idioms") url = `${API}/linguistics/idioms?offset=${off}&length=10`;
      else if (tab === "chengyu") url = `${API}/linguistics/chengyu?offset=${off}&length=10`;
      else if (tab === "context") url = `${API}/linguistics/context?offset=${off}&length=5`;

      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
      setOffset(off);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Ошибка загрузки");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load(activeTab, 0);
  }, [activeTab, load]);

  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
    setOffset(0);
    setData(null);
  };

  return (
    <View style={[styles.container, { paddingTop: topPad }]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Живые данные</Text>
        <Text style={styles.headerSub}>HuggingFace Datasets API</Text>
      </View>

      <View style={styles.tabRow}>
        {(["datasets", "idioms", "chengyu", "context"] as Tab[]).map((t) => (
          <TouchableOpacity
            key={t}
            style={[styles.tabBtn, activeTab === t && styles.tabBtnActive]}
            onPress={() => switchTab(t)}
          >
            <Text style={[styles.tabBtnText, activeTab === t && styles.tabBtnTextActive]}>
              {t === "datasets" ? "Источники" : t === "idioms" ? "Словарь" : t === "chengyu" ? "成语" : "Контекст"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: bottomPad }]}
        showsVerticalScrollIndicator={false}
      >
        {loading && (
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#C0392B" />
            <Text style={styles.loadingText}>Запрос к датасету...</Text>
          </View>
        )}

        {error && !loading && (
          <View style={styles.errorBox}>
            <Text style={styles.errorTitle}>Ошибка подключения</Text>
            <Text style={styles.errorText}>{error}</Text>
            <Text style={styles.errorHint}>API: {API}/linguistics/...</Text>
            <TouchableOpacity style={styles.retryBtn} onPress={() => load(activeTab, offset)}>
              <Text style={styles.retryText}>Повторить</Text>
            </TouchableOpacity>
          </View>
        )}

        {!loading && !error && data && activeTab === "datasets" && (
          <DatasetsView data={data as { datasets: Dataset[] }} />
        )}
        {!loading && !error && data && activeTab === "idioms" && (
          <IdiomsView data={data as { idioms: { characters: string; definition: string }[]; total: number; source: string }} offset={offset} onPage={(off) => load("idioms", off)} />
        )}
        {!loading && !error && data && activeTab === "chengyu" && (
          <ChengyuView data={data as { chengyu: { characters: string; explanation: string }[]; total: number; source: string }} offset={offset} onPage={(off) => load("chengyu", off)} />
        )}
        {!loading && !error && data && activeTab === "context" && (
          <ContextView data={data as { entries: { candidates: string[]; contexts: string[] }[]; total: number; source: string }} offset={offset} onPage={(off) => load("context", off)} />
        )}
      </ScrollView>
    </View>
  );
}

function DatasetsView({ data }: { data: { datasets: Dataset[] } }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Открытые лингвистические датасеты</Text>
      <Text style={styles.sectionSub}>Бэкенд делает прямые HTTP-запросы к HuggingFace Datasets API</Text>
      {data.datasets.map((ds) => (
        <View key={ds.id} style={styles.card}>
          <Text style={styles.cardLabel}>{ds.label}</Text>
          <Text style={styles.cardId}>{ds.id}</Text>
          <Text style={styles.cardDesc}>{ds.description}</Text>
          <View style={styles.rowBadge}>
            <Text style={styles.badge}>{ds.rows.toLocaleString()} строк</Text>
            <Text style={styles.endpoint}>{ds.endpoint}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

function IdiomsView({
  data,
  offset,
  onPage,
}: {
  data: { idioms: { characters: string; definition: string }[]; total: number; source: string };
  offset: number;
  onPage: (off: number) => void;
}) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Словарь идиом — {data.source}</Text>
      <Text style={styles.sectionSub}>Всего: {data.total.toLocaleString()} записей · показано {offset + 1}–{offset + data.idioms.length}</Text>
      {data.idioms.map((item, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.chinese}>{item.characters}</Text>
          <Text style={styles.definition}>{item.definition}</Text>
        </View>
      ))}
      <View style={styles.pager}>
        <TouchableOpacity style={[styles.pageBtn, offset === 0 && styles.pageBtnDis]} disabled={offset === 0} onPress={() => onPage(Math.max(0, offset - 10))}>
          <Text style={styles.pageBtnText}>← Назад</Text>
        </TouchableOpacity>
        <Text style={styles.pageInfo}>{Math.floor(offset / 10) + 1} / {Math.ceil(data.total / 10)}</Text>
        <TouchableOpacity style={styles.pageBtn} onPress={() => onPage(offset + 10)}>
          <Text style={styles.pageBtnText}>Далее →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ChengyuView({
  data,
  offset,
  onPage,
}: {
  data: { chengyu: { characters: string; explanation: string }[]; total: number; source: string };
  offset: number;
  onPage: (off: number) => void;
}) {
  return (
    <View>
      <Text style={styles.sectionTitle}>成语 с объяснениями — {data.source}</Text>
      <Text style={styles.sectionSub}>Всего: {data.total} записей, верифицированных человеком</Text>
      {data.chengyu.map((item, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.chinese}>{item.characters}</Text>
          <Text style={styles.explanation} numberOfLines={6}>{item.explanation}</Text>
        </View>
      ))}
      <View style={styles.pager}>
        <TouchableOpacity style={[styles.pageBtn, offset === 0 && styles.pageBtnDis]} disabled={offset === 0} onPress={() => onPage(Math.max(0, offset - 10))}>
          <Text style={styles.pageBtnText}>← Назад</Text>
        </TouchableOpacity>
        <Text style={styles.pageInfo}>{Math.floor(offset / 10) + 1} / {Math.ceil(data.total / 10)}</Text>
        <TouchableOpacity style={styles.pageBtn} onPress={() => onPage(offset + 10)}>
          <Text style={styles.pageBtnText}>Далее →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ContextView({
  data,
  offset,
  onPage,
}: {
  data: { entries: { candidates: string[]; contexts: string[] }[]; total: number; source: string };
  offset: number;
  onPage: (off: number) => void;
}) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Контексты употребления — ChID</Text>
      <Text style={styles.sectionSub}>Всего: {data.total.toLocaleString()} предложений из реальных текстов</Text>
      {data.entries.map((item, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.label}>Кандидаты:</Text>
          <Text style={styles.candidates}>{item.candidates.join(" · ")}</Text>
          <Text style={styles.label}>Пример:</Text>
          <Text style={styles.context} numberOfLines={5}>{item.contexts[0]}</Text>
        </View>
      ))}
      <View style={styles.pager}>
        <TouchableOpacity style={[styles.pageBtn, offset === 0 && styles.pageBtnDis]} disabled={offset === 0} onPress={() => onPage(Math.max(0, offset - 5))}>
          <Text style={styles.pageBtnText}>← Назад</Text>
        </TouchableOpacity>
        <Text style={styles.pageInfo}>{Math.floor(offset / 5) + 1} / {Math.ceil(data.total / 5)}</Text>
        <TouchableOpacity style={styles.pageBtn} onPress={() => onPage(offset + 5)}>
          <Text style={styles.pageBtnText}>Далее →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF8F3" },
  header: { paddingHorizontal: 20, paddingBottom: 12, paddingTop: 8, backgroundColor: "#C0392B" },
  headerTitle: { fontSize: 22, fontWeight: "800", color: "#FFFFFF" },
  headerSub: { fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 },
  tabRow: { flexDirection: "row", backgroundColor: "#FFFFFF", borderBottomWidth: 1, borderBottomColor: "#F0D9CC" },
  tabBtn: { flex: 1, paddingVertical: 10, alignItems: "center" },
  tabBtnActive: { borderBottomWidth: 2, borderBottomColor: "#C0392B" },
  tabBtnText: { fontSize: 12, color: "#8B6B5C", fontWeight: "500" },
  tabBtnTextActive: { color: "#C0392B", fontWeight: "700" },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, gap: 12 },
  center: { paddingTop: 60, alignItems: "center", gap: 12 },
  loadingText: { color: "#8B6B5C", fontSize: 14 },
  errorBox: { backgroundColor: "#FFF0EE", borderRadius: 12, padding: 20, gap: 8, borderWidth: 1, borderColor: "#FFCCCC" },
  errorTitle: { fontSize: 16, fontWeight: "700", color: "#C0392B" },
  errorText: { fontSize: 14, color: "#8B6B5C" },
  errorHint: { fontSize: 11, color: "#AAA", fontFamily: "monospace" },
  retryBtn: { marginTop: 8, backgroundColor: "#C0392B", borderRadius: 8, paddingVertical: 10, alignItems: "center" },
  retryText: { color: "#FFFFFF", fontWeight: "700", fontSize: 14 },
  sectionTitle: { fontSize: 17, fontWeight: "800", color: "#1A0A00", marginBottom: 4 },
  sectionSub: { fontSize: 12, color: "#8B6B5C", marginBottom: 12 },
  card: { backgroundColor: "#FFFFFF", borderRadius: 12, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: "#F0D9CC", shadowColor: "#000", shadowOpacity: 0.04, shadowRadius: 6, shadowOffset: { width: 0, height: 2 } },
  cardLabel: { fontSize: 15, fontWeight: "700", color: "#C0392B" },
  cardId: { fontSize: 11, color: "#8B6B5C", fontFamily: "monospace", marginTop: 2 },
  cardDesc: { fontSize: 13, color: "#1A0A00", marginTop: 6 },
  rowBadge: { flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 },
  badge: { backgroundColor: "#F5E6DC", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4, fontSize: 12, fontWeight: "600", color: "#C0392B" },
  endpoint: { fontSize: 11, color: "#8B6B5C", fontFamily: "monospace" },
  chinese: { fontSize: 24, fontWeight: "800", color: "#C0392B", marginBottom: 6 },
  definition: { fontSize: 14, color: "#1A0A00", lineHeight: 20 },
  explanation: { fontSize: 13, color: "#3D2010", lineHeight: 20 },
  label: { fontSize: 11, fontWeight: "700", color: "#8B6B5C", letterSpacing: 0.5, marginTop: 6, marginBottom: 2 },
  candidates: { fontSize: 13, color: "#C0392B", fontWeight: "600" },
  context: { fontSize: 13, color: "#1A0A00", lineHeight: 19 },
  pager: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 12, paddingHorizontal: 4 },
  pageBtn: { backgroundColor: "#C0392B", borderRadius: 8, paddingVertical: 8, paddingHorizontal: 14 },
  pageBtnDis: { backgroundColor: "#F0D9CC" },
  pageBtnText: { color: "#FFFFFF", fontWeight: "700", fontSize: 13 },
  pageInfo: { color: "#8B6B5C", fontSize: 13 },
});
