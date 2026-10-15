import { useState } from 'react'
import { Link } from 'react-router-dom'
import { contact } from '../../data/founders'
import { testimonials } from '../../data/testimonials'
import { articles } from '../../data/catalog'

const metrics = [
  ['7 days', 'Focused launch', 'A focused website, once the scope is fixed. Miss it and that payment is returned.'],
  ['100%', 'Handover', 'Source code, domain, and server access at handover.'],
  ['30 days', 'Warranty', 'Warranty after a focused launch. Maintenance after that is optional.'],
  ['2 founders', 'Who builds it', 'Pankaj Gupta and Rusmeen do the work.'],
]

const stages = [
  ['01', 'Build', 'Websites, web apps, and the software the business actually runs on.', '/services'],
  ['02', 'Grow', 'Landing pages, search funnels, and a next step a visitor can take.', '/start-project'],
  ['03', 'Automate', 'WhatsApp flows and document extraction, with a person when it is not routine.', '/services/ai-automation'],
]

const reasons = [
  ['You own the code', 'Repository, domain, and server credentials at handover. No seat license on our stack.'],
  ['You talk to the founders', 'Pankaj Gupta and Rusmeen. A reply usually comes the same business day, India time.'],
  ['A focused site can launch in 7 days', 'Only after the scope is fixed. Applications use their own milestone plan.'],
  ['Milestones you can see', 'A typical split is 30% to start, 40% at staging, and 30% at handover.'],
  ['No vendor lock-in', 'The site should keep running if we are not on the account.'],
]

const stack = ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Cloudflare', 'WhatsApp']

const questions = [
  ['Who owns the source code after delivery?', 'You do. Launch includes the Git repository, domain access, and server credentials. There is no proprietary lock or recurring seat license.'],
  ['How much does a project cost?', 'A focused website starts at $100 USD for the first 100 customers. Custom applications are quoted as fixed milestones, often from ₹75,000 upward, and are not the same offer.'],
  ['How long does an MVP take?', 'A focused website with the scope fixed first launches within 7 days, or that payment is returned. Portals, mobile products, and integrations use a longer milestone schedule. Published case studies took between 2 and 8 weeks.'],
  ['Can you connect our existing tools?', 'Yes, when the connection is part of the scoped milestone. We do not promise a connector we have not reviewed.'],
  ['Do you provide maintenance?', 'A focused launch includes 30 days of warranty. Ongoing hosting, backups, and fixes are optional and quoted separately.'],
  ['Can you build AI and WhatsApp automations?', 'Yes. The common reply goes out first. A person takes the rest. We do not promise an accuracy rate we have not measured on your documents.'],
  ['How do you handle data security?', 'We can sign a mutual NDA before a detailed discussion. We do not publish a security certification. Server access is yours at handover.'],
  ['How do we get started?', 'Book a 15-minute intro call on WhatsApp, or send the project form. A reply usually comes the same business day, India time.'],
]

export function TrustBar() {
  const names = ['Easy My Tax', 'Harish Renova', 'Saini Handicrafts', 'Revital Physiocare']
  return (
    <section className="home-trustbar" aria-label="Clients">
      <div className="home-wrap">
        <p>Shipped for</p>
        <ul>
          {names.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  )
}

export function Metrics() {
  return (
    <section className="home-band home-metrics-band" aria-label="What a focused engagement includes">
      <div className="home-wrap">
        <ul className="home-metrics">
          {metrics.map(([value, label, detail]) => (
            <li key={value}>
              <strong>{value}</strong>
              <b>{label}</b>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ProcessBand() {
  return (
    <section className="home-band alt" aria-labelledby="process-title">
      <div className="home-wrap">
        <div className="home-head">
          <div>
            <p className="home-kicker">Build · Grow · Automate</p>
            <h2 id="process-title">Three stages, one handover</h2>
          </div>
        </div>
        <ol className="home-steps">
          {stages.map(([num, title, text, to]) => (
            <li key={num}>
              <b>{num}</b>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link to={to}>See how this starts</Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function WhyBand() {
  return (
    <section className="home-band" aria-labelledby="why-title">
      <div className="home-wrap">
        <div className="why-layout">
          <div>
            <p className="home-kicker">Why PixelToCloud</p>
            <h2 id="why-title">What you can count on</h2>
            <p className="why-lead">The two founders do the work. The code is yours when it ships.</p>
          </div>
        <ul className="home-why">
          {reasons.map(([title, text]) => (
            <li key={title}><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  )
}

export function StackBand() {
  return (
    <section className="home-band alt" aria-labelledby="stack-title">
      <div className="home-wrap home-stack">
        <h2 id="stack-title">Technology on the work</h2>
        <ul>
          {stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  )
}

export function Quotes() {
  return (
    <section className="home-band" aria-labelledby="quotes-title">
      <div className="home-wrap">
        <div className="home-head">
          <div>
            <p className="home-kicker">Testimonials</p>
            <h2 id="quotes-title">What clients say</h2>
          </div>
        </div>
        <ul className="home-quotes">
          {testimonials.map((item) => (
            <li key={item.name}>
              <p>“{item.text}”</p>
              <footer>{item.name}<small>{item.role}</small></footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Insights() {
  return (
    <section className="home-band alt" aria-labelledby="insights-title">
      <div className="home-wrap">
        <div className="home-head">
          <div>
            <p className="home-kicker">Insights</p>
            <h2 id="insights-title">Notes from the studio</h2>
          </div>
          <Link to="/insights">All notes</Link>
        </div>
        <ul className="home-notes">
          {articles.map((article) => (
            <li key={article.slug}>
              <p className="home-kicker">{article.topic} · {article.date}</p>
              <h3><Link to={`/insights/${article.slug}`}>{article.title}</Link></h3>
              <p>{article.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FaqBand() {
  const [open, setOpen] = useState(0)
  return (
    <section className="home-band" aria-labelledby="faq-title">
      <div className="home-wrap home-faq">
        <h2 id="faq-title">Questions</h2>
        <div>
          {questions.map(([question, answer], index) => {
            const expanded = open === index
            return (
              <div key={question} className="faq-item">
                <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? -1 : index)}>
                  {question}
                  <span aria-hidden="true">{expanded ? '–' : '+'}</span>
                </button>
                <div className={expanded ? 'faq-panel is-open' : 'faq-panel'}>
                  <p>{answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function CloseBand() {
  return (
    <section className="home-close">
      <div className="home-wrap">
        <h2>Have a project idea? Let’s build something remarkable.</h2>
        <p>Tell us what you’re trying to build. We’ll help you explore the right approach and next steps.</p>
        <div className="home-actions">
          <a className="home-btn home-btn-light" href={contact.appointmentLink} target="_blank" rel="noreferrer">Book an intro call</a>
          <a className="home-btn home-btn-ghost" href={contact.whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
