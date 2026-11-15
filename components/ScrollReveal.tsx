'use client'
import { useEffect } from 'react'

// Content is visible by default, so the first screen paints immediately without
// waiting for JS (important for PageSpeed/LCP on phones). After hydration, only
// elements that are still off-screen get hidden, then revealed on scroll.
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal, .reveal-left').forEach((el) => {
      const rect = el.getBoundingClientRect()
      const onScreen = rect.top < window.innerHeight && rect.bottom > 0
      if (onScreen) return
      el.classList.add('reveal-hidden')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
