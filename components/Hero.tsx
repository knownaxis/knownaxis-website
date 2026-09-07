'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Custom typewriter hook
function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let intervalId: NodeJS.Timeout;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayed(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setDone(true);
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentProgressRef = useRef<number>(0.26); // Start looking center (~frame 25)
  const targetProgressRef = useRef<number>(0.26);
  const [copied, setCopied] = useState(false);
  const [showPills, setShowPills] = useState(false);

  // Typewriter effect
  const introText = 'Glad you stopped in. Good taste tends to find us. Now, what are we building?';
  const { displayed, done } = useTypewriter(introText, 38, 600);

  // Pill buttons appear 400ms after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPills(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Preload all 97 WebP frames for instantaneous 120fps canvas rendering (Apple-style)
  useEffect(() => {
    const TOTAL_FRAMES = 97;
    const imgs: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const padded = String(i).padStart(3, '0');
      img.src = `/frames/frame_${padded}.webp`;
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  // Ultra-responsive Canvas render loop with sub-millisecond draw time (Zero Lag)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    const TOTAL_FRAMES = 97;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.parentElement?.clientWidth || window.innerWidth;
      const height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse movement maps [0, 1] screen X to looking left -> center -> right (frames 0 to 50)
    const handleMouseMove = (e: MouseEvent) => {
      const ratio = Math.max(0, Math.min(1, e.clientX / window.innerWidth));
      // Frames 0 to 50: Left (0) -> Center (25) -> Right (50)
      targetProgressRef.current = (ratio * 50) / (TOTAL_FRAMES - 1);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const ratio = Math.max(0, Math.min(1, e.touches[0].clientX / window.innerWidth));
      targetProgressRef.current = (ratio * 50) / (TOTAL_FRAMES - 1);
    };

    // Draw helper with cover sizing and desktop offset
    const drawCover = (img: HTMLImageElement) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || 1920;
      const ih = img.naturalHeight || 1080;

      const imgRatio = iw / ih;
      const canvasRatio = cw / ch;

      let rw = cw;
      let rh = ch;

      if (canvasRatio > imgRatio) {
        rw = cw;
        rh = cw / imgRatio;
      } else {
        rh = ch;
        rw = ch * imgRatio;
      }

      // Offset character towards 72% right on desktop to leave space for text
      const isDesktop = window.innerWidth >= 768;
      const rx = (cw - rw) * (isDesktop ? 0.72 : 0.5);
      const ry = (ch - rh) * 0.5;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, rx, ry, rw, rh);
    };

    const render = () => {
      // Smooth physical lerp factor
      const lerp = 0.18;
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * lerp;

      const frameIdx = Math.max(
        0,
        Math.min(TOTAL_FRAMES - 1, Math.round(currentProgressRef.current * (TOTAL_FRAMES - 1)))
      );

      const img = imagesRef.current[frameIdx];
      if (img && img.complete && img.naturalWidth > 0) {
        drawCover(img);
      } else {
        // Fallback to first available loaded frame or frame 25
        const fallback = imagesRef.current[25] || imagesRef.current[0];
        if (fallback && fallback.complete && fallback.naturalWidth > 0) {
          drawCover(fallback);
        }
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@knownaxis.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full flex flex-col justify-end pb-14 md:justify-center md:pb-0 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none">
      {/* Background 120fps Canvas Image Sequence (Apple-style zero lag) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none z-0"
      />

      {/* Legibility Backdrop Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent dark:from-[#0b0c10]/95 dark:via-[#0b0c10]/60 dark:to-transparent/30" />

      {/* Interactive Hero Content */}
      <div className="relative z-10 max-w-xl md:max-w-2xl">
        {/* 1. Blurred Intro Label */}
        <div
          style={{ filter: 'blur(4px)' }}
          className="pointer-events-none select-none mb-5 sm:mb-6 text-[clamp(18px,4vw,26px)] leading-[1.3] font-normal text-black dark:text-white"
        >
          Hey there, meet Knownaxis,<br />
          Your Autonomous Brand & Digital Intelligence Partner
        </div>

        {/* 2. Typewriter Text */}
        <p className="mb-5 sm:mb-6 text-[clamp(18px,4vw,26px)] leading-[1.35] font-normal min-h-[54px] text-black dark:text-white">
          {displayed}
          {!done && (
            <span className="inline-block w-[2px] h-[1.1em] bg-black dark:bg-white align-middle ml-[2px] animate-blink" />
          )}
        </p>

        {/* 3. Action Pill Buttons */}
        <div
          style={{
            opacity: showPills ? 1 : 0,
            transform: showPills ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
          className="flex flex-wrap items-center gap-y-1.5"
        >
          {/* White Pill 1: Pitch us an idea */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 font-normal shadow-sm"
          >
            Pitch us an idea
          </a>

          {/* White Pill 2: Book a free call */}
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 font-normal shadow-sm"
          >
            Book a free call
          </a>

          {/* White Pill 3: Explore our work */}
          <a
            href="/work"
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 font-normal shadow-sm"
          >
            Explore our work
          </a>

          {/* White Pill 4: See how we operate */}
          <a
            href="#process"
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 font-normal shadow-sm"
          >
            See how we operate
          </a>

          {/* Outline Pill: Reach us email with copy icon */}
          <button
            onClick={copyEmail}
            type="button"
            className="inline-flex items-center justify-center text-black dark:text-white bg-transparent border border-black/30 dark:border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 font-normal cursor-pointer"
          >
            <span>
              Reach us:{' '}
              <span className="underline underline-offset-1">
                {copied ? 'Copied to clipboard!' : 'hello@knownaxis.com'}
              </span>
            </span>
            {copied ? (
              <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg
                className="w-3 h-3 shrink-0 opacity-80"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
                <path d="M10.5 5.5V3.5C10.5 2.67 9.83 2 9 2H3.5C2.67 2 2 2.67 2 3.5V9C2 9.83 2.67 10.5 3.5 10.5H5.5" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export function MagneticLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90 px-8 py-4 text-[14.5px] sm:text-[15px] font-semibold shadow-xl hover:shadow-brand/25 transition-all"
    >
      {children}
    </motion.a>
  );
}