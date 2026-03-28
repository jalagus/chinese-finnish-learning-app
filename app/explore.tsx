import React from 'react';
import { router } from 'expo-router';

import { useAppState } from '../src/providers/AppProvider';
import { ExploreScreen } from '../src/screens/ExploreScreen';

export default function ExploreRoute() {
  const { lessons, recommendedLessons, recommendedStories, stories } = useAppState();

  return (
    <ExploreScreen
      lessons={lessons}
      stories={stories}
      recommendedLessons={recommendedLessons}
      recommendedStories={recommendedStories}
      onOpenDictionary={() => router.push('/dictionary')}
    />
  );
}
