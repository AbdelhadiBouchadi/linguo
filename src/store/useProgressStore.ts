import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const DAILY_GOAL_XP = 20;

type ProgressState = {
  xp: number;
  dailyGoalXp: number;
  streak: number;
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
      completedLessonIds: [],
      hasHydrated: false,
      completeLesson: (lessonId, xpReward) => {
        if (get().completedLessonIds.includes(lessonId)) return;
        set((state) => ({
          xp: state.xp + xpReward,
          completedLessonIds: [...state.completedLessonIds, lessonId],
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
