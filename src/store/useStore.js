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

      // Bucket List State
      bucketList: [],

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

      addBucketListItem: (item) => set((state) => ({
        bucketList: [...state.bucketList, { ...item, id: Date.now().toString(), createdAt: Date.now() }]
      })),

      updateBucketListItem: (id, updates) => set((state) => ({
        bucketList: state.bucketList.map(item => item.id === id ? { ...item, ...updates } : item)
      })),

      deleteBucketListItem: (id) => set((state) => ({
        bucketList: state.bucketList.filter(item => item.id !== id)
      })),

      openModal: (weekIndex) => set({ isModalOpen: true, selectedWeek: weekIndex }),
      closeModal: () => set({ isModalOpen: false, selectedWeek: null }),
    }),
    {
      name: 'lifegrid-storage',
      partialize: (state) => ({ 
        dob: state.dob, 
        lifespan: state.lifespan, 
        goals: state.goals,
        bucketList: state.bucketList
      }),
    }
  )
);