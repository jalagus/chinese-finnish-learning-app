import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { AppProvider } from '../src/providers/AppProvider';
import { colors } from '../src/theme/theme';

export default function RootLayout() {
  return (
    <AppProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: colors.background },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ title: '开始学习' }} />
        <Stack.Screen name="home" options={{ title: 'Suomi 起步' }} />
        <Stack.Screen name="learn" options={{ title: '今日练习' }} />
        <Stack.Screen name="dictionary" options={{ title: '词典搜索' }} />
        <Stack.Screen name="stories" options={{ title: '短篇故事' }} />
        <Stack.Screen name="story/[id]" options={{ title: '阅读' }} />
        <Stack.Screen name="progress" options={{ title: '学习进度' }} />
      </Stack>
    </AppProvider>
  );
}
