import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { LanguageCode } from '@/types/learning';

type LanguageState = {
  selectedLanguage: LanguageCode | null;
  hasHydrated: boolean;
  setSelectedLanguage: (code: LanguageCode) => void;
  clearSelectedLanguage: () => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      hasHydrated: false,
      setSelectedLanguage: (code) => set({ selectedLanguage: code }),
      clearSelectedLanguage: () => set({ selectedLanguage: null }),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => () => {
        useLanguageStore.setState({ hasHydrated: true });
      },
    },
  ),
);
