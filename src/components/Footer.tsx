import React from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 py-8 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-600 dark:text-zinc-500 text-sm font-sans">
          © 2026 Gilton Koech. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-500 hover:text-amber-600 dark:hover:text-amber-500 transition-colors font-sans"
        >
          Back to top
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}