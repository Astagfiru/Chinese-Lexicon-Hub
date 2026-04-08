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
import { CultureCard } from "@/components/CultureCard";
import { cultureEntries, CultureEntry } from "@/data/culture";

const CATEGORIES: Array<{
  key: CultureEntry["category"] | "all";
  label: string;
}> = [
  { key: "all", label: "Все" },
  { key: "social", label: "Социум" },
  { key: "etiquette", label: "Этикет" },
  { key: "food", label: "Еда" },
  { key: "festivals", label: "Праздники" },
  { key: "business", label: "Бизнес" },
  { key: "symbols", label: "Символы" },
  { key: "history", label: "История" },
];

export default function CultureScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");
  const [catFilter, setCatFilter] = useState<
    CultureEntry["category"] | "all"
  >("all");

  const filtered = useMemo(() => {
    return cultureEntries.filter((entry) => {
      const matchesCat = catFilter === "all" || entry.category === catFilter;
      const matchesQuery =
        query === "" ||
        entry.title.toLowerCase().includes(query.toLowerCase()) ||
        entry.titleChinese.includes(query) ||
        entry.description.toLowerCase().includes(query.toLowerCase()) ||
        entry.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCat && matchesQuery;
    });
  }, [query, catFilter]);

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
          文化指南 Культура
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Традиции, этикет и китайское общество
        </Text>
        <View style={styles.searchRow}>
          <SearchBar
            value={query}
            onChangeText={setQuery}
            placeholder="Поиск по темам культуры..."
          />
        </View>
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          style={styles.filterList}
          contentContainerStyle={{ gap: 8 }}
          renderItem={({ item: t }) => (
            <View
              style={[
                styles.filterBtn,
                {
                  backgroundColor:
                    catFilter === t.key ? "#D4A017" : colors.secondary,
                  borderColor:
                    catFilter === t.key ? "#D4A017" : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color:
                      catFilter === t.key ? "#FFFFFF" : colors.mutedForeground,
                  },
                ]}
                onPress={() => setCatFilter(t.key)}
              >
                {t.label}
              </Text>
            </View>
          )}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CultureCard entry={item} />}
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
  filterList: { marginBottom: 2 },
  filterBtn: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 1,
  },
  filterText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  empty: { paddingTop: 40, alignItems: "center" },
  emptyText: { fontSize: 15, fontFamily: "Inter_400Regular" },
});
