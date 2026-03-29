import * as SQLite from 'expo-sqlite';

import { GoalId, GoalOption, LessonProgress, PracticeEntry, UserProfile } from '../domain/types';

type PersistedAppSnapshot = {
  profile: UserProfile;
  practiceLog: PracticeEntry[];
  lessonProgressMap: Record<string, LessonProgress>;
  sessionLessonIds: string[];
  currentIndex: number;
};

const DB_NAME = 'suomi-start.db';
const SNAPSHOT_KEY = 'app-snapshot';

let databasePromise: Promise<SQLite.SQLiteDatabase> | null = null;

async function getDatabase() {
  if (!databasePromise) {
    databasePromise = SQLite.openDatabaseAsync(DB_NAME);
  }

  const database = await databasePromise;
  await database.execAsync(
    'CREATE TABLE IF NOT EXISTS app_state (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL);'
  );
  return database;
}

function isGoalOption(value: GoalOption | undefined): value is GoalOption {
  return Boolean(value && typeof value.id === 'string' && typeof value.lessonsPerDay === 'number');
}

export async function loadAppSnapshot(goalOptions: GoalOption[]): Promise<PersistedAppSnapshot | null> {
  const database = await getDatabase();
  const row = await database.getFirstAsync<{ value: string }>('SELECT value FROM app_state WHERE key = ?', [
    SNAPSHOT_KEY,
  ]);

  if (!row?.value) {
    return null;
  }

  try {
    const parsed = JSON.parse(row.value) as Partial<PersistedAppSnapshot> & {
      profile?: Partial<UserProfile> & { selectedGoal?: Partial<GoalOption> & { id?: GoalId } };
    };

    const selectedGoal = goalOptions.find((goal) => goal.id === parsed.profile?.selectedGoal?.id) ?? goalOptions[1];

    if (!isGoalOption(selectedGoal)) {
      return null;
    }

    return {
      profile: {
        hasOnboarded: Boolean(parsed.profile?.hasOnboarded),
        selectedGoal,
      },
      practiceLog: Array.isArray(parsed.practiceLog) ? parsed.practiceLog : [],
      lessonProgressMap:
        parsed.lessonProgressMap && typeof parsed.lessonProgressMap === 'object' ? parsed.lessonProgressMap : {},
      sessionLessonIds: Array.isArray(parsed.sessionLessonIds) ? parsed.sessionLessonIds : [],
      currentIndex: typeof parsed.currentIndex === 'number' ? parsed.currentIndex : 0,
    };
  } catch {
    return null;
  }
}

export async function saveAppSnapshot(snapshot: PersistedAppSnapshot) {
  const database = await getDatabase();
  const value = JSON.stringify(snapshot);
  await database.runAsync('INSERT OR REPLACE INTO app_state (key, value) VALUES (?, ?)', [SNAPSHOT_KEY, value]);
}
