import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { industries } from '../../data/catalog'
import './IndustrySlider.css'

function cardsPerView() {
  if (window.innerWidth < 700) return 1
  if (window.innerWidth < 1100) return 2
  return 3
}

export default function IndustrySlider() {
  const [per, setPer] = useState(3)
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)
  const count = industries.length

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(media.matches)
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    const apply = () => setPer(cardsPerView())
    apply()
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
  }, [])

  useEffect(() => {
    setAnimate(false)
    setIndex(0)
    const frame = window.requestAnimationFrame(() => setAnimate(true))
    return () => window.cancelAnimationFrame(frame)
  }, [per])

  useEffect(() => {
    if (reduced || paused) return undefined
    const timer = window.setInterval(() => {
      setIndex((current) => current + 1)
    }, 3800)
    return () => window.clearInterval(timer)
  }, [reduced, paused, per])

  useEffect(() => {
    if (index < count) return undefined
    const timer = window.setTimeout(() => {
      setAnimate(false)
      setIndex(0)
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setAnimate(true))
      })
    }, 520)
    return () => window.clearTimeout(timer)
  }, [index, count])

  const slides = [...industries, ...industries.slice(0, per)]

  const step = (direction) => {
    setPaused(true)
    if (direction < 0 && index === 0) {
      setAnimate(false)
      setIndex(count)
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setAnimate(true)
          setIndex(count - 1)
        })
      })
      return
    }
    setIndex((current) => current + direction)
  }

  return (
    <div className="industry-slider" style={{ '--per': per, '--i': index }}>
      <div className="industry-slider-head">
        <div>
          <h2>Industries</h2>
          <p>We name a specialty only where a project is published. The other pages describe the kind of work, not a track record.</p>
        </div>
      </div>
      <div
        className="industry-slider-stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <button
          type="button"
          className="industry-slider-btn is-prev"
          onClick={() => step(-1)}
          aria-label="Show previous industries"
        >
          <span aria-hidden="true">←</span>
        </button>
        <div className="industry-slider-window">
          <div className={`industry-slider-track${animate ? '' : ' is-instant'}`}>
            {slides.map((item, slide) => (
              <article key={`${item.slug}-${slide}`} className="industry-card">
                <Link to={`/industries/${item.slug}`} tabIndex={slide >= count ? -1 : undefined}>
                  <div className="industry-card-media">
                    <img src={item.image} alt="" width="960" height="540" />
                  </div>
                  <div className="industry-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.lede}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="industry-slider-btn is-next"
          onClick={() => step(1)}
          aria-label="Show next industries"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
