import Founders from '../components/sections/Founders'
import WhyPixelToCloud from '../components/sections/WhyPixelToCloud'
import Testimonials from '../components/sections/Testimonials'
import FinalCTA from '../components/sections/FinalCTA'
import Seo from '../components/seo/Seo'
import Reveal from '../components/ui/Reveal'
import { studioTimeline } from '../data/founders'
import './PageHero.css'
import './About.css'

export default function About() {
  return (
    <div className="page-enter">
      <Seo />
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">About</p>
          <h1>PixelToCloud</h1>
          <p>
            A senior engineering studio building websites and custom software around real business workflows—with full
            source-code ownership and direct access to the founders.
          </p>
        </div>
      </section>
      <Founders />
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              How engagements typically run
            </h2>
          </Reveal>
          <div className="about-timeline">
            {studioTimeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 70} className="about-timeline-item">
                <strong>{item.year}</strong>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <WhyPixelToCloud />
      <Testimonials />
      <FinalCTA />
    </div>
  )
}
