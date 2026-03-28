import React from 'react';

import { useAppState } from '../src/providers/AppProvider';
import { ProgressScreen } from '../src/screens/ProgressScreen';

export default function ProgressRoute() {
  const { profile, stats, recentActivity } = useAppState();

  return <ProgressScreen profile={profile} stats={stats} recentActivity={recentActivity} />;
}

