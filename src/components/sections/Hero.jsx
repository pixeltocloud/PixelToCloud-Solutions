import Button from '../ui/Button'
import { contact, agencyStats } from '../../data/founders'
import './Hero.css'

const floating = [
  { text: '10–14 day MVP', style: { top: '18%', right: '8%' } },
  { text: '100% IP owned', style: { top: '42%', right: '4%' } },
  { text: 'Founder-led', style: { bottom: '22%', right: '12%' } },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-status">
            <span className="live-dot" aria-hidden="true" />
            <span>Website development agency · Available for new projects</span>
          </div>

          <p className="hero-brand">PixelToCloud</p>

          <h1>
            Stunning websites,
            <span className="hero-line">custom software &amp; AI</span>
            <span className="hero-accent shimmer-text">for modern businesses</span>
          </h1>

          <p className="hero-sub">
            We design high-converting web experiences, build operational software &amp; CRM portals, and deploy
            intelligent automations—with 100% source-code ownership and zero vendor lock-in.
          </p>

          <div className="hero-cta">
            <Button to="/contact">Start a project</Button>
            <Button to="/work" variant="secondary">
              View our work
            </Button>
            <Button href={contact.whatsappLink} target="_blank" rel="noreferrer" variant="ghost">
              WhatsApp
            </Button>
          </div>

          <ul className="hero-perks">
            <li>10–14 day rapid MVP delivery</li>
            <li>100% code &amp; asset ownership</li>
            <li>Direct founder WhatsApp access</li>
          </ul>
        </div>

        <div className="hero-stage" aria-hidden="true">
          <div className="hero-frame">
            <div className="hero-frame-bar">
              <span />
              <span />
              <span />
              <em>pixeltocloud.com</em>
            </div>
            <img
              src="/image/hero-workspace.jpg"
              alt=""
              width="1200"
              height="800"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="hero-frame-caption">
              <strong>This site is our proof of work</strong>
              <span>Designed &amp; engineered by PixelToCloud</span>
            </div>
          </div>

          {floating.map((item, i) => (
            <div key={item.text} className={`float-label hero-chip chip-${i}`} style={item.style}>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-stats">
        <div className="container hero-stats-row">
          {agencyStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
