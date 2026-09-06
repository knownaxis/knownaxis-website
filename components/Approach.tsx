'use client';
import { motion } from 'framer-motion';

const pains = [
  { icon: '!', title: 'Your brand feels inconsistent', body: "Your website, visuals, and social presence don't feel like the same brand." },
  { icon: '?', title: "Your website isn't doing enough", body: "Visitors arrive, but the experience doesn't guide them toward taking action." },
  { icon: '⟲', title: 'Your digital presence feels scattered', body: 'Design, development, content, and marketing are handled separately.' },
  { icon: '◔', title: "You're struggling to stand out", body: 'A crowded digital space makes it harder for your brand to be remembered.' },
  { icon: '◌', title: "You don't know what to improve next", body: 'Without the right strategy, growth becomes a lot of guesswork.' },
];

const solutions = [
  { icon: '◐', title: 'Better Experiences', body: 'Thoughtful UI/UX designed around your users and business goals.' },
  { icon: '⚙', title: 'Reliable Technology', body: 'Fast, responsive websites and digital products built to perform.' },
  { icon: '✦', title: 'Distinctive Identity', body: 'A clear visual and digital identity that makes your brand recognizable.' },
  { icon: '◎', title: 'Consistent Presence', body: 'Content and social media that keep your brand active and recognizable.' },
  { icon: '↗', title: 'Built for Growth', body: 'Digital solutions designed to evolve as your business grows.' },
  { icon: '◑', title: 'One Connected Partner', body: 'Design, development, content, and digital growth working together.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export default function Approach() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-xl text-center"
        >
          <span className="mb-3 block text-xs font-semibold tracking-widest text-brand">OUR APPROACH</span>
          <h2 className="text-[clamp(1.7rem,3.4vw,2.4rem)] font-semibold tracking-tight">
            From Being Seen to Being Known
          </h2>
          <p className="mt-3 text-[15.5px] text-grey">
            Your brand shouldn&apos;t just exist online. It should be seen, remembered, and built to grow.
          </p>
        </motion.div>

        <div className="grid gap-14 md:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-6">
            {pains.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex gap-4"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm text-brand">
                  {p.icon}
                </span>
                <div>
                  <h4 className="text-[14.5px] font-semibold">{p.title}</h4>
                  <p className="text-[13.5px] text-grey">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-line bg-white p-5 shadow-sm transition-shadow hover:shadow-xl"
              >
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-[15px] text-brand">
                  {s.icon}
                </span>
                <h4 className="text-[14.5px] font-semibold">{s.title}</h4>
                <p className="text-[13px] text-grey">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
