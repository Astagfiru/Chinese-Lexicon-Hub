import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import { idioms } from "@/data/idioms";
import { slangEntries } from "@/data/slang";
import { cultureEntries } from "@/data/culture";

const sections = [
  {
    key: "idioms",
    title: "Чэнъюи",
    titleChinese: "成语",
    subtitle: "Классические четырёхсловные идиомы",
    icon: "book-open" as const,
    color: "#C0392B",
    count: idioms.length,
    route: "/(tabs)/idioms",
  },
  {
    key: "slang",
    title: "Сленг",
    titleChinese: "网络用语",
    subtitle: "Интернет-сленг и сокращения",
    icon: "zap" as const,
    color: "#9C27B0",
    count: slangEntries.length,
    route: "/(tabs)/slang",
  },
  {
    key: "popculture",
    title: "Поп-культура",
    titleChinese: "流行文化",
    subtitle: "Вирусные фразы из медиа и мемов",
    icon: "film" as const,
    color: "#E91E63",
    count: 16,
    route: "/(tabs)/popculture",
  },
  {
    key: "pronunciation",
    title: "Произношение",
    titleChinese: "发音",
    subtitle: "Тоны и сложные звуки",
    icon: "mic" as const,
    color: "#009688",
    count: 10,
    route: "/(tabs)/pronunciation",
  },
  {
    key: "dialogues",
    title: "Диалоги",
    titleChinese: "对话练习",
    subtitle: "Интерактивные разговорные сценарии",
    icon: "message-circle" as const,
    color: "#2196F3",
    count: 5,
    route: "/(tabs)/dialogues",
  },
  {
    key: "culture",
    title: "Культура",
    titleChinese: "文化指南",
    subtitle: "Традиции, этикет и общество",
    icon: "globe" as const,
    color: "#D4A017",
    count: cultureEntries.length,
    route: "/(tabs)/culture",
  },
];

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 + 84 : insets.bottom + 84;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{
        paddingTop: topPad + 16,
        paddingBottom: bottomPad,
        paddingHorizontal: 16,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Шапка */}
      <View style={styles.hero}>
        <Text style={[styles.heroTitle, { color: colors.primary }]}>
          汉语
        </Text>
        <Text style={[styles.heroSubtitle, { color: colors.foreground }]}>
          Sinolingua Guide
        </Text>
        <Text style={[styles.heroDesc, { color: colors.mutedForeground }]}>
          Твой помощник в изучении китайского языка и культуры
        </Text>
      </View>

      {/* Быстрая статистика */}
      <View style={[styles.statsRow, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={styles.stat}>
          <Text style={[styles.statNum, { color: colors.primary }]}>20+</Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>Чэнъюев</Text>
        </View>
        <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
        <View style={styles.stat}>
          <Text style={[styles.statNum, { color: colors.primary }]}>20+</Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>Сленга</Text>
        </View>
        <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
        <View style={styles.stat}>
          <Text style={[styles.statNum, { color: colors.primary }]}>5</Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>Сценариев</Text>
        </View>
      </View>

      {/* Заголовок секции */}
      <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
        Разделы
      </Text>

      {/* Сетка разделов */}
      <View style={styles.grid}>
        {sections.map((section) => (
          <TouchableOpacity
            key={section.key}
            onPress={() => router.push(section.route as any)}
            activeOpacity={0.85}
            style={[
              styles.card,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                shadowColor: colors.ink,
              },
            ]}
          >
            <View
              style={[
                styles.iconBox,
                { backgroundColor: section.color + "18" },
              ]}
            >
              <Feather name={section.icon} size={22} color={section.color} />
            </View>
            <Text style={[styles.cardTitle, { color: colors.foreground }]}>
              {section.title}
            </Text>
            <Text style={[styles.cardChinese, { color: section.color }]}>
              {section.titleChinese}
            </Text>
            <Text
              style={[styles.cardSubtitle, { color: colors.mutedForeground }]}
              numberOfLines={2}
            >
              {section.subtitle}
            </Text>
            <View style={styles.cardFooter}>
              <Text
                style={[
                  styles.cardCount,
                  { color: colors.mutedForeground },
                ]}
              >
                {section.count} записей
              </Text>
              <Feather
                name="arrow-right"
                size={14}
                color={section.color}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    marginBottom: 20,
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 56,
    fontFamily: "Inter_700Bold",
    lineHeight: 64,
    letterSpacing: 8,
  },
  heroSubtitle: {
    fontSize: 22,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  heroDesc: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: "row",
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 24,
    overflow: "hidden",
  },
  stat: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
  },
  statNum: {
    fontSize: 22,
    fontFamily: "Inter_700Bold",
  },
  statLabel: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Inter_700Bold",
    marginBottom: 14,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    width: "47.5%",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 2,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: "Inter_700Bold",
    marginBottom: 2,
  },
  cardChinese: {
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 11,
    fontFamily: "Inter_400Regular",
    lineHeight: 16,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardCount: {
    fontSize: 11,
    fontFamily: "Inter_500Medium",
  },
});
