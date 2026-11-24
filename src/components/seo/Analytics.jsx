import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { GA_MEASUREMENT_ID } from '../../config/analytics'

function optedOut() {
  let off = false
  try {
    off = localStorage.getItem('ptc-analytics') === 'off'
  } catch {
    // storage can be blocked (private mode, strict privacy settings)
  }
  // navigator.webdriver is true for the build-time prerender browser, so builds don't count as visits.
  return off || navigator.doNotTrack === '1' || navigator.webdriver === true
}

// Sign-in and the private client portal stay out of analytics.
const PRIVATE_PATH = /^\/(dashboard|account|auth|login)(\/|$)/

let gaLoaded = false

function loadGoogleAnalytics(id) {
  if (gaLoaded) return
  gaLoaded = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  // GA4's enhanced measurement counts later in-app page changes from browser history events.
  window.gtag('config', id)
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  document.head.appendChild(script)
}

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (optedOut()) return undefined

    if (GA_MEASUREMENT_ID && !PRIVATE_PATH.test(location.pathname)) {
      loadGoogleAnalytics(GA_MEASUREMENT_ID)
    }

    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT
    if (!endpoint) return undefined

    const payload = {
      path: location.pathname,
      referrer: document.referrer || null,
      ts: Date.now(),
    }

    try {
      navigator.sendBeacon?.(endpoint, JSON.stringify(payload))
    } catch {
      // ignore analytics failures
    }

    return undefined
  }, [location.pathname])

  return null
}
