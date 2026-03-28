import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AudioPlayButton } from '../components/AudioPlayButton';
import { Screen } from '../components/Screen';
import { getStoryAudio } from '../data/audioManifest';
import { Story } from '../domain/types';
import { colors } from '../theme/theme';

type StoryReaderScreenProps = {
  story: Story | null;
};

export function StoryReaderScreen({ story }: StoryReaderScreenProps) {
  if (!story) {
    return (
      <Screen>
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>没有找到这个故事</Text>
          <Text style={styles.emptyText}>这个故事可能已经被移除，或者链接参数不正确。</Text>
        </View>
      </Screen>
    );
  }

  const storyAudio = getStoryAudio(story.id);

  return (
    <Screen>
      <View style={styles.headerCard}>
        <Text style={styles.title}>{story.titleZh}</Text>
        <Text style={styles.titleFi}>{story.titleFi}</Text>
        <Text style={styles.meta}>
          {story.levelZh} · {story.themeZh} · 约 {story.estimatedMinutes} 分钟
        </Text>
        <View style={styles.audioRow}>
          <AudioPlayButton source={storyAudio?.title?.source} label="标题朗读" />
        </View>
        <Text style={styles.summary}>{story.summaryZh}</Text>
        <Text style={styles.focusWords}>关键词：{story.focusWords.join(' / ')}</Text>
      </View>

      <View style={styles.paragraphs}>
        {story.paragraphs.map((paragraph, index) => (
          <View key={`${story.id}-${index}`} style={styles.paragraphCard}>
            <Text style={styles.paragraphIndex}>第 {index + 1} 段</Text>
            <Text style={styles.finnish}>{paragraph.finnish}</Text>
            <View style={styles.audioRow}>
              <AudioPlayButton source={storyAudio?.paragraphs[index]?.source} label="段落朗读" />
            </View>
            <Text style={styles.chinese}>{paragraph.chinese}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerCard: {
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
  titleFi: {
    marginTop: 6,
    fontSize: 16,
    color: colors.accent,
    fontWeight: '700',
  },
  summary: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },
  meta: {
    marginTop: 8,
    fontSize: 13,
    color: colors.warm,
    fontWeight: '700',
  },
  focusWords: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 20,
    color: colors.warm,
    fontWeight: '700',
  },
  audioRow: {
    marginTop: 10,
  },
  paragraphs: {
    marginTop: 20,
    gap: 14,
  },
  paragraphCard: {
    backgroundColor: colors.surface,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  paragraphIndex: {
    fontSize: 13,
    color: colors.warm,
    fontWeight: '700',
    marginBottom: 8,
  },
  finnish: {
    fontSize: 19,
    lineHeight: 28,
    color: colors.text,
    fontWeight: '700',
  },
  chinese: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    color: colors.muted,
  },
  emptyCard: {
    backgroundColor: colors.card,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },
});
