import React from 'react';

import { useAppState } from '../src/providers/AppProvider';
import { DictionaryScreen } from '../src/screens/DictionaryScreen';

export default function DictionaryRoute() {
  const { lessons } = useAppState();

  return <DictionaryScreen lessons={lessons} />;
}
