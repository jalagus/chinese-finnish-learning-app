import React from 'react';
import { router } from 'expo-router';

import { useAppState } from '../src/providers/AppProvider';
import { StoriesScreen } from '../src/screens/StoriesScreen';

export default function StoriesRoute() {
  const { recommendedStories, stories } = useAppState();

  return (
    <StoriesScreen
      recommendedStories={recommendedStories}
      stories={stories}
      onOpenStory={(storyId) => router.push({ pathname: '/story/[id]', params: { id: storyId } })}
    />
  );
}
