import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useColors } from "@/hooks/useColors";
import type { PopCulturePhrase } from "@/data/popculture";

const sourceTypeConfig: Record<
  PopCulturePhrase["sourceType"],
  { icon: string; color: string; label: string }
> = {
  drama: { icon: "tv", color: "#E91E63", label: "Drama" },
  movie: { icon: "film", color: "#673AB7", label: "Movie" },
  anime: { icon: "star", color: "#FF5722", label: "Anime" },
  song: { icon: "music", color: "#3F51B5", label: "Song" },
  meme: { icon: "zap", color: "#FF9800", label: "Meme" },
  game: { icon: "play", color: "#4CAF50", label: "Game" },
  variety: { icon: "video", color: "#00BCD4", label: "Variety" },
};

export function PopCultureCard({ phrase }: { phrase: PopCulturePhrase }) {
  const colors = useColors();
  const [expanded, setExpanded] = useState(false);
  const config = sourceTypeConfig[phrase.sourceType];

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
      <View style={styles.sourceRow}>
        <View style={[styles.sourceBadge, { backgroundColor: config.color + "15" }]}>
          <Feather name={config.icon as any} size={11} color={config.color} />
          <Text style={[styles.sourceLabel, { color: config.color }]}>
            {config.label}
          </Text>
        </View>
        <Text
          style={[styles.sourceText, { color: colors.mutedForeground }]}
          numberOfLines={1}
        >
          {phrase.source}
        </Text>
      </View>

      <View style={styles.mainRow}>
        <View style={styles.mainLeft}>
          <Text style={[styles.phrase, { color: colors.primary }]}>
            {phrase.phrase}
          </Text>
          <Text style={[styles.pinyin, { color: colors.mutedForeground }]}>
            {phrase.pinyin}
          </Text>
        </View>
        <Feather
          name={expanded ? "chevron-up" : "chevron-down"}
          size={18}
          color={colors.mutedForeground}
        />
      </View>

      {expanded ? (
        <View style={styles.expandedBody}>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <Text style={[styles.meaning, { color: colors.foreground }]}>
            {phrase.meaning}
          </Text>
          <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
            CONTEXT
          </Text>
          <Text style={[styles.context, { color: colors.foreground }]}>
            {phrase.context}
          </Text>
          <View
            style={[
              styles.usageBox,
              {
                backgroundColor: colors.secondary,
                borderLeftColor: config.color,
              },
            ]}
          >
            <Text style={[styles.usageLabel, { color: colors.mutedForeground }]}>
              How to use
            </Text>
            <Text style={[styles.usage, { color: colors.foreground }]}>
              {phrase.usage}
            </Text>
          </View>
        </View>
      ) : (
        <Text
          style={[styles.preview, { color: colors.mutedForeground }]}
          numberOfLines={2}
        >
          {phrase.meaning}
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
  sourceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  sourceBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  sourceLabel: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  sourceText: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    flex: 1,
  },
  mainRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  mainLeft: {
    flex: 1,
    gap: 2,
  },
  phrase: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    letterSpacing: 0.5,
  },
  pinyin: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
  },
  preview: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 19,
  },
  expandedBody: {
    marginTop: 4,
  },
  divider: {
    height: 1,
    marginBottom: 10,
  },
  sectionLabel: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 4,
  },
  meaning: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 21,
  },
  context: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 19,
    marginBottom: 10,
  },
  usageBox: {
    borderLeftWidth: 3,
    paddingLeft: 12,
    paddingVertical: 8,
    paddingRight: 8,
    borderRadius: 4,
  },
  usageLabel: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  usage: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    lineHeight: 20,
  },
});
