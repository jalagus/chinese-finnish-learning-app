import React from 'react';
import { router } from 'expo-router';

import { useAppState } from '../src/providers/AppProvider';
import { OnboardingScreen } from '../src/screens/OnboardingScreen';

export default function OnboardingRoute() {
  const { finishOnboarding } = useAppState();

  return (
    <OnboardingScreen
      onSelectGoal={(goal) => {
        finishOnboarding(goal);
        router.replace('/home');
      }}
    />
  );
}

