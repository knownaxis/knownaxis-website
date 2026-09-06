'use client';
import { motion } from 'framer-motion';
import { MagneticLink } from './Hero';

const services = [
  {
    tag: 'FLAGSHIP · ENGINEERING',
    title: 'Modern Web Apps & 3D Experiences',
    desc: 'High-speed, production-grade web applications crafted with Next.js 14, TypeScript, Tailwind CSS, and WebGL Three.js animations that captivate visitors.',
    features: ['Next.js 14 App Router', 'Three.js & WebGL 3D', 'Sub-second LCP & SEO', 'Mobile First Responsive'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    highlight: true,
  },
  {
    tag: 'FLAGSHIP · DESIGN',
    title: 'Distinctive Branding & UI/UX',
    desc: 'Transform your digital presence from generic to iconic with bespoke visual identity systems, interactive prototypes, and conversion-focused user journeys.',
    features: ['Design Systems & Figma', 'Interactive Micro-motion', 'Brand Guidelines', 'User Testing & Wireframing'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    highlight: true,
  },
  {
    tag: 'SYSTEMS & AI',
    title: 'Autonomous AI Workflows & Systems',
    desc: 'Save 25+ hours weekly by integrating intelligent AI agents and automated workflows that handle lead qualification, customer intake, and data operations.',
    features: ['Custom AI Agents', 'CRM & Tool Integrations', 'Automated Lead Qualification', 'Saves 25+ Hours/Week'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    tag: 'GROWTH & SEO',
    title: 'Data-Driven Growth & Conversion',
    desc: 'Maximize the value of every visitor with rigorous conversion rate optimization, technical search engine visibility, and actionable analytics pipelines.',
    features: ['Technical Core Web Vitals', 'Conversion Funnel Audits', 'A/B Testing Frameworks', 'Search Dominance'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    tag: 'CONTENT & PRESENCE',
    title: 'Continuous Digital Dominance',
    desc: 'Keep your brand top-of-mind with cohesive cross-platform creative assets, short-form video strategies, and high-impact storytelling.',
    features: ['High-Retention Visual Assets', 'Cross-Platform Cohesion', 'Brand Voice Guidelines', 'Ongoing Refinements'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden border-t border-line/40">
      {/* Subtle background ambient light */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-brand/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-[#00f5ff]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-3 inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1 text-xs font-semibold tracking-widest text-brand">
              OUR CAPABILITIES
            </span>
            <h2 className="text-[clamp(1.85rem,4vw,2.8rem)] font-bold tracking-tight text-white max-w-xl">
              Everything your brand needs to scale, automate, and lead.
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] sm:text-[15.5px] leading-relaxed text-grey">
            We integrate world-class design, modern software engineering, and intelligent AI workflows under one accountable team.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 35, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{
                y: -8,
                rotateX: 3,
                rotateY: -3,
                scale: 1.015,
                boxShadow: '0 20px 40px -15px rgba(67, 97, 238, 0.25)',
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className={`group relative flex flex-col justify-between rounded-3xl border p-6 sm:p-7 md:p-8 transition-all duration-300 ${
                s.highlight
                  ? 'border-brand/50 bg-gradient-to-b from-[#181c28] via-[#131620] to-[#0f1117] md:col-span-1 lg:col-span-1'
                  : 'border-line/70 bg-gradient-to-b from-[#14161f] to-[#0f1116] hover:border-brand/50'
              }`}
            >
              {/* Top ambient hover line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand shadow-inner group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    {s.icon}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-brand transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-grey">{s.desc}</p>
              </div>

              <div className="mt-8 border-t border-line/50 pt-5">
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-lg border border-line/60 bg-[#191c25]/80 px-2.5 py-1 text-[11.5px] font-medium text-white/70"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
          <MagneticLink href="https://cal.com">Schedule Your Discovery Call →</MagneticLink>
          <span className="text-xs text-grey">30-min strategy session · Zero obligation</span>
        </div>
      </div>
    </section>
  );
}
