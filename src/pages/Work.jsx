import FeaturedWork from '../components/sections/FeaturedWork'
import FinalCTA from '../components/sections/FinalCTA'
import PageInkHero from '../components/ui/PageInkHero'
import Seo from '../components/seo/Seo'
import './WorkPage.css'

export default function Work() {
  return (
    <div className="page-enter work-page">
      <Seo />
      <PageInkHero
        title="Selected work"
        description="Production client websites, specialized clinical portals, e-commerce stores, and custom software we designed, engineered, and shipped live."
        actions={[
          { label: 'Start a project', to: '/contact' },
          { label: 'Browse services', to: '/services', variant: 'secondary' },
        ]}
        points={[
          { label: 'Art & Commerce', detail: 'Interactive luxury craft e-commerce' },
          { label: 'Clinics', detail: 'Doctor and physiotherapy sites' },
          { label: 'Practices', detail: 'Tax and local businesses' },
          { label: 'Ownership', detail: 'You keep 100% of the code' },
        ]}
      />
      <FeaturedWork featuredOnly={false} compact hideHeading />
      <FinalCTA />
    </div>
  )
}
