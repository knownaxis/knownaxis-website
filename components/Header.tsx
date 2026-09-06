'use client';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/85 backdrop-blur-md transition-colors ${
        scrolled ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="h-2.5 w-2.5 rounded-sm bg-brand" />
          KNOWNAXIS
        </div>
        <div className="hidden gap-8 text-sm text-grey md:flex">
          <a href="#services" className="hover:text-ink transition-colors">Services</a>
          <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
          <a href="#cases" className="hover:text-ink transition-colors">Case Studies</a>
          <a href="#about" className="hover:text-ink transition-colors">About</a>
          <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
        </div>
        <a
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Book Free Call
        </a>
      </nav>
    </header>
  );
}
