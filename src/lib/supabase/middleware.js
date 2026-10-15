const PUBLIC_EXACT = new Set(['/', '/services', '/work', '/about', '/contact', '/labs', '/privacy', '/terms', '/login'])

const PUBLIC_PREFIXES = ['/work/', '/auth/']

export function isPublicPath(pathname) {
  if (PUBLIC_EXACT.has(pathname)) return true
  return PUBLIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

export function isProtectedPath(pathname) {
  return pathname === '/dashboard' || pathname.startsWith('/dashboard/')
}

export function loginPath(pathname, search = '') {
  const destination = `${pathname}${search || ''}`
  return `/login?redirect=${encodeURIComponent(destination)}`
}
