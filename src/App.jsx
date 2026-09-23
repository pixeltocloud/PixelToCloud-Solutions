import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Seo from './components/seo/Seo'
import Analytics from './components/seo/Analytics'
import Home from './pages/Home'
import './styles/globals.css'
import './styles/components.css'
import './styles/animations.css'

const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const WorkDetail = lazy(() => import('./pages/WorkDetail'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Labs = lazy(() => import('./pages/Labs'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

function scrollToHash(hash, attempt = 0) {
  const id = hash.replace('#', '')
  if (!id) return
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }
  if (attempt < 12) {
    window.setTimeout(() => scrollToHash(hash, attempt + 1), 50 + attempt * 25)
  }
}

function SmoothAnchors() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) return
      const hash = link.getAttribute('href')
      if (!hash || hash === '#') return
      const el = document.getElementById(hash.slice(1))
      if (!el) return
      event.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.pushState(null, '', hash)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => scrollToHash(location.hash))
      return
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}

function RouteFallback() {
  return (
    <div className="container route-fallback" role="status" aria-live="polite">
      Loading…
    </div>
  )
}

function AppShell() {
  return (
    <div className="app-shell">
      <ScrollManager />
      <SmoothAnchors />
      <Analytics />
      <Navbar />
      <main id="main-content" className="site-main">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Seo />
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  )
}
