'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

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
  return (
    <section className="relative flex min-h-[92vh] sm:min-h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-6 pt-28 sm:pt-32 pb-16">
      {/* Full-bleed 3D Art covering the entire hero page */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <HeroVisual3D />
      </div>

      {/* Subtle radial depth overlay for high text legibility */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(11,12,16,0.3)_0%,rgba(11,12,16,0.85)_85%)]" />

      {/* Centered Hero Content */}
      <div className="pointer-events-none relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
          <motion.span
            variants={item}
            className="mb-5 sm:mb-6 inline-block rounded-full border border-brand/40 bg-brand/10 px-4 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-widest text-brand backdrop-blur-md"
          >
            DESIGN · DEVELOP · GROW
          </motion.span>

          <motion.h1
            variants={item}
            className="text-[clamp(2.1rem,6.5vw,4.5rem)] font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-md"
          >
            Make your website
            <br />
            <span className="bg-gradient-to-r from-white via-indigo-100 to-brand bg-clip-text text-transparent">
              Known to your customers.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 sm:mt-6 max-w-xl text-[14.5px] sm:text-[16px] md:text-[18px] leading-relaxed text-grey/90"
          >
            Let your customers recognize your brand at every digital touchpoint. With Knownaxis, we help you build a distinctive digital identity that people remember, trust, and connect with.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-2.5 sm:mt-3 max-w-lg text-[13px] sm:text-sm text-grey/75"
          >
            Custom AI systems and workflows designed to scale your business. Save 25+ hours every week and 3x your output.
          </motion.p>

          <motion.div variants={item} className="pointer-events-auto mt-8 sm:mt-9 w-full sm:w-auto">
            <MagneticLink href="https://cal.com">Start your project →</MagneticLink>
          </motion.div>
        </motion.div>
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
      className="inline-flex items-center gap-2 rounded-full bg-brand text-white dark:bg-white dark:text-black px-8 py-4 text-[14.5px] sm:text-[15px] font-semibold shadow-xl hover:shadow-brand/25 transition-all"
    >
      {children}
    </motion.a>
  );
}