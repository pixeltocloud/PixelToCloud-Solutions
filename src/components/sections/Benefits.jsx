import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import './Benefits.css'

const benefits = [
  {
    title: 'Customers find you first',
    description:
      'A clear website shows who you are, what you offer, and how to reach you—before they call a competitor.',
  },
  {
    title: 'Look established from day one',
    description:
      'People decide in seconds whether a business feels real. A professional site builds that trust immediately.',
  },
  {
    title: 'Inquiries come in while you work',
    description:
      'Forms, WhatsApp, and booking links collect leads around the clock—so growth is not stuck to office hours.',
  },
  {
    title: 'Explain your offer once, clearly',
    description: 'Services, proof, and next steps live in one place. Less repeating yourself on every call.',
  },
  {
    title: 'Own the platform',
    description: 'You keep the code, domain, and hosting credentials. No locked marketplace theme you cannot change.',
  },
  {
    title: 'Ready to grow with you',
    description:
      'Start with a marketing site. Add booking, portals, or custom tools later without throwing the foundation away.',
  },
]

export default function Benefits() {
  return (
    <section className="section benefits" id="benefits">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Why your business needs a website"
            description="A site is not decoration. It is how modern customers discover you, trust you, and take the next step."
          />
        </Reveal>

        <div className="benefits-list">
          {benefits.map((item, index) => (
            <Reveal key={item.title} delay={index * 35} as="article" className="benefit-row">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
