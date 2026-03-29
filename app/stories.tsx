import React from 'react';
import { router } from 'expo-router';

import { AppLoadingScreen } from '../src/components/AppLoadingScreen';
import { useAppState } from '../src/providers/AppProvider';
import { StoriesScreen } from '../src/screens/StoriesScreen';

export default function StoriesRoute() {
  const { isHydrated, recommendedStories, stories } = useAppState();

  if (!isHydrated) {
    return <AppLoadingScreen />;
  }

  return (
    <StoriesScreen
      recommendedStories={recommendedStories}
      stories={stories}
      onOpenStory={(storyId) => router.push({ pathname: '/story/[id]', params: { id: storyId } })}
    />
  );
}
