import FeaturedWork from '../components/sections/FeaturedWork'
import FinalCTA from '../components/sections/FinalCTA'
import Seo from '../components/seo/Seo'
import './PageHero.css'

export default function Work() {
  return (
    <div className="page-enter">
      <Seo />
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">Work</p>
          <h1>Selected systems in production</h1>
          <p>Case studies from finance, healthcare, commerce, and interactive 3D engineering.</p>
        </div>
      </section>
      <FeaturedWork featuredOnly={false} />
      <FinalCTA />
    </div>
  )
}
