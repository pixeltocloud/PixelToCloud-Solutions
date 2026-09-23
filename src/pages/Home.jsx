import Hero from '../components/sections/Hero'
import TrustStrip from '../components/sections/TrustStrip'
import FeaturedWork from '../components/sections/FeaturedWork'
import Services from '../components/sections/Services'
import WhyPixelToCloud from '../components/sections/WhyPixelToCloud'
import Process from '../components/sections/Process'
import Founders from '../components/sections/Founders'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import ContactSection from '../components/sections/ContactSection'
import Seo from '../components/seo/Seo'

export default function Home() {
  return (
    <div className="page-enter">
      <Seo />
      <Hero />
      <TrustStrip />
      <FeaturedWork compact />
      <Services homepage />
      <WhyPixelToCloud />
      <Process />
      <Founders />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </div>
  )
}
