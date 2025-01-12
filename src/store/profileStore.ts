import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProfileState {
  age: number;
  gender: 'male' | 'female';
  bmi: number;
  glucoseLevel: number;
  updateProfile: (data: Partial<ProfileState>) => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      age: 25,
      gender: 'male',
      bmi: 24.5,
      glucoseLevel: 95,
      updateProfile: (data) => set((state) => ({ ...state, ...data })),
    }),
    {
      name: 'profile-storage',
    }
  )
);