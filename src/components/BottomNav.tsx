import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../theme/theme';

const items = [
  { href: '/home', label: '首页', icon: 'home-variant-outline', activeIcon: 'home-variant' },
  { href: '/learn', label: '练习', icon: 'cards-outline', activeIcon: 'cards' },
  { href: '/explore', label: '发现', icon: 'compass-outline', activeIcon: 'compass' },
  { href: '/stories', label: '故事', icon: 'book-open-page-variant-outline', activeIcon: 'book-open-page-variant' },
  { href: '/progress', label: '进度', icon: 'chart-line', activeIcon: 'chart-line' },
] as const;

export function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Pressable
            key={item.href}
            style={styles.item}
            onPress={() => {
              if (!isActive) {
                router.replace(item.href);
              }
            }}
          >
            <View style={[styles.iconWrap, isActive && styles.iconWrapActive]}>
              <MaterialCommunityIcons
                name={isActive ? item.activeIcon : item.icon}
                size={26}
                color={isActive ? colors.accent : colors.muted}
              />
            </View>
            <Text style={[styles.label, isActive && styles.labelActive]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 6,
    backgroundColor: colors.surface,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  iconWrap: {
    width: 48,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapActive: {
    backgroundColor: colors.accentSoft,
  },
  label: {
    fontSize: 11,
    color: colors.muted,
    fontWeight: '700',
  },
  labelActive: {
    color: colors.accent,
  },
});
