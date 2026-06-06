export default function Legend() {
  return (
    <div className="absolute top-4 right-4 glass-panel p-3 text-xs sm:text-sm flex flex-col gap-2 z-20">
      <div className="font-semibold text-gray-300 mb-1">Life Grid Legend</div>
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-sm bg-gray-800"></div>
        <span className="text-gray-400">Past</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-sm bg-blue-500 animate-pulse glow-cyan"></div>
        <span className="text-blue-400">Present</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-sm bg-gray-200 border border-gray-300"></div>
        <span className="text-gray-200">Future</span>
      </div>
    </div>
  );
}
