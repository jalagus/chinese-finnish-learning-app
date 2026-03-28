import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { goalOptions } from '../data/seed';
import { GoalOption } from '../domain/types';
import { Screen } from '../components/Screen';
import { colors } from '../theme/theme';

type OnboardingScreenProps = {
  onSelectGoal: (goal: GoalOption) => void;
};

export function OnboardingScreen({ onSelectGoal }: OnboardingScreenProps) {
  return (
    <Screen>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>为中文用户设计的芬兰语入门 App</Text>
        <Text style={styles.title}>从第一句「Moi」开始，轻松进入芬兰语世界</Text>
        <Text style={styles.description}>
          这个 MVP 聚焦高频词、中文注释、发音提示和短时练习，让初学者每天都能稳步前进。
        </Text>
      </View>

      <View style={styles.goalList}>
        {goalOptions.map((goal) => (
          <Pressable key={goal.id} style={styles.goalCard} onPress={() => onSelectGoal(goal)}>
            <Text style={styles.goalTitle}>{goal.titleZh}</Text>
            <Text style={styles.goalDescription}>{goal.descriptionZh}</Text>
            <Text style={styles.goalMeta}>每日目标：{goal.lessonsPerDay} 个词</Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  eyebrow: {
    fontSize: 13,
    color: colors.warm,
    fontWeight: '700',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.muted,
  },
  goalList: {
    marginTop: 24,
    gap: 14,
  },
  goalCard: {
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  goalTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
  },
  goalDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
    marginBottom: 10,
  },
  goalMeta: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: '700',
  },
});

