import { Link } from 'react-router-dom'
import DashboardLayout from '../components/dashboard/DashboardLayout'

export default function DashboardProjects() {
  return (
    <DashboardLayout title="Projects | PixelToCloud" description="Projects on your PixelToCloud account.">
      <h1>Projects</h1>
      <p className="dash-lead">Work we take on together will be listed here, including proposals, files, and launch status.</p>
      <Link className="ag-btn ag-btn-solid" to="/contact">Start a project</Link>
    </DashboardLayout>
  )
}
