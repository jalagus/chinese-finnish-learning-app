import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Screen } from '../components/Screen';
import { Lesson } from '../domain/types';
import { colors } from '../theme/theme';

type DictionaryScreenProps = {
  lessons: Lesson[];
};

function normalize(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/å/g, 'a');
}

export function DictionaryScreen({ lessons }: DictionaryScreenProps) {
  const [query, setQuery] = useState('');

  const filteredLessons = useMemo(() => {
    const normalizedQuery = normalize(query);

    if (!normalizedQuery) {
      return lessons;
    }

    return lessons.filter((lesson) => {
      return [
        lesson.finnish,
        lesson.pronunciationZh,
        lesson.chinese,
        lesson.exampleFi,
        lesson.exampleZh,
        lesson.categoryZh,
      ].some((field) => normalize(field).includes(normalizedQuery));
    });
  }, [lessons, query]);

  return (
    <Screen>
      <View style={styles.hero}>
        <Text style={styles.title}>芬兰语小词典</Text>
        <Text style={styles.subtitle}>可以搜索芬兰语单词、中文意思、中文发音提示，或者例句里的关键词。</Text>
      </View>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="输入芬兰语、中文、发音提示"
        placeholderTextColor={colors.muted}
        style={styles.searchInput}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={styles.resultMeta}>
        {query.trim() ? `找到 ${filteredLessons.length} 条结果` : `共 ${lessons.length} 条词条`}
      </Text>

      <View style={styles.list}>
        {filteredLessons.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>没有找到匹配的词条</Text>
            <Text style={styles.emptyText}>试试输入芬兰语原词、中文释义，或者更短的关键词。</Text>
          </View>
        ) : (
          filteredLessons.map((lesson) => (
            <View key={lesson.id} style={styles.card}>
              <View style={styles.header}>
                <Text style={styles.word}>{lesson.finnish}</Text>
                <Text style={styles.category}>{lesson.categoryZh}</Text>
              </View>
              <Text style={styles.pronunciation}>{lesson.pronunciationZh}</Text>
              <Text style={styles.translation}>{lesson.chinese}</Text>
              <Text style={styles.exampleFi}>{lesson.exampleFi}</Text>
              <Text style={styles.exampleZh}>{lesson.exampleZh}</Text>
              <Text style={styles.tip}>{lesson.tipZh}</Text>
            </View>
          ))
        )}
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
  searchInput: {
    marginTop: 18,
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.text,
  },
  resultMeta: {
    marginTop: 12,
    fontSize: 14,
    color: colors.muted,
  },
  list: {
    marginTop: 18,
    gap: 12,
  },
  emptyCard: {
    backgroundColor: colors.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
  },
  emptyText: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  word: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
  },
  category: {
    fontSize: 13,
    color: colors.warm,
    fontWeight: '700',
  },
  pronunciation: {
    fontSize: 15,
    color: colors.accent,
    fontWeight: '700',
    marginBottom: 6,
  },
  translation: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 8,
  },
  exampleFi: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
    marginBottom: 6,
  },
  exampleZh: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
    marginBottom: 10,
  },
  tip: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.muted,
  },
});
