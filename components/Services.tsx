'use client';
import { motion } from 'framer-motion';
import { MagneticLink } from './Hero';

const services = [
  { tag: 'DESIGN & BRANDING', icon: '◐', title: 'Branding · Visual Identity · UI/UX Design', body: 'Build a recognizable identity and digital experience around your brand.' },
  { tag: 'WEB DEVELOPMENT', icon: '⌘', title: 'Frontend · Backend · Web Apps', body: 'From landing pages to custom web applications, we build digital products that work.' },
  { tag: 'SEO & DIGITAL GROWTH', icon: '▲', title: 'SEO · Analytics · Conversion Optimization', body: 'Help the right people discover your business and turn attention into growth.' },
  { tag: 'SOCIAL MEDIA & CONTENT', icon: '✉', title: 'Social Media · Reels · UGC · Content Creation', body: 'Create a consistent digital presence that keeps your brand visible and engaging.' },
  { tag: 'ADDITIONAL · DATA & ANALYTICS', icon: '◔', title: 'Data Analysis · Business Insights · Reporting', body: 'Turn your business data into clear insights that help you make better decisions.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 grid items-end gap-10 md:grid-cols-2">
          <div>
            <span className="mb-3 block text-xs font-semibold tracking-widest text-brand">SERVICES</span>
            <h2 className="max-w-sm text-[clamp(1.7rem,3.4vw,2.4rem)] font-semibold tracking-tight">
              Everything your brand needs to grow online.
            </h2>
          </div>
          <p className="text-[15px] text-grey">
            From creating your identity to building your digital presence, we bring
            design, technology, and growth together in one place.
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ x: 4 }}
              className="grid gap-6 rounded-2xl border border-line bg-white p-7 transition-colors hover:border-ink md:grid-cols-[1fr_1.3fr] md:items-center"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-soft text-lg text-brand">
                  {s.icon}
                </span>
                <div>
                  <div className="mb-0.5 text-[11px] text-grey">{s.tag}</div>
                  <h4 className="text-[15px] font-semibold">{s.title}</h4>
                </div>
              </div>
              <p className="text-[13.5px] text-grey">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <MagneticLink href="https://cal.com">Start your project →</MagneticLink>
        </div>
      </div>
    </section>
  );
}
