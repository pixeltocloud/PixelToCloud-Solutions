import { useState, useEffect, useRef } from 'react'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import './PillarsStory.css'

// 1. Build Visual: Code editor compiling into live responsive UI
function BuildVisual() {
  const [activeTab, setActiveTab] = useState('preview')

  return (
    <div className="story-mockup story-mockup-build">
      <div className="mockup-chrome">
        <div className="chrome-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="chrome-tabs">
          <button
            type="button"
            className={`chrome-tab ${activeTab === 'preview' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            Live Preview
          </button>
          <button
            type="button"
            className={`chrome-tab ${activeTab === 'code' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            App.tsx
          </button>
        </div>
        <div className="chrome-status">
          <span className="status-badge">Compiled in 0.28s</span>
        </div>
      </div>

      <div className="mockup-content">
        {activeTab === 'preview' ? (
          <div className="mockup-preview-screen">
            <div className="preview-nav">
              <span className="preview-logo" />
              <div className="preview-links">
                <span />
                <span />
                <span />
              </div>
              <span className="preview-btn" />
            </div>
            <div className="preview-hero">
              <span className="preview-badge">✦ High-Converting Architecture</span>
              <div className="preview-title" />
              <div className="preview-sub" />
              <div className="preview-cta-row">
                <span className="preview-cta-primary" />
                <span className="preview-cta-secondary" />
              </div>
            </div>
            <div className="preview-cards">
              <div className="p-card">
                <span className="p-icon cyan" />
                <div className="p-bar" />
                <div className="p-subbar" />
              </div>
              <div className="p-card">
                <span className="p-icon orange" />
                <div className="p-bar" />
                <div className="p-subbar" />
              </div>
              <div className="p-card">
                <span className="p-icon violet" />
                <div className="p-bar" />
                <div className="p-subbar" />
              </div>
            </div>
          </div>
        ) : (
          <div className="mockup-code-screen">
            <pre>
              <code>
                <span className="c-keyword">import</span> {'{'} Website, CRM, Portal {'}'}{' '}
                <span className="c-keyword">from</span> <span className="c-string">'@pixeltocloud/core'</span>
                {'\n\n'}
                <span className="c-comment">// 100% source-code ownership guaranteed</span>
                {'\n'}
                <span className="c-keyword">export default function</span> <span className="c-func">ProductionBuild</span>() {'{'}
                {'\n'}  <span className="c-keyword">return</span> (
                {'\n'}    &lt;<span className="c-tag">Architecture</span>
                {'\n'}      <span className="c-prop">framework</span>=<span className="c-string">"React + Vite"</span>
                {'\n'}      <span className="c-prop">performance</span>=<span className="c-string">"Sub-second LCP"</span>
                {'\n'}      <span className="c-prop">ownership</span>=<span className="c-string">"Full Git Handover"</span>
                {'\n'}    &gt;
                {'\n'}      &lt;<span className="c-tag">CustomSoftware</span> <span className="c-prop">scale</span>=<span className="c-string">"enterprise"</span> /&gt;
                {'\n'}    &lt;/<span className="c-tag">Architecture</span>&gt;
                {'\n'}  )
                {'\n'}{'}'}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

// 2. Grow Visual: Real-time lead flow analytics & speed telemetry
function GrowVisual() {
  const [metric, setMetric] = useState(148)

  useEffect(() => {
    const timer = setInterval(() => {
      setMetric((prev) => (prev >= 165 ? 142 : prev + 1))
    }, 2400)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="story-mockup story-mockup-grow">
      <div className="mockup-chrome">
        <div className="chrome-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="chrome-title">Lead Flow &amp; Performance Telemetry</span>
        <div className="chrome-status">
          <span className="live-dot" />
          <span>Real-time</span>
        </div>
      </div>

      <div className="mockup-content grow-content">
        <div className="grow-stats-header">
          <div>
            <span className="grow-label">Inbound Qualified Leads</span>
            <strong className="grow-value">
              +{metric}% <span className="grow-badge">▲ High intent</span>
            </strong>
          </div>
          <div className="grow-vitals">
            <span className="vital-tag">0.4s Load Time</span>
            <span className="vital-tag emerald">99.9% Uptime</span>
          </div>
        </div>

        {/* Animated Lead Flow Chart */}
        <div className="grow-chart-box">
          <svg className="grow-svg-chart" viewBox="0 0 400 130" preserveAspectRatio="none">
            <defs>
              <linearGradient id="growGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ea580c" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              className="grow-chart-area"
              d="M0,110 Q50,95 100,85 T200,60 T300,32 T400,10 L400,130 L0,130 Z"
              fill="url(#growGradient)"
            />
            <path
              className="grow-chart-line"
              d="M0,110 Q50,95 100,85 T200,60 T300,32 T400,10"
              fill="none"
              stroke="#ea580c"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <circle cx="400" cy="10" r="5" fill="#ea580c" className="pulse-point" />
          </svg>
        </div>

        <div className="grow-footer-grid">
          <div className="grow-card">
            <span className="g-title">Google Ads Conversion</span>
            <span className="g-stat">3.8x baseline</span>
          </div>
          <div className="grow-card">
            <span className="g-title">Core Web Vitals</span>
            <span className="g-stat emerald">100 / 100 Mobile</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// 3. Automate Visual: WhatsApp Bot & AI Document Pipeline
function AutomateVisual() {
  const [messages] = useState([
    { from: 'user', text: 'Hi! We need a custom portal for client bookings and invoicing.' },
    { from: 'bot', text: 'Hello! PixelToCloud AI here. We build custom React + Node portals with 100% source ownership.' },
    { from: 'bot', text: 'Do you need instant WhatsApp booking integration?' },
    { from: 'user', text: 'Yes, exactly that.' },
    { from: 'bot', text: 'Confirmed! Booked Discovery Session: Tomorrow at 11:00 AM' },
  ])

  return (
    <div className="story-mockup story-mockup-automate">
      <div className="mockup-chrome">
        <div className="chrome-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="chrome-wa-header">
          <span className="wa-avatar">AI</span>
          <div>
            <strong>PixelToCloud Assistant</strong>
            <span className="wa-status">Active now · 24/7 Automation</span>
          </div>
        </div>
      </div>

      <div className="mockup-content automate-content">
        <div className="chat-stream">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble is-${msg.from}`}>
              <p>{msg.text}</p>
              <span className="chat-time">Just now ✓✓</span>
            </div>
          ))}
        </div>

        <div className="ai-pipeline-badge">
          <span className="ai-pill-icon">⚡</span>
          <div className="ai-pill-text">
            <strong>AI Extraction Pipeline</strong>
            <span>Invoice_Q3.pdf → Structured DB record (99.8% precision)</span>
          </div>
          <span className="ai-tag">Handled</span>
        </div>
      </div>
    </div>
  )
}

const chapters = [
  {
    id: 'build',
    index: '01',
    pillar: 'BUILD',
    accent: '#0284c7',
    tagline: 'Core Platforms & Code',
    badgeText: 'Stage 1: Core Foundation',
    title: (
      <>
        Websites &amp; Software, <br />
        <span className="story-title-accent is-build">Built On Code You Own.</span>
      </>
    ),
    summary:
      'We design and engineer bespoke web platforms, custom CRM portals, and scalable storefronts. No template builders, no monthly seat taxes—everything is built on clean, modern code you own 100%.',
    points: [
      {
        title: 'Ultra-fast React & Next-gen SPAs',
        desc: 'Sub-second mobile loading built for high conversions and Google Core Web Vitals.',
      },
      {
        title: 'Bespoke CRM, Portals & Billing',
        desc: 'Operational software shaped exactly around how your business functions.',
      },
      {
        title: '100% Complete Source Ownership',
        desc: 'All repositories, schemas, documentation, and credentials handed over directly.',
      },
    ],
    ctaText: 'Explore Engineering Services',
    ctaLink: '/services',
    renderVisual: () => <BuildVisual />,
  },
  {
    id: 'grow',
    index: '02',
    pillar: 'GROW',
    accent: '#ea580c',
    tagline: 'Traffic & Scaled DevOps',
    badgeText: 'Stage 2: Traction & Scale',
    title: (
      <>
        Leads, Speed &amp; DevOps, <br />
        <span className="story-title-accent is-grow">Engineered To Convert.</span>
      </>
    ),
    summary:
      'A beautiful website is only half the battle. We build laser-focused search funnels, hardened cloud infrastructure, and conversion tracking that turns traffic into paying inquiries.',
    points: [
      {
        title: 'High-Intent Search & Ad Funnels',
        desc: 'Landing pages and campaign structures with rigorous conversion tracking.',
      },
      {
        title: 'Hardened Cloud & Zero-Downtime DevOps',
        desc: 'Fast VPS hosting, Docker containers, SSL certificates, and automated backup pipelines.',
      },
      {
        title: 'SEO Architecture Built-In',
        desc: 'Semantic structured schema so search engines index and rank your offer effortlessly.',
      },
    ],
    ctaText: 'View Growth Capabilities',
    ctaLink: '/services',
    renderVisual: () => <GrowVisual />,
  },
  {
    id: 'automate',
    index: '03',
    pillar: 'AUTOMATE',
    accent: '#059669',
    tagline: 'AI Agents & Integration',
    badgeText: 'Stage 3: Hands-Free Ops',
    title: (
      <>
        WhatsApp &amp; AI Agents, <br />
        <span className="story-title-accent is-automate">Running 24/7 For You.</span>
      </>
    ),
    summary:
      'Turn repetitive manual tasks into high-velocity 24/7 automated pipelines. From WhatsApp qualification bots to intelligent document parsing, we free your team to focus on closing deals.',
    points: [
      {
        title: '24/7 WhatsApp Booking & Chatbots',
        desc: 'Qualify prospects, take bookings, and send payment reminders on WhatsApp.',
      },
      {
        title: 'AI Document & Invoice OCR Extraction',
        desc: 'Automatically pull structured data out of PDFs, receipts, and invoices into your DB.',
      },
      {
        title: 'End-to-End Business Integration',
        desc: 'Seamless webhooks connecting your site, CRM, and accounting without human latency.',
      },
    ],
    ctaText: 'Discuss Automation',
    ctaLink: '/contact',
    renderVisual: () => <AutomateVisual />,
  },
]

export default function PillarsStory() {
  const [activeStage, setActiveStage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const consoleCardRef = useRef(null)

  // Gentle auto-rotation with pause on hover
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % chapters.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [isPaused])

  const handleStageSelect = (idx) => {
    setActiveStage(idx)
    setIsPaused(true)
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (diff > 45) {
      // Swiped left -> next stage
      setActiveStage((prev) => Math.min(chapters.length - 1, prev + 1))
      setIsPaused(true)
    } else if (diff < -45) {
      // Swiped right -> prev stage
      setActiveStage((prev) => Math.max(0, prev - 1))
      setIsPaused(true)
    }
    setTouchStart(null)
  }

  const chapter = chapters[activeStage]

  return (
    <section className="section pillars-story" id="capabilities" aria-label="Client Transformation Journey">
      <div className="container">
        <Reveal className="pillars-story-intro">
          <span className="story-eyebrow">✦ HOW WE WORK WITH YOU</span>
          <h2 className="section-title">The 3-Stage Growth Journey</h2>
          <p className="section-desc">
            Instead of fragmented freelancers, you get an engineering partner that takes your technology from first
            code commit to continuous growth and back-office automation.
          </p>
        </Reveal>

        {/* 3-Stage Journey Stepper Control */}
        <div className="journey-stepper" role="tablist" aria-label="Transformation Stages">
          {chapters.map((ch, idx) => {
            const isActive = activeStage === idx
            return (
              <button
                key={ch.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`journey-step-tab phase-${ch.id} ${isActive ? 'is-active' : ''}`}
                onClick={() => handleStageSelect(idx)}
              >
                <div className="step-tab-header">
                  <span className="step-tab-num">{ch.index}</span>
                  <span className="step-tab-name">{ch.pillar}</span>
                  <span className="step-tab-dot" aria-hidden="true" />
                </div>
                <div className="step-tab-meta">
                  <span className="step-tab-tagline">{ch.tagline}</span>
                  <span className="step-tab-badge">{ch.badgeText}</span>
                </div>
                {/* Active progress indicator bar */}
                <div className="step-tab-progress" aria-hidden="true" />
              </button>
            )
          })}
        </div>

        {/* Mobile Swipe / Tap Navigation Hint */}
        <div className="journey-swipe-hint" aria-hidden="true">
          <span>← Swipe or tap stages →</span>
        </div>

        {/* Master Single-Card Journey Console with Touch Swipe Support */}
        <div
          ref={consoleCardRef}
          className="journey-console-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`journey-console-inner phase-${chapter.id}`}>
            {/* Left Story Column */}
            <div className="journey-story-col">
              <div className="journey-stage-badge-row">
                <span className="stage-number-pill">
                  <span className="stage-pulse-dot" />
                  {chapter.badgeText}
                </span>
                <span className={`story-pillar-badge is-${chapter.id}`}>{chapter.pillar}</span>
              </div>

              <h3 className="story-chapter-title">{chapter.title}</h3>
              <p className="story-chapter-summary">{chapter.summary}</p>

              <div className="story-points">
                {chapter.points.map((pt) => (
                  <div key={pt.title} className="story-point">
                    <div className={`story-point-icon is-${chapter.id}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <strong>{pt.title}</strong>
                      <span>{pt.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="journey-card-footer">
                <Button to={chapter.ctaLink} variant="secondary" className="story-btn">
                  {chapter.ctaText} →
                </Button>

                {/* Stage switcher navigation arrows */}
                <div className="journey-arrows-group">
                  <button
                    type="button"
                    className="journey-arrow-btn"
                    disabled={activeStage === 0}
                    onClick={() => {
                      setActiveStage((prev) => Math.max(0, prev - 1))
                      setIsPaused(true)
                    }}
                    aria-label="Previous Stage"
                  >
                    ←
                  </button>
                  <span className="journey-step-counter">
                    <strong>0{activeStage + 1}</strong> / 03
                  </span>
                  <button
                    type="button"
                    className="journey-arrow-btn"
                    disabled={activeStage === chapters.length - 1}
                    onClick={() => {
                      setActiveStage((prev) => Math.min(chapters.length - 1, prev + 1))
                      setIsPaused(true)
                    }}
                    aria-label="Next Stage"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Right Visual Mockup Column */}
            <div className="journey-visual-col">
              {chapter.renderVisual()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
