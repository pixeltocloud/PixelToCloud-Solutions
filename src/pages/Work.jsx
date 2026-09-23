import FeaturedWork from '../components/sections/FeaturedWork'
import FinalCTA from '../components/sections/FinalCTA'
import Marquee from '../components/sections/Marquee'
import Seo from '../components/seo/Seo'
import './PageHero.css'

export default function Work() {
  return (
    <div className="page-enter">
      <Seo />
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">Our Work</p>
          <h1>Proof from production—including this site</h1>
          <p>
            Case studies from finance, healthcare, commerce, and interactive 3D. pixeltocloud.com is our own agency
            proof of craft.
          </p>
        </div>
      </section>
      <Marquee
        labels={[
          'Agency sites',
          'CA portals',
          'Clinic platforms',
          'E-commerce',
          'WebGL tools',
          'WhatsApp booking',
          'Cloud deploys',
        ]}
      />
      <FeaturedWork featuredOnly={false} compact />
      <FinalCTA />
    </div>
  )
}
