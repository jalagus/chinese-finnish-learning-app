import React from 'react';

import { AppLoadingScreen } from '../src/components/AppLoadingScreen';
import { useAppState } from '../src/providers/AppProvider';
import { DictionaryScreen } from '../src/screens/DictionaryScreen';

export default function DictionaryRoute() {
  const { isHydrated, lessons } = useAppState();

  if (!isHydrated) {
    return <AppLoadingScreen />;
  }

  return <DictionaryScreen lessons={lessons} />;
}
