import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight text-white text-xl">
          <span className="bg-gradient-to-r from-white via-teal-200 to-cyan-300 bg-clip-text text-transparent">Versan</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-4 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-white text-gray-900 shadow/50 shadow-teal-500/20 hover:shadow-teal-500/40 transition-shadow">
            Start a Project
          </a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/90" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-white text-gray-900">
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
