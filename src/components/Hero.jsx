import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-20 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,255,255,0.2)_0%,rgba(0,0,0,0)_60%)]" />

      <div className="absolute inset-0 opacity-30">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center text-xs uppercase tracking-widest text-teal-200/80 bg-white/10 border border-white/10 rounded-full px-3 py-1 backdrop-blur">
            Premium App Studio
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            We build powerful mobile apps that scale
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            Founded by Kaushal Jogi & Pranav Jogi — Specialists in full-stack React Native, Firebase, and AI-powered apps.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold bg-white text-gray-900 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
              Start a Project
            </a>
            <a href="#work" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-500/20 to-teal-400/20 text-teal-200 border border-teal-300/30 hover:from-cyan-500/30 hover:to-teal-400/30">
              View Work
            </a>
          </div>
        </div>
        <div className="relative h-[380px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
