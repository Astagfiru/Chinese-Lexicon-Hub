import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useColors } from "@/hooks/useColors";
import type { Idiom } from "@/data/idioms";

interface IdiomCardProps {
  idiom: Idiom;
  onPress?: () => void;
}

const difficultyColors: Record<string, string> = {
  easy: "#4CAF50",
  medium: "#FF9800",
  hard: "#F44336",
};

export function IdiomCard({ idiom, onPress }: IdiomCardProps) {
  const colors = useColors();
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setExpanded((prev) => !prev);
    onPress?.();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
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
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={[styles.character, { color: colors.primary }]}>
            {idiom.idiom}
          </Text>
          <Text style={[styles.pinyin, { color: colors.mutedForeground }]}>
            {idiom.pinyin}
          </Text>
        </View>
        <View style={styles.headerRight}>
          <View
            style={[
              styles.difficulty,
              {
                backgroundColor:
                  difficultyColors[idiom.difficulty] + "20",
              },
            ]}
          >
            <Text
              style={[
                styles.difficultyText,
                { color: difficultyColors[idiom.difficulty] },
              ]}
            >
              {idiom.difficulty}
            </Text>
          </View>
          <Feather
            name={expanded ? "chevron-up" : "chevron-down"}
            size={18}
            color={colors.mutedForeground}
          />
        </View>
      </View>

      <Text style={[styles.translation, { color: colors.foreground }]}>
        {idiom.translation}
      </Text>

      {expanded && (
        <View style={styles.expandedContent}>
          <View
            style={[styles.divider, { backgroundColor: colors.border }]}
          />
          <Text
            style={[styles.sectionLabel, { color: colors.mutedForeground }]}
          >
            MEANING
          </Text>
          <Text style={[styles.meaning, { color: colors.foreground }]}>
            {idiom.meaning}
          </Text>

          {idiom.examples.length > 0 && (
            <>
              <Text
                style={[
                  styles.sectionLabel,
                  { color: colors.mutedForeground },
                ]}
              >
                EXAMPLES
              </Text>
              {idiom.examples.map((ex, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.example,
                    { backgroundColor: colors.muted, borderLeftColor: colors.primary },
                  ]}
                >
                  <Text
                    style={[styles.exampleSentence, { color: colors.foreground }]}
                  >
                    {ex.sentence}
                  </Text>
                  <Text
                    style={[
                      styles.exampleTranslation,
                      { color: colors.mutedForeground },
                    ]}
                  >
                    {ex.translation}
                  </Text>
                </View>
              ))}
            </>
          )}

          {idiom.tags.length > 0 && (
            <View style={styles.tags}>
              {idiom.tags.map((tag) => (
                <View
                  key={tag}
                  style={[
                    styles.tag,
                    { backgroundColor: colors.secondary },
                  ]}
                >
                  <Text
                    style={[
                      styles.tagText,
                      { color: colors.secondaryForeground },
                    ]}
                  >
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  headerLeft: {
    flex: 1,
    gap: 2,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  character: {
    fontSize: 24,
    fontFamily: "Inter_700Bold",
    letterSpacing: 2,
  },
  pinyin: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
  },
  difficulty: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  difficultyText: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  translation: {
    fontSize: 15,
    fontFamily: "Inter_500Medium",
    lineHeight: 22,
  },
  expandedContent: {
    marginTop: 4,
  },
  divider: {
    height: 1,
    marginVertical: 12,
  },
  sectionLabel: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 1,
    marginBottom: 6,
  },
  meaning: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 21,
    marginBottom: 14,
  },
  example: {
    borderLeftWidth: 3,
    paddingLeft: 12,
    paddingVertical: 8,
    paddingRight: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  exampleSentence: {
    fontSize: 15,
    fontFamily: "Inter_500Medium",
    lineHeight: 22,
    marginBottom: 4,
  },
  exampleTranslation: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    lineHeight: 19,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 4,
  },
  tag: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
});
