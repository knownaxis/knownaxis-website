'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticLink } from './Hero';

const steps = [
  {
    step: '01',
    label: 'Discovery',
    sub: 'Architecture & Goals',
    meta: '30 min · Zero cost',
    title: 'Discovery & Bottleneck Audit',
    body: 'A focused strategy session where we dive deep into your operational bottlenecks, understand your ideal customer profile, and quantify where custom AI and premium web architecture unlock immediate ROI.',
    deliverables: [
      'Comprehensive digital audit & opportunity matrix',
      'Target ROI & efficiency projections',
      'Recommended architecture stack (Next.js, Three.js, AI)',
    ],
    check: 'Complete alignment on deliverables, scope, and expected timeline',
  },
  {
    step: '02',
    label: 'Strategy',
    sub: 'Roadmap & Specs',
    meta: '3 to 5 days · Deep dive',
    title: 'Strategic Architecture & Prototype',
    body: 'We map out the exact technical blueprints, UI/UX interactive wireframes, database schemas, and AI agent prompt chains so nothing is left to chance before coding begins.',
    deliverables: [
      'Interactive Figma prototypes & design tokens',
      'Technical architecture & API documentation',
      'Milestone calendar with fixed delivery dates',
    ],
    check: 'Clear step-by-step roadmap with zero hidden surprises',
  },
  {
    step: '03',
    label: 'Create & Build',
    sub: 'Rapid Engineering',
    meta: '1 to 2 weeks · Full sprint',
    title: 'Engineering, Animation & AI Integration',
    body: 'Our engineers build your custom digital systems with clean, production-grade Next.js, smooth WebGL interactions, robust security, and end-to-end automated testing across devices.',
    deliverables: [
      'Production code repository with documentation',
      'Interactive 3D / WebGL motion implementation',
      'Rigorous cross-browser QA & lighthouse 95+ speed score',
    ],
    check: 'Flawless execution with daily progress updates via Slack or email',
  },
  {
    step: '04',
    label: 'Launch & Grow',
    sub: 'Handoff & Scale',
    meta: 'Ongoing · Dedicated support',
    title: 'Deployment, Training & Continuous Evolution',
    body: 'We deploy to your live domain, conduct team onboarding sessions, monitor real-time user metrics, and stay on standby for continuous enhancements as your traffic scales.',
    deliverables: [
      'Zero-downtime deployment & DNS configuration',
      'Full video walkthrough library for your team',
      'Ongoing maintenance, analytics monitoring & optimization',
    ],
    check: 'Full ownership of your assets with proactive ongoing support',
  },
];

const STEP_DURATION = 5000;

export default function Process() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const startRef = useRef<number>(Date.now());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    startRef.current = Date.now();
    setProgress(0);
    let raf: number;

    const tick = () => {
      if (!paused) {
        const elapsed = Date.now() - startRef.current;
        const pct = Math.min(elapsed / STEP_DURATION, 1);
        setProgress(pct);
        if (pct >= 1) {
          setActive((a) => (a + 1) % steps.length);
          return;
        }
      } else {
        startRef.current = Date.now() - progress * STEP_DURATION;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused]);

  return (
    <section
      id="process"
      className="relative py-20 sm:py-28 overflow-hidden border-t border-slate-200 dark:border-line/40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-12 sm:mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1 text-xs font-semibold tracking-widest text-brand">
            THE PROCESS
          </span>
          <h2 className="text-[clamp(1.85rem,4vw,2.8rem)] font-bold tracking-tight text-slate-900 dark:text-white">
            A Transparent, Repeatable Engine
          </h2>
          <p className="mt-3 sm:mt-4 text-[14.5px] sm:text-[16px] text-slate-600 dark:text-grey leading-relaxed">
            No endless meetings or opaque billable hours. We take you from initial consultation to a production-ready system in under 2 weeks.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] items-center">
          {/* Left: Step Selector Timeline */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {steps.map((s, i) => {
              const isSelected = active === i;
              return (
                <button
                  key={s.label}
                  onClick={() => {
                    setActive(i);
                    setProgress(0);
                  }}
                  className={`group relative flex items-center justify-between rounded-2xl border p-4 sm:p-5 text-left transition-all duration-300 ${
                    isSelected
                      ? 'border-brand bg-slate-100 dark:bg-gradient-to-r dark:from-[#171b26] dark:to-[#111319] shadow-sm dark:shadow-lg dark:shadow-brand/10'
                      : 'border-slate-200 dark:border-line/50 bg-white/80 dark:bg-[#12141a]/40 hover:border-slate-300 dark:hover:border-line hover:bg-slate-50 dark:hover:bg-[#141720]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span
                      className={`flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-xl text-xs font-bold transition-colors ${
                        isSelected
                          ? 'bg-brand text-white shadow-md'
                          : 'bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-grey dark:group-hover:text-white'
                      }`}
                    >
                      {s.step}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[14px] sm:text-[15px] font-semibold ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-grey group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                          {s.label}
                        </span>
                        <span className="text-[11px] sm:text-xs text-slate-400 dark:text-grey/60">· {s.sub}</span>
                      </div>
                      <span className="text-[11px] sm:text-[12px] text-brand/80">{s.meta}</span>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="h-1.5 w-10 sm:w-12 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-brand transition-all"
                      style={{
                        width: isSelected ? `${progress * 100}%` : '0%',
                        transition: isSelected ? 'none' : 'width .3s ease',
                      }}
                    />
                  </div>
                </button>
              );
            })}

            <div className="mt-6 flex flex-col gap-2">
              <MagneticLink href="https://cal.com">Book Your 30-Min Strategy Call →</MagneticLink>
              <span className="text-[11.5px] sm:text-xs text-slate-500 dark:text-grey/70 text-center">Zero commitment · Instant calendar confirmation</span>
            </div>
          </div>

          {/* Right: 3D Flip Card Container */}
          <div className="relative min-h-[380px] sm:min-h-[420px] md:min-h-[450px]" style={{ perspective: 1200 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, rotateY: 35, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, rotateY: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -35, y: -15, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-brand/40 bg-white dark:bg-gradient-to-br dark:from-[#161a26] dark:via-[#12141c] dark:to-[#0d0f14] p-6 sm:p-8 md:p-10 shadow-xl dark:shadow-2xl"
              >
                {/* Ambient glow in card corner */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-brand/20 blur-[70px]" />

                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full border border-brand/30 bg-brand/15 px-3.5 py-1 text-xs font-semibold text-brand">
                      PHASE {steps[active].step}
                    </span>
                    <span className="rounded-full border border-slate-200 dark:border-transparent bg-slate-100 dark:bg-white/5 px-3.5 py-1 text-xs font-medium text-slate-700 dark:text-white/70">
                      {steps[active].meta}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
                    {steps[active].title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-grey">
                    {steps[active].body}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-6 space-y-2.5 rounded-2xl border border-slate-200 dark:border-line/40 bg-slate-50 dark:bg-black/20 p-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-grey/80">
                      Key Deliverables:
                    </h4>
                    {steps[active].deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-white/90">
                        <span className="mt-0.5 text-brand">✦</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome Badge */}
                <div className="mt-8 flex items-center gap-2 border-t border-slate-200 dark:border-line/50 pt-5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-300">
                    ✓
                  </span>
                  <span>{steps[active].check}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
