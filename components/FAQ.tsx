'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'How fast can our project go from concept to live deployment?',
    a: 'Most targeted systems and websites are delivered in under 2 weeks. For larger enterprise platforms or custom AI integrations, we work in rapid 1-week milestone sprints with continuous staging releases so you see tangible progress every few days.',
  },
  {
    q: 'How does Knownaxis differ from traditional design agencies or freelancers?',
    a: 'Traditional agencies pass you through multiple account managers and bill endless hours with slow feedback loops. Freelancers often lack integrated full-stack technical depth. Knownaxis combines high-end 3D visual design, production software engineering (Next.js/WebGL), and custom AI automation under one senior execution team.',
  },
  {
    q: 'What technology stack do you build with?',
    a: 'We specialize in modern web and AI infrastructure: Next.js 14, React 18, TypeScript, Tailwind CSS, Three.js / WebGL for 3D graphics, Python/Node for backend systems, and OpenAI/Anthropic APIs with custom workflow orchestrators.',
  },
  {
    q: 'Will my team have full ownership and control of the code and assets?',
    a: '100% yes. Upon project completion, full intellectual property, GitHub repositories, Figma source files, 3D assets, and deployment keys are transferred directly to your organization with comprehensive documentation.',
  },
  {
    q: 'What if we need ongoing support, updates, or maintenance?',
    a: 'We offer dedicated retainer partnerships for continuous feature development, speed optimization, and maintenance. If you prefer to manage it internally, we provide tailored video training sessions to ensure your team is completely self-sufficient.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0); // first open by default

  return (
    <section id="faq" className="relative py-20 sm:py-28 overflow-hidden border-t border-line/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.35fr] items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-28">
            <span className="mb-3 inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1 text-xs font-semibold tracking-widest text-brand">
              COMMON QUESTIONS
            </span>
            <h2 className="text-[clamp(1.85rem,4vw,2.8rem)] font-bold tracking-tight text-white">
              Everything You Need to Know
            </h2>
            <p className="mt-3 sm:mt-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-grey">
              Clear answers to help you make an informed decision. If you have a specific requirement or architecture question, we are just a message away.
            </p>

            {/* Support Callout Box */}
            <div className="mt-6 sm:mt-8 rounded-2xl border border-line/60 bg-[#14161f] p-5 sm:p-6">
              <h4 className="text-sm font-semibold text-white">Have a custom question?</h4>
              <p className="mt-1.5 text-xs text-grey">
                Speak directly with an engineer to assess your stack and goals.
              </p>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3.5 inline-flex items-center gap-2 text-xs font-semibold text-brand hover:underline"
              >
                <span>Book 15-min Q&A Call</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-brand/60 bg-gradient-to-b from-[#161a25] to-[#10121a] shadow-lg shadow-brand/5'
                      : 'border-line/60 bg-[#12141a]/60 hover:border-line hover:bg-[#14161f]'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between p-4 sm:p-6 text-left"
                  >
                    <span className={`text-[14.5px] sm:text-[15.5px] font-semibold transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>
                      {f.q}
                    </span>
                    <span className={`ml-3 sm:ml-4 flex h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen
                        ? 'border-brand bg-brand text-white'
                        : 'border-line bg-white/5 text-grey'
                    }`}>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-xs font-bold leading-none"
                      >
                        +
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-line/40 px-4 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-4">
                          <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-grey">
                            {f.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
