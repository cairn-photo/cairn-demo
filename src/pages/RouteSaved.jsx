import { Link } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import { route } from '../data/mockData'

export default function RouteSaved() {
  return (
    <section className="screen screen-light">
      <StatusBar theme="light" />

      <p className="route-saved-label">ROUTE SAVED</p>
      <h1 className="route-saved-title">
        {route.date} · West Side
      </h1>
      <p className="route-saved-sub">{route.subtitle}</p>

      <div className="route-map-preview" aria-hidden="true" />

      <div className="stats-row">
        <div className="record-stat">
          <strong>{route.distanceKm} km</strong>
          <span>DISTANCE</span>
        </div>
        <div className="record-stat">
          <strong>{route.duration}</strong>
          <span>DURATION</span>
        </div>
        <div className="record-stat">
          <strong>{route.cellsLit}</strong>
          <span>CELLS LIT</span>
        </div>
      </div>

      <div className="empty-state-box">
        <h2>還沒有照片</h2>
        <p>
          加入這趟拍的照片，系統會用拍攝時間自動排到路線上對應的位置。
        </p>
      </div>

      <div className="page-footer-stack">
        <Link className="btn btn-primary-dark btn-block" to="/upload">
          Add photos
        </Link>
        <Link className="btn btn-light btn-block" to="/map">
          Later
        </Link>
      </div>
    </section>
  )
}
