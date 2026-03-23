export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#080C0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#B8FF4A] flex items-center justify-center rotate-45">
                <span className="text-[#080C0A] font-display font-900 text-[9px] -rotate-45">IF</span>
              </div>
              <span className="font-display font-800 text-lg tracking-widest text-white">
                IRON<span className="text-[#B8FF4A]">FORGE</span>
              </span>
            </div>
            <p className="font-body text-sm text-white/35 leading-relaxed">
              Elite fitness training for people who are serious about results.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {['Instagram', 'Twitter', 'Facebook', 'YouTube'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#B8FF4A]/40 hover:text-[#B8FF4A] transition-colors text-xs font-display font-700"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Navigate',
              links: ['About Us', 'Membership Plans', 'Classes', 'Personal Training', 'Nutrition'],
            },
            {
              title: 'Resources',
              links: ['Blog', 'Transformation Stories', 'Free Workout Plans', 'FAQs', 'Careers'],
            },
            {
              title: 'Contact',
              links: ['123 Iron Street, City', 'info@ironforge.com', '+1 (555) 012-3456', 'Mon–Fri: 5am–11pm', 'Sat–Sun: 6am–9pm'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-700 text-xs tracking-[0.3em] text-[#B8FF4A] uppercase mb-5">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/35 hover:text-white/70 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/20">
            © {currentYear} IRONFORGE GYM. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
