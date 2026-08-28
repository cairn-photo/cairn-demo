import { Link } from 'react-router-dom'
import Map from '../components/Map'
import StatusBar from '../components/StatusBar'
import { recordPathPoints } from '../data/mockData'

export default function RecordActive() {
  return (
    <section className="screen screen-dark record-screen">
      <StatusBar theme="dark" />

      <div className="record-topline">
        <span className="record-chip-active">● Recording</span>
        <span className="gps-pill">GPS ●●●●</span>
      </div>

      <Map theme="dark" pathPoints={recordPathPoints} showPath />

      <div className="record-sheet">
        <div className="record-sheet-handle" aria-hidden="true" />
        <div className="record-hud">
          <div className="record-stat">
            <strong>01:12:40</strong>
            <span>ELAPSED</span>
          </div>
          <div className="record-stat">
            <strong>3.4 km</strong>
            <span>DISTANCE</span>
          </div>
          <div className="record-stat">
            <strong>6</strong>
            <span>CELLS LIT</span>
          </div>
        </div>

        <div className="record-actions">
          <Link className="btn btn-light" to="/record">
            Pause
          </Link>
          <Link className="btn btn-primary" to="/route-saved">
            Finish
          </Link>
        </div>
      </div>
    </section>
  )
}
