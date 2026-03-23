export default function StatsBar() {
  const stats = [
    { number: '1,200+', label: 'Active Members' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '15+', label: 'Expert Trainers' },
    { number: '8', label: 'Years of Excellence' },
  ]

  return (
    <section className="relative bg-[#0F1510] border-y border-white/5 stripe-bg">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal px-8 py-4 text-center delay-${(i + 1) * 100} ${i === 0 ? 'border-l border-white/5' : ''}`}
            >
              <div className="font-display font-900 text-[clamp(2rem,4vw,3.5rem)] text-[#B8FF4A] leading-none tracking-tight">
                {stat.number}
              </div>
              <div className="font-body font-400 text-xs tracking-widest text-white/40 uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
