'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', goal: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  const goals = ['Lose Weight', 'Build Muscle', 'Improve Fitness', 'Athletic Training', 'General Health']

  return (
    <section id="contact" className="py-28 bg-[#0A0E0B] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 stripe-bg opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8FF4A]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#B8FF4A]" />
              <span className="font-display font-600 text-xs tracking-[0.3em] text-[#B8FF4A] uppercase">
                Get Started
              </span>
            </div>
            <h2 className="font-display font-900 text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none text-white tracking-tight mb-6">
              Book Your
              <br />
              <span className="text-gradient">Free Tour</span>
            </h2>
            <p className="font-body font-300 text-white/50 text-lg leading-relaxed mb-10">
              See the facility. Meet the coaches. Ask every question you have.
              Zero commitment, zero pressure — just a conversation about your goals.
            </p>

            {/* What you get */}
            <ul className="space-y-4">
              {[
                { icon: '🎯', title: 'Goals Assessment', desc: '30-min 1-on-1 with a head coach' },
                { icon: '🏋', title: 'Full Facility Tour', desc: 'See every zone and piece of equipment' },
                { icon: '📋', title: 'Custom Starter Plan', desc: 'A personalised 4-week outline' },
                { icon: '🎁', title: '7-Day Free Trial', desc: 'Train before you commit to anything' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-display font-700 text-sm tracking-wider text-white uppercase">
                      {item.title}
                    </p>
                    <p className="font-body text-xs text-white/40 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="reveal delay-200">
            {submitted ? (
              <div className="border border-[#B8FF4A]/40 bg-[#B8FF4A]/5 p-10 text-center lime-glow-sm">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="font-display font-900 text-2xl uppercase text-[#B8FF4A] tracking-wide mb-2">
                  You're In!
                </h3>
                <p className="font-body text-white/60 text-base leading-relaxed">
                  We'll reach out within 24 hours to schedule your free tour.
                  Get ready to start your journey.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-white/5 bg-[#0F1510] p-8 space-y-5"
              >
                <h3 className="font-display font-800 text-xl uppercase tracking-widest text-white mb-6">
                  Reserve Your Spot
                </h3>

                {/* Name */}
                <div>
                  <label className="block font-display font-600 text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full bg-white/5 border border-white/10 text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-[#B8FF4A]/50 placeholder:text-white/20 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-display font-600 text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full bg-white/5 border border-white/10 text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-[#B8FF4A]/50 placeholder:text-white/20 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-display font-600 text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/5 border border-white/10 text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-[#B8FF4A]/50 placeholder:text-white/20 transition-colors"
                  />
                </div>

                {/* Goal */}
                <div>
                  <label className="block font-display font-600 text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">
                    Primary Goal
                  </label>
                  <select
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value })}
                    className="w-full bg-[#0A0E0B] border border-white/10 text-white/70 font-body text-sm px-4 py-3 focus:outline-none focus:border-[#B8FF4A]/50 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select your goal</option>
                    {goals.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#B8FF4A] text-[#080C0A] font-display font-900 text-sm tracking-[0.2em] uppercase py-4 hover:bg-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2 btn-pulse"
                >
                  {loading ? 'Sending...' : 'Book Your Free Tour →'}
                </button>

                <p className="font-body text-[11px] text-white/25 text-center leading-relaxed">
                  No spam. No commitment. We'll only contact you about your tour.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
