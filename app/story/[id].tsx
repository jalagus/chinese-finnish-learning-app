import React from 'react';
import { useLocalSearchParams } from 'expo-router';

import { AppLoadingScreen } from '../../src/components/AppLoadingScreen';
import { useAppState } from '../../src/providers/AppProvider';
import { StoryReaderScreen } from '../../src/screens/StoryReaderScreen';

export default function StoryReaderRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { isHydrated, stories } = useAppState();

  if (!isHydrated) {
    return <AppLoadingScreen />;
  }

  const story = stories.find((entry) => entry.id === id) ?? null;

  return <StoryReaderScreen story={story} />;
}
