import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { labs } from '../data/labs'

export default function Labs() {
  return (
    <div className="ag ag-page">
      <Seo title={`Labs | ${brand.name}`} description="Capabilities the studio applies on client work, plus one labeled lab project." path="/labs" />
      <section className="ag-hero">
        <div className="ag-wrap">
          <p className="ag-eye">LAB</p>
          <h1>Capabilities we apply on client work</h1>
          <p className="ag-lead">Nebula3D is a lab project, not a client engagement. The other notes describe how we deliver.</p>
        </div>
      </section>
      <section className="ag-sheet">
        <div className="ag-wrap">
          <ul className="ag-list">
            {labs.map((lab) => (
              <li key={lab.id}>
                <Link to={lab.href}>
                  <strong>{lab.title}</strong>
                  <span>{lab.tag}. {lab.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
