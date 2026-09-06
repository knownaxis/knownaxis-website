'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticLink } from './Hero';

const steps = [
  { label: 'Discovery', sub: 'Call', meta: '30 min · Free', title: 'Discovery', body: 'A free 30-minute call where we learn your business, map your biggest time drains, and see where you want to go.', check: 'Clarity on where AI fits and ROI' },
  { label: 'Strategy', sub: 'Audit', meta: '3 to 5 days · Detailed', title: 'Strategy', body: 'We audit your workflows, tools, and processes in detail to build your automation roadmap.', check: 'A custom roadmap with priorities & timelines' },
  { label: 'Create & Build', sub: '', meta: '1 to 2 weeks · Fully managed', title: 'Create & Build', body: 'Our team builds your custom AI systems, tests every flow, and deploys everything to your live environment.', check: 'Your ideas brought to life with purpose and attention to detail.' },
  { label: 'Launch & Grow', sub: 'Handoff', meta: 'Ongoing · Always on', title: 'Launch & Grow', body: 'We walk you through everything, document each workflow, and stay on hand for refinements.', check: 'Full ownership with expert support' },
];

const STEP_DURATION = 4000;

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

  const goTo = (i: number) => {
    setActive(i);
  };

  return (
    <section
      id="pricing"
      className="py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto grid max-w-5xl gap-14 px-6 md:grid-cols-[0.85fr_1.6fr]">
        <div>
          <span className="mb-3 block text-xs font-semibold tracking-widest text-brand">PROCESS</span>
          <h2 className="mb-3 text-[clamp(1.7rem,3.4vw,2.4rem)] font-semibold tracking-tight">Clear Process</h2>
          <p className="mb-8 text-[14.5px] text-grey">
            We handle the complexity of automating your business. Most clients go from
            discovery to a fully deployed system in under 2 weeks.
          </p>

          <div className="relative flex flex-col">
            <div className="absolute left-[9px] top-8 z-0 h-[calc(100%-20px)] w-0.5 bg-line" />
            {steps.map((s, i) => (
              <button
                key={s.label}
                onClick={() => goTo(i)}
                className="relative z-10 flex items-center gap-3 py-3 text-left"
              >
                <span
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    active === i ? 'border-brand bg-brand' : 'border-line bg-white'
                  }`}
                >
                  {active === i && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </span>
                <span className={`text-sm ${active === i ? 'font-semibold text-ink' : 'text-grey'}`}>
                  {s.label} {s.sub && <span className="font-normal text-grey">· {s.sub}</span>}
                </span>
                <span className="ml-auto h-[3px] w-9 flex-shrink-0 overflow-hidden rounded-full bg-line">
                  <span
                    className="block h-full rounded-full bg-brand"
                    style={{
                      width: active === i ? `${progress * 100}%` : '0%',
                      transition: active === i ? 'none' : 'width .3s',
                    }}
                  />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-7">
            <MagneticLink href="https://cal.com">Start your project →</MagneticLink>
          </div>
          <div className="mt-2.5 text-xs text-grey">Free 30-min consultation.</div>
        </div>

        <div className="relative min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="rounded-2xl border border-brand bg-white p-8 shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  ◐
                </span>
                <span className="rounded-full bg-brand-soft px-3 py-1 text-[11px] text-grey">
                  {steps[active].meta}
                </span>
              </div>
              <h3 className="mb-2 text-[19px] font-semibold">{steps[active].title}</h3>
              <p className="mb-4 text-sm text-grey">{steps[active].body}</p>
              <div className="flex items-center gap-2 border-t border-dashed border-line pt-4 text-[13px] text-emerald-600">
                ✓ {steps[active].check}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
