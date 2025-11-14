import { Mail, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Thanks! We will reach out shortly.')
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Let’s build something great together</h2>
            <p className="mt-2 text-white/70">Tell us about your idea and we’ll get back within 24 hours.</p>
            <div className="mt-6 flex gap-3 text-white/80">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"><Mail size={16}/> contact@versan.studio</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"><MessageSquare size={16}/> +91-00000-00000</span>
            </div>
          </div>
          <form onSubmit={submit} className="rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-4">
              <input required placeholder="Name" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-300/40" />
              <input required type="email" placeholder="Email" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-300/40" />
              <textarea required rows={5} placeholder="Tell us about your project" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-300/40" />
              <button type="submit" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold bg-white text-gray-900 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">Send Message</button>
              {status && <p className="text-teal-200/90">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
