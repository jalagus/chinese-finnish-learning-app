import { LearningStats, Lesson, LessonProgress, PracticeEntry, ReviewGrade, Story } from '../../domain/types';

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const MIN_EASE_FACTOR = 1.3;
const LEVEL_ORDER = ['入门', '初级', '进阶'] as const;

function normalizeToken(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/å/g, 'a');
}

function getRecommendedLevel(lessons: Lesson[], progressMap: Record<string, LessonProgress>) {
  const introducedCount = lessons.filter((lesson) => progressMap[lesson.id].lastReviewedAt !== null).length;

  if (introducedCount < 18) {
    return '入门';
  }

  if (introducedCount < 45) {
    return '初级';
  }

  return '进阶';
}

function getThemePreferences(lessons: Lesson[], progressMap: Record<string, LessonProgress>) {
  const themeCounts = new Map<string, number>();

  lessons.forEach((lesson) => {
    if (progressMap[lesson.id].lastReviewedAt !== null) {
      themeCounts.set(lesson.themeZh, (themeCounts.get(lesson.themeZh) ?? 0) + 1);
    }
  });

  return Array.from(themeCounts.entries())
    .sort((left, right) => right[1] - left[1])
    .map(([theme]) => theme);
}

function getLevelDistance(level: string, targetLevel: string) {
  const currentIndex = LEVEL_ORDER.indexOf(level as (typeof LEVEL_ORDER)[number]);
  const targetIndex = LEVEL_ORDER.indexOf(targetLevel as (typeof LEVEL_ORDER)[number]);

  if (currentIndex === -1 || targetIndex === -1) {
    return 999;
  }

  return Math.abs(currentIndex - targetIndex);
}

export function createInitialLessonProgress(lessonId: string, now = new Date()): LessonProgress {
  return {
    lessonId,
    repetition: 0,
    intervalDays: 0,
    easeFactor: 2.5,
    dueAt: now.toISOString(),
    lastReviewedAt: null,
    lapses: 0,
  };
}

function gradeToQuality(grade: ReviewGrade): number {
  switch (grade) {
    case 'again':
      return 1;
    case 'hard':
      return 3;
    case 'good':
      return 4;
    case 'easy':
      return 5;
  }
}

export function applySm2Review(progress: LessonProgress, grade: ReviewGrade, now = new Date()): LessonProgress {
  const quality = gradeToQuality(grade);
  const nextEase = Math.max(
    MIN_EASE_FACTOR,
    progress.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  let repetition = progress.repetition;
  let intervalDays = progress.intervalDays;

  if (quality < 3) {
    repetition = 0;
    intervalDays = 1;
  } else if (repetition === 0) {
    repetition = 1;
    intervalDays = 1;
  } else if (repetition === 1) {
    repetition = 2;
    intervalDays = 6;
  } else {
    repetition += 1;
    intervalDays = Math.max(1, Math.round(intervalDays * nextEase));
  }

  return {
    ...progress,
    repetition,
    intervalDays,
    easeFactor: nextEase,
    dueAt: new Date(now.getTime() + intervalDays * DAY_IN_MS).toISOString(),
    lastReviewedAt: now.toISOString(),
    lapses: quality < 3 ? progress.lapses + 1 : progress.lapses,
  };
}

export function buildSessionPlan(
  lessons: Lesson[],
  progressMap: Record<string, LessonProgress>,
  lessonsPerDay: number,
  now = new Date()
): Lesson[] {
  const dueLessons = lessons.filter((lesson) => new Date(progressMap[lesson.id].dueAt) <= now);
  const unseenLessons = dueLessons.filter((lesson) => progressMap[lesson.id].lastReviewedAt === null);
  const reviewLessons = dueLessons.filter((lesson) => progressMap[lesson.id].lastReviewedAt !== null);

  return [...unseenLessons, ...reviewLessons].slice(0, lessonsPerDay);
}

export function buildStats(
  lessons: Lesson[],
  progressMap: Record<string, LessonProgress>,
  practiceLog: PracticeEntry[],
  now = new Date()
): LearningStats {
  const progressEntries = Object.values(progressMap);

  return {
    totalLessons: lessons.length,
    dueToday: progressEntries.filter((entry) => new Date(entry.dueAt) <= now).length,
    introducedLessons: progressEntries.filter((entry) => entry.lastReviewedAt !== null).length,
    masteredLessons: progressEntries.filter((entry) => entry.repetition >= 2 && entry.intervalDays >= 6).length,
    learningLessons: progressEntries.filter(
      (entry) => entry.lastReviewedAt !== null && !(entry.repetition >= 2 && entry.intervalDays >= 6)
    ).length,
    streakDays: practiceLog.length === 0 ? 0 : Math.min(7, practiceLog.length),
  };
}

export function buildRecommendedLessons(
  lessons: Lesson[],
  progressMap: Record<string, LessonProgress>,
  limit = 3
): Lesson[] {
  const targetLevel = getRecommendedLevel(lessons, progressMap);
  const preferredThemes = getThemePreferences(lessons, progressMap);

  return lessons
    .slice()
    .sort((left, right) => {
      const leftSeen = progressMap[left.id].lastReviewedAt !== null ? 1 : 0;
      const rightSeen = progressMap[right.id].lastReviewedAt !== null ? 1 : 0;

      if (leftSeen !== rightSeen) {
        return leftSeen - rightSeen;
      }

      const leftDistance = getLevelDistance(left.levelZh, targetLevel);
      const rightDistance = getLevelDistance(right.levelZh, targetLevel);

      if (leftDistance !== rightDistance) {
        return leftDistance - rightDistance;
      }

      const leftThemeRank = preferredThemes.indexOf(left.themeZh);
      const rightThemeRank = preferredThemes.indexOf(right.themeZh);
      const normalizedLeftThemeRank = leftThemeRank === -1 ? 999 : leftThemeRank;
      const normalizedRightThemeRank = rightThemeRank === -1 ? 999 : rightThemeRank;

      if (normalizedLeftThemeRank !== normalizedRightThemeRank) {
        return normalizedLeftThemeRank - normalizedRightThemeRank;
      }

      return left.finnish.localeCompare(right.finnish);
    })
    .slice(0, limit);
}

export function buildRecommendedStories(
  stories: Story[],
  lessons: Lesson[],
  progressMap: Record<string, LessonProgress>,
  limit = 2
): Story[] {
  const targetLevel = getRecommendedLevel(lessons, progressMap);
  const knownWords = new Set(
    lessons
      .filter((lesson) => progressMap[lesson.id].lastReviewedAt !== null)
      .map((lesson) => normalizeToken(lesson.finnish))
  );

  return stories
    .slice()
    .sort((left, right) => {
      const leftDistance = getLevelDistance(left.levelZh, targetLevel);
      const rightDistance = getLevelDistance(right.levelZh, targetLevel);

      if (leftDistance !== rightDistance) {
        return leftDistance - rightDistance;
      }

      const leftOverlap = left.focusWords.filter((word) => knownWords.has(normalizeToken(word))).length;
      const rightOverlap = right.focusWords.filter((word) => knownWords.has(normalizeToken(word))).length;

      if (leftOverlap !== rightOverlap) {
        return rightOverlap - leftOverlap;
      }

      if (left.estimatedMinutes !== right.estimatedMinutes) {
        return left.estimatedMinutes - right.estimatedMinutes;
      }

      return left.titleFi.localeCompare(right.titleFi);
    })
    .slice(0, limit);
}
