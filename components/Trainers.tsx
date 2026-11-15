import Image from 'next/image'

const trainers = [
  {
    name: 'Marcus Reed',
    title: 'Head Coach & Strength Lead',
    specializations: ['Powerlifting', 'Muscle Hypertrophy', 'Athletic Performance'],
    bio: '12 years coaching elite athletes. NSCA certified. Former national-level powerlifter who now dedicates his craft to helping everyday people build extraordinary strength.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=700&fit=crop&q=80',
    stat: '500+ clients transformed',
    cert: 'NSCA-CSCS',
  },
  {
    name: 'Leila Santos',
    title: 'Cardio & Mobility Specialist',
    specializations: ['HIIT Training', 'Yoga & Mobility', 'Weight Loss'],
    bio: 'Former competitive sprinter turned fitness coach. ACE certified with a passion for helping clients move better, feel better, and live longer.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=700&fit=crop&q=80',
    stat: '200+ marathon finishers',
    cert: 'ACE-CPT',
  },
  {
    name: 'Dom Achebe',
    title: 'Nutrition & Body Comp Coach',
    specializations: ['Body Recomposition', 'Sports Nutrition', 'Macro Coaching'],
    bio: 'Registered nutritionist & personal trainer with a dual expertise in physique transformation. Has helped over 300 clients achieve their ideal body composition.',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&h=700&fit=crop&q=80',
    stat: '300+ body transformations',
    cert: 'ISSA-SN',
  },
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#B8FF4A]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#B8FF4A]" />
            <span className="font-display font-600 text-xs tracking-[0.3em] text-[#B8FF4A] uppercase">
              Meet the Team
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display font-900 text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none text-white tracking-tight">
              Expert Coaches.
              <br />
              <span className="text-gradient">Real Results.</span>
            </h2>
            <p className="font-body font-300 text-white/50 text-base max-w-xs md:text-right leading-relaxed">
              Every trainer is certified, experienced, and fully committed to your success.
            </p>
          </div>
        </div>

        {/* Trainers grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainers.map((trainer, i) => (
            <div
              key={trainer.name}
              className={`reveal delay-${(i + 1) * 100} group relative overflow-hidden bg-[#0F1510] border border-white/5 hover:border-[#B8FF4A]/30 transition-all duration-300`}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1510] via-transparent to-transparent" />

                {/* Cert badge */}
                <div className="absolute top-4 right-4 bg-[#B8FF4A] text-[#080C0A] font-display font-800 text-[10px] tracking-[0.2em] uppercase px-2.5 py-1">
                  {trainer.cert}
                </div>

                {/* Stat */}
                <div className="absolute bottom-4 left-4">
                  <p className="font-display font-800 text-xs tracking-[0.15em] text-[#B8FF4A] uppercase">
                    {trainer.stat}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-display font-800 text-xl tracking-wide uppercase text-white">
                  {trainer.name}
                </h3>
                <p className="font-body text-xs text-[#B8FF4A]/70 mt-0.5 mb-4">{trainer.title}</p>

                {/* Specializations */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="font-body text-[10px] text-white/50 border border-white/10 px-2.5 py-1 uppercase tracking-wider"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <p className="font-body font-300 text-sm text-white/50 leading-relaxed">{trainer.bio}</p>

                {/* Book CTA */}
                <a
                  href="#contact"
                  className="mt-5 flex items-center gap-2 font-display font-700 text-xs tracking-[0.2em] uppercase text-white/50 hover:text-[#B8FF4A] transition-colors group/link"
                >
                  Book a session
                  <svg
                    className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
