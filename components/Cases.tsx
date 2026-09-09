'use client';
import { motion } from 'framer-motion';

const cases = [
  {
  name: 'Vizbix',
  client: 'D2C Brands & E-commerce Operators',
  tag: 'SAAS · ASTRO · CLOUDFLARE · AI',
  badge: 'FEATURED CASE',
  stats: [
    { label: 'Avg RTO Margin Leak', value: '23%' },
    { label: 'Time to True Net Profit', value: '2 min' },
    { label: 'Founders Guessing Margins', value: '68%' },
  ],
  challenge:
    'E-commerce brands scale top-line revenue without visibility into per-SKU net profitability, losing margins to hidden ad spend, shipping fees, returns, and unreconciled RTO losses.',
  built:
    'Engineered a real-time profit intelligence platform connecting store, ads, and logistics stacks to compute unit economics, run scenario simulations, and provide automated AI margin actions.',
  href: 'https://www.vizbix.com/',
  color: 'from-slate-900/30 to-indigo-950/20',
},
  {
    name: 'Nova: Living AI Brand Mascot',
    client: 'Nova Living Agent',
    tag: 'AI MASCOTS · WEBGL · REAL-TIME 3D',
    badge: 'E-COMMERCE & 3D',
    stats: [
      { label: 'Visitor Dwell Time', value: '+340%' },
      { label: 'Checkout Conversion', value: '+48%' },
      { label: 'Rendering Performance', value: '120 FPS' },
    ],
    challenge:
      'Brands struggle to create memorable digital experiences with static websites that fail to build emotional connection or stand out from generic templated storefronts.',
    built:
      'Engineered an interactive 3D AI mascot platform with 8 distinct living personas, real-time emotional state simulation, and one-script-tag deployment for instant brand embodiment.',
    href: 'https://nova.demo.knownaxis.com',
    color: 'from-red-700/20 to-rose-600/10',
  },
];

export default function Cases() {
  return (
    <section id="work" className="relative py-20 sm:py-28 overflow-hidden border-t border-slate-200 dark:border-line/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-12 sm:mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1 text-xs font-semibold tracking-widest text-brand">
            FEATURED PORTFOLIO
          </span>
          <h2 className="text-[clamp(1.85rem,4vw,2.8rem)] font-bold tracking-tight text-slate-900 dark:text-white">
            Explore Our Work
          </h2>
          <p className="mt-3 sm:mt-4 text-[14.5px] sm:text-[16px] text-slate-600 dark:text-grey leading-relaxed">
            Real websites, interactive 3D platforms, and automated workflows engineered by Knownaxis. Experience the live interactive demos below.
          </p>
        </div>

        {/* Case Cards with 3D Tilt */}
        <div className="space-y-8 sm:space-y-10" style={{ perspective: 1200 }}>
          {cases.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{
                y: -6,
                rotateX: 2,
                rotateY: -2,
                boxShadow: '0 25px 50px -15px rgba(67, 97, 238, 0.2)',
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group relative rounded-3xl border border-slate-200 dark:border-line/70 bg-white dark:bg-gradient-to-b dark:from-[#151822] dark:to-[#0f1117] p-5 sm:p-8 md:p-10 shadow-sm dark:shadow-none transition-all duration-300 hover:border-brand/60"
            >
              {/* Top ambient highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-6 sm:mb-8 flex flex-wrap items-start justify-between gap-3 sm:gap-4">
                <div>
                  <span className="text-xs font-medium tracking-wider text-brand">
                    {c.tag}
                  </span>
                  <h3 className="mt-1 text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {c.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-grey/80">{c.client}</p>
                </div>
                <span className="rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-[11px] sm:text-xs font-semibold text-brand">
                  {c.badge}
                </span>
              </div>

              {/* Metrics Strip */}
              <div className="mb-6 sm:mb-8 grid grid-cols-3 gap-2 sm:gap-3 rounded-2xl border border-slate-200 dark:border-line/60 bg-slate-50 dark:bg-black/30 p-3 sm:p-4 md:p-5">
                {c.stats.map((s) => (
                  <div key={s.label} className="text-center p-1">
                    <span className="block text-base sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {s.value}
                    </span>
                    <span className="mt-0.5 block text-[10px] sm:text-[11px] font-medium text-slate-600 dark:text-grey/80">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Challenge vs Solution Breakdown */}
              <div className="mb-6 sm:mb-8 grid gap-4 sm:gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 dark:border-line/40 bg-slate-50 dark:bg-[#12141a]/60 p-4 sm:p-5">
                  <h5 className="mb-1.5 sm:mb-2 text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400">
                    The Challenge
                  </h5>
                  <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-600 dark:text-grey">{c.challenge}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-line/40 bg-slate-50 dark:bg-[#12141a]/60 p-4 sm:p-5">
                  <h5 className="mb-1.5 sm:mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    The Solution & Build
                  </h5>
                  <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-600 dark:text-grey">{c.built}</p>
                </div>
              </div>

              {/* CTA Link */}
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-line/70 bg-slate-100 dark:bg-white/5 py-3.5 text-[14px] font-medium text-slate-800 dark:text-white transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white"
              >
                <span>Experience Live Demo</span>
                <span>↗</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to /work */}
        <div className="mt-12 flex justify-center">
          <a
            href="/work"
            className="group flex items-center gap-2 rounded-full border border-brand/50 bg-slate-900 text-white dark:bg-brand/15 dark:text-white px-8 py-4 text-[14.5px] font-semibold backdrop-blur-md transition-all duration-200 hover:bg-brand hover:border-brand shadow-lg"
          >
            <span>Explore All Projects & Live Demos</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
