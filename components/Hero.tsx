'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import ErrorBoundary from './ErrorBoundary';
import { useBookingModal } from './BookingModal';

const HeroVisual3D = dynamic(() => import('./HeroVisual3D'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-brand border-t-transparent shadow-lg" />
    </div>
  ),
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function Hero() {
  const { openModal } = useBookingModal();

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16">
      {/* 3D Background Canvas Layer */}
      <div className="absolute inset-0 z-0 opacity-70 dark:opacity-85 pointer-events-none">
        <ErrorBoundary fallback={<div className="h-full w-full bg-transparent" />}>
          <HeroVisual3D />
        </ErrorBoundary>
      </div>

      {/* Radial soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-slate-50/50 dark:via-[#0b0c10]/40 to-slate-50 dark:to-[#0b0c10]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 text-center pointer-events-none">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Top Capsule Badge */}
          <motion.div
            variants={item}
            className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-grey backdrop-blur-md shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span>Accepting Selected Q3/Q4 Client Engagements</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl text-[clamp(2.4rem,7vw,5.2rem)] font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white"
          >
            Make your website{' '}
            <span className="bg-gradient-to-r from-brand via-indigo-400 to-indigo-200 bg-clip-text text-transparent">
              known.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 sm:mt-6 max-w-xl text-[14.5px] sm:text-[16px] md:text-[18px] leading-relaxed text-slate-700 dark:text-grey/90"
          >
            Let your customers recognize your brand at every digital touchpoint. With Knownaxis, we help you build a distinctive digital identity that people remember, trust, and connect with.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-2.5 sm:mt-3 max-w-lg text-[13px] sm:text-sm text-slate-600 dark:text-grey/75"
          >
            Custom AI systems and workflows designed to scale your business. Save 25+ hours every week and 3x your output.
          </motion.p>

          <motion.div variants={item} className="pointer-events-auto mt-8 sm:mt-9 w-full sm:w-auto">
            <MagneticLink
              onClick={() =>
                openModal({
                  title: 'Start Your Project',
                  subtitle:
                    'Share your vision and requirements. We will be right back with a custom architecture plan & estimate.',
                })
              }
            >
              Start your project →
            </MagneticLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function MagneticLink({
  href,
  onClick,
  children,
  className,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  if (onClick) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90 px-8 py-4 text-[14.5px] sm:text-[15px] font-semibold shadow-xl hover:shadow-brand/25 transition-all ${
          className || ''
        }`}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href || '#'}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90 px-8 py-4 text-[14.5px] sm:text-[15px] font-semibold shadow-xl hover:shadow-brand/25 transition-all ${
        className || ''
      }`}
    >
      {children}
    </motion.a>
  );
}