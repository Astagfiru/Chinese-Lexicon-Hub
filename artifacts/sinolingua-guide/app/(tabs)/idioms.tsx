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

const FILTER_OPTIONS = ["All", "Easy", "Medium", "Hard"] as const;

export default function IdiomsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof FILTER_OPTIONS)[number]>("All");

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
        filter === "All" ||
        idiom.difficulty === filter.toLowerCase();
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
          成语 Chengyu
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Classical Chinese idioms
        </Text>
        <View style={styles.searchRow}>
          <SearchBar
            value={query}
            onChangeText={setQuery}
            placeholder="Search by character, pinyin, or meaning..."
          />
        </View>
        <View style={styles.filters}>
          {FILTER_OPTIONS.map((opt) => (
            <View
              key={opt}
              style={[
                styles.filterBtn,
                {
                  backgroundColor:
                    filter === opt ? colors.primary : colors.secondary,
                  borderColor:
                    filter === opt ? colors.primary : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color:
                      filter === opt
                        ? colors.primaryForeground
                        : colors.mutedForeground,
                  },
                ]}
                onPress={() => setFilter(opt)}
              >
                {opt}
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
              No idioms found for "{query}"
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
