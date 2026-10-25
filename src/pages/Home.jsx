import Seo from '../components/seo/Seo'
import HeroCarousel from '../components/home/HeroCarousel'
import HomeExpertise from '../components/home/HomeExpertise'
import ScrollProgress from '../components/home/ScrollProgress'
import { CtaBand } from '../components/site/blocks'
import { ClientQuote, SelectedWork, Why } from '../components/home/HomeStory'
import { brand } from '../config/brand'
import './Home.css'

export default function Home() {
  return (
    <div className="home home--studio">
      <Seo
        title={`${brand.name} — Websites, software, and AI`}
        description="Websites, custom software, and automation. Offices in Gurugram and Alwar. You keep the source code."
        path="/"
      />
      <ScrollProgress />
      <HeroCarousel />
      <SelectedWork />
      <HomeExpertise />
      <Why />
      <ClientQuote />
      <CtaBand />
    </div>
  )
}
