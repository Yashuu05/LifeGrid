import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full mt-auto py-6 border-t border-zinc-800 text-center z-10 bg-black">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} LifeGrid. All rights reserved.</p>
        <div className="mt-2 md:mt-0">
          <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
