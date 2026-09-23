import Founders from '../components/sections/Founders'
import WhyPixelToCloud from '../components/sections/WhyPixelToCloud'
import Testimonials from '../components/sections/Testimonials'
import Process from '../components/sections/Process'
import FinalCTA from '../components/sections/FinalCTA'
import PageInkHero from '../components/ui/PageInkHero'
import Seo from '../components/seo/Seo'
import { contact } from '../data/founders'
import './AboutPage.css'

export default function About() {
  return (
    <div className="page-enter about-page">
      <Seo />
      <PageInkHero
        title="A website development agency run by engineers"
        description="PixelToCloud is co-founded by Pankaj Gupta and Rusmeen. We bridge conversion-focused frontend craft, custom software, and reliable cloud delivery—with full ownership for every client."
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
          { label: 'Founder-led', detail: 'You talk to the builders' },
          { label: '8+ / 5+ yrs', detail: 'Combined senior delivery' },
          { label: '100% IP', detail: 'Code & credentials yours' },
          { label: 'Alwar · World', detail: 'Remote-first, worldwide' },
        ]}
      />
      <Founders />
      <WhyPixelToCloud />
      <Process />
      <Testimonials />
      <FinalCTA />
    </div>
  )
}
