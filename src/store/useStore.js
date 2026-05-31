import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      // Profile State
      dob: '2000-01-01', 
      lifespan: 80,
      
      // Goals State: { weekIndex: "Goal description" }
      goals: {},

      // Modal State
      isModalOpen: false,
      selectedWeek: null,
      
      // Actions
      setProfile: (dob, lifespan) => set({ dob, lifespan }),
      
      setGoal: (weekIndex, goalText) => set((state) => ({
        goals: {
          ...state.goals,
          [weekIndex]: goalText
        }
      })),

      removeGoal: (weekIndex) => set((state) => {
        const newGoals = { ...state.goals };
        delete newGoals[weekIndex];
        return { goals: newGoals };
      }),

      openModal: (weekIndex) => set({ isModalOpen: true, selectedWeek: weekIndex }),
      closeModal: () => set({ isModalOpen: false, selectedWeek: null }),
    }),
    {
      name: 'lifegrid-storage',
      partialize: (state) => ({ dob: state.dob, lifespan: state.lifespan, goals: state.goals }), // Only persist these fields
    }
  )
);