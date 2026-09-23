import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Pillars from '../components/sections/Pillars'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'
import PageInkHero from '../components/ui/PageInkHero'
import Seo from '../components/seo/Seo'
import { contact } from '../data/founders'

export default function ServicesPage() {
  return (
    <div className="page-enter services-page">
      <Seo />
      <PageInkHero
        title="Website & product engineering that owns the outcome"
        description="High-converting sites, custom CRM portals, growth funnels, and AI automation—built with 100% source-code ownership, fixed-scope milestones, and founder-led delivery."
        actions={[
          { label: 'Start a project', to: '/contact' },
          {
            label: 'WhatsApp us',
            href: contact.whatsappLink,
            target: '_blank',
            rel: 'noreferrer',
            variant: 'secondary',
          },
        ]}
        points={[
          { label: '10–14 day', detail: 'MVP sprints for focused builds' },
          { label: '100% IP', detail: 'Code, assets & credentials yours' },
          { label: 'Founder-led', detail: 'Direct access—no sales layer' },
          { label: 'Fixed scope', detail: 'Milestone payments only' },
        ]}
      />
      <Pillars />
      <Services detailed hideHeading />
      <Process />
      <FinalCTA />
      <FAQ mode="faq" />
    </div>
  )
}
