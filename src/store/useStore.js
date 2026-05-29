import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      // P0: User Profile State
      dob: '2000-01-01', 
      lifespan: 80,
      
      // Actions
      setProfile: (dob, lifespan) => set({ dob, lifespan }),
    }),
    {
      name: 'lifegrid-storage', // Persists to LocalStorage automatically
    }
  )
);