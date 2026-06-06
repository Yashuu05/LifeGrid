import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useStore } from './store/useStore';
import { calculateGridData } from './utils/timeCalculations';
import Controls from './components/Controls';
import LifeGrid from './components/LifeGrid';
import GoalModel from './components/GoalModel';
import Legend from './components/Legend';
import BucketList from './components/BucketList';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import './App.css';

function MainLayout() {
  const { bucketList, updateBucketListItem, dob, lifespan } = useStore();

  useEffect(() => {
    if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
      Notification.requestPermission();
    }

    const interval = setInterval(() => {
      if (Notification.permission === 'granted') {
        const { total, lived } = calculateGridData(dob, lifespan, 'weeks');
        const remainingWeeks = total - lived;

        const now = Date.now();
        bucketList.forEach(item => {
          if (!item.isCompleted) {
            const lastNotified = item.lastNotifiedAt || item.createdAt;
            // Interval in milliseconds (weeks * 7 days * 24 hours * 60 minutes * 60 seconds * 1000 ms)
            const intervalMs = item.intervalWeeks * 7 * 24 * 60 * 60 * 1000;
            
            if (now - lastNotified >= intervalMs) {
              new Notification('LifeGrid Reminder', {
                body: `Hey friend, you have ${remainingWeeks} weeks to live your life by achieving your "${item.text}" wish.`
              });
              updateBucketListItem(item.id, { lastNotifiedAt: now });
            }
          }
        });
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [bucketList, updateBucketListItem, dob, lifespan]);

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <Legend />

      <header className="pt-12 pb-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          Life<span className="text-cyan-400">Grid</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto px-4 text-sm md:text-base">
          Your life, visualized. Track your journey, set meaningful goals, and make every moment count by turning your remaining time into an inspiring adventure.
        </p>
      </header>

      <main className="flex-1 z-10 w-full px-4 flex flex-col">
        <Controls />
        <LifeGrid />
        <BucketList />
      </main>

      <Footer />
      <GoalModel />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
