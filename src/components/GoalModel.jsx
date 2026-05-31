import { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { addWeeks, format } from 'date-fns';

export default function GoalModel() {
  const { isModalOpen, selectedWeek, closeModal, goals, setGoal, removeGoal, dob } = useStore();
  const [goalText, setGoalText] = useState('');

  // Update local state when modal opens
  useEffect(() => {
    if (isModalOpen && selectedWeek !== null) {
      setGoalText(goals[selectedWeek] || '');
    }
  }, [isModalOpen, selectedWeek, goals]);

  if (!isModalOpen || selectedWeek === null) return null;

  // Calculate the approximate date for this week
  const birthDate = new Date(dob);
  const weekDate = addWeeks(birthDate, selectedWeek);
  const formattedDate = format(weekDate, 'MMMM yyyy');
  const age = Math.floor(selectedWeek / 52);

  const handleSave = () => {
    if (goalText.trim()) {
      setGoal(selectedWeek, goalText.trim());
    } else {
      removeGoal(selectedWeek); // If saved empty, remove the goal
    }
    closeModal();
  };

  const handleDelete = () => {
    removeGoal(selectedWeek);
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="glass-panel w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold text-white">Week {selectedWeek + 1}</h2>
            <p className="text-sm text-cyan-400">Approx. {formattedDate} (Age {age})</p>
          </div>
          <button 
            onClick={closeModal}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Milestone / Goal
          </label>
          <textarea
            value={goalText}
            onChange={(e) => setGoalText(e.target.value)}
            placeholder="e.g. Graduate, Travel to Japan, Start a business..."
            className="w-full h-32 bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none transition-colors"
          />
        </div>

        <div className="flex justify-end gap-3">
          {goals[selectedWeek] && (
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 rounded-lg transition-colors mr-auto"
            >
              Remove
            </button>
          )}
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-gray-300 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors shadow-[0_0_15px_rgba(8,145,178,0.4)]"
          >
            Save Goal
          </button>
        </div>
      </div>
    </div>
  );
}
