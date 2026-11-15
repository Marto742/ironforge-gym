import type { Metadata } from 'next'
import { Barlow_Condensed, Barlow } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const barlow = Barlow({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IRONFORGE GYM — Get Fit. Get Strong. Get Results.',
  description:
    'Join IRONFORGE and transform your body with elite training, expert coaches, and a community that drives results. Claim your free trial today.',
  keywords: 'gym, fitness, personal training, membership, crossfit, strength training',
  openGraph: {
    title: 'IRONFORGE GYM',
    description: 'Elite fitness. Real results.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
