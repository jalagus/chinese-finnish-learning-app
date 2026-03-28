import React, { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';

import { goalOptions, lessonCatalog, storyCatalog } from '../data/seed';
import { GoalOption, LessonProgress, PracticeEntry, ReviewGrade, UserProfile } from '../domain/types';
import { applySm2Review, buildSessionPlan, buildStats, createInitialLessonProgress } from '../features/review/reviewEngine';

type AppStateValue = {
  hasOnboarded: boolean;
  profile: UserProfile;
  lessons: typeof lessonCatalog;
  stories: typeof storyCatalog;
  dailyPlan: typeof lessonCatalog;
  currentLesson: (typeof lessonCatalog)[number] | null;
  currentLessonProgress: LessonProgress | null;
  recentActivity: PracticeEntry[];
  stats: ReturnType<typeof buildStats>;
  finishOnboarding: (goal: GoalOption) => void;
  completePractice: (grade: ReviewGrade) => void;
  resetPractice: () => void;
};

const defaultGoal = goalOptions[1];

const AppStateContext = createContext<AppStateValue | null>(null);

function createLessonProgressMap() {
  return Object.fromEntries(lessonCatalog.map((lesson) => [lesson.id, createInitialLessonProgress(lesson.id)]));
}

export function AppProvider({ children }: PropsWithChildren) {
  const [profile, setProfile] = useState<UserProfile>({
    hasOnboarded: false,
    selectedGoal: defaultGoal,
  });
  const [practiceLog, setPracticeLog] = useState<PracticeEntry[]>([]);
  const [lessonProgressMap, setLessonProgressMap] = useState<Record<string, LessonProgress>>(createLessonProgressMap);
  const [sessionLessonIds, setSessionLessonIds] = useState<string[]>(() =>
    lessonCatalog.slice(0, defaultGoal.lessonsPerDay).map((lesson) => lesson.id)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const dailyPlan = useMemo(() => {
    return sessionLessonIds
      .map((lessonId) => lessonCatalog.find((lesson) => lesson.id === lessonId))
      .filter((lesson): lesson is (typeof lessonCatalog)[number] => Boolean(lesson));
  }, [sessionLessonIds]);

  const value = useMemo<AppStateValue>(() => {
    const stats = buildStats(lessonCatalog, lessonProgressMap, practiceLog);
    const currentLesson = dailyPlan[currentIndex] ?? null;

    const rebuildSession = (goal = profile.selectedGoal, progressMap = lessonProgressMap) => {
      const nextSession = buildSessionPlan(lessonCatalog, progressMap, goal.lessonsPerDay);
      setSessionLessonIds(nextSession.map((lesson) => lesson.id));
      setCurrentIndex(0);
    };

    return {
      hasOnboarded: profile.hasOnboarded,
      profile,
      lessons: lessonCatalog,
      stories: storyCatalog,
      dailyPlan,
      currentLesson,
      currentLessonProgress: currentLesson ? lessonProgressMap[currentLesson.id] : null,
      recentActivity: practiceLog.slice().reverse().slice(0, 8),
      stats,
      finishOnboarding: (goal) => {
        setProfile({ hasOnboarded: true, selectedGoal: goal });
        rebuildSession(goal, lessonProgressMap);
      },
      completePractice: (grade) => {
        if (!currentLesson) {
          return;
        }

        const now = new Date();
        const nextProgress = applySm2Review(lessonProgressMap[currentLesson.id], grade, now);

        setLessonProgressMap((previous) => ({
          ...previous,
          [currentLesson.id]: nextProgress,
        }));
        setPracticeLog((previous) => [
          ...previous,
          {
            lessonId: currentLesson.id,
            result: grade,
            practicedAt: now.toISOString(),
            intervalAfterDays: nextProgress.intervalDays,
          },
        ]);
        setCurrentIndex((previous) => previous + 1);
      },
      resetPractice: () => {
        rebuildSession();
      },
    };
  }, [currentIndex, dailyPlan, lessonProgressMap, practiceLog, profile]);

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error('useAppState must be used within AppProvider');
  }

  return context;
}
