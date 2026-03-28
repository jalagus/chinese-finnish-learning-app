import { LearningStats, Lesson, LessonProgress, PracticeEntry, ReviewGrade } from '../../domain/types';

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const MIN_EASE_FACTOR = 1.3;

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
