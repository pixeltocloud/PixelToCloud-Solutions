import SectionHeading from '../ui/SectionHeading'
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
              <div className="founder-card-media">
                <img
                  src={person.image}
                  alt={`${person.name}, ${person.role}`}
                  width="960"
                  height="640"
                  style={{ objectPosition: person.frame }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="founder-card-body">
                <div className="founder-card-meta">
                  <span className="founder-card-role">{person.label}</span>
                  <span className="founder-card-exp">{person.experience.replace(' Experience', '')}</span>
                </div>
                <h3>{person.name}</h3>
                <p className="founder-bio">{person.role}. {person.bio}</p>
                {person.focusAreas ? (
                  <div className="founder-focus">
                    {person.focusAreas.map((area) => (
                      <span key={area}>{area}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
