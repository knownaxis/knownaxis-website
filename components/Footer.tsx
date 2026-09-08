'use client';
import { motion } from 'framer-motion';
import KnownaxisLogo from './KnownaxisLogo';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-slate-200 dark:border-line/40 bg-slate-50 dark:bg-[#07080b] pt-16 sm:pt-20 text-slate-700 dark:text-[#cfd0d4] overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-96 w-full max-w-5xl bg-brand/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Pre-Footer Conversion Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 sm:mb-24 overflow-hidden rounded-3xl border border-brand/50 bg-gradient-to-br from-[#161a28] via-[#11131c] to-[#0b0c10] p-6 sm:p-10 md:p-16 text-center shadow-2xl"
        >
          {/* Subtle top glare */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />

          {/* Availability Pill */}
          <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Accepting 2 New Projects for Q3 · 48h SLA Response
          </div>

          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,5vw,3.6rem)] font-extrabold tracking-tight text-white leading-tight">
            Ready to make your website{' '}
            <span className="bg-gradient-to-r from-white via-indigo-100 to-brand bg-clip-text text-transparent">
              truly known?
            </span>
          </h2>

          <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-[14.5px] sm:text-[16px] text-white/80 leading-relaxed">
            Stop losing qualified prospects to uninspired web experiences. Partner with Knownaxis to architect a distinctive digital identity that converts.
          </p>

          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 sm:py-4 text-[14.5px] sm:text-[15px] font-semibold text-black shadow-xl hover:bg-white/90 transition-colors"
            >
              Start Your Project →
            </motion.a>

            <a
              href="/work"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 sm:py-4 text-[14px] sm:text-[14.5px] font-medium text-white hover:bg-white/20 transition-colors"
            >
              Explore Our Work
            </a>
          </div>
        </motion.div>

        {/* Footer Navigation Columns */}
        <div className="grid gap-10 border-b border-slate-200 dark:border-line/50 pb-12 sm:pb-16 grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center text-slate-900 dark:text-white">
              <KnownaxisLogo className="h-6 sm:h-7 w-auto" />
            </div>
            <p className="max-w-sm text-[13px] sm:text-[13.5px] leading-relaxed text-slate-600 dark:text-[#8a8c92]">
              Architecting memorable digital brands, interactive 3D web applications, and autonomous AI systems that save 25+ hours weekly and scale business output.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1 text-[11px] text-slate-700 dark:text-grey">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>All Systems Operational</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Capabilities</h4>
            <div className="flex flex-col gap-2.5 text-[13.5px] text-slate-600 dark:text-[#8a8c92]">
              <a href="/#services" className="hover:text-brand dark:hover:text-white transition-colors">3D Web Engineering</a>
              <a href="/#services" className="hover:text-brand dark:hover:text-white transition-colors">Brand Identity & UI/UX</a>
              <a href="/#services" className="hover:text-brand dark:hover:text-white transition-colors">Custom AI Automation</a>
              <a href="/#services" className="hover:text-brand dark:hover:text-white transition-colors">Conversion Optimization</a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Company</h4>
            <div className="flex flex-col gap-2.5 text-[13.5px] text-slate-600 dark:text-[#8a8c92]">
              <a href="/#about" className="hover:text-brand dark:hover:text-white transition-colors">About Us</a>
              <a href="/#services" className="hover:text-brand dark:hover:text-white transition-colors">Services</a>
              <a href="/#process" className="hover:text-brand dark:hover:text-white transition-colors">Our Process</a>
              <a href="/work" className="hover:text-brand dark:hover:text-white transition-colors">Our Work</a>
              <a href="/#faq" className="hover:text-brand dark:hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Legal & Connect</h4>
            <div className="flex flex-col gap-2.5 text-[13.5px] text-slate-600 dark:text-[#8a8c92]">
              <a href="https://knownaxis.framer.website/legals/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-brand dark:hover:text-white transition-colors">Privacy Policy</a>
              <a href="https://knownaxis.framer.website/legals/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-brand dark:hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:info@knownaxis.com" className="hover:text-brand dark:hover:text-white transition-colors">info@knownaxis.com</a>
            </div>
          </div>
        </div>

        {/* Copyright & Social Row */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-[12.5px] text-slate-500 dark:text-[#6f7178] md:flex-row">
          <span>© {new Date().getFullYear()} Knownaxis. Built for ambitious founders and leaders.</span>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/knownaxis/" target="_blank" rel="noopener noreferrer" className="hover:text-brand dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/knownaxis/" target="_blank" rel="noopener noreferrer" className="hover:text-brand dark:hover:text-white transition-colors">Instagram</a>
            <a href="https://x.com/KnownAxis" target="_blank" rel="noopener noreferrer" className="hover:text-brand dark:hover:text-white transition-colors">X</a>
            <a href="hhttps://in.pinterest.com/knownaxis/" target="_blank" rel="noopener noreferrer" className="hover:text-brand dark:hover:text-white transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
