import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'
import Seo from '../components/seo/Seo'
import './PageHero.css'

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <Seo />
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">Services</p>
          <h1>Websites, applications, and the infrastructure behind them</h1>
          <p>
            Clear offerings for business owners—plus advanced capabilities when a project needs interactive experiences
            or production hosting.
          </p>
        </div>
      </section>
      <Services detailed />
      <Process />
      <FAQ />
      <FinalCTA />
    </div>
  )
}
