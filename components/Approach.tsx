'use client';
import { motion } from 'framer-motion';

const metrics = [
  { value: '25+ hrs', label: 'Saved Weekly per Client' },
  { value: '2 Weeks', label: 'Average System Deployment' },
  { value: '3.2x', label: 'Average Client Pipeline ROI' },
  { value: '100%', label: 'Custom Tailored Architecture' },
];

const pains = [
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Your brand feels disconnected',
    body: "Your website, visuals, and messaging don't feel like the same unified brand.",
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Traffic arrives, but doesn't convert",
    body: "Visitors land on your page, but the experience fails to guide them to take action.",
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Your digital presence feels scattered',
    body: 'Design, development, and growth are handled by separate siloed freelancers.',
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Struggling to stand out in the noise',
    body: 'Generic cookie-cutter templates make it hard for high-value clients to remember you.',
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Guesswork instead of a clear roadmap',
    body: 'Without an integrated digital strategy, growth efforts turn into chaotic trial-and-error.',
  },
];

const solutions = [
  {
    tag: 'EXPERIENCE',
    title: 'High-Conversion UI/UX',
    body: 'Meticulously crafted interfaces optimized to turn curious visitors into high-paying clients.',
  },
  {
    tag: 'ENGINEERING',
    title: 'Performant Next.js & 3D',
    body: 'Ultra-fast, responsive web applications with buttery smooth interactive 3D and modern motion.',
  },
  {
    tag: 'BRANDING',
    title: 'Distinctive Visual Identity',
    body: 'A memorable design language that commands industry authority and earns instant customer trust.',
  },
  {
    tag: 'AUTOMATION',
    title: 'Custom AI Systems',
    body: 'Intelligent automation pipelines that eliminate repetitive tasks and scale your operating capacity.',
  },
  {
    tag: 'GROWTH',
    title: 'Scalable Architecture',
    body: 'Engineered from day one to handle heavy traffic surges and seamlessly evolve with your company.',
  },
  {
    tag: 'PARTNERSHIP',
    title: 'One Unified Partner',
    body: 'Design, engineering, and digital growth collaborating as an extension of your leadership team.',
  },
];

export default function Approach() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden border-t border-slate-200 dark:border-line/40">
      {/* Background ambient gradient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-72 w-full max-w-7xl bg-brand/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Trust Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20 grid grid-cols-2 gap-3 sm:gap-4 rounded-3xl border border-slate-200 dark:border-line/60 bg-white/90 dark:bg-[#12141a]/80 p-4 sm:p-6 backdrop-blur-xl shadow-sm dark:shadow-none md:grid-cols-4 md:p-8"
        >
          {metrics.map((m, i) => (
            <div key={m.label} className={`flex flex-col items-center text-center p-2 ${i !== metrics.length - 1 ? 'md:border-r md:border-slate-200 dark:md:border-line/40' : ''}`}>
              <span className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-600 to-brand dark:from-white dark:via-indigo-100 dark:to-brand bg-clip-text text-transparent">
                {m.value}
              </span>
              <span className="mt-1 text-[11px] sm:text-xs font-medium text-slate-600 dark:text-grey/80">{m.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 sm:mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1 text-xs font-semibold tracking-widest text-brand">
            OUR APPROACH
          </span>
          <h2 className="text-[clamp(1.85rem,4vw,2.8rem)] font-bold tracking-tight text-slate-900 dark:text-white">
            From Being Seen to Being Known
          </h2>
          <p className="mt-3 sm:mt-4 text-[14.5px] sm:text-[16px] text-slate-600 dark:text-grey leading-relaxed">
            Your brand shouldn&apos;t just exist in the background. We replace fragmented guesswork with an engineered digital system built for recognition, conversion, and enduring trust.
          </p>
        </motion.div>

        {/* 2-Column Comparison Layout */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] items-start">
          {/* Left Column: The Friction Points */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="mb-1 sm:mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-grey/70">
              The Common Bottlenecks
            </h3>
            {pains.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="group flex gap-3.5 sm:gap-4 rounded-2xl border border-slate-200 dark:border-line/50 bg-slate-50 dark:bg-[#12141a]/60 p-3.5 sm:p-4 transition-all duration-300 hover:border-brand/40 hover:bg-slate-100 dark:hover:bg-[#151821]"
              >
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  {p.icon}
                </span>
                <div>
                  <h4 className="text-[13.5px] sm:text-[14.5px] font-semibold text-slate-900 dark:text-white/90 group-hover:text-brand dark:group-hover:text-white">
                    {p.title}
                  </h4>
                  <p className="mt-0.5 text-[12.5px] sm:text-[13px] text-slate-600 dark:text-grey leading-snug">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: 3D Perspective Tilt Solution Cards */}
          <div className="flex flex-col gap-4" style={{ perspective: 1200 }}>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand">
              The Knownaxis System
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {solutions.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
                  whileHover={{
                    y: -8,
                    rotateX: 4,
                    rotateY: -4,
                    scale: 1.02,
                    boxShadow: '0 20px 40px -15px rgba(67, 97, 238, 0.25)',
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-line/70 bg-white dark:bg-gradient-to-b dark:from-[#161922] dark:to-[#101217] p-5 shadow-sm dark:shadow-none transition-all duration-300 hover:border-brand/60"
                >
                  {/* Subtle top edge glare on hover */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    <span className="inline-block rounded-md bg-brand/10 px-2.5 py-0.5 text-[10.5px] font-semibold tracking-wider text-brand">
                      {s.tag}
                    </span>
                    <h4 className="mt-3 text-[15px] font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-[13px] text-slate-600 dark:text-grey leading-relaxed">{s.body}</p>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-[11.5px] font-medium text-brand/80 group-hover:text-brand">
                    <span>Engineered for scale</span>
                    <span>→</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
