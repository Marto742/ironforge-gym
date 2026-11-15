'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Plans', href: '#plans' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Results', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080C0A]/95 backdrop-blur-md border-b border-white/5 pt-9 pb-3'
          : 'bg-transparent pt-11 pb-5'
      }`}
    >
      {/* Demo notice */}
      <div className="absolute top-0 left-0 right-0 bg-[#B8FF4A] text-[#080C0A] text-center font-display font-700 text-[11px] leading-4 tracking-[0.15em] sm:tracking-[0.2em] uppercase py-1 px-4 whitespace-nowrap overflow-hidden">
        <span className="sm:hidden">Demo site — not a real gym</span>
        <span className="hidden sm:inline">Demo site — concept design, not a real gym</span>
      </div>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#B8FF4A] flex items-center justify-center rotate-45 group-hover:rotate-[60deg] transition-transform duration-300">
            <span className="text-[#080C0A] font-display font-900 text-xs -rotate-45 group-hover:-rotate-[60deg] transition-transform duration-300">
              IF
            </span>
          </div>
          <span className="font-display font-800 text-xl tracking-widest text-white">
            IRON<span className="text-[#B8FF4A]">FORGE</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-display font-600 text-sm tracking-widest text-white/70 hover:text-[#B8FF4A] transition-colors duration-200 uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-[#B8FF4A] text-[#080C0A] font-display font-800 text-sm tracking-widest px-5 py-2.5 uppercase hover:bg-white transition-colors duration-200"
        >
          Free Trial
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-72 border-t border-white/5' : 'max-h-0'
        } bg-[#080C0A]/98 backdrop-blur-md`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display font-700 text-base tracking-widest text-white/80 hover:text-[#B8FF4A] transition-colors uppercase block"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block bg-[#B8FF4A] text-[#080C0A] font-display font-800 text-sm tracking-widest px-5 py-2.5 uppercase mt-2"
            >
              Free Trial
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
