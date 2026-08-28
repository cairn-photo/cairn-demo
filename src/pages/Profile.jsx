import { Link } from 'react-router-dom'
import StatusBar from '../components/StatusBar'

export default function Profile() {
  return (
    <section className="screen screen-light">
      <StatusBar theme="light" />

      <header className="profile-header">
        <h1>Super photographer</h1>
        <p>4 routes · 12 spots · Vancouver</p>
      </header>

      <div className="profile-card">
        <div className="profile-avatar" aria-hidden="true" />
        <div>
          <h2>Route builder</h2>
          <p>Track, publish, and share photo routes from your camera roll.</p>
        </div>
      </div>

      <div className="profile-actions btn-row-2">
        <Link className="btn btn-light" to="/map">
          Back to map
        </Link>
        <Link className="btn btn-primary-dark" to="/path/west-side-golden-hour">
          View route
        </Link>
      </div>
    </section>
  )
}
