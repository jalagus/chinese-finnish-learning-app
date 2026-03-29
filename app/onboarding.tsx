import React from 'react';
import { router } from 'expo-router';

import { AppLoadingScreen } from '../src/components/AppLoadingScreen';
import { useAppState } from '../src/providers/AppProvider';
import { OnboardingScreen } from '../src/screens/OnboardingScreen';

export default function OnboardingRoute() {
  const { finishOnboarding, isHydrated } = useAppState();

  if (!isHydrated) {
    return <AppLoadingScreen />;
  }

  return (
    <OnboardingScreen
      onSelectGoal={(goal) => {
        finishOnboarding(goal);
        router.replace('/home');
      }}
    />
  );
}
