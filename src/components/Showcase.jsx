import { motion } from 'framer-motion'

const projects = [
  {
    title: 'OrbitAI',
    tag: 'SaaS Platform',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Vanta',
    tag: 'Brand System',
    img: 'https://images.unsplash.com/photo-1541491000476-9eac1b17a1c5?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Pulse',
    tag: 'Mobile App',
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop'
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Selected Work</h2>
            <p className="mt-2 text-slate-300">A snapshot of partnerships we’re proud of.</p>
          </div>
          <a className="text-slate-300 hover:text-white" href="#">View all →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs uppercase tracking-wider text-slate-300/80">{p.tag}</div>
                <div className="text-white text-xl font-semibold">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
