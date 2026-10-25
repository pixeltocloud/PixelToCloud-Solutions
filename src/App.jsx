import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import OfferPopup from './components/offers/OfferPopup'
import RequireAuth from './components/auth/RequireAuth'
import Seo from './components/seo/Seo'
import Analytics from './components/seo/Analytics'
import Home from './pages/Home'
import { AuthProvider } from './context/AuthContext'
import './styles/globals.css'
import './styles/components.css'
import './styles/animations.css'
import './styles/agency.css'
import './styles/motion.css'

const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Work = lazy(() => import('./pages/Work'))
const WorkDetail = lazy(() => import('./pages/WorkDetail'))
const About = lazy(() => import('./pages/About'))
const Process = lazy(() => import('./pages/Process'))
const Industries = lazy(() => import('./pages/Industries'))
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'))
const Insights = lazy(() => import('./pages/Insights'))
const InsightArticle = lazy(() => import('./pages/InsightArticle'))
const Contact = lazy(() => import('./pages/Contact'))
const StartProject = lazy(() => import('./pages/StartProject'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const Labs = lazy(() => import('./pages/Labs'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Cookies = lazy(() => import('./pages/Cookies'))
const NotFound = lazy(() => import('./pages/NotFound'))
const SignInRedirect = lazy(() => import('./pages/Login').then((mod) => ({ default: mod.LegacyAuthRedirect })))
const Login = lazy(() => import('./pages/Login'))
const AuthCallback = lazy(() => import('./pages/AuthCallback'))
const AuthError = lazy(() => import('./pages/AuthError'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const DashboardProfile = lazy(() => import('./pages/DashboardProfile'))
const DashboardProjects = lazy(() => import('./pages/DashboardProjects'))
const DashboardEnquiries = lazy(() => import('./pages/DashboardEnquiries'))
const DashboardSettings = lazy(() => import('./pages/DashboardSettings'))
const Proposals = lazy(() => import('./pages/portal').then((mod) => ({ default: mod.Proposals })))
const ProposalDetail = lazy(() => import('./pages/portal').then((mod) => ({ default: mod.ProposalDetail })))
const Invoices = lazy(() => import('./pages/portal').then((mod) => ({ default: mod.Invoices })))
const Messages = lazy(() => import('./pages/portal').then((mod) => ({ default: mod.Messages })))
const Files = lazy(() => import('./pages/portal').then((mod) => ({ default: mod.Files })))
const ProjectDetail = lazy(() => import('./pages/portal').then((mod) => ({ default: mod.ProjectDetail })))

function motionBehavior() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

function scrollToHash(hash, attempt = 0) {
  const id = hash.replace('#', '')
  if (!id) return
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: motionBehavior(), block: 'start' })
    return
  }
  if (attempt < 12) {
    window.setTimeout(() => scrollToHash(hash, attempt + 1), 50 + attempt * 25)
  }
}

function GlideScroll() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduce.matches) return undefined

    let target = window.scrollY
    let current = window.scrollY
    let frame = 0
    let driving = false

    const limit = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight)

    const tick = () => {
      current += (target - current) * 0.18
      if (Math.abs(target - current) < 0.5) current = target
      driving = true
      window.scrollTo(0, current)
      driving = false
      frame = current === target ? 0 : window.requestAnimationFrame(tick)
    }

    const onWheel = (event) => {
      if (event.ctrlKey || event.defaultPrevented) return
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return
      if (document.body.style.overflow === 'hidden') return
      let node = event.target
      while (node && node !== document.body) {
        const style = window.getComputedStyle(node)
        if (/(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 4) return
        node = node.parentElement
      }
      event.preventDefault()
      target = Math.min(limit(), Math.max(0, target + event.deltaY))
      if (!frame) frame = window.requestAnimationFrame(tick)
    }

    const onScroll = () => {
      if (driving) return
      target = window.scrollY
      current = window.scrollY
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return null
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
      el.scrollIntoView({ behavior: motionBehavior(), block: 'start' })
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
  const location = useLocation()
  const quiet = location.pathname.startsWith('/auth/')
  const portal = location.pathname.startsWith('/dashboard') || location.pathname === '/account'

  return (
    <div className="app-shell">
      <ScrollManager />
      <SmoothAnchors />
      <GlideScroll />
      <Analytics />
      {quiet ? null : <Navbar />}
      {quiet || portal ? null : <OfferPopup />}
      <main id="main-content" className={`site-main${quiet ? ' is-quiet' : ''}`}>
        <Suspense fallback={<RouteFallback />}>
          <div key={location.pathname} className="page-enter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/start-project" element={<StartProject />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-in" element={<SignInRedirect />} />
            <Route path="/register" element={<SignInRedirect />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/auth/error" element={<AuthError />} />
            <Route path="/account" element={<RequireAuth><DashboardProfile /></RequireAuth>} />
            <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
            <Route path="/dashboard/profile" element={<RequireAuth><DashboardProfile /></RequireAuth>} />
            <Route path="/dashboard/projects" element={<RequireAuth><DashboardProjects /></RequireAuth>} />
            <Route path="/dashboard/projects/:id" element={<RequireAuth><ProjectDetail /></RequireAuth>} />
            <Route path="/dashboard/proposals" element={<RequireAuth><Proposals /></RequireAuth>} />
            <Route path="/dashboard/proposals/:id" element={<RequireAuth><ProposalDetail /></RequireAuth>} />
            <Route path="/dashboard/invoices" element={<RequireAuth><Invoices /></RequireAuth>} />
            <Route path="/dashboard/messages" element={<RequireAuth><Messages /></RequireAuth>} />
            <Route path="/dashboard/files" element={<RequireAuth><Files /></RequireAuth>} />
            <Route path="/dashboard/enquiries" element={<RequireAuth><DashboardEnquiries /></RequireAuth>} />
            <Route path="/dashboard/settings" element={<RequireAuth><DashboardSettings /></RequireAuth>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
        </Suspense>
      </main>
      {quiet || portal ? null : <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <Seo />
          <AppShell />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
