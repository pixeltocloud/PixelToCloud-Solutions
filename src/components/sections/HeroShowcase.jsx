import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './HeroShowcase.css'

const showcaseItems = [
  {
    id: 'saas-tax',
    badge: 'B2B SaaS & FinTech',
    badgeIcon: '⚡',
    title: 'EasyMyTax — Client Vault & Tax Engine',
    subtitle: 'Automated calculation pipelines & encrypted document storage',
    image: '/image/showcase/mockup-macbook-saas.jpg',
    device: 'MacBook Pro 16″',
    tag: 'Production Portal',
    metric: '14-Day Delivery',
    link: '/work/easy-my-tax',
    accent: '#0284c7',
  },
  {
    id: 'wealth-mobile',
    badge: 'FinTech & Wealth Mobile',
    badgeIcon: '✦',
    title: 'Quantum Wealth — Real-Time Portfolio App',
    subtitle: 'Live valuation charts, instant client access & bank-grade security',
    image: '/image/showcase/mockup-phone-wealth.jpg',
    device: 'iPhone 16 Pro',
    tag: 'Mobile Experience',
    metric: '99.98% Uptime',
    link: '/work',
    accent: '#06b6d4',
  },
  {
    id: 'cyber-telemetry',
    badge: 'AI Ops & 3D WebGL',
    badgeIcon: '●',
    title: 'Nebula Grid — System Ops & Configurator',
    subtitle: 'Interactive node graph, GPU telemetry & hardware-accelerated UI',
    image: '/image/showcase/mockup-tablet-cyber.jpg',
    device: 'iPad Pro M4',
    tag: 'Interactive WebGL',
    metric: '60 FPS Smooth',
    link: '/work',
    accent: '#8b5cf6',
  },
  {
    id: 'ai-pipeline',
    badge: 'AI Automation & Agents',
    badgeIcon: '🤖',
    title: '24/7 WhatsApp AI Agent & Document Sync',
    subtitle: 'Zero-latency lead qualification, instant booking & ERP pipelines',
    image: '/image/showcase/mockup-ai-automation.jpg',
    device: 'Autonomous AI Console',
    tag: 'Autonomous AI',
    metric: '< 2s Response',
    link: '/services',
    accent: '#10b981',
  },
  {
    id: 'interior-luxury',
    badge: 'Luxury Real Estate & Studio',
    badgeIcon: '✦',
    title: 'Harish Renova — Architectural Portfolio',
    subtitle: 'Fluid transitions, project case showcases & instant lead capture',
    image: '/image/showcase/mockup-interior-luxury.jpg',
    device: 'Spatial Architecture & Web',
    tag: 'High Conversion',
    metric: '3x Inbound Leads',
    link: '/work/harish-renova',
    accent: '#f59e0b',
  },
  {
    id: 'agency-proof',
    badge: 'Production React Platform',
    badgeIcon: '🚀',
    title: 'PixelToCloud — Modern Agency Engine',
    subtitle: 'Lightning-fast client acquisition, zero-bloat code & 100% IP ownership',
    image: '/image/showcase/mockup-agency-engine.jpg',
    device: 'Core Web Telemetry',
    tag: 'Core Web Vitals',
    metric: '98+ Google Score',
    link: '/work/pixeltocloud-agency',
    accent: '#ff5722',
  },
]

