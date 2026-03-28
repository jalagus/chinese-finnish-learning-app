import React from 'react';

import { useAppState } from '../src/providers/AppProvider';
import { LearnScreen } from '../src/screens/LearnScreen';

export default function LearnRoute() {
  const { currentLesson, currentLessonProgress, completePractice, resetPractice } = useAppState();

  return (
    <LearnScreen
      lesson={currentLesson}
      progress={currentLessonProgress}
      onRateAgain={() => completePractice('again')}
      onRateHard={() => completePractice('hard')}
      onRateGood={() => completePractice('good')}
      onRateEasy={() => completePractice('easy')}
      onRestart={resetPractice}
    />
  );
}
