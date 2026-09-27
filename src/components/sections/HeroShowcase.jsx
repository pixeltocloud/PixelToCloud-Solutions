import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './HeroShowcase.css'

const scenes = [
  {
    id: 'offer',
    kicker: 'Websites',
    title: 'The offer, before they scroll',
    image: '/image/showcase/mockup-agency-engine.jpg',
    link: '/services/web-development',
  },
  {
    id: 'product',
    kicker: 'Custom apps',
    title: 'A link you can send in the meeting',
    image: '/image/showcase/mockup-macbook-saas.jpg',
    link: '/services/custom-software',
  },
  {
    id: 'reply',
    kicker: 'WhatsApp',
    title: 'A reply while the office is closed',
    image: '/image/showcase/mockup-ai-automation.jpg',
    link: '/services/ai-automation',
  },
  {
    id: 'shop',
    kicker: 'Online shops',
    title: 'Checkout that finishes on a phone',
    image: '/image/showcase/mockup-storefront.jpg',
    link: '/serve/ecommerce',
  },
  {
    id: 'room',
    kicker: 'Property',
    title: 'They enquire with the room still open',
    image: '/image/showcase/mockup-interior-luxury.jpg',
    link: '/serve/real-estate',
  },
  {
    id: 'hosting',
    kicker: 'Hosting',
    title: 'An update you can undo',
    image: '/image/showcase/mockup-tablet-cyber.jpg',
    link: '/services/cloud-devops',
  },
]

export default function HeroShowcase() {
  const trackRef = useRef(null)
  const speedRef = useRef(0.9)
  const targetRef = useRef(0.9)
  const posRef = useRef(0)
  const widthRef = useRef(0)
  const reducedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => {
      reducedRef.current = motion.matches
    }
    syncMotion()
    motion.addEventListener('change', syncMotion)

    const measure = () => {
      const full = track.scrollWidth
      widthRef.current = full > 0 ? full / 2 : 0
    }
    measure()
    const timer = window.setTimeout(measure, 200)
    window.addEventListener('resize', measure)

    let frame = 0
    const tick = () => {
      if (!reducedRef.current) {
        speedRef.current += (targetRef.current - speedRef.current) * 0.06
        posRef.current -= speedRef.current
        const setWidth = widthRef.current
        if (setWidth > 80) {
          while (posRef.current <= -setWidth) posRef.current += setWidth
        }
        track.style.transform = `translate3d(${posRef.current.toFixed(2)}px, 0, 0)`

        const mid = window.innerWidth / 2
        const cards = track.querySelectorAll('.reel-card')
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect()
          const center = rect.left + rect.width / 2
          const dist = Math.abs(center - mid)
          const near = Math.max(0, 1 - dist / (window.innerWidth * 0.42))
          const scale = 0.86 + near * 0.16
          const lift = near * -10
          card.style.transform = `translate3d(0, ${lift.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`
          card.style.opacity = String(0.62 + near * 0.38)
        })
      }
      frame = window.requestAnimationFrame(tick)
    }
    frame = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timer)
      window.removeEventListener('resize', measure)
      motion.removeEventListener('change', syncMotion)
    }
  }, [])

  const slow = () => {
    targetRef.current = 0.22
  }
  const cruise = () => {
    targetRef.current = 0.9
  }

  const loop = [...scenes, ...scenes]

  return (
    <section className="hero-reel" aria-label="Featured work">
      <div className="reel-viewport" onMouseEnter={slow} onMouseLeave={cruise}>
        <div className="reel-fade reel-fade-left" aria-hidden="true" />
        <div className="reel-fade reel-fade-right" aria-hidden="true" />
        <div className="reel-glow" aria-hidden="true" />
        <div className="reel-track" ref={trackRef}>
          {loop.map((scene, index) => (
            <article className="reel-card" key={`${scene.id}-${index}`}>
              <Link to={scene.link} aria-label={scene.title} tabIndex={index < scenes.length ? 0 : -1}>
                <img src={scene.image} alt="" width="800" height="1000" draggable="false" />
                <span className="reel-shade" />
                <span className="reel-copy">
                  <em>{scene.kicker}</em>
                  <strong>{scene.title}</strong>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
