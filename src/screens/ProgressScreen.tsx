import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Screen } from '../components/Screen';
import { LearningStats, PracticeEntry, UserProfile } from '../domain/types';
import { colors } from '../theme/theme';

type ProgressScreenProps = {
  profile: UserProfile;
  stats: LearningStats;
  recentActivity: PracticeEntry[];
};

export function ProgressScreen({ profile, stats, recentActivity }: ProgressScreenProps) {
  return (
    <Screen>
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>你的节奏</Text>
        <Text style={styles.summaryText}>
          当前模式是「{profile.selectedGoal.titleZh}」，系统会根据 SM-2 评分结果动态安排复习间隔。
        </Text>
      </View>

      <View style={styles.grid}>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{stats.dueToday}</Text>
          <Text style={styles.metricLabel}>今日到期卡片</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{stats.masteredLessons}</Text>
          <Text style={styles.metricLabel}>已掌握词条</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{stats.learningLessons}</Text>
          <Text style={styles.metricLabel}>学习中词条</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{stats.introducedLessons}</Text>
          <Text style={styles.metricLabel}>已引入词条</Text>
        </View>
      </View>

      <View style={styles.activitySection}>
        <Text style={styles.activityTitle}>最近练习</Text>
        {recentActivity.length === 0 ? (
          <Text style={styles.emptyText}>还没有练习记录，先去完成今天的第一轮学习吧。</Text>
        ) : (
          recentActivity.map((item) => (
            <View key={`${item.lessonId}-${item.practicedAt}`} style={styles.activityRow}>
              <Text style={styles.activityLabel}>{item.lessonId}</Text>
              <Text style={styles.activityResult}>{describeReviewResult(item)}</Text>
            </View>
          ))
        )}
      </View>
    </Screen>
  );
}

function describeReviewResult(entry: PracticeEntry) {
  switch (entry.result) {
    case 'again':
      return `重来，${entry.intervalAfterDays} 天后`;
    case 'hard':
      return `困难，${entry.intervalAfterDays} 天后`;
    case 'good':
      return `正常，${entry.intervalAfterDays} 天后`;
    case 'easy':
      return `轻松，${entry.intervalAfterDays} 天后`;
  }
}

const styles = StyleSheet.create({
  summaryCard: {
    backgroundColor: colors.accentSoft,
    borderRadius: 24,
    padding: 20,
  },
  summaryTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 20,
  },
  metricCard: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },
  metricValue: {
    fontSize: 30,
    fontWeight: '900',
    color: colors.text,
  },
  metricLabel: {
    marginTop: 6,
    fontSize: 14,
    color: colors.muted,
  },
  activitySection: {
    marginTop: 24,
  },
  activityTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 15,
    color: colors.muted,
  },
  activityRow: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  activityLabel: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '700',
  },
  activityResult: {
    fontSize: 15,
    color: colors.accent,
    fontWeight: '700',
  },
});
