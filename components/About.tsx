'use client';
import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    title: 'High-Performance Web & 3D Engineering',
    desc: 'We architect sub-second loading web applications and immersive WebGL 3D experiences that elevate brand prestige and captivate modern audiences across mobile and desktop.',
    tags: ['Next.js 14 App Router', 'Three.js & WebGL', 'Tailwind CSS', 'Sub-second LCP Speed'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Strategic Brand Identity & UI/UX Systems',
    desc: 'We transform disjointed digital footprints into cohesive, unforgettable brand ecosystems with bespoke design systems, high-converting checkout funnels, and intuitive UX.',
    tags: ['Design Systems', 'Interactive Prototypes', 'Brand Strategy', 'Conversion Optimization'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Custom Autonomous AI Workflows',
    desc: 'We engineer intelligent AI agent pipelines that automate repetitive lead triage, customer onboarding, and data operations, consistently returning 25+ hours weekly to founders.',
    tags: ['Autonomous AI Agents', 'CRM & API Pipelines', 'Lead Scoring', 'Operational Velocity'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const principles = [
  { label: 'Built for High-Growth Founders', detail: 'Zero bureaucratic delays. Direct collaboration with senior engineers and designers.' },
  { label: 'Sub-2-Week Average Delivery', detail: 'Rapid weekly milestone sprints with live staging links so you see tangible progress.' },
  { label: '100% Asset & Code Ownership', detail: 'Full IP transfer, clean GitHub repos, and Figma files upon project sign-off.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden border-t border-slate-200 dark:border-line/40">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1 text-xs font-semibold tracking-widest text-brand">
            ABOUT KNOWNAXIS
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            We architect memorable digital identities and autonomous AI systems that drive real growth.
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16.5px] leading-relaxed text-slate-600 dark:text-grey">
            Knownaxis was founded to bridge the gap between creative visual artistry and rigorous full-stack software engineering. We partner with forward-thinking businesses to transform how customers discover, remember, and convert on their websites.
          </p>
        </div>

        {/* 3 Core Pillars of What We Do */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3" style={{ perspective: 1200 }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                rotateX: 2,
                rotateY: -2,
                boxShadow: '0 20px 40px -15px rgba(67, 97, 238, 0.2)',
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-line/70 bg-white dark:bg-gradient-to-b dark:from-[#151822] dark:to-[#0f1117] p-7 sm:p-8 shadow-sm dark:shadow-none transition-all duration-300 hover:border-brand/60"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand shadow-inner group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    {p.icon}
                  </span>
                  <span className="text-xs font-bold text-slate-400 dark:text-grey/60 font-mono">
                    {p.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-brand transition-colors">
                  {p.title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-slate-600 dark:text-grey">
                  {p.desc}
                </p>
              </div>

              <div className="mt-8 border-t border-slate-200 dark:border-line/50 pt-5">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-200 dark:border-line/60 bg-slate-100 dark:bg-[#191c25]/80 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operating Guarantees Strip */}
        <div className="rounded-3xl border border-slate-200 dark:border-line/70 bg-white dark:bg-[#12141a]/60 p-6 sm:p-8 shadow-sm dark:shadow-none">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((pr, idx) => (
              <div key={pr.label} className={`flex flex-col gap-1.5 ${idx !== principles.length - 1 ? 'md:border-r md:border-slate-200 dark:md:border-line/40 md:pr-6' : ''}`}>
                <div className="flex items-center gap-2 text-brand font-semibold text-sm">
                  <span>✓</span>
                  <span>{pr.label}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-grey leading-relaxed">{pr.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
