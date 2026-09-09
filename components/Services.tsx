'use client';
import { motion } from 'framer-motion';
import { MagneticLink } from './Hero';
import { useBookingModal } from './BookingModal';

const services = [
  {
    tag: 'DESIGN & BRANDING',
    title: 'Branding · Visual Identity · UI/UX Design',
    desc: 'Build a recognizable identity and digital experience around your brand that customers remember, trust, and connect with.',
    features: ['Visual Identity', 'UI/UX Design', 'Design Systems', 'Brand Strategy'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth={1.75} />
        <circle cx="12" cy="12" r="5" strokeWidth={1.75} />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    highlight: true,
  },
  {
    tag: 'WEB DEVELOPMENT',
    title: 'Frontend · Backend · Web Apps',
    desc: 'From landing pages to custom web applications, we build digital products that work flawlessly and convert.',
    features: ['Next.js 14 & React', 'High Performance', 'Interactive 3D', 'Mobile First'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    highlight: true,
  },
  {
    tag: 'SEO & DIGITAL GROWTH',
    title: 'SEO · Analytics · Conversion Optimization',
    desc: 'Help the right people discover your business, rank higher on search engines, and turn attention into measurable growth.',
    features: ['Technical SEO', 'Search Dominance', 'Conversion Audits', 'Analytics Pipelines'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth={1.75} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5 M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
  },
  {
    tag: 'SOCIAL MEDIA & CONTENT',
    title: 'Social Media · Reels · UGC · Content Creation',
    desc: 'Create a consistent digital presence with high-impact creative assets that keep your brand visible, memorable, and engaging.',
    features: ['Viral Reels & Video', 'UGC Campaigns', 'Brand Storytelling', 'Multi-Platform Reach'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    tag: 'DATA & ANALYTICS',
    title: 'Data Analysis · Business Insights · Reporting',
    desc: 'Turn your business data into clear insights that help you make better decisions and eliminate margin leakage. *Powered by Vizbix',
    features: ['Profit Intelligence', 'Unit Economics', 'Executive Dashboards', 'Powered by Vizbix'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 18v-6a9 9 0 0118 0v6 M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
      </svg>
    ),
  },
  {
    tag: 'WEBSITE CARE & SPEED',
    title: 'Website Redesign · Speed · Maintenance',
    desc: 'Keep your website lightning fast, modern, and secure with continuous speed optimization, Core Web Vitals tuning, and proactive maintenance.',
    features: ['Speed Optimization', 'Core Web Vitals', 'Security & Backups', 'Ongoing Enhancements'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function Services() {
  const { openModal } = useBookingModal();

  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden border-t border-slate-200 dark:border-line/40">
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
            <h2 className="text-[clamp(1.85rem,4vw,2.8rem)] font-bold tracking-tight text-slate-900 dark:text-white max-w-xl">
              Everything your brand needs to scale, automate, and lead.
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-600 dark:text-grey">
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
              className={`group relative flex flex-col justify-between rounded-3xl border p-6 sm:p-7 md:p-8 shadow-sm dark:shadow-none transition-all duration-300 ${
                s.highlight
                  ? 'border-brand/40 dark:border-brand/50 bg-white dark:bg-gradient-to-b dark:from-[#181c28] dark:via-[#131620] dark:to-[#0f1117] md:col-span-1 lg:col-span-1 shadow-md dark:shadow-none'
                  : 'border-slate-200 dark:border-line/70 bg-white dark:bg-gradient-to-b dark:from-[#14161f] dark:to-[#0f1116] hover:border-brand/50'
              }`}
            >
              {/* Top ambient hover line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand shadow-inner group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    {s.icon}
                  </span>
                  <span className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-700 dark:text-white/80">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-brand transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-600 dark:text-grey">{s.desc}</p>
              </div>

              <div className="mt-8 border-t border-slate-200 dark:border-line/50 pt-5">
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-lg border border-slate-200 dark:border-line/60 bg-slate-100 dark:bg-[#191c25]/80 px-2.5 py-1 text-[11.5px] font-medium text-slate-700 dark:text-white/70"
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
          <MagneticLink
            onClick={() =>
              openModal({
                title: 'Schedule Your Discovery Call',
                subtitle:
                  'A 30-minute deep-dive into your requirements, tech stack, and goals. We will be right back with a confirmation.',
              })
            }
          >
            Schedule Your Discovery Call →
          </MagneticLink>
          <span className="text-xs text-slate-500 dark:text-grey">30-min strategy session · Zero obligation</span>
        </div>
      </div>
    </section>
  );
}
