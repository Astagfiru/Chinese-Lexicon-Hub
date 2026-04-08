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
import { SlangCard } from "@/components/SlangCard";
import { slangEntries, SlangEntry } from "@/data/slang";

const TYPES: Array<{ key: SlangEntry["type"] | "all"; label: string }> = [
  { key: "all", label: "All" },
  { key: "slang", label: "Slang" },
  { key: "abbreviation", label: "Abbrev." },
  { key: "internet", label: "Internet" },
];

export default function SlangScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<SlangEntry["type"] | "all">("all");

  const filtered = useMemo(() => {
    return slangEntries.filter((entry) => {
      const matchesType = typeFilter === "all" || entry.type === typeFilter;
      const matchesQuery =
        query === "" ||
        entry.word.toLowerCase().includes(query.toLowerCase()) ||
        entry.pinyin.toLowerCase().includes(query.toLowerCase()) ||
        entry.meaning.toLowerCase().includes(query.toLowerCase()) ||
        (entry.origin ?? "").toLowerCase().includes(query.toLowerCase()) ||
        entry.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesType && matchesQuery;
    });
  }, [query, typeFilter]);

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
          网络用语 Slang
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Internet slang & modern abbreviations
        </Text>
        <View style={styles.searchRow}>
          <SearchBar
            value={query}
            onChangeText={setQuery}
            placeholder="Search slang words..."
          />
        </View>
        <View style={styles.filters}>
          {TYPES.map((t) => (
            <View
              key={t.key}
              style={[
                styles.filterBtn,
                {
                  backgroundColor:
                    typeFilter === t.key ? "#9C27B0" : colors.secondary,
                  borderColor:
                    typeFilter === t.key ? "#9C27B0" : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color:
                      typeFilter === t.key
                        ? "#FFFFFF"
                        : colors.mutedForeground,
                  },
                ]}
                onPress={() => setTypeFilter(t.key)}
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
        renderItem={({ item }) => <SlangCard entry={item} />}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 12,
          paddingBottom: bottomPad,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
              No slang found for "{query}"
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
  searchRow: { marginBottom: 10 },
  filters: { flexDirection: "row", gap: 8 },
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
