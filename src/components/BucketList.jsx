import { useState } from 'react';
import { useStore } from '../store/useStore';

export default function BucketList() {
  const { bucketList, addBucketListItem, updateBucketListItem, deleteBucketListItem } = useStore();
  const [wish, setWish] = useState('');
  const [intervalWeeks, setIntervalWeeks] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!wish.trim()) return;
    
    addBucketListItem({
      text: wish.trim(),
      intervalWeeks: Number(intervalWeeks) || 1,
      isCompleted: false
    });
    setWish('');
    setIntervalWeeks(1);
  };

  const toggleComplete = (id, currentStatus) => {
    updateBucketListItem(id, { isCompleted: !currentStatus });
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-8 glass-panel p-6">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Your Bucket List</h2>
      <p className="text-gray-400 text-sm mb-6">
        Add wishes you want to accomplish. We'll remind you periodically based on your chosen interval!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-xs text-gray-500 font-semibold">Wish</label>
          <input 
            type="text" 
            placeholder="E.g., Travel to Japan, Learn Guitar..." 
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 w-full"
          />
        </div>
        <div className="w-full sm:w-48 flex flex-col gap-1">
          <label className="text-xs text-gray-500 font-semibold">Remind every (Weeks)</label>
          <input 
            type="number" 
            min="1"
            value={intervalWeeks}
            onChange={(e) => setIntervalWeeks(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 w-full"
          />
        </div>
        <div className="flex items-end">
          <button 
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full sm:w-auto h-[42px]"
          >
            Add Wish
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-3">
        {bucketList.length === 0 ? (
          <div className="text-center text-gray-500 py-4 italic">Your bucket list is empty. Add a wish above!</div>
        ) : (
          bucketList.map(item => (
            <div key={item.id} className={`flex items-center justify-between p-4 rounded-lg border ${item.isCompleted ? 'bg-zinc-800/50 border-zinc-800' : 'bg-zinc-800 border-zinc-700'}`}>
              <div className="flex items-center gap-4">
                <input 
                  type="checkbox" 
                  checked={item.isCompleted}
                  onChange={() => toggleComplete(item.id, item.isCompleted)}
                  className="w-5 h-5 accent-cyan-500 cursor-pointer"
                />
                <span className={`text-lg ${item.isCompleted ? 'text-gray-500 line-through' : 'text-gray-100'}`}>
                  {item.text}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500 hidden sm:block">Reminds every {item.intervalWeeks} week(s)</span>
                <button 
                  onClick={() => deleteBucketListItem(item.id)}
                  className="text-red-400 hover:text-red-300 text-sm font-medium px-2 py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
