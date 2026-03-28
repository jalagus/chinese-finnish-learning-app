import React from 'react';
import { router } from 'expo-router';

import { useAppState } from '../src/providers/AppProvider';
import { StoriesScreen } from '../src/screens/StoriesScreen';

export default function StoriesRoute() {
  const { stories } = useAppState();

  return (
    <StoriesScreen
      stories={stories}
      onOpenStory={(storyId) => router.push({ pathname: '/story/[id]', params: { id: storyId } })}
    />
  );
}

