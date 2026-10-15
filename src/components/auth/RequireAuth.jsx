import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { loginPath } from '../../lib/supabase/middleware'

export default function RequireAuth({ children }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="container route-fallback" role="status">
        Checking your session…
      </div>
    )
  }

  if (!user) {
    return <Navigate to={loginPath(location.pathname, location.search)} replace />
  }

  return children
}
