'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// =========================================================================
// 🚀 FUTURE WEBSITE DESIGNS: ADD YOUR NEW PROJECTS HERE!
// Simply copy-paste an object below to add more website designs and live demos.
// =========================================================================
export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'SaaS & AI' | 'Real Estate & FinTech' | 'E-Commerce & 3D';
  tag: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  demoUrl: string;
  caseStudyUrl: string;
  previewGradient: string;
  browserUrl: string;
}

const PROJECTS: ProjectItem[] = [
  {
  id: 'vizbix',
  title: 'Vizbix Profit Intelligence Platform',
  client: 'Vizbix',
  category: 'SaaS & AI',
  tag: 'ASTRO · VUE.JS · CLOUDFLARE · AI',
  description:
    'A profit intelligence and unit economics platform that reconciles ad spend, shipping, platform fees, and RTO losses to reveal true net margin per product.',
  metrics: [
    { label: 'Founders Guessing Margins', value: '68%' },
    { label: 'Time to True Net Profit', value: '2 min' },
    { label: 'Avg RTO Margin Leak', value: '23%' },
  ],
  tags: ['Astro', 'Vue.js', 'Cloudflare Workers', 'Cloudflare D1', 'Tailwind CSS'],
  demoUrl: 'https://app.vizbix.com/?demo=1',
  caseStudyUrl: 'https://www.vizbix.com/',
  previewGradient: 'from-slate-900/40 via-indigo-950/30 to-indigo-600/20',
  browserUrl: 'app.vizbix.com',
},
  {
    id: 'clearpath',
    title: 'Clearpath AI Pipeline & Web Architecture',
    client: 'Clearpath B2B Workflow Solutions',
    category: 'SaaS & AI',
    tag: 'AI AUTOMATION · NEXT.JS · CRM',
    description:
      'Autonomous B2B lead triage agent and custom SaaS marketing engine that automates lead scoring, company intelligence enrichment, and instantaneous rep routing.',
    metrics: [
      { label: 'Hours Saved Weekly', value: '28 hrs' },
      { label: 'Lead Triage SLA', value: '< 90 sec' },
      { label: 'Pipeline Lift', value: '3.4x' },
    ],
    tags: ['Custom AI Agents', 'Next.js App Router', 'REST APIs', 'CRM Integration'],
    demoUrl: 'https://knownaxis.framer.website/case-studies/saas-lead-qualification',
    caseStudyUrl: 'https://knownaxis.framer.website/case-studies/saas-lead-qualification',
    previewGradient: 'from-purple-600/30 via-indigo-600/20 to-blue-500/20',
    browserUrl: 'clearpath-workflows.demo.knownaxis.com',
  },
  {
    id: 'quantum-pay',
    title: 'QuantumPay Global FinTech & Digital Brand',
    client: 'QuantumPay Infrastructure',
    category: 'Real Estate & FinTech',
    tag: 'FINTECH · DESIGN SYSTEM · 3D',
    description:
      'Full brand design system, interactive 3D WebGL card customizer, and banking-grade marketing platform commanding enterprise institutional trust.',
    metrics: [
      { label: 'Conversion Increase', value: '+185%' },
      { label: 'LCP Core Web Vital', value: '0.42s' },
      { label: 'Security Score', value: 'A+' },
    ],
    tags: ['WebGL Shaders', 'Tailwind CSS', 'Figma Tokens', 'Stripe Architecture'],
    demoUrl: 'https://knownaxis.framer.website',
    caseStudyUrl: 'https://knownaxis.framer.website',
    previewGradient: 'from-cyan-600/30 via-blue-600/20 to-indigo-700/20',
    browserUrl: 'quantumpay.demo.knownaxis.com',
  },
  {
    id: 'luxe-atelier',
    title: 'LuxeAtelier Interactive 3D Commerce',
    client: 'Luxe Studio Co.',
    category: 'E-Commerce & 3D',
    tag: '3D COMMERCE · WEBGL · MOTION',
    description:
      'Immersive luxury e-commerce experience featuring 360-degree interactive 3D product previews, fluid micro-transitions, and sub-second checkout speeds.',
    metrics: [
      { label: 'Cart Conversion', value: '+44%' },
      { label: 'Engagement Rate', value: '6.5 min' },
      { label: 'Return Rate', value: '-32%' },
    ],
    tags: ['Three.js Canvas', 'Shopify Storefront API', 'Framer Motion', 'Tailwind'],
    demoUrl: 'https://knownaxis.framer.website',
    caseStudyUrl: 'https://knownaxis.framer.website',
    previewGradient: 'from-emerald-600/30 via-teal-600/20 to-cyan-500/20',
    browserUrl: 'luxeatelier.demo.knownaxis.com',
  },
  {
    id: 'synth-ai',
    title: 'Synthetix Autonomous Developer Platform',
    client: 'Synthetix Labs',
    category: 'SaaS & AI',
    tag: 'DEV TOOLS · SAAS · AI',
    description:
      'Developer tool marketing platform with live interactive code sandbox, dark/light theme playground, and documentation hub built for high developer adoption.',
    metrics: [
      { label: 'Signup Velocity', value: '+240%' },
      { label: 'Time to First API Call', value: '2.1 min' },
      { label: 'Organic Search', value: 'Top 3' },
    ],
    tags: ['Next.js 14', 'MDX Docs', 'TypeScript', 'AI LLM API'],
    demoUrl: 'https://knownaxis.framer.website',
    caseStudyUrl: 'https://knownaxis.framer.website',
    previewGradient: 'from-violet-600/30 via-purple-600/20 to-pink-500/20',
    browserUrl: 'synthetix-ai.demo.knownaxis.com',
  },
];

