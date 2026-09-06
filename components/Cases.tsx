'use client';
import { motion } from 'framer-motion';

const cases = [
  {
    name: 'HOMEWISE',
    tag: 'REAL ESTATE · UI/UX',
    badge: 'SERVICES',
    challenge: 'First-time home buyers often face too much information, complicated decisions, and little guidance when comparing properties.',
    built: 'A clean real-estate experience that helps users discover verified properties, compare options, understand the buying process, and move forward with confidence.',
    href: 'https://knownaxis.framer.website/case-studies/ecommerce-order-automation',
  },
  {
    name: 'Rohan K.',
    tag: 'Head of Growth, Clearpath SaaS',
    badge: 'SAAS',
    challenge: 'SDRs spending 3 hours daily manually reviewing form fills, scoring leads on gut feel, and routing them to the wrong reps.',
    built: 'A clean real-estate experience that helps users discover verified properties, compare options, understand the buying process, and move forward with confidence.',
    href: 'https://knownaxis.framer.website/case-studies/saas-lead-qualification',
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        {cases.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="mb-5 rounded-3xl border border-line bg-white p-8 transition-shadow hover:shadow-xl"
          >
            <div className="mb-5 flex items-start justify-between">
              <div>
                <h3 className="text-base font-semibold">{c.name}</h3>
                <span className="text-xs text-grey">{c.tag}</span>
              </div>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold text-brand">
                {c.badge}
              </span>
            </div>
            <div className="mb-5 grid gap-5 sm:grid-cols-2">
              <div>
                <h5 className="mb-1.5 text-xs uppercase tracking-wide text-grey">Challenge</h5>
                <p className="text-[13.5px]">{c.challenge}</p>
              </div>
              <div>
                <h5 className="mb-1.5 text-xs uppercase tracking-wide text-grey">What we built</h5>
                <p className="text-[13.5px]">{c.built}</p>
              </div>
            </div>
            <div className="relative mb-5 h-44 overflow-hidden rounded-xl bg-gradient-to-br from-brand-soft to-neutral-100">
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,.5) 50%, transparent 70%)',
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-1.5 rounded-full border border-line py-3 text-[13.5px] font-medium transition-colors hover:bg-ink hover:text-white hover:border-ink"
            >
              Read the Full Case Study ↗
            </a>
          </motion.div>
        ))}

        <div className="mt-8 flex justify-center">
          <a
            href="https://knownaxis.framer.website/case-studies"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-7 py-3.5 text-[14px] font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            View All Case Studies ↗
          </a>
        </div>
      </div>
    </section>
  );
}
