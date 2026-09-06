'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'What services does Knownaxis offer?', a: 'We offer branding, UI/UX design, web development, SEO, content, and data analytics — all under one connected team.' },
  { q: 'How long does it take to complete a request?', a: 'Most projects move from discovery to a fully deployed system in under two weeks, depending on scope.' },
  { q: 'How do we communicate throughout the project?', a: "You'll have a dedicated point of contact and regular check-ins via your preferred channel — email, Slack, or calls." },
  { q: 'Can I pause or cancel my subscription anytime?', a: 'Yes, our plans are flexible with no long-term lock-in — pause or cancel whenever you need to.' },
  { q: 'How does the design process work?', a: 'We start with discovery and strategy, then move into design and build, with feedback loops at every stage.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto grid max-w-5xl gap-14 px-6 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <span className="mb-3 block text-xs font-semibold tracking-widest text-brand">FAQ</span>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div>
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-line">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left text-[15px] font-medium"
              >
                {f.q}
                <span className="relative ml-4 h-5 w-5 flex-shrink-0">
                  <span className="absolute left-1/2 top-1/2 h-[1.5px] w-3 -translate-x-1/2 -translate-y-1/2 bg-ink" />
                  <motion.span
                    animate={{ rotate: open === i ? 90 : 0, opacity: open === i ? 0 : 1 }}
                    className="absolute left-1/2 top-1/2 h-3 w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-ink"
                  />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-md pb-5 text-sm text-grey">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
