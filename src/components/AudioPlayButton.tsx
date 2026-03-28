import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { setAudioModeAsync, useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';

import { colors } from '../theme/theme';

type AudioPlayButtonProps = {
  source?: number | null;
  label?: string;
};

export function AudioPlayButton({ source, label = 'Play Audio' }: AudioPlayButtonProps) {
  const player = useAudioPlayer(source ?? undefined);
  const status = useAudioPlayerStatus(player);

  useEffect(() => {
    void setAudioModeAsync({
      playsInSilentMode: true,
      shouldPlayInBackground: false,
    });
  }, []);

  if (!source) {
    return null;
  }

  return (
    <Pressable
      onPress={async () => {
        await player.seekTo(0);
        player.play();
      }}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.icon}>{status.playing ? '■' : '▶'}</Text>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.accentSoft,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.9,
  },
  icon: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: '800',
  },
  label: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: '700',
  },
});
