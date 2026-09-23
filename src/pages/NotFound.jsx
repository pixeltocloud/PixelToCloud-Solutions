import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Seo from '../components/seo/Seo'
import './PageHero.css'

export default function NotFound() {
  return (
    <section className="section page-enter">
      <Seo title="Page not found | PixelToCloud" description="The page you requested does not exist." noindex />
      <div className="container" style={{ textAlign: 'center', maxWidth: 520 }}>
        <p className="page-kicker">404</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>
          This page isn’t here
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          The link may be outdated, or the page moved. Head back home or browse selected work.
        </p>
        <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.2rem' }}>
          <Button to="/">Go home</Button>
          <Button to="/work" variant="secondary">
            View work
          </Button>
          <Link to="/contact" style={{ alignSelf: 'center', color: 'var(--accent)', fontWeight: 650 }}>
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
