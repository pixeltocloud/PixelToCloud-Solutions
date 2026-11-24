import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { GA_MEASUREMENT_ID } from '../../config/analytics'

function analyticsOptedOut() {
  try {
    return navigator.doNotTrack === '1' || localStorage.getItem('ptc-analytics') === 'off'
  } catch {
    return navigator.doNotTrack === '1'
  }
}

let gaLoaded = false

function loadGa(id) {
  if (gaLoaded) return
  gaLoaded = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  // The SPA sends its own page_view on every route change below.
  window.gtag('config', id, { send_page_view: false })
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  document.head.appendChild(script)
}

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (analyticsOptedOut()) return undefined
    // Keep sign-in and the private client portal out of analytics.
    if (/^\/(dashboard|account|auth)(\/|$)/.test(location.pathname)) return undefined

    let timer
    if (GA_MEASUREMENT_ID) {
      loadGa(GA_MEASUREMENT_ID)
      // Wait a tick so the page's <title> has been updated by <Seo />.
      timer = window.setTimeout(() => {
        window.gtag('event', 'page_view', {
          page_path: location.pathname,
          page_location: window.location.origin + location.pathname,
          page_title: document.title,
        })
      }, 0)
    }

    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT
    if (endpoint) {
      try {
        navigator.sendBeacon?.(
          endpoint,
          JSON.stringify({ path: location.pathname, referrer: document.referrer || null, ts: Date.now() }),
        )
      } catch {
        // ignore analytics failures
      }
    }

    return () => window.clearTimeout(timer)
  }, [location.pathname])

  return null
}
