import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col relative overflow-hidden py-12 px-4">
      {/* Background ambient light */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto glass-panel p-8 md:p-12 z-10 w-full relative">
        <Link to="/" className="inline-block mb-8 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
          &larr; Back to Grid
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Welcome to LifeGrid. Your privacy is critically important to us.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. Local Storage Only</h2>
          <p>
            LifeGrid is a privacy-first application. <strong>All your data</strong>, including your Date of Birth, target lifespan, goals, and bucket list items, are stored entirely locally on your device using your browser's LocalStorage.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. No Tracking or Data Collection</h2>
          <p>
            We do not collect, transmit, or store your personal information on any external servers. There are no databases tracking your goals or when you use the app.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. Notifications</h2>
          <p>
            Our bucket list reminder feature utilizes your browser's built-in Notification API. We request permission to show these notifications, but the timing and content are calculated locally. No data regarding your notifications is sent over the internet.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-3">4. Clearing Your Data</h2>
          <p>
            Since all data is local, you can delete everything instantly by clearing your browser's site data or cache for this website.
          </p>

          <p className="mt-8 text-sm text-gray-500 italic">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
