import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Screen } from './Screen';
import { colors } from '../theme/theme';

export function AppLoadingScreen() {
  return (
    <Screen>
      <View style={styles.card}>
        <Text style={styles.title}>正在恢复学习进度</Text>
        <Text style={styles.text}>稍等一下，系统正在载入你上次的学习记录和复习安排。</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 60,
    backgroundColor: colors.card,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },
});
