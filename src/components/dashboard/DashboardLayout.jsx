import { NavLink } from 'react-router-dom'
import Seo from '../seo/Seo'
import '../../pages/Auth.css'
import '../../pages/Dashboard.css'

const links = [
  ['/dashboard', 'Overview'],
  ['/dashboard/profile', 'Profile'],
  ['/dashboard/settings', 'Settings'],
]

export default function DashboardLayout({ title, description, children }) {
  return (
    <div className="ag dash">
      <Seo title={title} description={description} noindex />
      <div className="ag-wrap dash-shell">
        <nav className="dash-nav" aria-label="Account">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/dashboard'}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="dash-main">{children}</div>
      </div>
    </div>
  )
}
