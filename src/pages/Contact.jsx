import ContactSection from '../components/sections/ContactSection'
import FAQ from '../components/sections/FAQ'
import Seo from '../components/seo/Seo'
import './PageHero.css'

export default function Contact() {
  return (
    <div className="page-enter">
      <Seo />
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">Contact</p>
          <h1>Discuss your project</h1>
          <p>Share the workflow. We’ll map the system and reply with a clear technical assessment.</p>
        </div>
      </section>
      <ContactSection />
      <FAQ showPricing={false} />
    </div>
  )
}
