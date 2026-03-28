import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/theme';

type StatChipProps = {
  label: string;
  value: string;
};

export function StatChip({ label, value }: StatChipProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 96,
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    gap: 4,
  },
  value: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.text,
  },
  label: {
    fontSize: 13,
    color: colors.muted,
  },
});

