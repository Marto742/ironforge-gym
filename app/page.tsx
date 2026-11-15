import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import MembershipPlans from '@/components/MembershipPlans'
import Testimonials from '@/components/Testimonials'
import Trainers from '@/components/Trainers'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main id="top" className="relative">
      <Navbar />
      <Hero />
      <StatsBar />
      <MembershipPlans />
      <Testimonials />
      <Trainers />
      <ContactForm />
      <Footer />
      <ScrollReveal />
    </main>
  )
}
