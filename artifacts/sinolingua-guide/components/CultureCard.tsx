import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useColors } from "@/hooks/useColors";
import type { CultureEntry } from "@/data/culture";

const categoryConfig: Record<
  CultureEntry["category"],
  { icon: string; color: string; label: string }
> = {
  etiquette: { icon: "award", color: "#E91E63", label: "Этикет" },
  festivals: { icon: "gift", color: "#FF5722", label: "Праздники" },
  food: { icon: "coffee", color: "#795548", label: "Еда" },
  business: { icon: "briefcase", color: "#607D8B", label: "Бизнес" },
  social: { icon: "users", color: "#3F51B5", label: "Социум" },
  symbols: { icon: "star", color: "#D4A017", label: "Символы" },
  history: { icon: "book", color: "#4CAF50", label: "История" },
};

export function CultureCard({ entry }: { entry: CultureEntry }) {
  const colors = useColors();
  const [expanded, setExpanded] = useState(false);
  const config = categoryConfig[entry.category];

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setExpanded((p) => !p);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.85}
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <View style={styles.header}>
        <View
          style={[
            styles.categoryBadge,
            { backgroundColor: config.color + "15" },
          ]}
        >
          <Feather name={config.icon as any} size={12} color={config.color} />
          <Text style={[styles.categoryLabel, { color: config.color }]}>
            {config.label}
          </Text>
        </View>
        <Feather
          name={expanded ? "chevron-up" : "chevron-down"}
          size={18}
          color={colors.mutedForeground}
        />
      </View>

      <Text style={[styles.title, { color: colors.foreground }]}>
        {entry.title}
      </Text>
      <Text style={[styles.titleChinese, { color: colors.primary }]}>
        {entry.titleChinese}
      </Text>

      {expanded ? (
        <View style={styles.body}>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <Text style={[styles.description, { color: colors.foreground }]}>
            {entry.description}
          </Text>

          <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
            КЛЮЧЕВЫЕ МОМЕНТЫ
          </Text>
          {entry.keyPoints.map((point, i) => (
            <View key={i} style={styles.keyPoint}>
              <View
                style={[styles.bullet, { backgroundColor: config.color }]}
              />
              <Text
                style={[styles.keyPointText, { color: colors.foreground }]}
              >
                {point}
              </Text>
            </View>
          ))}

          <View
            style={[
              styles.exampleBox,
              {
                backgroundColor: colors.muted,
                borderLeftColor: config.color,
              },
            ]}
          >
            <Text
              style={[styles.exampleLabel, { color: colors.mutedForeground }]}
            >
              Пример
            </Text>
            <Text style={[styles.example, { color: colors.foreground }]}>
              {entry.example}
            </Text>
          </View>

          {entry.doAndDont && (
            <View style={styles.dosDonts}>
              <View style={styles.dosColumn}>
                <Text style={[styles.dosLabel, { color: "#4CAF50" }]}>
                  СТОИТ
                </Text>
                {entry.doAndDont.do.map((item, i) => (
                  <View key={i} style={styles.dosItem}>
                    <Feather name="check" size={12} color="#4CAF50" />
                    <Text
                      style={[styles.dosText, { color: colors.foreground }]}
                    >
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={styles.dontsColumn}>
                <Text style={[styles.dosLabel, { color: "#F44336" }]}>
                  НЕ СТОИТ
                </Text>
                {entry.doAndDont.dont.map((item, i) => (
                  <View key={i} style={styles.dosItem}>
                    <Feather name="x" size={12} color="#F44336" />
                    <Text
                      style={[styles.dosText, { color: colors.foreground }]}
                    >
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      ) : (
        <Text
          style={[styles.preview, { color: colors.mutedForeground }]}
          numberOfLines={2}
        >
          {entry.description}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  categoryLabel: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 17,
    fontFamily: "Inter_700Bold",
    marginBottom: 2,
  },
  titleChinese: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    marginBottom: 4,
  },
  preview: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 19,
    marginTop: 4,
  },
  body: {
    marginTop: 4,
  },
  divider: {
    height: 1,
    marginVertical: 10,
  },
  sectionLabel: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 21,
  },
  keyPoint: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 6,
  },
  keyPointText: {
    flex: 1,
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 19,
  },
  exampleBox: {
    borderLeftWidth: 3,
    paddingLeft: 12,
    paddingVertical: 10,
    paddingRight: 8,
    borderRadius: 4,
    marginVertical: 10,
  },
  exampleLabel: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 4,
  },
  example: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 19,
  },
  dosDonts: {
    flexDirection: "row",
    gap: 12,
    marginTop: 4,
  },
  dosColumn: {
    flex: 1,
  },
  dontsColumn: {
    flex: 1,
  },
  dosLabel: {
    fontSize: 12,
    fontFamily: "Inter_700Bold",
    letterSpacing: 1,
    marginBottom: 6,
  },
  dosItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 6,
    marginBottom: 4,
  },
  dosText: {
    flex: 1,
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    lineHeight: 17,
  },
});
