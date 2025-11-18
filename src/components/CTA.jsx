import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 md:p-14 backdrop-blur-xl overflow-hidden">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
              >
                Let’s build something unforgettable
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                className="mt-3 text-slate-300"
              >
                Tell us about your goals. We’ll shape a path and assemble the right team.
              </motion.p>
            </div>

            <form className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Name" />
                <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Email" />
              </div>
              <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Company" />
              <textarea rows="4" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="What are you building?" />
              <button className="group relative inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-white">
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/40 to-cyan-400/40 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                <span className="relative">Request proposal</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
