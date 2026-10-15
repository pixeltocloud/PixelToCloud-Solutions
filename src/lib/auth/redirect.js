const REDIRECT_KEY = 'ptc-auth-redirect'

export function safeRedirect(value, fallback = '/dashboard') {
  if (typeof value !== 'string') return fallback
  const path = value.trim()
  if (!path.startsWith('/') || path.startsWith('//') || path.includes('\\') || path.includes('://')) return fallback
  if (path.toLowerCase().includes('%2f%2f')) return fallback
  if (path.startsWith('/login') || path.startsWith('/sign-in') || path.startsWith('/register') || path.startsWith('/auth/')) {
    return fallback
  }
  return path
}

export function rememberRedirect(value) {
  const path = safeRedirect(value)
  sessionStorage.setItem(REDIRECT_KEY, path)
  return path
}

export function takeRedirect(fallback = '/dashboard') {
  const stored = sessionStorage.getItem(REDIRECT_KEY)
  sessionStorage.removeItem(REDIRECT_KEY)
  return safeRedirect(stored, fallback)
}
