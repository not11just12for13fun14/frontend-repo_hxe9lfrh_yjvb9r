import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background grid + noise */}
      <div className="pointer-events-none fixed inset-0 [background:radial-gradient(1000px_600px_at_50%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_500px_at_80%_120%,rgba(34,211,238,0.18),transparent)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] mix-blend-overlay" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 16 16%27%3E%3Cpath fill=%27%23ffffff%27 fill-opacity=%270.2%27 d=%27M0 0h1v1H0zM8 8h1v1H8zM0 8h1v1H0zM8 0h1v1H8zM4 4h1v1H4zM12 12h1v1h-1zM12 4h1v1h-1zM4 12h1v1H4z%27/%3E%3C/svg%3E")' }} />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="relative bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Nova Studio. All rights reserved.</p>
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
