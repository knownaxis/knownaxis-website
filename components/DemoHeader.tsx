'use client';

import React from 'react';
import Link from 'next/link';

interface DemoHeaderProps {
  title: string;
  category: string;
  device?: 'desktop' | 'tablet' | 'mobile';
  onDeviceChange?: (d: 'desktop' | 'tablet' | 'mobile') => void;
}

export default function DemoHeader({ title, category, device, onDeviceChange }: DemoHeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0b0c10]/95 px-4 sm:px-6 backdrop-blur-md">
      {/* Left: Back to Knownaxis */}
      <div className="flex items-center gap-3">
        <Link
          href="/work"
          className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-white transition-all hover:bg-slate-200 dark:hover:bg-white/10"
        >
          <span>←</span>
          <span className="hidden sm:inline">Back to</span>
          <span>Showcase</span>
        </Link>

        <div className="hidden md:flex items-center gap-2 border-l border-slate-200 dark:border-white/10 pl-3">
          <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{title}</span>
          <span className="rounded-full bg-brand/10 text-brand px-2 py-0.5 text-[10px] font-bold">{category}</span>
        </div>
      </div>

      {/* Center: Device Frame Switcher (if handler provided) */}
      {onDeviceChange && (
        <div className="hidden sm:flex items-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-1 gap-1">
          <button
            onClick={() => onDeviceChange('desktop')}
            className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
              device === 'desktop'
                ? 'bg-white dark:bg-brand text-slate-900 dark:text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-grey hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            🖥 Desktop
          </button>
          <button
            onClick={() => onDeviceChange('tablet')}
            className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
              device === 'tablet'
                ? 'bg-white dark:bg-brand text-slate-900 dark:text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-grey hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            📱 Tablet
          </button>
          <button
            onClick={() => onDeviceChange('mobile')}
            className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
              device === 'mobile'
                ? 'bg-white dark:bg-brand text-slate-900 dark:text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-grey hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            📲 Mobile
          </button>
        </div>
      )}

      {/* Right: CTA to Hire Knownaxis */}
      <div className="flex items-center gap-3">
        <span className="hidden lg:inline text-xs text-slate-500 dark:text-grey">Like this design?</span>
        <a
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand text-white px-4 py-1.5 text-xs font-semibold shadow-md hover:bg-brand/90 transition-all active:scale-95"
        >
          Hire Us to Build Yours →
        </a>
      </div>
    </header>
  );
}
