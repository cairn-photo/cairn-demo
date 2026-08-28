import { Link } from 'react-router-dom'
import Map from '../components/Map'
import StatusBar from '../components/StatusBar'

export default function Launch() {
  return (
    <section className="screen screen-dark launch-screen">
      <StatusBar theme="dark" />

      <div className="launch-stage">
        <Map theme="dark" />
        <div className="launch-overlay">
          <div className="launch-logo" aria-hidden="true" />
          <h1>Cairn</h1>
          <p>Mark the spot. Light the map.</p>
        </div>
      </div>

      <div className="launch-actions">
        <Link className="btn btn-primary btn-block" to="/sign-in">
          Get started
        </Link>
        <Link className="btn btn-light btn-block btn-outline-dark" to="/map">
          Look around first
        </Link>
      </div>
    </section>
  )
}
