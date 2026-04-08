import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useColors } from "@/hooks/useColors";
import { dialogues, Dialogue, DialogueStep } from "@/data/dialogues";

const diffColors = {
  beginner: "#43A047",
  intermediate: "#FB8C00",
  advanced: "#E53935",
};

function DialogueListItem({
  dialogue,
  onPress,
}: {
  dialogue: Dialogue;
  onPress: () => void;
}) {
  const colors = useColors();
  const color = diffColors[dialogue.difficulty];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[
        styles.listCard,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <View style={styles.listCardHeader}>
        <View>
          <Text style={[styles.listTitle, { color: colors.foreground }]}>
            {dialogue.title}
          </Text>
          <Text style={[styles.listChinese, { color: colors.primary }]}>
            {dialogue.titleChinese}
          </Text>
        </View>
        <View
          style={[styles.diffBadge, { backgroundColor: color + "18" }]}
        >
          <Text style={[styles.diffText, { color }]}>
            {dialogue.difficulty}
          </Text>
        </View>
      </View>
      <Text
        style={[styles.listSituation, { color: colors.mutedForeground }]}
        numberOfLines={2}
      >
        {dialogue.situation}
      </Text>
      <View style={styles.listFooter}>
        <View style={styles.tagRow}>
          {dialogue.tags.slice(0, 3).map((tag) => (
            <View
              key={tag}
              style={[styles.tag, { backgroundColor: colors.secondary }]}
            >
              <Text style={[styles.tagText, { color: colors.mutedForeground }]}>
                {tag}
              </Text>
            </View>
          ))}
        </View>
        <Feather name="arrow-right" size={16} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
}

function DialoguePlayer({
  dialogue,
  onBack,
}: {
  dialogue: Dialogue;
  onBack: () => void;
}) {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentStep = dialogue.steps[currentStepIndex];

  const handleOptionSelect = (optionId: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setSelectedOptionId(optionId);
    const option = currentStep.options?.find((o) => o.id === optionId);
    if (option?.isCorrect) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedOptionId(null);
    if (currentStepIndex < dialogue.steps.length - 1) {
      setCurrentStepIndex((i) => i + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setSelectedOptionId(null);
    setScore(0);
    setCompleted(false);
  };

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 + 84 : insets.bottom + 84;

  if (completed) {
    const total = dialogue.steps.filter((s) => s.options).length;
    return (
      <ScrollView
        style={[styles.playerContainer, { backgroundColor: colors.background }]}
        contentContainerStyle={{
          paddingTop: topPad + 12,
          paddingHorizontal: 16,
          paddingBottom: bottomPad,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Feather name="arrow-left" size={20} color={colors.foreground} />
          <Text style={[styles.backText, { color: colors.foreground }]}>
            Dialogues
          </Text>
        </TouchableOpacity>

        <View
          style={[
            styles.completionCard,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <Feather name="check-circle" size={48} color="#43A047" />
          <Text
            style={[styles.completionTitle, { color: colors.foreground }]}
          >
            Dialogue Complete!
          </Text>
          <Text
            style={[styles.completionChinese, { color: colors.primary }]}
          >
            {dialogue.titleChinese}
          </Text>
          <View
            style={[
              styles.scoreBox,
              { backgroundColor: colors.primary + "18" },
            ]}
          >
            <Text
              style={[styles.scoreNum, { color: colors.primary }]}
            >
              {score}/{total}
            </Text>
            <Text
              style={[
                styles.scoreLabel,
                { color: colors.mutedForeground },
              ]}
            >
              Correct answers
            </Text>
          </View>
          <Text
            style={[styles.scoreFeedback, { color: colors.mutedForeground }]}
          >
            {score === total
              ? "Perfect! Excellent conversation skills."
              : score >= total / 2
              ? "Good work! Keep practicing."
              : "Keep studying — you'll improve!"}
          </Text>
          <TouchableOpacity
            onPress={handleRestart}
            style={[
              styles.restartBtn,
              { backgroundColor: colors.primary },
            ]}
          >
            <Text
              style={[
                styles.restartText,
                { color: colors.primaryForeground },
              ]}
            >
              Try Again
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onBack} style={styles.backToListBtn}>
            <Text
              style={[styles.backToListText, { color: colors.mutedForeground }]}
            >
              Back to Dialogues
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  const speakerColors = {
    narrator: colors.mutedForeground,
    other: colors.primary,
    you: "#2196F3",
  };

  return (
    <ScrollView
      style={[styles.playerContainer, { backgroundColor: colors.background }]}
      contentContainerStyle={{
        paddingTop: topPad + 12,
        paddingHorizontal: 16,
        paddingBottom: bottomPad,
      }}
    >
      <View style={styles.playerHeader}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Feather name="arrow-left" size={20} color={colors.foreground} />
          <Text style={[styles.backText, { color: colors.foreground }]}>
            Back
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={[styles.playerTitle, { color: colors.foreground }]}>
            {dialogue.title}
          </Text>
        </View>
        <Text style={[styles.progress, { color: colors.mutedForeground }]}>
          {currentStepIndex + 1}/{dialogue.steps.length}
        </Text>
      </View>

      <View
        style={[
          styles.situationBox,
          {
            backgroundColor: colors.secondary,
            borderColor: colors.border,
          },
        ]}
      >
        <Text
          style={[styles.situationText, { color: colors.mutedForeground }]}
        >
          {dialogue.situation}
        </Text>
      </View>

      {/* Progress bar */}
      <View
        style={[styles.progressBar, { backgroundColor: colors.secondary }]}
      >
        <View
          style={[
            styles.progressFill,
            {
              backgroundColor: colors.primary,
              width: `${((currentStepIndex) / dialogue.steps.length) * 100}%` as any,
            },
          ]}
        />
      </View>

      {/* Step */}
      <View
        style={[
          styles.stepCard,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
            borderLeftColor: speakerColors[currentStep.speaker],
          },
        ]}
      >
        <Text
          style={[
            styles.stepSpeaker,
            { color: speakerColors[currentStep.speaker] },
          ]}
        >
          {currentStep.speaker === "narrator"
            ? "NARRATOR"
            : currentStep.speaker === "other"
            ? "THEM"
            : "YOU"}
        </Text>
        {currentStep.text && (
          <Text style={[styles.stepText, { color: colors.foreground }]}>
            {currentStep.text}
          </Text>
        )}
        {currentStep.pinyin && (
          <Text
            style={[styles.stepPinyin, { color: colors.mutedForeground }]}
          >
            {currentStep.pinyin}
          </Text>
        )}
        <Text
          style={[styles.stepTranslation, { color: colors.mutedForeground }]}
        >
          {currentStep.translation}
        </Text>
      </View>

      {/* Options */}
      {currentStep.options && (
        <View style={styles.optionsSection}>
          {currentStep.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const showResult = isSelected;
            const bgColor = showResult
              ? option.isCorrect
                ? "#43A04715"
                : "#E5393515"
              : colors.secondary;
            const borderColor = showResult
              ? option.isCorrect
                ? "#43A047"
                : "#E53935"
              : colors.border;

            return (
              <TouchableOpacity
                key={option.id}
                onPress={() =>
                  !selectedOptionId && handleOptionSelect(option.id)
                }
                activeOpacity={selectedOptionId ? 1 : 0.85}
                style={[
                  styles.optionBtn,
                  { backgroundColor: bgColor, borderColor },
                ]}
              >
                <Text
                  style={[styles.optionChinese, { color: colors.foreground }]}
                >
                  {option.text}
                </Text>
                <Text
                  style={[
                    styles.optionPinyin,
                    { color: colors.mutedForeground },
                  ]}
                >
                  {option.pinyin}
                </Text>
                {showResult && (
                  <View style={styles.optionResult}>
                    <Feather
                      name={option.isCorrect ? "check-circle" : "x-circle"}
                      size={14}
                      color={option.isCorrect ? "#43A047" : "#E53935"}
                    />
                    <Text
                      style={[
                        styles.optionResultText,
                        {
                          color: option.isCorrect ? "#43A047" : "#E53935",
                        },
                      ]}
                    >
                      {option.result}
                    </Text>
                  </View>
                )}
                {showResult && (
                  <Text
                    style={[
                      styles.optionExplanation,
                      { color: colors.mutedForeground },
                    ]}
                  >
                    {option.explanation}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      {/* Next button */}
      {(!currentStep.options || selectedOptionId) && (
        <TouchableOpacity
          onPress={handleNext}
          style={[styles.nextBtn, { backgroundColor: colors.primary }]}
        >
          <Text style={[styles.nextText, { color: colors.primaryForeground }]}>
            {currentStepIndex < dialogue.steps.length - 1
              ? "Continue"
              : "Finish"}
          </Text>
          <Feather name="arrow-right" size={16} color={colors.primaryForeground} />
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

export default function DialoguesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState<Dialogue | null>(null);

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 + 84 : insets.bottom + 84;

  if (selected) {
    return (
      <DialoguePlayer
        dialogue={selected}
        onBack={() => setSelected(null)}
      />
    );
  }

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
          对话练习 Dialogues
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Interactive conversation scenarios
        </Text>
      </View>

      <FlatList
        data={dialogues}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <DialogueListItem
            dialogue={item}
            onPress={() => setSelected(item)}
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 12,
          paddingBottom: bottomPad,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  playerContainer: { flex: 1 },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
  },
  title: { fontSize: 26, fontFamily: "Inter_700Bold", marginBottom: 2 },
  subtitle: { fontSize: 13, fontFamily: "Inter_400Regular" },
  listCard: {
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
  },
  listCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  listTitle: { fontSize: 17, fontFamily: "Inter_700Bold" },
  listChinese: { fontSize: 13, fontFamily: "Inter_500Medium" },
  diffBadge: { borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 },
  diffText: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  listSituation: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 18,
    marginBottom: 10,
  },
  listFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tagRow: { flexDirection: "row", gap: 6 },
  tag: { borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  tagText: { fontSize: 11, fontFamily: "Inter_500Medium" },
  // Player
  playerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  backBtn: { flexDirection: "row", alignItems: "center", gap: 6 },
  backText: { fontSize: 16, fontFamily: "Inter_500Medium" },
  playerTitle: { fontSize: 16, fontFamily: "Inter_700Bold" },
  progress: { fontSize: 13, fontFamily: "Inter_500Medium" },
  situationBox: {
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  situationText: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 19,
    fontStyle: "italic",
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    marginBottom: 14,
    overflow: "hidden",
  },
  progressFill: { height: 4, borderRadius: 2 },
  stepCard: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderLeftWidth: 4,
    marginBottom: 16,
  },
  stepSpeaker: {
    fontSize: 11,
    fontFamily: "Inter_700Bold",
    letterSpacing: 1,
    marginBottom: 6,
  },
  stepText: {
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
    lineHeight: 26,
    marginBottom: 4,
  },
  stepPinyin: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    marginBottom: 6,
  },
  stepTranslation: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
  },
  optionsSection: { gap: 8, marginBottom: 16 },
  optionBtn: {
    borderRadius: 12,
    padding: 14,
    borderWidth: 1.5,
  },
  optionChinese: { fontSize: 15, fontFamily: "Inter_600SemiBold", marginBottom: 3 },
  optionPinyin: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    marginBottom: 8,
  },
  optionResult: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 6,
    marginBottom: 4,
  },
  optionResultText: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  optionExplanation: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    lineHeight: 17,
  },
  nextBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 14,
    paddingVertical: 14,
  },
  nextText: { fontSize: 16, fontFamily: "Inter_600SemiBold" },
  // Completion
  completionCard: {
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    alignItems: "center",
    marginTop: 40,
    gap: 12,
  },
  completionTitle: { fontSize: 22, fontFamily: "Inter_700Bold" },
  completionChinese: { fontSize: 16, fontFamily: "Inter_500Medium" },
  scoreBox: {
    borderRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 14,
    alignItems: "center",
  },
  scoreNum: { fontSize: 36, fontFamily: "Inter_700Bold" },
  scoreLabel: { fontSize: 13, fontFamily: "Inter_500Medium" },
  scoreFeedback: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center" },
  restartBtn: {
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginTop: 8,
  },
  restartText: { fontSize: 16, fontFamily: "Inter_600SemiBold" },
  backToListBtn: { paddingVertical: 8 },
  backToListText: { fontSize: 14, fontFamily: "Inter_500Medium" },
});
