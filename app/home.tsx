import React from 'react';
import { router } from 'expo-router';

import { useAppState } from '../src/providers/AppProvider';
import { HomeScreen } from '../src/screens/HomeScreen';

export default function HomeRoute() {
  const { dailyPlan, lessons, profile, stats, stories } = useAppState();

  return (
    <HomeScreen
      dailyPlan={dailyPlan}
      lessons={lessons}
      profile={profile}
      stats={stats}
      stories={stories}
      onStartSession={() => router.push('/learn')}
      onOpenDictionary={() => router.push('/dictionary')}
      onOpenStories={() => router.push('/stories')}
      onOpenProgress={() => router.push('/progress')}
    />
  );
}
