import { Award, Briefcase, Cpu } from 'lucide-react'

function FounderCard({ name, role, bio }) {
  return (
    <div className="relative rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      <div className="relative flex items-start gap-4">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-teal-400/30 border border-white/20" />
        <div>
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <p className="text-white/70 text-sm">{role}</p>
        </div>
      </div>
      <p className="relative mt-4 text-white/80 text-sm leading-relaxed">
        {bio}
      </p>
      <div className="relative mt-5 grid grid-cols-3 gap-3 text-xs text-white/80">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-2 py-1"><Award size={14}/> 6+ yrs</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-2 py-1"><Briefcase size={14}/> 25+ apps</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-2 py-1"><Cpu size={14}/> RN • Firebase • AI</span>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <FounderCard 
            name="Kaushal Jogi" 
            role="Co-founder, Full-stack Engineer"
            bio="Designs robust mobile experiences with a love for performance, realtime sync, and pixel-perfect UI."/>
          <FounderCard 
            name="Pranav Jogi" 
            role="Co-founder, Product & AI"
            bio="Builds data-driven features, AI copilots, and subscription systems that delight users and scale."/>
        </div>
      </div>
    </section>
  )
}
