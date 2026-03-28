import React from 'react';
import { Redirect } from 'expo-router';

import { useAppState } from '../src/providers/AppProvider';

export default function IndexRoute() {
  const { hasOnboarded } = useAppState();

  if (!hasOnboarded) {
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/home" />;
}

