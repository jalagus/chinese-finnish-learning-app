export type GoalId = 'casual' | 'steady' | 'intensive';

export type GoalOption = {
  id: GoalId;
  titleZh: string;
  descriptionZh: string;
  lessonsPerDay: number;
};

export type Lesson = {
  id: string;
  categoryZh: string;
  finnish: string;
  pronunciationZh: string;
  chinese: string;
  exampleFi: string;
  exampleZh: string;
  tipZh: string;
};

export type StoryParagraph = {
  finnish: string;
  chinese: string;
};

export type Story = {
  id: string;
  titleZh: string;
  titleFi: string;
  levelZh: string;
  summaryZh: string;
  focusWords: string[];
  paragraphs: StoryParagraph[];
};

export type UserProfile = {
  hasOnboarded: boolean;
  selectedGoal: GoalOption;
};

export type LearningStats = {
  totalLessons: number;
  dueToday: number;
  introducedLessons: number;
  masteredLessons: number;
  learningLessons: number;
  streakDays: number;
};

export type ReviewGrade = 'again' | 'hard' | 'good' | 'easy';

export type LessonProgress = {
  lessonId: string;
  repetition: number;
  intervalDays: number;
  easeFactor: number;
  dueAt: string;
  lastReviewedAt: string | null;
  lapses: number;
};

export type PracticeEntry = {
  lessonId: string;
  result: ReviewGrade;
  practicedAt: string;
  intervalAfterDays: number;
};
