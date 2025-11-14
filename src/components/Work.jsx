import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState } from 'react'

export default function Work() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const slides = 5

  const scrollTo = (i) => {
    setIndex(i)
    trackRef.current?.scrollTo({ left: i * trackRef.current.clientWidth, behavior: 'smooth' })
  }

  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Work</h2>
            <p className="text-white/70">Nuclea – Medical Learning Platform</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button className="p-2 rounded-lg bg-white/10 text-white" onClick={() => scrollTo(Math.max(0, index-1))}><ChevronLeft/></button>
            <button className="p-2 rounded-lg bg-white/10 text-white" onClick={() => scrollTo(Math.min(slides-1, index+1))}><ChevronRight/></button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-white/70">
              iPhone + Android mockups
            </div>
            <ul className="mt-4 text-white/80 text-sm grid grid-cols-2 gap-2">
              <li>• 14,000 MCQs</li>
              <li>• Live quizzes</li>
              <li>• Real-time timers</li>
              <li>• Multi-tier subscriptions</li>
              <li>• Admin dashboard</li>
              <li>• Secure payments</li>
            </ul>
          </div>

          <div className="rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="relative">
              <div ref={trackRef} className="overflow-x-hidden snap-x snap-mandatory rounded-2xl">
                <div className="flex w-full" style={{ width: '100%' }}>
                  {Array.from({ length: slides }).map((_, i) => (
                    <div key={i} className="min-w-full snap-center">
                      <div className="aspect-video rounded-2xl bg-gradient-to-br from-cyan-400/10 to-teal-400/10 border border-white/10 flex items-center justify-center text-white/70">
                        Project {i + 1} placeholder
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {Array.from({ length: slides }).map((_, i) => (
                  <button key={i} onClick={() => scrollTo(i)} className={`h-1.5 rounded-full transition-all ${index===i? 'w-6 bg-white':'w-3 bg-white/40'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
