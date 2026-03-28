import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Screen } from '../components/Screen';
import { Story } from '../domain/types';
import { colors } from '../theme/theme';

type StoriesScreenProps = {
  stories: Story[];
  onOpenStory: (storyId: string) => void;
};

export function StoriesScreen({ stories, onOpenStory }: StoriesScreenProps) {
  return (
    <Screen>
      <View style={styles.hero}>
        <Text style={styles.title}>短篇故事库</Text>
        <Text style={styles.subtitle}>通过短阅读反复接触高频词汇，让单词从卡片走进真实语境。</Text>
      </View>

      <View style={styles.list}>
        {stories.map((story) => (
          <Pressable key={story.id} style={styles.card} onPress={() => onOpenStory(story.id)}>
            <Text style={styles.storyTitle}>{story.titleZh}</Text>
            <Text style={styles.storyFi}>{story.titleFi}</Text>
            <Text style={styles.storyLevel}>{story.levelZh}</Text>
            <Text style={styles.storySummary}>{story.summaryZh}</Text>
            <Text style={styles.storyFocus}>关键词：{story.focusWords.join(' / ')}</Text>
          </Pressable>
        ))}
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
  list: {
    marginTop: 20,
    gap: 14,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  storyTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: colors.text,
  },
  storyFi: {
    marginTop: 4,
    fontSize: 15,
    color: colors.accent,
    fontWeight: '700',
  },
  storyLevel: {
    marginTop: 8,
    fontSize: 13,
    color: colors.warm,
    fontWeight: '700',
  },
  storySummary: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },
  storyFocus: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },
});
