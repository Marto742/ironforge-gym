import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Lost 24 lbs in 4 months',
    quote:
      "I've tried five different gyms. IRONFORGE is the only place where coaches actually give a damn. My trainer rewrote my whole approach — I haven't looked back since.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80',
    stars: 5,
    highlight: true,
  },
  {
    name: 'James K.',
    role: 'Added 40 lbs to his deadlift',
    quote:
      "The programming here is elite. I hit strength goals in 8 weeks I'd been chasing for 2 years. The community keeps you accountable in the best way.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80',
    stars: 5,
    highlight: false,
  },
  {
    name: 'Priya D.',
    role: 'Completed her first marathon',
    quote:
      "As a complete beginner I was nervous, but the team made me feel welcome from day one. Now I'm training for my second marathon. This place changed my life.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80',
    stars: 5,
    highlight: false,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 text-[#B8FF4A]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#0A0E0B] relative overflow-hidden">
      {/* Decorative corner accent */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-[#B8FF4A]/10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-[#B8FF4A]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#B8FF4A]" />
              <span className="font-display font-600 text-xs tracking-[0.3em] text-[#B8FF4A] uppercase">
                Real Results
              </span>
            </div>
            <h2 className="font-display font-900 text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none text-white tracking-tight">
              Members Who
              <br />
              <span className="text-gradient">Crushed It</span>
            </h2>
          </div>
          <div className="reveal delay-200 flex items-center gap-4">
            <div className="text-right">
              <div className="font-display font-900 text-3xl text-[#B8FF4A]">4.9</div>
              <Stars count={5} />
              <p className="font-body text-xs text-white/50 mt-1">240+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${(i + 1) * 100} relative p-8 border ${
                t.highlight
                  ? 'border-[#B8FF4A]/40 bg-[#B8FF4A]/5 lime-glow-sm'
                  : 'border-white/5 bg-[#0F1510]'
              }`}
            >
              {/* Quote mark (decorative SVG, so it isn't read out or contrast-checked as text) */}
              <svg
                aria-hidden="true"
                viewBox="0 0 22 14"
                fill="currentColor"
                className={`block w-6 h-5 mt-2 mb-12 ${
                  t.highlight ? 'text-[#B8FF4A]/30' : 'text-white/10'
                }`}
              >
                <path d="M2 0h6l-1 14H3zM14 0h6l-1 14h-4z" />
              </svg>

              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <p className="font-body font-300 text-white/70 text-base leading-relaxed mt-4 mb-8">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#B8FF4A]/20">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="font-display font-700 text-sm tracking-wider text-white uppercase">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-[#B8FF4A]/70">{t.role}</p>
                </div>
              </div>

              {/* Highlight accent line */}
              {t.highlight && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8FF4A]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
