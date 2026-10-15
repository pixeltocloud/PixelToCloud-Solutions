import { Link } from 'react-router-dom'
import DashboardLayout from '../components/dashboard/DashboardLayout'
import { useAuth } from '../hooks/useAuth'

const rooms = [
  ['/dashboard/projects', 'Projects', 'No active projects yet. Scope and milestones will show here.'],
  ['/dashboard/proposals', 'Proposals', 'Quotes we send you. None are stored on this account yet.'],
  ['/dashboard/invoices', 'Invoices', 'Payment status is shown only when it comes from our accounts.'],
  ['/dashboard/messages', 'Messages', 'Not a live inbox. Use email until messaging is connected.'],
  ['/dashboard/files', 'Files', 'Private files stay off this page until storage is connected.'],
  ['/dashboard/profile', 'Profile', 'The name and company we use when we call you back.'],
]

export default function Dashboard() {
  const { user, profile } = useAuth()
  const name = profile?.full_name?.split(' ')[0] || user?.user_metadata?.full_name?.split(' ')[0] || user?.user_metadata?.name?.split(' ')[0]

  return (
    <DashboardLayout title="Dashboard | PixelToCloud" description="Your PixelToCloud account.">
      <h1>{name ? `Welcome back, ${name}.` : 'Welcome back.'}</h1>
      <p className="dash-lead">This is your side of the studio. Lists below are empty until a project is underway. Nothing here is sample client data.</p>
      {!profile?.full_name ? <p className="dash-lead"><Link to="/dashboard/profile">Add your name</Link> so we know who to ask for.</p> : null}
      <ul className="dash-list">
        {rooms.map(([to, title, detail]) => (
          <li key={to}>
            <Link to={to}>
              <strong>{title}</strong>
              <span>{detail}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link className="btn btn-primary" to="/start-project">Start a project</Link>
    </DashboardLayout>
  )
}
