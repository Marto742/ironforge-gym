import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="IRONFORGE Gym Interior"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C0A] via-[#080C0A]/85 to-[#080C0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C0A] via-transparent to-[#080C0A]/30" />
      </div>

      {/* Decorative lime vertical bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#B8FF4A] z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 border border-[#B8FF4A]/30 bg-[#B8FF4A]/5 px-4 py-2 mb-8 reveal"
            style={{ animationDelay: '0s' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#B8FF4A] animate-pulse" />
            <span className="font-display font-600 text-xs tracking-[0.25em] text-[#B8FF4A] uppercase">
              Now Enrolling — Limited Spots
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-900 uppercase leading-none mb-6 reveal delay-100">
            <span className="block text-[clamp(3.5rem,8vw,7rem)] text-white tracking-tight">
              Get Fit.
            </span>{' '}
            <span className="block text-[clamp(3.5rem,8vw,7rem)] tracking-tight">
              <span className="text-gradient">Join IRONFORGE</span>
            </span>{' '}
            <span className="block text-[clamp(3.5rem,8vw,7rem)] text-white tracking-tight">
              Today.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-body font-300 text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed reveal delay-200">
            Elite coaching. Cutting-edge equipment. A community that refuses
            to quit. This is where your transformation begins — not tomorrow,
            <span className="text-white font-500"> right now.</span>
          </p>

          {/* CTA group */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 reveal delay-300">
            <a
              href="#contact"
              className="group relative bg-[#B8FF4A] text-[#080C0A] font-display font-900 text-base tracking-[0.15em] uppercase px-8 py-4 btn-pulse hover:bg-white transition-colors duration-200 flex items-center gap-3"
            >
              Claim Your Free Trial
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#plans"
              className="font-display font-700 text-sm tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
            >
              View Plans
              <svg
                className="w-4 h-4 group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Quick trust signals */}
          <div className="flex flex-wrap items-center gap-6 mt-12 reveal delay-400">
            {[
              { icon: '★', label: '4.9/5 Rating', sub: 'Google Reviews' },
              { icon: '⚡', label: 'Monthly Plans', sub: 'No Lock-in' },
              { icon: '🏋', label: 'Expert Coaches', sub: 'Certified & Trusted' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-[#B8FF4A] text-lg">{item.icon}</span>
                <div>
                  <p className="font-display font-700 text-xs tracking-wider text-white uppercase">
                    {item.label}
                  </p>
                  <p className="font-body text-xs text-white/40">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#B8FF4A] py-2 overflow-hidden">
        <div className="marquee-inner">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="font-display font-800 text-xs tracking-[0.3em] uppercase text-[#080C0A] px-8"
              >
                Free Trial Available &nbsp;•&nbsp; Expert Trainers &nbsp;•&nbsp; State-of-the-Art Equipment &nbsp;•&nbsp; Proven Results &nbsp;•&nbsp;
              </span>
            ))}
        </div>
      </div>
    </section>
  )
}
