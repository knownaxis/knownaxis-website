'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import KnownaxisLogo from './KnownaxisLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/85 dark:bg-[#0b0c10]/85 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand Logo */}
        <a
          href="/"
          aria-label="Knownaxis Home"
          className="flex items-center text-slate-900 dark:text-white hover:opacity-90 transition-opacity"
        >
          <KnownaxisLogo className="h-5 sm:h-6 w-auto" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden gap-8 text-sm text-slate-600 dark:text-grey md:flex items-center font-medium">
          <a href="/#about" className="hover:text-brand dark:hover:text-white transition-colors">About</a>
          <a href="/#services" className="hover:text-brand dark:hover:text-white transition-colors">Services</a>
          <a href="/#process" className="hover:text-brand dark:hover:text-white transition-colors">Process</a>
          <a href="/work" className="hover:text-brand dark:hover:text-white transition-colors flex items-center gap-1">
            <span>Our Work</span>
            <span className="rounded-full bg-brand/10 text-brand px-1.5 py-0.2 text-[10px] font-bold">LIVE</span>
          </a>
          <a href="/#faq" className="hover:text-brand dark:hover:text-white transition-colors">FAQ</a>
          <a href="/#contact" className="hover:text-brand dark:hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Controls: Theme Toggle & Book Call Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? (
              // Sun icon (click for light)
              <svg className="h-4 w-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon icon (click for dark)
              <svg className="h-4 w-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90 px-5 py-2 text-[13px] font-semibold transition-all hover:shadow-lg active:scale-95"
          >
            Book Free Call
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white"
          >
            {theme === 'dark' ? (
              <svg className="h-4 w-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-4 w-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0b0c10]/95 px-6 pb-6 pt-3 sm:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4 text-[15px] font-medium text-slate-900 dark:text-white/90">
              <a href="/#about" onClick={closeMenu} className="py-1 hover:text-brand transition-colors">
                About Us
              </a>
              <a href="/#services" onClick={closeMenu} className="py-1 hover:text-brand transition-colors">
                Services
              </a>
              <a href="/#process" onClick={closeMenu} className="py-1 hover:text-brand transition-colors">
                Process & Timeline
              </a>
              <a href="/work" onClick={closeMenu} className="py-1 hover:text-brand transition-colors flex items-center justify-between">
                <span>Explore Our Work</span>
                <span className="rounded-full bg-brand/10 text-brand px-2 py-0.5 text-xs font-semibold">Live Demos</span>
              </a>
              <a href="/#faq" onClick={closeMenu} className="py-1 hover:text-brand transition-colors">
                Frequently Asked Questions
              </a>
              <a href="/#contact" onClick={closeMenu} className="py-1 hover:text-brand transition-colors">
                Contact
              </a>
              <div className="pt-2">
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center rounded-xl bg-brand py-3 text-center text-sm font-semibold text-white shadow-lg"
                >
                  Book Free Call →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
