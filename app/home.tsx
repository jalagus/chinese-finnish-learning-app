import React from 'react';
import { router } from 'expo-router';

import { AppLoadingScreen } from '../src/components/AppLoadingScreen';
import { useAppState } from '../src/providers/AppProvider';
import { HomeScreen } from '../src/screens/HomeScreen';

export default function HomeRoute() {
  const { dailyPlan, isHydrated, lessons, profile, stats, stories } = useAppState();

  if (!isHydrated) {
    return <AppLoadingScreen />;
  }

  return (
    <HomeScreen
      dailyPlan={dailyPlan}
      lessons={lessons}
      profile={profile}
      stats={stats}
      stories={stories}
      onStartSession={() => router.push('/learn')}
      onOpenStories={() => router.push('/stories')}
    />
  );
}
