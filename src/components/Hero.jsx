import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950">
      {/* Glow gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.25),transparent_60%)] blur-2xl" />
      </div>

      {/* Spline scene */}
      <div className="relative h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 -mt-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              We design futures for bold brands
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl"
            >
              A design and engineering studio crafting immersive products, identities, and experiences at the edge of what’s possible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-white">
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/40 to-cyan-400/40 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                <span className="relative">Start your project</span>
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-slate-200 hover:text-white">
                See our work →
              </a>
            </motion.div>

            {/* Dynamic ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg"
            >
              <div className="flex whitespace-nowrap">
                <div className="animate-[ticker_22s_linear_infinite] py-3 text-slate-300/90">
                  <span className="mx-6">Brand Strategy</span>
                  <span className="mx-6">Product Design</span>
                  <span className="mx-6">Web Experience</span>
                  <span className="mx-6">3D & Motion</span>
                  <span className="mx-6">AI Prototyping</span>
                  <span className="mx-6">Design Systems</span>
                  <span className="mx-6">Creative Dev</span>
                </div>
                <div className="animate-[ticker_22s_linear_infinite] py-3 text-slate-300/90" aria-hidden>
                  <span className="mx-6">Brand Strategy</span>
                  <span className="mx-6">Product Design</span>
                  <span className="mx-6">Web Experience</span>
                  <span className="mx-6">3D & Motion</span>
                  <span className="mx-6">AI Prototyping</span>
                  <span className="mx-6">Design Systems</span>
                  <span className="mx-6">Creative Dev</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-xl"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { k: '10+', v: 'Years' },
                  { k: '120+', v: 'Projects' },
                  { k: '24', v: 'Awards' },
                ].map((item) => (
                  <div key={item.k} className="rounded-xl bg-white/5 p-4">
                    <div className="text-3xl font-semibold text-white">{item.k}</div>
                    <div className="text-xs uppercase tracking-wider text-slate-300">{item.v}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>
        {`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}
      </style>
    </section>
  )
}
