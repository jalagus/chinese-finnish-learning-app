import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BottomNav } from '../components/BottomNav';
import { Screen } from '../components/Screen';
import { Story } from '../domain/types';
import { colors } from '../theme/theme';

type StoriesScreenProps = {
  stories: Story[];
  recommendedStories: Story[];
  onOpenStory: (storyId: string) => void;
};

export function StoriesScreen({ stories, recommendedStories, onOpenStory }: StoriesScreenProps) {
  const groupedStories = ['入门', '初级', '进阶']
    .map((level) => ({
      level,
      stories: stories.filter((story) => story.levelZh === level),
    }))
    .filter((group) => group.stories.length > 0);

  return (
    <Screen bottomBar={<BottomNav />}>
      <View style={styles.hero}>
        <Text style={styles.title}>短篇故事库</Text>
        <Text style={styles.subtitle}>通过短阅读反复接触高频词汇，让单词从卡片走进真实语境。现在故事按难度和主题分层，更方便循序渐进地读下去。</Text>
      </View>

      <View style={styles.list}>
        {recommendedStories.length > 0 ? (
          <View style={styles.group}>
            <Text style={styles.groupTitle}>推荐先读</Text>
            <Text style={styles.groupMeta}>这些故事和你当前学过的词更衔接，适合作为下一步阅读。</Text>
            {recommendedStories.map((story) => (
              <Pressable key={`recommended-${story.id}`} style={styles.recommendedCard} onPress={() => onOpenStory(story.id)}>
                <Text style={styles.storyTitle}>{story.titleZh}</Text>
                <Text style={styles.storyFi}>{story.titleFi}</Text>
                <Text style={styles.storyLevel}>
                  {story.levelZh} · {story.themeZh} · 约 {story.estimatedMinutes} 分钟
                </Text>
                <Text style={styles.storySummary}>{story.summaryZh}</Text>
              </Pressable>
            ))}
          </View>
        ) : null}
        {groupedStories.map((group) => (
          <View key={group.level} style={styles.group}>
            <Text style={styles.groupTitle}>{group.level}</Text>
            <Text style={styles.groupMeta}>共 {group.stories.length} 篇，建议先从短篇和熟悉主题开始。</Text>
            {group.stories.map((story) => (
              <Pressable key={story.id} style={styles.card} onPress={() => onOpenStory(story.id)}>
                <Text style={styles.storyTitle}>{story.titleZh}</Text>
                <Text style={styles.storyFi}>{story.titleFi}</Text>
                <Text style={styles.storyLevel}>
                  {story.levelZh} · {story.themeZh} · 约 {story.estimatedMinutes} 分钟
                </Text>
                <Text style={styles.storySummary}>{story.summaryZh}</Text>
                <Text style={styles.storyFocus}>关键词：{story.focusWords.join(' / ')}</Text>
              </Pressable>
            ))}
          </View>
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
  group: {
    gap: 12,
  },
  groupTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: colors.text,
  },
  groupMeta: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.muted,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  recommendedCard: {
    backgroundColor: colors.card,
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
