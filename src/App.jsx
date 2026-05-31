import Controls from './components/Controls';
import LifeGrid from './components/LifeGrid';
import GoalModel from './components/GoalModel';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <header className="pt-12 pb-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          Life<span className="text-cyan-400">Grid</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto px-4 text-sm md:text-base">
          A visual reminder that time is a finite, non-renewable resource. 
          Set your goals, reflect on the past, and make every remaining week count.
        </p>
      </header>

      <main className="flex-1 z-10 w-full px-4">
        <Controls />
        <LifeGrid />
      </main>

      <GoalModel />
    </div>
  );
}

export default App;
