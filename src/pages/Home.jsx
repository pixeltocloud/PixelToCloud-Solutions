import Seo from '../components/seo/Seo'
import HeroCarousel from '../components/home/HeroCarousel'
import HomeExpertise from '../components/home/HomeExpertise'
import { ClientQuote, Close, Journey, SelectedWork, Why } from '../components/home/HomeStory'
import { brand } from '../config/brand'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Seo
        title={`${brand.name} — Websites, software, and AI`}
        description="Websites, custom software, and AI automation. You keep the source code."
        path="/"
      />
      <HeroCarousel />
      <SelectedWork />
      <HomeExpertise />
      <Journey />
      <Why />
      <ClientQuote />
      <Close />
    </div>
  )
}