const CATEGORIES = ['All', 'SaaS & AI', 'Real Estate & FinTech', 'E-Commerce & 3D'] as const;

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Header />

      <main className="min-h-screen pt-28 sm:pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Header Section */}
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="mb-3 inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1 text-xs font-semibold tracking-widest text-brand">
              PORTFOLIO & LIVE DEMOS
            </span>
            <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Explore Our Work
            </h1>
            <p className="mt-4 text-[15.5px] sm:text-[17px] leading-relaxed text-slate-600 dark:text-grey">
              Experience live interactive demos of modern websites, 3D digital experiences, and autonomous AI systems crafted by Knownaxis. Click any project to experience the live build.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mb-12 sm:mb-16 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-brand text-white shadow-lg shadow-brand/25 scale-105'
                      : 'border border-slate-200 dark:border-line/70 bg-slate-100 dark:bg-[#14161f] text-slate-700 dark:text-grey hover:text-brand dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2" style={{ perspective: 1200 }}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{
                    y: -6,
                    rotateX: 1.5,
                    rotateY: -1.5,
                    boxShadow: '0 25px 50px -15px rgba(67, 97, 238, 0.25)',
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="group flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-line/70 bg-white dark:bg-gradient-to-b dark:from-[#151822] dark:to-[#0f1117] p-6 sm:p-8 shadow-sm dark:shadow-none hover:border-brand/60 transition-all duration-300"
                >
                  <div>
                    {/* Simulated Browser Chrome Top Bar */}
                    <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200 dark:border-line/60 bg-slate-100 dark:bg-black/40">
                      {/* Browser Header with Dots */}
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-line/40 px-4 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <span className="font-mono text-[10.5px] text-slate-500 dark:text-grey/70 truncate max-w-[200px]">
                          https://{project.browserUrl}
                        </span>
                        <div className="w-10" />
                      </div>

                      {/* Mockup Preview Area with Dynamic Gradient Artwork */}
                      <div className={`relative h-48 sm:h-56 w-full bg-gradient-to-br ${project.previewGradient} flex flex-col items-center justify-center p-6 text-center overflow-hidden`}>
                        {/* Shimmer on Hover */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <span className="mb-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                          {project.tag}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-black text-white drop-shadow-md">
                          {project.title}
                        </h4>
                        <span className="mt-2 text-xs font-medium text-white/80">
                          {project.client}
                        </span>

                        {/* Interactive "Hover to Preview" Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-opacity duration-300">
                          <span className="rounded-full bg-white px-5 py-2 text-xs font-bold text-black shadow-xl">
                            Click to Experience Demo ↗
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata & Tag */}
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-brand uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                        Live Production
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-slate-600 dark:text-grey">
                      {project.description}
                    </p>

                    {/* Metrics Strip */}
                    <div className="my-6 grid grid-cols-3 gap-2 rounded-2xl border border-slate-200 dark:border-line/60 bg-slate-50 dark:bg-black/30 p-3 text-center">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <span className="block text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                            {m.value}
                          </span>
                          <span className="mt-0.5 block text-[10px] font-medium text-slate-500 dark:text-grey">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-slate-200 dark:border-line/60 bg-slate-100 dark:bg-[#191c25] px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-white/75"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200 dark:border-line/50">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 w-full flex items-center justify-center gap-2 rounded-full bg-brand py-3 text-center text-xs sm:text-sm font-semibold text-white shadow-lg hover:bg-brand/90 transition-colors"
                    >
                      <span>Experience Live Demo</span>
                      <span>↗</span>
                    </a>
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3 rounded-full border border-slate-200 dark:border-line bg-slate-100 dark:bg-white/5 text-center text-xs sm:text-sm font-medium text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                    >
                      Case Breakdown
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* "Add Future Projects" Placeholder Card */}
            <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 dark:border-line/80 bg-slate-50/50 dark:bg-[#12141a]/40 p-8 text-center min-h-[380px]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Your Project Featured Here
              </h3>
              <p className="mt-2.5 max-w-sm text-sm text-slate-600 dark:text-grey leading-relaxed">
                Ready to elevate your company with an unmistakable digital identity, interactive 3D motion, and custom AI systems?
              </p>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-full bg-slate-900 text-white dark:bg-white dark:text-black px-7 py-3 text-sm font-semibold shadow-lg hover:shadow-brand/20 transition-all"
              >
                Schedule Your Discovery Call →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
