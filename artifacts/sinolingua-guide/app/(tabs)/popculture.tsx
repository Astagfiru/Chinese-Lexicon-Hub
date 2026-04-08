import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import { SearchBar } from "@/components/SearchBar";
import { PopCultureCard } from "@/components/PopCultureCard";
import { popCulturePhrases, PopCulturePhrase } from "@/data/popculture";

const SOURCE_TYPES: Array<{
  key: PopCulturePhrase["sourceType"] | "all";
  label: string;
}> = [
  { key: "all", label: "Все" },
  { key: "meme", label: "Мем" },
  { key: "drama", label: "Дорама" },
  { key: "movie", label: "Кино" },
  { key: "variety", label: "Шоу" },
  { key: "game", label: "Игры" },
];

export default function PopCultureScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");
  const [sourceFilter, setSourceFilter] = useState<
    PopCulturePhrase["sourceType"] | "all"
  >("all");

  const filtered = useMemo(() => {
    return popCulturePhrases.filter((phrase) => {
      const matchesSource =
        sourceFilter === "all" || phrase.sourceType === sourceFilter;
      const matchesQuery =
        query === "" ||
        phrase.phrase.includes(query) ||
        phrase.pinyin.toLowerCase().includes(query.toLowerCase()) ||
        phrase.meaning.toLowerCase().includes(query.toLowerCase()) ||
        phrase.source.toLowerCase().includes(query.toLowerCase()) ||
        phrase.tags.some((t) =>
          t.toLowerCase().includes(query.toLowerCase())
        );
      return matchesSource && matchesQuery;
    });
  }, [query, sourceFilter]);

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 + 84 : insets.bottom + 84;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View
        style={[
          styles.header,
          {
            paddingTop: topPad + 12,
            backgroundColor: colors.background,
            borderBottomColor: colors.border,
          },
        ]}
      >
        <Text style={[styles.title, { color: colors.foreground }]}>
          流行文化 Поп-культура
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Вирусные фразы, мемы и медиа
        </Text>
        <View style={styles.searchRow}>
          <SearchBar
            value={query}
            onChangeText={setQuery}
            placeholder="Поиск фраз, источников..."
          />
        </View>
        <View style={styles.filters}>
          {SOURCE_TYPES.map((t) => (
            <View
              key={t.key}
              style={[
                styles.filterBtn,
                {
                  backgroundColor:
                    sourceFilter === t.key ? "#E91E63" : colors.secondary,
                  borderColor:
                    sourceFilter === t.key ? "#E91E63" : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color:
                      sourceFilter === t.key
                        ? "#FFFFFF"
                        : colors.mutedForeground,
                  },
                ]}
                onPress={() => setSourceFilter(t.key)}
              >
                {t.label}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PopCultureCard phrase={item} />}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 12,
          paddingBottom: bottomPad,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text
              style={[styles.emptyText, { color: colors.mutedForeground }]}
            >
              Ничего не найдено по запросу «{query}»
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  title: { fontSize: 26, fontFamily: "Inter_700Bold", marginBottom: 2 },
  subtitle: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    marginBottom: 12,
  },
  searchRow: { marginBottom: 10 },
  filters: { flexDirection: "row", gap: 6, flexWrap: "wrap" },
  filterBtn: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
  },
  filterText: { fontSize: 12, fontFamily: "Inter_500Medium" },
  empty: { paddingTop: 40, alignItems: "center" },
  emptyText: { fontSize: 15, fontFamily: "Inter_400Regular" },
});
