import ContactSection from '../components/sections/ContactSection'
import Seo from '../components/seo/Seo'
import './PageHero.css'

export default function Contact() {
  return (
    <div className="page-enter">
      <Seo />
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">Contact Us</p>
          <h1>Let&apos;s build something that converts</h1>
          <p>Direct 1-on-1 access to the founders. Share goals—we reply with a roadmap and ballpark the same day.</p>
        </div>
      </section>
      <ContactSection compactHero />
    </div>
  )
}
