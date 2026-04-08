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
import { IdiomCard } from "@/components/IdiomCard";
import { idioms } from "@/data/idioms";

const FILTER_OPTIONS = [
  { key: "All", label: "Все" },
  { key: "easy", label: "Лёгкие" },
  { key: "medium", label: "Средние" },
  { key: "hard", label: "Сложные" },
] as const;

export default function IdiomsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"All" | "easy" | "medium" | "hard">("All");

  const filtered = useMemo(() => {
    return idioms.filter((idiom) => {
      const matchesQuery =
        query === "" ||
        idiom.idiom.includes(query) ||
        idiom.pinyin.toLowerCase().includes(query.toLowerCase()) ||
        idiom.translation.toLowerCase().includes(query.toLowerCase()) ||
        idiom.meaning.toLowerCase().includes(query.toLowerCase()) ||
        idiom.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const matchesFilter =
        filter === "All" || idiom.difficulty === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

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
          成语 Чэнъюи
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Классические китайские идиомы
        </Text>
        <View style={styles.searchRow}>
          <SearchBar
            value={query}
            onChangeText={setQuery}
            placeholder="Поиск по иероглифам, пиньиню, значению..."
          />
        </View>
        <View style={styles.filters}>
          {FILTER_OPTIONS.map((opt) => (
            <View
              key={opt.key}
              style={[
                styles.filterBtn,
                {
                  backgroundColor:
                    filter === opt.key ? colors.primary : colors.secondary,
                  borderColor:
                    filter === opt.key ? colors.primary : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color:
                      filter === opt.key
                        ? colors.primaryForeground
                        : colors.mutedForeground,
                  },
                ]}
                onPress={() => setFilter(opt.key)}
              >
                {opt.label}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <IdiomCard idiom={item} />}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 12,
          paddingBottom: bottomPad,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
              Ничего не найдено по запросу «{query}»
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 26,
    fontFamily: "Inter_700Bold",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    marginBottom: 12,
  },
  searchRow: {
    marginBottom: 10,
  },
  filters: {
    flexDirection: "row",
    gap: 8,
  },
  filterBtn: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 1,
  },
  filterText: {
    fontSize: 13,
    fontFamily: "Inter_500Medium",
  },
  empty: {
    paddingTop: 40,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },
});
