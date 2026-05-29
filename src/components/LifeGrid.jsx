import { useStore } from '../store/useStore';
import { calculateGridData } from '../utils/timeCalculations';

export default function LifeGrid() {
  const { dob, lifespan } = useStore();
  const { total, lived } = calculateGridData(dob, lifespan, 'weeks');

  // Generate an array representing the grid
  const gridBoxes = Array.from({ length: total }, (_, i) => i);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto mt-8">
      <div className="flex justify-between w-full mb-4 px-4 text-sm text-gray-600">
        <span>Weeks Lived: {lived}</span>
        <span>Weeks Remaining: {total - lived}</span>
      </div>
      
      {/* Grid Rendering */}
      <div 
        id="export-grid" 
        className="grid gap-[2px] w-full p-4 bg-white rounded-lg shadow-sm"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(12px, 1fr))' }}
      >
        {gridBoxes.map((boxIndex) => {
          const isPast = boxIndex < lived;
          const isCurrent = boxIndex === lived;
          
          return (
            <div
              key={boxIndex}
              className={`h-3 w-3 rounded-sm ${
                isPast ? 'bg-gray-800' : 
                isCurrent ? 'bg-blue-500 animate-pulse' : 
                'bg-gray-200 border border-gray-300 cursor-pointer hover:bg-gray-300'
              }`}
              title={isPast ? `Week ${boxIndex + 1} (Past)` : `Week ${boxIndex + 1} (Future)`}
            />
          );
        })}
      </div>
    </div>
  );
}