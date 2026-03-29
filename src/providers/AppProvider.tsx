import React, { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

import { loadAppSnapshot, saveAppSnapshot } from '../data/persistence';
import { goalOptions, lessonCatalog, storyCatalog } from '../data/seed';
import { GoalOption, LessonProgress, PracticeEntry, ReviewGrade, UserProfile } from '../domain/types';
import {
  applySm2Review,
  buildRecommendedLessons,
  buildRecommendedStories,
  buildSessionPlan,
  buildStats,
  createInitialLessonProgress,
} from '../features/review/reviewEngine';

type AppStateValue = {
  isHydrated: boolean;
  hasOnboarded: boolean;
  profile: UserProfile;
  lessons: typeof lessonCatalog;
  stories: typeof storyCatalog;
  dailyPlan: typeof lessonCatalog;
  recommendedLessons: typeof lessonCatalog;
  recommendedStories: typeof storyCatalog;
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

function mergeLessonProgressMap(progressMap: Record<string, LessonProgress> | undefined) {
  const initialMap = createLessonProgressMap();

  return Object.fromEntries(
    lessonCatalog.map((lesson) => [
      lesson.id,
      progressMap?.[lesson.id]
        ? {
            ...initialMap[lesson.id],
            ...progressMap[lesson.id],
            lessonId: lesson.id,
          }
        : initialMap[lesson.id],
    ])
  );
}

export function AppProvider({ children }: PropsWithChildren) {
  const [isHydrated, setIsHydrated] = useState(false);
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

  useEffect(() => {
    let isCancelled = false;

    void (async () => {
      const snapshot = await loadAppSnapshot(goalOptions);

      if (isCancelled) {
        return;
      }

      if (snapshot) {
        const mergedProgressMap = mergeLessonProgressMap(snapshot.lessonProgressMap);
        const validSessionLessonIds = snapshot.sessionLessonIds.filter((lessonId) =>
          lessonCatalog.some((lesson) => lesson.id === lessonId)
        );
        const fallbackSessionLessonIds = buildSessionPlan(
          lessonCatalog,
          mergedProgressMap,
          snapshot.profile.selectedGoal.lessonsPerDay
        ).map((lesson) => lesson.id);
        const nextSessionLessonIds = validSessionLessonIds.length > 0 ? validSessionLessonIds : fallbackSessionLessonIds;

        setProfile(snapshot.profile);
        setPracticeLog(snapshot.practiceLog);
        setLessonProgressMap(mergedProgressMap);
        setSessionLessonIds(nextSessionLessonIds);
        setCurrentIndex(Math.min(snapshot.currentIndex, Math.max(0, nextSessionLessonIds.length - 1)));
      }

      setIsHydrated(true);
    })();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    void saveAppSnapshot({
      profile,
      practiceLog,
      lessonProgressMap,
      sessionLessonIds,
      currentIndex,
    });
  }, [currentIndex, isHydrated, lessonProgressMap, practiceLog, profile, sessionLessonIds]);

  const dailyPlan = useMemo(() => {
    return sessionLessonIds
      .map((lessonId) => lessonCatalog.find((lesson) => lesson.id === lessonId))
      .filter((lesson): lesson is (typeof lessonCatalog)[number] => Boolean(lesson));
  }, [sessionLessonIds]);

  const value = useMemo<AppStateValue>(() => {
    const stats = buildStats(lessonCatalog, lessonProgressMap, practiceLog);
    const currentLesson = dailyPlan[currentIndex] ?? null;
    const recommendedLessons = buildRecommendedLessons(lessonCatalog, lessonProgressMap);
    const recommendedStories = buildRecommendedStories(storyCatalog, lessonCatalog, lessonProgressMap);

    const rebuildSession = (goal = profile.selectedGoal, progressMap = lessonProgressMap) => {
      const nextSession = buildSessionPlan(lessonCatalog, progressMap, goal.lessonsPerDay);
      setSessionLessonIds(nextSession.map((lesson) => lesson.id));
      setCurrentIndex(0);
    };

    return {
      isHydrated,
      hasOnboarded: profile.hasOnboarded,
      profile,
      lessons: lessonCatalog,
      stories: storyCatalog,
      dailyPlan,
      recommendedLessons,
      recommendedStories,
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
  }, [currentIndex, dailyPlan, isHydrated, lessonProgressMap, practiceLog, profile]);

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error('useAppState must be used within AppProvider');
  }

  return context;
}
