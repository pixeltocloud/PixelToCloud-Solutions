import { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'
import { contact, agencyStats } from '../../data/founders'
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

function CountUp({ value, active }) {
  const numeric = parseFloat(String(value).replace(/[^\d.]/g, ''))
  const suffix = String(value).replace(/[\d.\s]/g, '') || ''
  const prefix = String(value).match(/^[^\d]*/)?.[0] || ''
  const isRange = String(value).includes('–') || String(value).includes('-')
  const [display, setDisplay] = useState(isRange ? value : `${prefix}0${suffix}`)

  useEffect(() => {
    if (!active || isRange || Number.isNaN(numeric)) {
      setDisplay(value)
      return undefined
    }
    let frame
    const start = performance.now()
    const duration = 1400
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      const current = Math.round(numeric * eased)
      setDisplay(`${prefix}${current}${suffix}`)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, value, numeric, prefix, suffix, isRange])

  return <>{display}</>
}

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion()
  const sectionRef = useRef(null)
  const mediaRef = useRef(null)
  const contentRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [statsActive, setStatsActive] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), reducedMotion ? 0 : 40)
    return () => window.clearTimeout(id)
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) {
      setStatsActive(true)
      return undefined
    }

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
      if (progress > 0.08) setStatsActive(true)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reducedMotion])

  useEffect(() => {
    const timer = window.setTimeout(() => setStatsActive(true), 1200)
    return () => window.clearTimeout(timer)
  }, [])

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
            <span className="hero-mask-inner">Stunning websites, custom software &amp; AI</span>
          </span>
          <span className="hero-mask">
            <span className="hero-mask-inner hero-accent shimmer-text">for modern businesses</span>
          </span>
        </h1>

        <p className="hero-sub">
          High-converting sites, operational software, and AI automations—with 100% source-code ownership and zero
          vendor lock-in.
        </p>

        <div className="hero-cta">
          <Button to="/contact" className="hero-btn-primary">
            Start a project
          </Button>
          <Button to="/work" variant="secondary" className="hero-btn-secondary">
            View our work
          </Button>
          <Button href={contact.whatsappLink} target="_blank" rel="noreferrer" variant="ghost" className="hero-btn-ghost">
            WhatsApp
          </Button>
        </div>

        <a className="hero-scroll" href="#selected-work">
          <span>Scroll</span>
          <i />
        </a>
      </div>

      <div className="hero-stats">
        <div className="container hero-stats-row">
          {agencyStats.map((stat, index) => (
            <div key={stat.label} className="hero-stat" style={{ '--stat-delay': `${index * 90}ms` }}>
              <strong>
                <CountUp value={stat.value} active={statsActive} />
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
