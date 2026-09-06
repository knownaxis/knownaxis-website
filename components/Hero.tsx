'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef } from 'react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function Hero() {
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const bgX = useTransform(mvX, (v) => v * 30);
  const bgY = useTransform(mvY, (v) => v * 20);
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    animate(mvX, x, { duration: 0.6 });
    animate(mvY, y, { duration: 0.6 });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden px-6 pb-20 pt-28 text-center"
    >
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, #d7dcff 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 20%, #cfe0ff 0%, transparent 60%)',
          }}
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-2xl"
      >
        <motion.span variants={item} className="mb-4 inline-block text-xs font-semibold tracking-widest text-brand">
          DESIGN · DEVELOP · GROW
        </motion.span>
        <motion.h1 variants={item} className="text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-tight tracking-tight">
          Make your website
          <br />
          Known to your customers.
        </motion.h1>
        <motion.p variants={item} className="mx-auto mt-5 max-w-lg text-[17px] text-grey">
          Let your customers recognize your brand at every digital touchpoint. With
          Knownaxis, we help you build a distinctive digital identity that people
          remember, trust, and connect with.
        </motion.p>
        <motion.p variants={item} className="mt-3 text-sm text-grey">
          Custom AI systems and workflows designed to scale your business. Save 25+
          hours every week and 3x your output.
        </motion.p>
        <motion.div variants={item} className="mt-8">
          <MagneticLink href="https://cal.com">Start your project →</MagneticLink>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function MagneticLink({ href, children }: { href: string; children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const handleLeave = () => {
    animate(x, 0, { type: 'spring', stiffness: 200, damping: 12 });
    animate(y, 0, { type: 'spring', stiffness: 200, damping: 12 });
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.03 }}
      className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[14.5px] font-medium text-white shadow-lg"
    >
      {children}
    </motion.a>
  );
}
