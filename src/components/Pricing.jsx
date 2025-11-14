const tiers = [
  {
    name: 'Basic',
    price: '$4,999',
    features: ['MVP React Native app', 'Firebase setup', 'Payments (1 provider)', '2 weeks support'],
  },
  {
    name: 'Standard',
    price: '$9,999',
    features: ['Full app + backend', 'Auth + subscriptions', 'Admin dashboard', '1 month support'],
  },
  {
    name: 'Premium',
    price: '$19,999',
    features: ['AI features', 'Scalable architecture', 'CI/CD + QA', '3 months support'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={t.name} className={`relative rounded-3xl p-6 bg-white/5 border backdrop-blur-xl ${i===1? 'border-teal-300/40':'border-white/10'}`}>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              <div className="relative">
                <h3 className="text-white font-semibold text-lg">{t.name}</h3>
                <p className="mt-2 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-teal-200">{t.price}</p>
                <ul className="mt-4 text-white/80 text-sm space-y-2">
                  {t.features.map(f => <li key={f}>• {f}</li>)}
                </ul>
                <a href="#contact" className={`mt-6 inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold ${i===1? 'bg-white text-gray-900 shadow-lg shadow-cyan-500/20':'bg-gradient-to-r from-cyan-500/20 to-teal-400/20 text-teal-200 border border-teal-300/30'}`}>
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
