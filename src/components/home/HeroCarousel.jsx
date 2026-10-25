import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { brand } from '../../config/brand'

const phrases = [
  'Websites that convert.',
  'Software that scales.',
  'Apps people love.',
  'AI that saves time.',
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(media.matches)
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (reduced) return undefined
    const timer = window.setInterval(() => setIndex((current) => current + 1), 2800)
    return () => window.clearInterval(timer)
  }, [reduced])

  useEffect(() => {
    if (index !== phrases.length) return undefined
    const reset = window.setTimeout(() => {
      setAnimate(false)
      setIndex(0)
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setAnimate(true))
      })
    }, 680)
    return () => window.clearTimeout(reset)
  }, [index])

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero-glow" aria-hidden="true" />
      <div className="home-hero-grid-lines" aria-hidden="true" />
      <div className="hero-meteors" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="home-wrap home-hero-grid">
        <div className="home-hero-copy">
          <p className="home-eye">Built from ideas</p>
          <h1 id="home-hero-title">
            <span className="hero-line">Big ideas deserve</span>
            <span className="hero-line hero-line-accent">better digital experiences.</span>
          </h1>
          {reduced ? (
            <p className="hero-stable">Websites, software, apps, and AI.</p>
          ) : (
            <>
              <div className="hero-roll" aria-hidden="true">
                <div className={`hero-roll-track ${animate ? 'is-animated' : ''}`} style={{ '--roll': index }}>
                  {[...phrases, phrases[0]].map((phrase, item) => (
                    <span key={`${phrase}-${item}`}>{phrase}</span>
                  ))}
                </div>
              </div>
              <p className="sr-only">
                Websites that convert. Software that scales. Apps people love. AI that saves time.
              </p>
            </>
          )}
          <p className="home-lead">
            We design and build websites, software, and intelligent automation that help businesses work smarter and grow online.
          </p>
          <div className="home-actions">
            <Link className="home-btn home-btn-light" to={brand.primaryHref}>
              {brand.primaryCta}
              <span className="home-btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link className="home-btn home-btn-ghost" to="/work">Explore Our Work</Link>
          </div>
        </div>
        <IdeaField />
      </div>
    </section>
  )
}

function IdeaField() {
  return (
    <div className="idea-field" aria-hidden="true">
      <div className="idea-orbit">
        <span />
        <span />
        <span />
      </div>
      <svg className="idea-map" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="idea-link" d="M40 34 C 30 26, 22 20, 16 16" />
        <path className="idea-link" d="M62 34 C 72 28, 80 24, 84 20" />
        <path className="idea-link" d="M34 64 C 24 70, 16 74, 14 76" />
        <path className="idea-link" d="M58 66 C 68 72, 76 76, 80 78" />
        <path className="idea-signal" d="M40 34 C 30 26, 22 20, 16 16" />
        <path className="idea-signal idea-signal-b" d="M62 34 C 72 28, 80 24, 84 20" />
        <path className="idea-signal idea-signal-c" d="M34 64 C 24 70, 16 74, 14 76" />
        <path className="idea-signal idea-signal-d" d="M58 66 C 68 72, 76 76, 80 78" />
      </svg>
      <div className="idea-back" />
      <div className="idea-stage">
        <div className="stage-top">
          <span className="stage-dots"><i /><i /><i /></span>
          <span className="stage-url"><i /></span>
        </div>
        <div className="stage-layout">
          <div className="stage-nav">
            <i /><i /><i /><i />
          </div>
          <div className="stage-main">
            <span className="stage-kicker" />
            <span className="stage-line" />
            <span className="stage-line is-short" />
            <span className="stage-accent" />
            <div className="stage-tiles">
              <span><b /><i /></span>
              <span><b /><i /></span>
            </div>
          </div>
        </div>
      </div>
      <div className="idea-nodes">
        <div className="idea-node node-web">
          <span className="node-window"><i /><i /><i /></span>
          <b>Web</b>
        </div>
        <div className="idea-node node-soft">
          <span className="node-code"><i /><i /><i /></span>
          <b>Software</b>
        </div>
        <div className="idea-node node-ai">
          <span className="node-net"><i /><i /><i /></span>
          <b>AI</b>
        </div>
        <div className="idea-node node-auto">
          <span className="node-flow"><i /><i /><i /></span>
          <b>Automation</b>
        </div>
      </div>
    </div>
  )
}
