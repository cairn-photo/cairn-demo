import { Link } from 'react-router-dom'
import Map from '../components/Map'

const pathPoints = [
  { x: 30, y: 74 },
  { x: 35, y: 63 },
  { x: 41, y: 58 },
  { x: 49, y: 51 },
  { x: 54, y: 44 },
  { x: 61, y: 39 },
  { x: 66, y: 34 },
]

export default function RecordActive() {
  return (
    <section className="screen screen-dark record-screen">
      <header className="status-row record-status">
        <span>9:41</span>
        <span className="status-icons">▮▮▮ ◍ ▰</span>
      </header>

      <div className="record-topline">
        <span className="record-chip-active">● Recording</span>
        <span className="gps-pill">GPS ●●●●</span>
      </div>

      <Map theme="dark" pathPoints={pathPoints} showPath />

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
        <Link className="btn btn-primary" to="/upload">
          Finish
        </Link>
      </div>
    </section>
  )
}
