import Hero from '../components/sections/Hero'
import Marquee from '../components/sections/Marquee'
import TrustStrip from '../components/sections/TrustStrip'
import FeaturedWork from '../components/sections/FeaturedWork'
import Services from '../components/sections/Services'
import WhyPixelToCloud from '../components/sections/WhyPixelToCloud'
import Process from '../components/sections/Process'
import Pillars from '../components/sections/Pillars'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import ContactSection from '../components/sections/ContactSection'
import FinalCTA from '../components/sections/FinalCTA'
import Seo from '../components/seo/Seo'

export default function Home() {
  return (
    <div className="page-enter">
      <Seo />
      <Hero />
      <Marquee />
      <TrustStrip />
      <FeaturedWork compact />
      <Pillars />
      <Services homepage />
      <WhyPixelToCloud />
      <Process />
      <Marquee reverse />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </div>
  )
}
