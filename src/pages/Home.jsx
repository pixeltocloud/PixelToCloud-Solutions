import Hero from '../components/sections/Hero'
import TrustStrip from '../components/sections/TrustStrip'
import FeaturedWork from '../components/sections/FeaturedWork'
import Services from '../components/sections/Services'
import ContactSection from '../components/sections/ContactSection'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'
import Seo from '../components/seo/Seo'

export default function Home() {
  return (
    <div className="page-enter">
      <Seo />
      <Hero />
      <TrustStrip />
      <FeaturedWork compact home />
      <Services homepage limit={3} />
      <ContactSection />
      <FAQ home mode="investment" />
      <FinalCTA />
      <FAQ home mode="faq" />
    </div>
  )
}
