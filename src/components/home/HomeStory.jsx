import { Link } from 'react-router-dom'
import StageLine from '../site/StageLine'
import Reveal from '../ui/Reveal'
import { testimonials } from '../../data/testimonials'
import WorkPortfolio, { Arrow, padIndex } from '../work/WorkPortfolio'
import { clientSites } from '../../data/clientSites'

const why = [
  ['01', 'Ownership', 'Repository, domain, and server credentials at handover. No seat license on our stack.'],
  ['02', 'Direct collaboration', 'You work with Pankaj Gupta and Rusmeen. A reply usually comes the same business day, India time.'],
  ['03', 'Practical delivery', 'A focused website, once the scope is fixed, can launch in 7 days. Applications use their own milestone plan.'],
  ['04', 'Transparent engagement', 'A typical split is 30% to start, 40% at staging, and 30% at handover. A focused launch includes 30 days of warranty.'],
]

const quote = testimonials[0]

export function SelectedWork() {
  const total = clientSites.length

  return (
    <section className="home-sheet home-work" aria-labelledby="work-title">
      <div className="home-wrap home-work-wrap">
        <Reveal className="work-intro">
          <div className="work-intro-copy">
            <p className="home-kicker">
              Selected work
              <span className="sr-only">
                , projects
                {' '}
                {padIndex(1)}
                {' '}
                through
                {' '}
                {padIndex(total)}
              </span>
            </p>
            <h2 id="work-title">
              Good work starts with
              <span className="work-intro-break"> understanding the business.</span>
            </h2>
            <p className="work-intro-lead">
              From specialist practices and handcrafted brands to security and technology businesses,
              we create digital experiences that make what you do easier to discover, understand, and choose.
            </p>
            <p className="work-intro-aside">
              Real businesses. Distinct challenges. Thoughtful digital solutions.
            </p>
          </div>
          <Link className="home-text-link work-intro-link" to="/work">
            All projects <Arrow />
          </Link>
        </Reveal>

        <WorkPortfolio limit={3} />

        <p className="work-lab">
          Nebula3D is a browser tool from the lab, not a client engagement.
          {' '}
          <Link to="/work/nebula-3d">See Nebula3D</Link>
        </p>
      </div>
    </section>
  )
}

export function Why() {
  return (
    <StageLine
      kicker="Why PixelToCloud"
      title="Built around your business, not a vendor lock-in."
      titleId="why-title"
      lead="The engagement is scoped with you. The code is yours when it ships."
      steps={why.map(([, title, text]) => ({ title, text }))}
    />
  )
}

export function ClientQuote() {
  return (
    <section className="home-sheet home-quote" aria-labelledby="quote-title">
      <Reveal className="home-wrap quote-edit">
        <p className="quote-mark" aria-hidden="true">“</p>
        <blockquote>
          <h2 id="quote-title" className="sr-only">What a client said</h2>
          <p>{quote.text}</p>
          <footer>
            <strong>{quote.name}</strong>
            <span>{quote.role}</span>
          </footer>
          <Link className="home-text-link" to="/work/easy-my-tax">Read the Easy My Tax case study <Arrow /></Link>
        </blockquote>
      </Reveal>
    </section>
  )
}