function TiltCard({ item, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, active: false })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = Number((((y - centerY) / centerY) * -9).toFixed(2))
    const rotateY = Number((((x - centerX) / centerX) * 9).toFixed(2))
    const glareX = Number(((x / rect.width) * 100).toFixed(1))
    const glareY = Number(((y / rect.height) * 100).toFixed(1))

    setTilt({ x: rotateX, y: rotateY, glareX, glareY, active: true })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, active: false })
  }

  return (
    <div
      className={`showcase-card ${tilt.active ? 'is-tilted' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tilt.active
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(36px) scale3d(1.025, 1.025, 1.025)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)',
      }}
    >
      <Link to={item.link} className="showcase-card-link" aria-label={item.title}>
        <div className="showcase-image-wrap">
          <img
            src={item.image}
            alt={item.title}
            loading={index < 4 ? 'eager' : 'lazy'}
            className="showcase-image"
          />
          <div className="showcase-image-gradient" />

          {/* Dynamic glass glare layer */}
          <div
            className="showcase-card-glare"
            style={{
              opacity: tilt.active ? 0.35 : 0,
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.8) 0%, transparent 60%)`,
            }}
            aria-hidden="true"
          />

          {/* Floating Top Badges */}
          <div className="showcase-top-meta">
            <span className="showcase-badge" style={{ '--accent-color': item.accent }}>
              <span className="showcase-badge-icon">{item.badgeIcon}</span>
              {item.badge}
            </span>
            <span className="showcase-device-pill">{item.device}</span>
          </div>
        </div>

        {/* Card Content & Metrics */}
        <div className="showcase-card-body">
          <div className="showcase-card-info">
            <h3 className="showcase-title">{item.title}</h3>
            <p className="showcase-subtitle">{item.subtitle}</p>
          </div>
          <div className="showcase-meta-row">
            <span className="showcase-tag">{item.tag}</span>
            <span className="showcase-metric" style={{ color: item.accent }}>
              <span className="showcase-metric-dot" style={{ backgroundColor: item.accent }} />
              {item.metric}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function HeroShowcase() {
  const sectionRef = useRef(null)
  const planeRef = useRef(null)
  const trackRef = useRef(null)

  // Use 3 sets of items for seamless infinite wrapping in both directions
  const items = [...showcaseItems, ...showcaseItems, ...showcaseItems]

  // Persistent physics refs that never reset on state changes
  const posRef = useRef(-2800)
  const dirRef = useRef(-1) // -1 = forward (scroll down), 1 = backward (scroll up)
  const scrollBoostRef = useRef(0)
  const isHoveredRef = useRef(false)
  const singleSetWidthRef = useRef(2800)

  // Smooth lerp camera refs
  const targetScaleRef = useRef(0.92)
  const currentScaleRef = useRef(0.92)
  const targetPitchRef = useRef(8)
  const currentPitchRef = useRef(8)
  const targetYawRef = useRef(-2)
  const currentYawRef = useRef(-2)

  useEffect(() => {
    let animId
    let lastScrollY = window.scrollY

    // Measure exact width of 1 set
    const updateMeasurements = () => {
      if (trackRef.current) {
        const fullW = trackRef.current.scrollWidth
        if (fullW > 300) {
          const setW = fullW / 3
          singleSetWidthRef.current = setW
          if (posRef.current === -2800) {
            posRef.current = -setW
          }
        }
      }
    }

    updateMeasurements()
    const timer = setTimeout(updateMeasurements, 250)
    window.addEventListener('resize', updateMeasurements)

    const onScroll = () => {
      const scrollY = window.scrollY
      const delta = scrollY - lastScrollY
      lastScrollY = scrollY

      if (Math.abs(delta) > 0.5) {
        // Scrolling down: advances right-to-left (dir = -1)
        // Scrolling up: reverses left-to-right (dir = 1)
        dirRef.current = delta > 0 ? -1 : 1

        // Add smooth momentum velocity (clamped)
        scrollBoostRef.current = Math.min(scrollBoostRef.current + Math.abs(delta) * 0.12, 16)
      }

      // Camera proximity zoom & 3D pitch calculation
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const winH = window.innerHeight || 800
        const sectionCenter = rect.top + rect.height / 2
        const viewportCenter = winH / 2
        const distFromCenter = Math.abs(sectionCenter - viewportCenter)
        const maxDist = winH * 0.85

        const proximity = Math.max(0, Math.min(1, 1 - distFromCenter / maxDist))

        // Target camera values
        targetScaleRef.current = 0.91 + proximity * 0.12 // zooms from 0.91 to 1.03
        targetPitchRef.current = 9 - proximity * 6.5 // from 9deg down to 2.5deg
        targetYawRef.current = -2.5 + proximity * 1.5
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // Continuous 60-120 FPS animation loop
    const tick = () => {
      // 1. Friction decay on scroll boost
      scrollBoostRef.current *= 0.94
      if (scrollBoostRef.current < 0.005) {
        scrollBoostRef.current = 0
      }

      // 2. Base cruising speed (dampened to 0 if card hovered)
      // Increased from 0.75 to 1.75 for a faster, more dynamic continuous glide
      const baseCruise = isHoveredRef.current ? 0 : 1.75
      const stepSpeed = (baseCruise + scrollBoostRef.current) * dirRef.current

      // 3. Increment position continuously
      posRef.current += stepSpeed

      // 4. Modulo wrap with exact pixel set width
      const setW = singleSetWidthRef.current
      if (setW > 100) {
        while (posRef.current <= -2 * setW) {
          posRef.current += setW
        }
        while (posRef.current >= -setW) {
          posRef.current -= setW
        }
      }

      // 5. Apply track position
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${posRef.current.toFixed(2)}px, 0, 0)`
      }

      // 6. Smoothly lerp 3D camera zoom & pitch
      currentScaleRef.current += (targetScaleRef.current - currentScaleRef.current) * 0.08
      currentPitchRef.current += (targetPitchRef.current - currentPitchRef.current) * 0.08
      currentYawRef.current += (targetYawRef.current - currentYawRef.current) * 0.08

      if (planeRef.current) {
        planeRef.current.style.transform = `perspective(1400px) rotateX(${currentPitchRef.current.toFixed(2)}deg) rotateY(${currentYawRef.current.toFixed(2)}deg) scale3d(${currentScaleRef.current.toFixed(3)}, ${currentScaleRef.current.toFixed(3)}, ${currentScaleRef.current.toFixed(3)})`
      }

      animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateMeasurements)
    }
  }, []) // Empty dependency array: runs ONCE on mount, NEVER resets position!

  return (
    <section ref={sectionRef} className="hero-showcase" aria-label="Featured Product Showcase">
      {/* 3D Runway Lighting Ambient */}
      <div className="showcase-runway-ambient" aria-hidden="true" />

      <div
        className="showcase-marquee-wrapper"
        onMouseEnter={() => { isHoveredRef.current = true }}
        onMouseLeave={() => { isHoveredRef.current = false }}
      >
        {/* Edge gradient fades for seamless blending */}
        <div className="showcase-fade showcase-fade-left" aria-hidden="true" />
        <div className="showcase-fade showcase-fade-right" aria-hidden="true" />

        {/* 3D Runway Plane with Scroll Proximity Zoom */}
        <div ref={planeRef} className="showcase-runway-plane">
          <div ref={trackRef} className="showcase-track-js">
            {items.map((item, index) => (
              <TiltCard key={`${item.id}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
