import { useState } from 'react';
import { useStore } from '../store/useStore';
import html2canvas from 'html2canvas';

export default function Controls() {
  const { dob, lifespan, setProfile } = useStore();
  
  const [localDob, setLocalDob] = useState(dob);
  const [localLifespan, setLocalLifespan] = useState(lifespan);

  const handleSave = () => {
    setProfile(localDob, Number(localLifespan));
  };

  const handleExport = async () => {
    const element = document.getElementById('export-grid');
    if (!element) return;
    
    try {
      const canvas = await html2canvas(element, {
        backgroundColor: '#0a0a0a', // match dark theme bg
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'my-lifegrid.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to export image', error);
    }
  };

  return (
    <div className="glass-panel p-6 flex flex-col sm:flex-row gap-4 items-end justify-between w-full max-w-4xl mx-auto mt-8">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-400">Date of Birth</label>
        <input 
          type="date" 
          value={localDob} 
          onChange={(e) => setLocalDob(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-400">Target Lifespan (Years)</label>
        <input 
          type="number" 
          value={localLifespan} 
          onChange={(e) => setLocalLifespan(e.target.value)}
          min="1"
          max="120"
          className="bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
        />
      </div>

      <div className="flex gap-3 mt-4 sm:mt-0">
        <button 
          onClick={handleSave}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-lg font-medium transition-colors"
        >
          Update
        </button>
        <button 
          onClick={handleExport}
          className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white px-5 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          Export Snapshot
        </button>
      </div>
    </div>
  );
}
