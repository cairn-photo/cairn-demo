import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <section className="screen screen-light profile-screen">
      <header className="path-header">
        <p className="label">PROFILE</p>
        <h1>Andrew</h1>
        <p>4 routes · 12 spots · Vancouver</p>
      </header>

      <div className="panel profile-card">
        <div className="profile-avatar" aria-hidden="true" />
        <div>
          <h2>Route builder</h2>
          <p>Track, publish, and share photo routes from your camera roll.</p>
        </div>
      </div>

      <div className="actions-grid profile-actions">
        <Link className="btn btn-light" to="/map">
          Back to map
        </Link>
        <Link className="btn btn-primary" to="/path/west-side-golden-hour">
          View route
        </Link>
      </div>
    </section>
  )
}
