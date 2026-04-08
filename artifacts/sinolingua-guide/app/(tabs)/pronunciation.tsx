import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useColors } from "@/hooks/useColors";
import { toneRules, tonePairs, trickyPronunciations } from "@/data/pronunciation";

const SECTIONS = ["Tones", "Tone Pairs", "Tricky Sounds"] as const;
type Section = (typeof SECTIONS)[number];

const toneColors = ["#E53935", "#43A047", "#1E88E5", "#FB8C00", "#8E24AA"];

function ToneCard({ rule }: { rule: typeof toneRules[number] }) {
  const colors = useColors();
  const color = toneColors[rule.tone];
  const [showDetails, setShowDetails] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setShowDetails((p) => !p);
      }}
      activeOpacity={0.85}
      style={[
        styles.toneCard,
        { backgroundColor: colors.card, borderColor: color + "40" },
      ]}
    >
      <View style={styles.toneHeader}>
        <View style={[styles.toneBadge, { backgroundColor: color }]}>
          <Text style={styles.toneNum}>{rule.tone === 0 ? "0" : rule.tone}</Text>
        </View>
        <View style={styles.toneInfo}>
          <Text style={[styles.toneName, { color: colors.foreground }]}>
            {rule.name}
          </Text>
          <Text style={[styles.toneSymbol, { color: color }]}>
            {rule.symbol} · {rule.pitch}
          </Text>
        </View>
        <View style={styles.toneExample}>
          <Text style={[styles.toneChar, { color: color }]}>
            {rule.example}
          </Text>
          <Text
            style={[styles.toneCharPinyin, { color: colors.mutedForeground }]}
          >
            {rule.exampleMeaning}
          </Text>
        </View>
      </View>
      {showDetails && (
        <View style={styles.toneDetails}>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <Text style={[styles.toneDesc, { color: colors.foreground }]}>
            {rule.description}
          </Text>
          <View
            style={[
              styles.mnemonicBox,
              { backgroundColor: color + "12", borderLeftColor: color },
            ]}
          >
            <Text
              style={[styles.mnemonicLabel, { color: colors.mutedForeground }]}
            >
              Mnemonic
            </Text>
            <Text style={[styles.mnemonicText, { color: colors.foreground }]}>
              {rule.mnemonic}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

function TonePairCard({ pair }: { pair: typeof tonePairs[number] }) {
  const colors = useColors();
  return (
    <View
      style={[
        styles.pairCard,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <View style={styles.pairGrid}>
        {pair.pairs.map((p, i) => (
          <View
            key={i}
            style={[
              styles.pairItem,
              { backgroundColor: toneColors[p.tone] + "12" },
            ]}
          >
            <Text style={[styles.pairPinyin, { color: toneColors[p.tone] }]}>
              {p.pinyin}
            </Text>
            <Text style={[styles.pairMeaning, { color: colors.foreground }]}>
              {p.meaning}
            </Text>
          </View>
        ))}
      </View>
      <Text style={[styles.pairNote, { color: colors.mutedForeground }]}>
        {pair.note}
      </Text>
    </View>
  );
}

function TrickyCard({ item }: { item: typeof trickyPronunciations[number] }) {
  const colors = useColors();
  const [expanded, setExpanded] = useState(false);
  const categoryColors: Record<string, string> = {
    tone: "#E53935",
    initial: "#1E88E5",
    final: "#43A047",
    tricky: "#FB8C00",
  };
  const catColor = categoryColors[item.category] ?? colors.primary;

  return (
    <TouchableOpacity
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setExpanded((p) => !p);
      }}
      activeOpacity={0.85}
      style={[
        styles.trickyCard,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <View style={styles.trickyHeader}>
        <Text style={[styles.trickyChar, { color: colors.primary }]}>
          {item.character}
        </Text>
        <View style={styles.trickyMiddle}>
          <Text style={[styles.trickyPinyin, { color: catColor }]}>
            {item.pinyin}
          </Text>
          <Text
            style={[styles.trickyMeaning, { color: colors.mutedForeground }]}
          >
            {item.meaning}
          </Text>
        </View>
        <View
          style={[
            styles.catBadge,
            { backgroundColor: catColor + "18" },
          ]}
        >
          <Text style={[styles.catText, { color: catColor }]}>
            {item.category}
          </Text>
        </View>
      </View>
      {expanded && (
        <View>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <Text
            style={[styles.audioDesc, { color: colors.mutedForeground }]}
          >
            {item.audioDescription}
          </Text>
          <View
            style={[
              styles.tipBox,
              { backgroundColor: catColor + "10", borderLeftColor: catColor },
            ]}
          >
            <Text style={[styles.tipText, { color: colors.foreground }]}>
              {item.tip}
            </Text>
          </View>
          {item.similar && item.similar.length > 0 && (
            <View style={styles.similarRow}>
              <Text
                style={[
                  styles.similarLabel,
                  { color: colors.mutedForeground },
                ]}
              >
                Similar:
              </Text>
              {item.similar.map((s, i) => (
                <View
                  key={i}
                  style={[
                    styles.similarItem,
                    { backgroundColor: colors.secondary },
                  ]}
                >
                  <Text
                    style={[
                      styles.similarText,
                      { color: colors.foreground },
                    ]}
                  >
                    {s.character} ({s.pinyin}) — {s.meaning}
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

export default function PronunciationScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [section, setSection] = useState<Section>("Tones");

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
          发音 Pronunciation
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Tones, sounds & pinyin guide
        </Text>
        <View style={styles.tabs}>
          {SECTIONS.map((s) => (
            <TouchableOpacity
              key={s}
              onPress={() => setSection(s)}
              style={[
                styles.tab,
                {
                  backgroundColor:
                    section === s ? colors.primary : colors.secondary,
                  borderColor:
                    section === s ? colors.primary : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    color:
                      section === s
                        ? colors.primaryForeground
                        : colors.mutedForeground,
                  },
                ]}
              >
                {s}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 12,
          paddingBottom: bottomPad,
        }}
        showsVerticalScrollIndicator={false}
      >
        {section === "Tones" && (
          <>
            <View
              style={[
                styles.infoBox,
                { backgroundColor: colors.secondary, borderColor: colors.border },
              ]}
            >
              <Feather name="info" size={14} color={colors.mutedForeground} />
              <Text
                style={[styles.infoText, { color: colors.mutedForeground }]}
              >
                Mandarin Chinese has 4 tones + 1 neutral tone. The same syllable with different tones has completely different meanings. Tap each tone to learn more.
              </Text>
            </View>
            {toneRules.map((rule) => (
              <ToneCard key={rule.tone} rule={rule} />
            ))}
          </>
        )}

        {section === "Tone Pairs" && (
          <>
            <View
              style={[
                styles.infoBox,
                { backgroundColor: colors.secondary, borderColor: colors.border },
              ]}
            >
              <Feather name="info" size={14} color={colors.mutedForeground} />
              <Text
                style={[styles.infoText, { color: colors.mutedForeground }]}
              >
                The same syllable with different tones has totally different meanings. These minimal pairs are essential to memorize.
              </Text>
            </View>
            {tonePairs.map((pair) => (
              <TonePairCard key={pair.id} pair={pair} />
            ))}
          </>
        )}

        {section === "Tricky Sounds" && (
          <>
            <View
              style={[
                styles.infoBox,
                { backgroundColor: colors.secondary, borderColor: colors.border },
              ]}
            >
              <Feather name="info" size={14} color={colors.mutedForeground} />
              <Text
                style={[styles.infoText, { color: colors.mutedForeground }]}
              >
                These sounds and tone rules trip up most learners. Tap each card for pronunciation tips.
              </Text>
            </View>
            {trickyPronunciations.map((item) => (
              <TrickyCard key={item.id} item={item} />
            ))}
          </>
        )}
      </ScrollView>
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
  tabs: { flexDirection: "row", gap: 8 },
  tab: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 1,
  },
  tabText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  infoBox: {
    flexDirection: "row",
    gap: 8,
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
    alignItems: "flex-start",
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    lineHeight: 18,
  },
  // Tone cards
  toneCard: {
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1,
  },
  toneHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  toneBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  toneNum: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    color: "#FFFFFF",
  },
  toneInfo: { flex: 1 },
  toneName: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  toneSymbol: { fontSize: 13, fontFamily: "Inter_500Medium" },
  toneExample: { alignItems: "center" },
  toneChar: { fontSize: 22, fontFamily: "Inter_700Bold" },
  toneCharPinyin: { fontSize: 11, fontFamily: "Inter_400Regular" },
  toneDetails: {},
  divider: { height: 1, marginVertical: 10 },
  toneDesc: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 19,
    marginBottom: 8,
  },
  mnemonicBox: {
    borderLeftWidth: 3,
    paddingLeft: 12,
    paddingVertical: 8,
    paddingRight: 8,
    borderRadius: 4,
  },
  mnemonicLabel: {
    fontSize: 10,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  mnemonicText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  // Pair cards
  pairCard: {
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
  },
  pairGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 10,
  },
  pairItem: {
    borderRadius: 10,
    padding: 10,
    minWidth: "45%",
    flex: 1,
  },
  pairPinyin: { fontSize: 16, fontFamily: "Inter_700Bold" },
  pairMeaning: { fontSize: 12, fontFamily: "Inter_400Regular", marginTop: 2 },
  pairNote: { fontSize: 12, fontFamily: "Inter_400Regular", fontStyle: "italic" },
  // Tricky cards
  trickyCard: {
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
  },
  trickyHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  trickyChar: { fontSize: 30, fontFamily: "Inter_700Bold" },
  trickyMiddle: { flex: 1 },
  trickyPinyin: { fontSize: 16, fontFamily: "Inter_600SemiBold" },
  trickyMeaning: { fontSize: 12, fontFamily: "Inter_400Regular" },
  catBadge: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  catText: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  audioDesc: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    marginBottom: 8,
  },
  tipBox: {
    borderLeftWidth: 3,
    paddingLeft: 12,
    paddingVertical: 8,
    paddingRight: 8,
    borderRadius: 4,
  },
  tipText: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 19,
  },
  similarRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 8,
  },
  similarLabel: { fontSize: 12, fontFamily: "Inter_600SemiBold" },
  similarItem: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  similarText: { fontSize: 12, fontFamily: "Inter_400Regular" },
});
