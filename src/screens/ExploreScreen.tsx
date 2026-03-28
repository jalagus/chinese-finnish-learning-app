import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BottomNav } from '../components/BottomNav';
import { PrimaryButton } from '../components/PrimaryButton';
import { Screen } from '../components/Screen';
import { Lesson, Story } from '../domain/types';
import { colors } from '../theme/theme';

type ExploreScreenProps = {
  lessons: Lesson[];
  stories: Story[];
  recommendedLessons: Lesson[];
  recommendedStories: Story[];
  onOpenDictionary: () => void;
};

export function ExploreScreen({
  lessons,
  stories,
  recommendedLessons,
  recommendedStories,
  onOpenDictionary,
}: ExploreScreenProps) {
  const lessonLevelCounts = ['入门', '初级', '进阶'].map((level) => ({
    level,
    count: lessons.filter((lesson) => lesson.levelZh === level).length,
  }));
  const storyLevelCounts = ['入门', '初级', '进阶'].map((level) => ({
    level,
    count: stories.filter((story) => story.levelZh === level).length,
  }));

  return (
    <Screen bottomBar={<BottomNav />}>
      <View style={styles.hero}>
        <Text style={styles.title}>发现内容</Text>
        <Text style={styles.subtitle}>在这里看课程分层、推荐下一步和词典入口，首页只保留最核心的今日学习内容。</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>课程路径</Text>
        <Text style={styles.sectionMeta}>按难度了解内容分布，决定你想先补哪一层。</Text>
        <View style={styles.grid}>
          {lessonLevelCounts.map((entry) => (
            <View key={`lesson-${entry.level}`} style={styles.metricCard}>
              <Text style={styles.metricTitle}>{entry.level}词汇</Text>
              <Text style={styles.metricValue}>{entry.count}</Text>
            </View>
          ))}
          {storyLevelCounts.map((entry) => (
            <View key={`story-${entry.level}`} style={styles.metricCard}>
              <Text style={styles.metricTitle}>{entry.level}故事</Text>
              <Text style={styles.metricValue}>{entry.count}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>推荐下一步</Text>
        <Text style={styles.sectionMeta}>根据你已经接触过的词汇和当前阶段，优先建议最衔接的内容。</Text>
        {recommendedLessons.map((lesson) => (
          <View key={lesson.id} style={styles.lessonCard}>
            <Text style={styles.smallLabel}>下一组词汇</Text>
            <Text style={styles.word}>{lesson.finnish}</Text>
            <Text style={styles.meta}>
              {lesson.levelZh} · {lesson.themeZh}
            </Text>
            <Text style={styles.translation}>{lesson.chinese}</Text>
          </View>
        ))}

        {recommendedStories.map((story) => (
          <View key={story.id} style={styles.storyCard}>
            <Text style={styles.smallLabel}>建议接着读</Text>
            <Text style={styles.storyTitle}>{story.titleZh}</Text>
            <Text style={styles.storyFi}>{story.titleFi}</Text>
            <Text style={styles.meta}>
              {story.levelZh} · {story.themeZh} · 约 {story.estimatedMinutes} 分钟
            </Text>
            <Text style={styles.summary}>{story.summaryZh}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>工具</Text>
        <Text style={styles.sectionMeta}>要查词、看例句或按主题搜内容时，可以直接打开词典。</Text>
        <PrimaryButton label="打开词典搜索" onPress={onOpenDictionary} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: colors.accentSoft,
    borderRadius: 24,
    padding: 20,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  metricCard: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  metricTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.text,
  },
  metricValue: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: '900',
    color: colors.accent,
  },
  lessonCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  storyCard: {
    backgroundColor: colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  smallLabel: {
    fontSize: 12,
    color: colors.warm,
    fontWeight: '800',
    marginBottom: 8,
  },
  word: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
  },
  translation: {
    marginTop: 8,
    fontSize: 16,
    color: colors.text,
  },
  meta: {
    marginTop: 6,
    fontSize: 13,
    color: colors.accent,
    fontWeight: '700',
  },
  storyTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
  },
  storyFi: {
    marginTop: 4,
    fontSize: 15,
    color: colors.accent,
    fontWeight: '700',
  },
  summary: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },
});
