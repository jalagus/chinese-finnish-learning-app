import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AudioPlayButton } from '../components/AudioPlayButton';
import { PrimaryButton } from '../components/PrimaryButton';
import { Screen } from '../components/Screen';
import { getLessonAudio } from '../data/audioManifest';
import { Lesson, LessonProgress } from '../domain/types';
import { colors } from '../theme/theme';

type LearnScreenProps = {
  lesson: Lesson | null;
  progress: LessonProgress | null;
  onRateAgain: () => void;
  onRateHard: () => void;
  onRateGood: () => void;
  onRateEasy: () => void;
  onRestart: () => void;
};

function formatSchedule(progress: LessonProgress | null) {
  if (!progress || progress.lastReviewedAt === null) {
    return '新词卡会在第一次评分后进入 SM-2 间隔复习。';
  }

  return `当前间隔 ${progress.intervalDays} 天，记忆系数 ${progress.easeFactor.toFixed(2)}。`;
}

export function LearnScreen({
  lesson,
  progress,
  onRateAgain,
  onRateHard,
  onRateGood,
  onRateEasy,
  onRestart,
}: LearnScreenProps) {
  if (!lesson) {
    return (
      <Screen>
        <View style={styles.doneCard}>
          <Text style={styles.doneTitle}>今天的练习已经完成</Text>
          <Text style={styles.doneText}>本轮队列已结束。重新开始后，系统会优先安排已经到期的复习卡片。</Text>
          <PrimaryButton label="重新开始一轮" onPress={onRestart} />
        </View>
      </Screen>
    );
  }

  const lessonAudio = getLessonAudio(lesson.id);

  return (
    <Screen>
      <View style={styles.card}>
        <Text style={styles.label}>芬兰语单词</Text>
        <Text style={styles.word}>{lesson.finnish}</Text>
        <Text style={styles.pronunciation}>{lesson.pronunciationZh}</Text>
        <View style={styles.audioRow}>
          <AudioPlayButton source={lessonAudio?.word?.source} label="单词发音" />
        </View>

        <View style={styles.divider} />

        <Text style={styles.label}>中文含义</Text>
        <Text style={styles.translation}>{lesson.chinese}</Text>

        <Text style={styles.label}>例句</Text>
        <Text style={styles.exampleFi}>{lesson.exampleFi}</Text>
        <Text style={styles.exampleZh}>{lesson.exampleZh}</Text>
        <View style={styles.audioRow}>
          <AudioPlayButton source={lessonAudio?.example?.source} label="例句朗读" />
        </View>

        <Text style={styles.tip}>{lesson.tipZh}</Text>
        <Text style={styles.schedule}>{formatSchedule(progress)}</Text>
      </View>

      <PrimaryButton label="完全忘了" onPress={onRateAgain} variant="secondary" />
      <PrimaryButton label="有点难" onPress={onRateHard} variant="secondary" />
      <PrimaryButton label="刚好记得" onPress={onRateGood} />
      <PrimaryButton label="非常轻松" onPress={onRateEasy} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
  },
  label: {
    fontSize: 13,
    color: colors.warm,
    fontWeight: '700',
    marginBottom: 6,
  },
  word: {
    fontSize: 40,
    fontWeight: '900',
    color: colors.text,
  },
  pronunciation: {
    marginTop: 8,
    fontSize: 18,
    color: colors.accent,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 20,
  },
  translation: {
    fontSize: 24,
    color: colors.text,
    fontWeight: '800',
    marginBottom: 18,
  },
  exampleFi: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 8,
  },
  exampleZh: {
    fontSize: 16,
    color: colors.muted,
    marginBottom: 18,
  },
  tip: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },
  schedule: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 20,
    color: colors.accent,
    fontWeight: '700',
  },
  audioRow: {
    marginTop: 12,
  },
  doneCard: {
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  doneTitle: {
    fontSize: 28,
    lineHeight: 34,
    color: colors.text,
    fontWeight: '800',
    marginBottom: 10,
  },
  doneText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.muted,
  },
});
