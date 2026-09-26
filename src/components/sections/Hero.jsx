import { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'
import './Hero.css'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])
  return reduced
}

const heroFeatures = [
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: '10–14 day',
    subtitle: 'MVP sprints for focused builds',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M11 3v19" />
        <path d="M2 9h20" />
      </svg>
    ),
    title: '100% IP',
    subtitle: 'Code, assets & credentials yours',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Founder-led',
    subtitle: 'Milestone payments only',
  },
]

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion()
  const sectionRef = useRef(null)
  const mediaRef = useRef(null)
  const contentRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), reducedMotion ? 0 : 40)
    return () => window.clearTimeout(id)
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return undefined

    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)))
      if (mediaRef.current) {
        mediaRef.current.style.transform = `translate3d(0, ${progress * 18}%, 0) scale(${1.08 + progress * 0.06})`
      }
      if (contentRef.current) {
        contentRef.current.style.opacity = String(1 - progress * 1.15)
        contentRef.current.style.transform = `translate3d(0, ${progress * -48}px, 0)`
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reducedMotion])

  return (
    <section ref={sectionRef} className={`hero ${ready ? 'is-ready' : ''}`} id="home">
      <div className="hero-media" ref={mediaRef} aria-hidden="true">
        <img
          src="/image/hero-workspace.jpg"
          alt=""
          width="2000"
          height="1425"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="hero-photo"
        />
        <div className="hero-veil" />
        <div className="hero-grain" />
        <div className="hero-orbit" />
      </div>

      <div className="container hero-content" ref={contentRef}>
        <p className="hero-brand">
          <span className="hero-brand-mark" />
          PixelToCloud
        </p>

        <h1>
          <span className="hero-mask">
            <span className="hero-mask-inner">High-Impact Websites,</span>
          </span>
          <span className="hero-mask hero-mask-wide">
            <span className="hero-mask-inner">
              Custom Apps &amp; <span className="hero-mobile-block">AI Automation</span>
            </span>
          </span>
          <span className="hero-mask">
            <span className="hero-mask-inner hero-accent shimmer-text">for Growing Businesses</span>
          </span>
        </h1>

        <div className="hero-features">
          {heroFeatures.map((feat) => (
            <div key={feat.title} className="hero-feature-card">
              <div className="hero-feature-header">
                <span className="hero-feature-icon">{feat.icon}</span>
                <strong>{feat.title}</strong>
              </div>
              <p>{feat.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="hero-cta">
          <Button to="/contact" className="hero-btn-primary">
            Start a project
          </Button>
          <Button to="/work" variant="secondary" className="hero-btn-secondary is-white">
            View our work
          </Button>
        </div>
      </div>

      <div className="hero-horizon-beam" aria-hidden="true" />
    </section>
  )
}
