import { Smartphone, Database, CreditCard, Bot, LayoutDashboard, Rocket } from 'lucide-react'

const items = [
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Production-grade iOS & Android with React Native.' },
  { icon: Database, title: 'Firebase Backend', desc: 'Auth, Firestore, Functions, Storage, FCM.' },
  { icon: CreditCard, title: 'Payments Integration', desc: 'Subscriptions, one-time payments, Stripe & Razorpay.' },
  { icon: Bot, title: 'AI Features', desc: 'Chatbots, recommendations, semantic search, RAG.' },
  { icon: LayoutDashboard, title: 'Admin Dashboard', desc: 'Role-based dashboards, analytics, approvals.' },
  { icon: Rocket, title: 'Idea → Launch', desc: 'MVP to 1.0 with CI/CD, QA, and store publishing.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl transition-transform hover:-translate-y-1 hover:bg-white/7">
              <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-400/30 to-teal-400/30 border border-white/20 text-teal-200">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-white/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
