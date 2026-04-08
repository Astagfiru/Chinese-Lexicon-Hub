import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useColors } from "@/hooks/useColors";
import type { SlangEntry } from "@/data/slang";

const typeConfig: Record<
  SlangEntry["type"],
  { label: string; color: string }
> = {
  slang: { label: "Slang", color: "#9C27B0" },
  abbreviation: { label: "Abbrev.", color: "#2196F3" },
  internet: { label: "Internet", color: "#009688" },
};

export function SlangCard({ entry }: { entry: SlangEntry }) {
  const colors = useColors();
  const [expanded, setExpanded] = useState(false);
  const config = typeConfig[entry.type];

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setExpanded((prev) => !prev);
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
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Text style={[styles.word, { color: colors.primary }]}>
            {entry.word}
          </Text>
          <Text style={[styles.pinyin, { color: colors.mutedForeground }]}>
            {entry.pinyin}
          </Text>
        </View>
        <View style={styles.topRight}>
          <View
            style={[
              styles.badge,
              { backgroundColor: config.color + "15" },
            ]}
          >
            <Text style={[styles.badgeText, { color: config.color }]}>
              {config.label}
            </Text>
          </View>
          <Feather
            name={expanded ? "chevron-up" : "chevron-down"}
            size={18}
            color={colors.mutedForeground}
          />
        </View>
      </View>

      {expanded ? (
        <View style={styles.body}>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <Text style={[styles.meaning, { color: colors.foreground }]}>
            {entry.meaning}
          </Text>
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
              style={[styles.exampleChinese, { color: colors.foreground }]}
            >
              {entry.example}
            </Text>
            <Text
              style={[
                styles.exampleEng,
                { color: colors.mutedForeground },
              ]}
            >
              {entry.exampleTranslation}
            </Text>
          </View>
          {entry.origin && (
            <Text style={[styles.origin, { color: colors.mutedForeground }]}>
              Origin: {entry.origin}
            </Text>
          )}
        </View>
      ) : (
        <Text
          style={[styles.preview, { color: colors.mutedForeground }]}
          numberOfLines={1}
        >
          {entry.meaning}
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
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  topLeft: {
    flex: 1,
    gap: 2,
  },
  topRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  word: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    letterSpacing: 0.5,
  },
  pinyin: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
  },
  badge: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  preview: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
  },
  body: {
    marginTop: 4,
  },
  divider: {
    height: 1,
    marginBottom: 10,
  },
  meaning: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
    marginBottom: 10,
  },
  exampleBox: {
    borderLeftWidth: 3,
    paddingLeft: 12,
    paddingVertical: 8,
    paddingRight: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  exampleChinese: {
    fontSize: 15,
    fontFamily: "Inter_500Medium",
    marginBottom: 4,
    lineHeight: 22,
  },
  exampleEng: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    lineHeight: 19,
  },
  origin: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
  },
});
