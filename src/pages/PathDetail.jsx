import { Link, useParams } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import { route, spots } from '../data/mockData'

export default function PathDetail() {
  const { pathId } = useParams()
  const isCurrentRoute = pathId === route.id

  return (
    <section className="screen screen-light">
      <StatusBar theme="light" />

      <div className="path-hero" aria-hidden="true" />

      <header className="path-header">
        <div className="path-header-top">
          <p className="label">AUG 26 · VANCOUVER</p>
          <button className="path-menu" type="button">
            ⋯
          </button>
        </div>
        <h1>{isCurrentRoute ? route.title : 'Route detail'}</h1>
        <p>
          {route.distanceKm} km · {route.duration} · {route.spotCount} spots · {route.author}
        </p>
      </header>

      <div className="path-actions">
        <button className="btn btn-light" type="button">
          Save route
        </button>
        <Link className="btn btn-light" to="/community">
          Share
        </Link>
      </div>

      {spots.slice(0, 2).map((spot, index) => (
        <section className="spot-section" key={spot.id}>
          <div className="spot-section-header">
            <span className="num">{index + 1}</span>
            <h2>{spot.name}</h2>
            <time>{spot.time}</time>
          </div>
          <div className="spot-hero-photo" aria-hidden="true" />
          <p className="spot-exif">{spot.exposure}</p>
        </section>
      ))}
    </section>
  )
}
