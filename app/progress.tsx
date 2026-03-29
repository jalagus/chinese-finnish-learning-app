import React from 'react';

import { AppLoadingScreen } from '../src/components/AppLoadingScreen';
import { useAppState } from '../src/providers/AppProvider';
import { ProgressScreen } from '../src/screens/ProgressScreen';

export default function ProgressRoute() {
  const { isHydrated, profile, stats, recentActivity } = useAppState();

  if (!isHydrated) {
    return <AppLoadingScreen />;
  }

  return <ProgressScreen profile={profile} stats={stats} recentActivity={recentActivity} />;
}
