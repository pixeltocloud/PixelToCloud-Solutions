import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { founders } from '../../data/founders'
import './Founders.css'

export default function Founders() {
  return (
    <section className="section founders" id="team">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Who you work with"
            description="A small senior team involved from first architecture decisions through launch and support."
          />
        </Reveal>
        <div className="founders-grid">
          {founders.map((person, index) => (
            <Reveal key={person.name} delay={index * 60} as="article" className="founder-card">
              <div className="founder-top">
                <img
                  src={person.imageFallback || person.image}
                  alt={`${person.name}, ${person.role}`}
                  width="112"
                  height="112"
                  loading="lazy"
                  decoding="async"
                />
                <span>{person.experience}</span>
              </div>
              <h3>{person.name}</h3>
              <p className="founder-role">{person.role}</p>
              <p className="founder-bio">{person.bio}</p>
              {person.focusAreas ? (
                <div className="founder-focus">
                  {person.focusAreas.map((area) => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
              ) : null}
              <div className="founder-foot">
                <span>{person.label}</span>
                {person.email ? (
                  <Button href={`mailto:${person.email}`} variant="ghost" className="founder-btn">
                    Email
                  </Button>
                ) : (
                  <Button to="/contact" variant="ghost" className="founder-btn">
                    Connect
                  </Button>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
