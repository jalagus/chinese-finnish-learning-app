import React from 'react';
import { router } from 'expo-router';

import { AppLoadingScreen } from '../src/components/AppLoadingScreen';
import { useAppState } from '../src/providers/AppProvider';
import { ExploreScreen } from '../src/screens/ExploreScreen';

export default function ExploreRoute() {
  const { isHydrated, lessons, recommendedLessons, recommendedStories, stories } = useAppState();

  if (!isHydrated) {
    return <AppLoadingScreen />;
  }

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
