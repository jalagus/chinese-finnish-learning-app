import React from 'react';
import { Redirect } from 'expo-router';

import { AppLoadingScreen } from '../src/components/AppLoadingScreen';
import { useAppState } from '../src/providers/AppProvider';

export default function IndexRoute() {
  const { hasOnboarded, isHydrated } = useAppState();

  if (!isHydrated) {
    return <AppLoadingScreen />;
  }

  if (!hasOnboarded) {
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/home" />;
}
