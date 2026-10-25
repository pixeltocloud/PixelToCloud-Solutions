import Seo from '../components/seo/Seo'
import HeroCarousel from '../components/home/HeroCarousel'
import HomeTicker from '../components/home/HomeTicker'
import HomeExpertise from '../components/home/HomeExpertise'
import ScrollProgress from '../components/home/ScrollProgress'
import { ClientQuote, Close, Journey, SelectedWork, Why } from '../components/home/HomeStory'
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
      <HomeTicker />
      <SelectedWork />
      <HomeExpertise />
      <Journey />
      <Why />
      <ClientQuote />
      <Close />
    </div>
  )
}
