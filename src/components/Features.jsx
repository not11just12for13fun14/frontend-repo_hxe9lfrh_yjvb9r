import { motion } from 'framer-motion'
import { Sparkles, Layout, PenTool, Boxes, Rocket, Shield } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Brand & Identity',
    desc: 'Narratives, naming, and visual systems that scale across every touchpoint.'
  },
  {
    icon: Layout,
    title: 'Product & Web',
    desc: 'Interfaces engineered for delight, performance, and measurable outcomes.'
  },
  {
    icon: PenTool,
    title: 'Content & Motion',
    desc: 'Art direction, 3D, and motion to make your story unforgettable.'
  },
  {
    icon: Boxes,
    title: 'Systems & Ops',
    desc: 'Design systems, workflow automation, and documentation that teams love.'
  },
  {
    icon: Rocket,
    title: 'Venture Design',
    desc: 'Zero-to-one sprints, investor decks, and rapid validation with AI.'
  },
  {
    icon: Shield,
    title: 'Enterprise',
    desc: 'Secure, accessible, and compliant experiences at scale.'
  }
]

export default function Features() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white"
            >
              Capabilities built for momentum
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-slate-300 text-lg max-w-2xl"
            >
              End-to-end design and engineering. Flexible engagement models. Senior hands on every file.
            </motion.p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl transition-opacity group-hover:opacity-70" />
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  <p className="mt-1 text-slate-300/90">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
