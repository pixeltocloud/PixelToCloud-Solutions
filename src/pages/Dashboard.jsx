import { Link } from 'react-router-dom'
import DashboardLayout from '../components/dashboard/DashboardLayout'
import { useAuth } from '../hooks/useAuth'

export default function Dashboard() {
  const { user, profile } = useAuth()
  const name = profile?.full_name?.split(' ')[0] || user?.user_metadata?.full_name?.split(' ')[0] || user?.user_metadata?.name?.split(' ')[0]

  return (
    <DashboardLayout title="Dashboard | PixelToCloud" description="Your PixelToCloud account.">
      <h1>{name ? `Welcome back, ${name}.` : 'Welcome back.'}</h1>
      <p className="dash-lead">Your profile and settings are here. Project rooms open when a project is underway.</p>
      {!profile?.full_name ? <p className="dash-lead"><Link to="/dashboard/profile">Add your name</Link> so we know who to ask for.</p> : null}
      <Link className="ag-btn ag-btn-solid" to="/start-project">Start a project</Link>
    </DashboardLayout>
  )
}
