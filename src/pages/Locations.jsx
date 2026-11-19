import { Link } from 'react-router-dom'
import Seo, { breadcrumb } from '../components/seo/Seo'
import { ContactBand } from '../components/site/px'
import { countries, indianStates, rajasthanDistricts } from '../data/places'

function PlaceList({ items }) {
  return (
    <ul className="px-occasions px-near">
      {items.map((place) => (
        <li key={place.slug}><Link to={`/locations/${place.slug}`}>{place.name}</Link></li>
      ))}
    </ul>
  )
}

export default function Locations() {
  return (
    <>
      <Seo
        title="Locations: Rajasthan, all of India and abroad | PixelToCloud"
        description="PixelToCloud builds websites, software and marketing for businesses in all 41 districts of Rajasthan, every Indian state and union territory, the UAE, USA, UK, Canada, Australia and more."
        path="/locations"
        schema={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }])}
      />
      <section className="px-detail-hero">
        <div className="px-wrap">
          <h1>Where we work</h1>
          <p className="px-hero-lede">
            Our studio is in Alwar, Rajasthan. We work with businesses in every district of Rajasthan,
            every state of India and in other countries, online by WhatsApp, phone and video call.
          </p>
        </div>
      </section>
      <section className="px-section">
        <div className="px-wrap">
          <div className="px-head">
            <h2>All 41 districts of Rajasthan</h2>
            <p>From Alwar and Jaipur to Jaisalmer and Banswara.</p>
          </div>
          <PlaceList items={rajasthanDistricts} />
        </div>
      </section>
      <section className="px-section is-mist">
        <div className="px-wrap">
          <div className="px-head">
            <h2>Every Indian state and union territory</h2>
            <p>The same prices and the same team, wherever you are in India.</p>
          </div>
          <PlaceList items={indianStates} />
        </div>
      </section>
      <section className="px-section">
        <div className="px-wrap">
          <div className="px-head">
            <h2>Outside India</h2>
            <p>Prices in US dollars and calls in your time zone.</p>
          </div>
          <PlaceList items={countries} />
        </div>
      </section>
      <ContactBand />
    </>
  )
}
