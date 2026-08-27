import { Link } from 'react-router-dom'
import Map from '../components/Map'

export default function Launch() {
  return (
    <section className="screen screen-dark launch-screen">
      <header className="status-row">
        <span>9:41</span>
        <span className="status-icons">▮▮▮ ◍ ▰</span>
      </header>

      <div className="launch-stage">
        <Map theme="dark" />
        <div className="launch-overlay">
          <div className="launch-logo" aria-hidden="true" />
          <h1>Cairn</h1>
          <p>Mark the spot. Light the map.</p>
        </div>
      </div>

      <div className="launch-actions">
        <Link className="btn btn-primary" to="/record">
          Get started
        </Link>
        <Link className="btn btn-light" to="/map">
          Look around first
        </Link>
      </div>
    </section>
  )
}
