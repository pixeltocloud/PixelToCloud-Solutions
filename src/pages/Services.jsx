import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Pillars from '../components/sections/Pillars'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'
import Marquee from '../components/sections/Marquee'
import Seo from '../components/seo/Seo'
import './PageHero.css'

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <Seo />
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">Services</p>
          <h1>Engineering studio services for websites that work</h1>
          <p>
            Every project is an architectural engagement—bespoke software, growth systems, and automation with 100%
            source-code ownership.
          </p>
        </div>
      </section>
      <Marquee />
      <Pillars />
      <Services detailed />
      <Process />
      <FAQ />
      <FinalCTA />
    </div>
  )
}
