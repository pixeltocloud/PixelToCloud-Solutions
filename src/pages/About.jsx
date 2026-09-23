import Founders from '../components/sections/Founders'
import WhyPixelToCloud from '../components/sections/WhyPixelToCloud'
import Testimonials from '../components/sections/Testimonials'
import Process from '../components/sections/Process'
import FinalCTA from '../components/sections/FinalCTA'
import Marquee from '../components/sections/Marquee'
import Seo from '../components/seo/Seo'
import './PageHero.css'

export default function About() {
  return (
    <div className="page-enter">
      <Seo />
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">About Us</p>
          <h1>A website development agency run by engineers</h1>
          <p>
            PixelToCloud Solutions is a high-performance studio co-founded by Pankaj Gupta and Tushar Singhal. We bridge
            pixel-perfect frontend craft, custom software, and hardened cloud delivery—with full ownership for every
            client.
          </p>
        </div>
      </section>
      <Marquee
        labels={[
          'Zero outsourcing',
          'Founder-led delivery',
          'Alwar · Worldwide',
          '50+ shipped systems',
          '30-day warranty',
          'NDA ready',
        ]}
      />
      <Founders />
      <Process />
      <WhyPixelToCloud />
      <Testimonials />
      <FinalCTA />
    </div>
  )
}
