import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const DAILY_GOAL_XP = 20;

type ProgressState = {
  xp: number;
  dailyGoalXp: number;
  streak: number;
  lastCompletionDate: string | null;
  completedLessonIds: string[];
  hasHydrated: boolean;
  completeLesson: (lessonId: string, xpReward: number) => void;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      xp: 0,
      dailyGoalXp: DAILY_GOAL_XP,
      streak: 0,
      lastCompletionDate: null,
      completedLessonIds: [],
      hasHydrated: false,
      completeLesson: (lessonId, xpReward) => {
        set((state) => ({
          ...(state.completedLessonIds.includes(lessonId)
            ? state
            : {
                xp: state.xp + xpReward,
                streak:
                  state.lastCompletionDate ===
                  new Date().toISOString().slice(0, 10)
                    ? state.streak
                    : state.lastCompletionDate ===
                        new Date(Date.now() - 86400000)
                          .toISOString()
                          .slice(0, 10)
                      ? state.streak + 1
                      : 1,
                lastCompletionDate: new Date().toISOString().slice(0, 10),
                completedLessonIds: [...state.completedLessonIds, lessonId],
              }),
        }));
      },
    }),
    {
      name: 'progress-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => () => {
        useProgressStore.setState({ hasHydrated: true });
      },
    },
  ),
);
