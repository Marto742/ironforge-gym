export default function Footer() {
  const currentYear = new Date().getFullYear()

  const columns = [
    {
      title: 'Navigate',
      links: [
        { label: 'Membership Plans', href: '#plans' },
        { label: 'Trainers', href: '#trainers' },
        { label: 'Results', href: '#testimonials' },
        { label: 'Book a Free Tour', href: '#contact' },
      ],
    },
    {
      title: 'Opening Hours',
      links: [
        { label: 'Mon–Fri: 5am–11pm' },
        { label: 'Sat–Sun: 6am–9pm' },
      ],
    },
  ]

  return (
    <footer className="bg-[#080C0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#B8FF4A] flex items-center justify-center rotate-45">
                <span className="text-[#080C0A] font-display font-900 text-[9px] -rotate-45">IF</span>
              </div>
              <span className="font-display font-800 text-lg tracking-widest text-white">
                IRON<span className="text-[#B8FF4A]">FORGE</span>
              </span>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed max-w-sm">
              Elite fitness training for people who are serious about results.
            </p>
          </div>

          {/* Links */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-700 text-xs tracking-[0.3em] text-[#B8FF4A] uppercase mb-5">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label} className="font-body text-sm text-white/50">
                    {'href' in link ? (
                      <a href={link.href} className="hover:text-white/70 transition-colors">
                        {link.label}
                      </a>
                    ) : (
                      link.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/50">
            © {currentYear} IRONFORGE GYM. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/50">
            Demo project — concept design, not a real gym.
          </p>
        </div>
      </div>
    </footer>
  )
}
