import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { WhatsAppIcon, whatsappHref } from './components/site/px'
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
import './styles/site.css'
import './styles/legacy-bridge.css'
import { businessPages } from './data/businessPages'

const Services = lazy(() => import('./pages/Services'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Celebrations = lazy(() => import('./pages/Celebrations'))
const Locations = lazy(() => import('./pages/Locations'))
const Location = lazy(() => import('./pages/Location'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Work = lazy(() => import('./pages/Work'))
const WorkDetail = lazy(() => import('./pages/WorkDetail'))
const About = lazy(() => import('./pages/About'))
const Industries = lazy(() => import('./pages/Industries'))
const Clinics = lazy(() => import('./pages/Clinics'))
const BusinessLanding = lazy(() => import('./pages/BusinessLanding'))
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const StartProject = lazy(() => import('./pages/StartProject'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
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

let glideTo = null

function motionBehavior() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

function scrollTarget(el) {
  const margin = Number.parseFloat(getComputedStyle(el).scrollMarginTop) || 0
  return window.scrollY + el.getBoundingClientRect().top - margin
}

function scrollToHash(hash, attempt = 0) {
  const id = hash.replace('#', '')
  if (!id) return
  const el = document.getElementById(id)
  if (el) {
    if (glideTo) glideTo(scrollTarget(el))
    else el.scrollIntoView({ behavior: motionBehavior(), block: 'start' })
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
      if (glideTo) glideTo(scrollTarget(el))
      else el.scrollIntoView({ behavior: motionBehavior(), block: 'start' })
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
    if (glideTo) glideTo(0, true)
    else window.scrollTo(0, 0)
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
      <Analytics />
      {quiet ? null : <Navbar />}
      {quiet || portal ? null : (
        <a className="px-float" href={whatsappHref('Hi PixelToCloud, I would like to discuss my requirement.')} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"><WhatsAppIcon /></a>
      )}
      <main id="main-content" className={`site-main${quiet ? ' is-quiet' : ''}`}>
        <Suspense fallback={<RouteFallback />}>
          <div key={location.pathname} className="page-enter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/celebrations" element={<Celebrations />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:slug" element={<Location />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/easy-my-tax" element={<Navigate to="/work/easy-my-taxes" replace />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Navigate to="/work#engagement" replace />} />
            <Route path="/clinics" element={<Clinics />} />
            {businessPages.map((page) => (
              <Route key={page.slug} path={`/${page.slug}`} element={<BusinessLanding slug={page.slug} />} />
            ))}
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/insights/*" element={<Navigate to="/work#engagement" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/start-project" element={<StartProject />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/labs" element={<Navigate to="/work/nebula-3d" replace />} />
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
