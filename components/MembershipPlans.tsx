const plans = [
  {
    name: 'Starter',
    price: '29',
    period: '/mo',
    tagline: 'Build your foundation',
    features: [
      'Full gym access (6am–10pm)',
      '2 group classes / week',
      'Locker room access',
      'Fitness assessment',
      'App access & tracking',
    ],
    cta: 'Start Here',
    popular: false,
    accent: 'border-white/10',
  },
  {
    name: 'Performance',
    price: '59',
    period: '/mo',
    tagline: 'For those who are serious',
    features: [
      'Unlimited gym access (24/7)',
      'Unlimited group classes',
      'Monthly PT session (1hr)',
      'Nutrition guidance',
      'Priority equipment booking',
      'Guest passes (2/mo)',
    ],
    cta: 'Claim Your Spot',
    popular: true,
    accent: 'border-[#B8FF4A]',
  },
  {
    name: 'Elite',
    price: '99',
    period: '/mo',
    tagline: 'Train like a professional',
    features: [
      'Everything in Performance',
      'Weekly PT sessions (4/mo)',
      'Custom meal plan',
      'Body composition scans',
      'Recovery room access',
      'Unlimited guest passes',
    ],
    cta: 'Go Elite',
    popular: false,
    accent: 'border-white/10',
  },
  {
    name: 'Annual',
    price: '39',
    period: '/mo',
    tagline: 'Best value — billed yearly',
    badge: 'Save 34%',
    features: [
      'Everything in Performance',
      'Annual commitment discount',
      'Free IRONFORGE gear kit',
      'Priority class booking',
      '2 free PT sessions',
    ],
    cta: 'Lock In Savings',
    popular: false,
    accent: 'border-white/10',
  },
]

export default function MembershipPlans() {
  return (
    <section id="plans" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B8FF4A]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#B8FF4A]" />
            <span className="font-display font-600 text-xs tracking-[0.3em] text-[#B8FF4A] uppercase">
              Membership Plans
            </span>
          </div>
          <h2 className="font-display font-900 text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none text-white tracking-tight">
            Choose Your
            <br />
            <span className="text-gradient">Combat Level</span>
          </h2>
          <p className="font-body font-300 text-white/50 text-lg mt-4 max-w-lg">
            No hidden fees. Cancel monthly plans anytime, or commit to a year
            and save 34%.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`plan-card reveal delay-${(i + 1) * 100} relative border ${plan.accent} ${
                plan.popular
                  ? 'bg-[#B8FF4A]/5 lime-glow-sm'
                  : 'bg-[#0F1510]'
              } p-6 flex flex-col`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8FF4A] text-[#080C0A] font-display font-900 text-[10px] tracking-[0.25em] uppercase px-4 py-1">
                  Most Popular
                </div>
              )}
              {plan.badge && (
                <div className="absolute -top-3 right-4 bg-white/10 text-white font-display font-700 text-[10px] tracking-[0.2em] uppercase px-3 py-1 border border-white/20">
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3
                  className={`font-display font-800 text-xl tracking-widest uppercase ${
                    plan.popular ? 'text-[#B8FF4A]' : 'text-white/80'
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="font-body text-xs text-white/50 mt-1">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-6 pb-6 border-b border-white/5">
                <span className="font-display font-900 text-[3rem] leading-none text-white">
                  ${plan.price}
                </span>
                <span className="font-body text-white/50 text-sm mb-2">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-[#B8FF4A] mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body text-sm text-white/60 leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center font-display font-800 text-sm tracking-[0.15em] uppercase py-3.5 transition-all duration-200 ${
                  plan.popular
                    ? 'bg-[#B8FF4A] text-[#080C0A] hover:bg-white'
                    : 'border border-white/20 text-white/70 hover:border-[#B8FF4A] hover:text-[#B8FF4A]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center font-body text-xs text-white/50 mt-8 tracking-wider reveal delay-500">
          All plans include a 7-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  )
}
