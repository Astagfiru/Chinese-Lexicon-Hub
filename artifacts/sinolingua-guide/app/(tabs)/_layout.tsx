import { BlurView } from "expo-blur";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { SymbolView } from "expo-symbols";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleSheet, View, useColorScheme } from "react-native";
import { useColors } from "@/hooks/useColors";

function NativeTabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon sf={{ default: "house", selected: "house.fill" }} />
        <Label>Главная</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="idioms">
        <Icon sf={{ default: "book", selected: "book.fill" }} />
        <Label>成语</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="slang">
        <Icon sf={{ default: "bolt", selected: "bolt.fill" }} />
        <Label>Сленг</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="pronunciation">
        <Icon sf={{ default: "mic", selected: "mic.fill" }} />
        <Label>Тоны</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="dialogues">
        <Icon sf={{ default: "message", selected: "message.fill" }} />
        <Label>Диалоги</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="culture">
        <Icon sf={{ default: "globe", selected: "globe.americas.fill" }} />
        <Label>Культура</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

function ClassicTabLayout() {
  const colors = useColors();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const isIOS = Platform.OS === "ios";
  const isWeb = Platform.OS === "web";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: isIOS ? "transparent" : colors.background,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          elevation: 0,
          height: isWeb ? 84 : 60,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "Inter_500Medium",
          marginBottom: isWeb ? 0 : 2,
        },
        tabBarBackground: () =>
          isIOS ? (
            <BlurView
              intensity={100}
              tint={isDark ? "dark" : "light"}
              style={StyleSheet.absoluteFill}
            />
          ) : isWeb ? (
            <View
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: colors.background },
              ]}
            />
          ) : null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="house" tintColor={color} size={22} />
            ) : (
              <Feather name="home" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="idioms"
        options={{
          title: "成语",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="book" tintColor={color} size={22} />
            ) : (
              <Feather name="book-open" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="slang"
        options={{
          title: "Сленг",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="bolt" tintColor={color} size={22} />
            ) : (
              <Feather name="zap" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="popculture"
        options={{
          title: "Поп",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="film" tintColor={color} size={22} />
            ) : (
              <Feather name="film" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="pronunciation"
        options={{
          title: "Тоны",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="mic" tintColor={color} size={22} />
            ) : (
              <Feather name="mic" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="dialogues"
        options={{
          title: "Диалоги",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="message" tintColor={color} size={22} />
            ) : (
              <Feather name="message-circle" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="culture"
        options={{
          title: "Культура",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="globe" tintColor={color} size={22} />
            ) : (
              <Feather name="globe" size={20} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  if (isLiquidGlassAvailable()) {
    return <NativeTabLayout />;
  }
  return <ClassicTabLayout />;
}
