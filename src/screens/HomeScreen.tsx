import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '../components/PrimaryButton';
import { Screen } from '../components/Screen';
import { StatChip } from '../components/StatChip';
import { Lesson, LearningStats, Story, UserProfile } from '../domain/types';
import { colors } from '../theme/theme';

type HomeScreenProps = {
  dailyPlan: Lesson[];
  lessons: Lesson[];
  stories: Story[];
  profile: UserProfile;
  stats: LearningStats;
  onStartSession: () => void;
  onOpenDictionary: () => void;
  onOpenStories: () => void;
  onOpenProgress: () => void;
};

export function HomeScreen({
  dailyPlan,
  lessons,
  stories,
  profile,
  stats,
  onStartSession,
  onOpenDictionary,
  onOpenStories,
  onOpenProgress,
}: HomeScreenProps) {
  const featuredStory = stories[0];

  return (
    <Screen>
      <View style={styles.hero}>
        <Text style={styles.greeting}>Hei! 今天继续学芬兰语</Text>
        <Text style={styles.subtitle}>
          你当前选择的是「{profile.selectedGoal.titleZh}」，今天学习队列里有 {dailyPlan.length} 张卡片。
        </Text>
        <Text style={styles.meta}>SM-2 会根据你的评分自动安排下一次复习时间。</Text>
      </View>

      <View style={styles.statsRow}>
        <StatChip label="今日到期" value={String(stats.dueToday)} />
        <StatChip label="已掌握" value={String(stats.masteredLessons)} />
        <StatChip label="学习中" value={String(stats.learningLessons)} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>今日学习卡</Text>
        <Text style={styles.sectionMeta}>内容库共 {lessons.length} 个词条，已引入 {stats.introducedLessons} 个。</Text>
        {dailyPlan.map((lesson) => (
          <View key={lesson.id} style={styles.lessonCard}>
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonWord}>{lesson.finnish}</Text>
              <Text style={styles.lessonCategory}>{lesson.categoryZh}</Text>
            </View>
            <Text style={styles.lessonPronunciation}>{lesson.pronunciationZh}</Text>
            <Text style={styles.lessonChinese}>{lesson.chinese}</Text>
            <Text style={styles.lessonTip}>{lesson.tipZh}</Text>
          </View>
        ))}
      </View>

      {featuredStory ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>短篇阅读</Text>
          <View style={styles.storyCard}>
            <Text style={styles.storyTitle}>{featuredStory.titleZh}</Text>
            <Text style={styles.storySubtitle}>{featuredStory.titleFi}</Text>
            <Text style={styles.storySummary}>{featuredStory.summaryZh}</Text>
            <Text style={styles.storyTags}>关键词：{featuredStory.focusWords.join(' / ')}</Text>
          </View>
        </View>
      ) : null}

      <PrimaryButton label="开始今日练习" onPress={onStartSession} />
      <PrimaryButton label="搜索词典" onPress={onOpenDictionary} variant="secondary" />
      <PrimaryButton label="阅读短篇故事" onPress={onOpenStories} variant="secondary" />
      <PrimaryButton label="查看学习进度" onPress={onOpenProgress} variant="secondary" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: colors.accentSoft,
    borderRadius: 28,
    padding: 24,
  },
  greeting: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 23,
    color: colors.muted,
  },
  meta: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    color: colors.accent,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 18,
  },
  section: {
    marginTop: 24,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: colors.text,
  },
  sectionMeta: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.muted,
  },
  lessonCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  lessonWord: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
  },
  lessonCategory: {
    fontSize: 13,
    color: colors.warm,
    fontWeight: '700',
  },
  lessonPronunciation: {
    fontSize: 15,
    color: colors.accent,
    fontWeight: '700',
    marginBottom: 6,
  },
  lessonChinese: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 6,
  },
  lessonTip: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.muted,
  },
  storyCard: {
    backgroundColor: colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  storyTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
  },
  storySubtitle: {
    marginTop: 4,
    fontSize: 15,
    color: colors.accent,
    fontWeight: '700',
  },
  storySummary: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },
  storyTags: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    color: colors.warm,
    fontWeight: '700',
  },
});
