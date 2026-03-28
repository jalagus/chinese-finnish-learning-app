import React, { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../theme/theme';

type ScreenProps = PropsWithChildren<{
  padded?: boolean;
  bottomBar?: React.ReactNode;
}>;

export function Screen({ children, padded = true, bottomBar }: ScreenProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={[styles.content, padded && styles.padded]}>
        <View>{children}</View>
      </ScrollView>
      {bottomBar ? <View style={styles.bottomBar}>{bottomBar}</View> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
  },
  padded: {
    padding: 20,
  },
  bottomBar: {
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
