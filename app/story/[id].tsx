import React from 'react';
import { useLocalSearchParams } from 'expo-router';

import { useAppState } from '../../src/providers/AppProvider';
import { StoryReaderScreen } from '../../src/screens/StoryReaderScreen';

export default function StoryReaderRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { stories } = useAppState();

  const story = stories.find((entry) => entry.id === id) ?? null;

  return <StoryReaderScreen story={story} />;
}
