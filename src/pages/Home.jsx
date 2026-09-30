import Hero from '../components/sections/Hero'
import ClientMarquee from '../components/sections/ClientMarquee'
import LiveWork from '../components/sections/LiveWork'
import SolutionsGrid from '../components/sections/SolutionsGrid'
import ContactSection from '../components/sections/ContactSection'
import Seo from '../components/seo/Seo'

export default function Home() {
  return (
    <div className="page-enter">
      <Seo />
      <Hero />
      <ClientMarquee />
      <LiveWork />
      <SolutionsGrid />
      <ContactSection />
    </div>
  )
}
