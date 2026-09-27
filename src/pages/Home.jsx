import Hero from '../components/sections/Hero'
import HeroShowcase from '../components/sections/HeroShowcase'
import WhoWeServe from '../components/sections/WhoWeServe'
import SolutionsGrid from '../components/sections/SolutionsGrid'
import ContactSection from '../components/sections/ContactSection'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'
import Seo from '../components/seo/Seo'

export default function Home() {
  return (
    <div className="page-enter">
      <Seo />
      <Hero />
      <HeroShowcase />
      <WhoWeServe />
      <SolutionsGrid />
      <ContactSection />
      <FAQ home mode="investment" />
      <FinalCTA />
      <FAQ home mode="faq" />
    </div>
  )
}
