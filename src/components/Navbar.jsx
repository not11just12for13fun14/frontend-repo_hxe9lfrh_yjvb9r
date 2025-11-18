import { useState } from 'react'
import { Menu, X, Zap, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const LinkItem = ({ children }) => (
    <a href="#" className="text-sm text-slate-200/90 hover:text-white transition-colors">
      {children}
    </a>
  )

  return (
    <div className="relative z-50">
      <div className="fixed top-0 left-0 right-0">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4">
              <a href="/" className="group inline-flex items-center gap-2">
                <div className="relative">
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-white shadow-[0_0_30px_rgba(99,102,241,0.6)]"
                  >
                    <Zap className="h-5 w-5" />
                  </motion.span>
                  <Sparkles className="absolute -right-2 -top-2 h-4 w-4 text-fuchsia-400" />
                </div>
                <span className="text-white/90 font-semibold tracking-tight text-lg">Nova Studio</span>
              </a>

              <div className="hidden md:flex items-center gap-8">
                <LinkItem>Work</LinkItem>
                <LinkItem>Services</LinkItem>
                <LinkItem>About</LinkItem>
                <LinkItem>Contact</LinkItem>
                <a href="#" className="group relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/90 hover:text-white overflow-hidden">
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-fuchsia-500/30 to-cyan-400/30 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                  <span className="relative">Start a project</span>
                </a>
              </div>

              <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white/90">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mx-auto max-w-7xl px-6"
            >
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl px-6 py-4 md:hidden">
                <div className="grid gap-3">
                  {['Work','Services','About','Contact'].map((item) => (
                    <a key={item} href="#" className="rounded-xl px-3 py-2 text-slate-200/90 hover:text-white hover:bg-white/5">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
