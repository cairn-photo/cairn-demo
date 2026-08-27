import { Link, useParams } from 'react-router-dom'
import PhotoCard from '../components/PhotoCard'
import { route, spots } from '../data/mockData'

export default function PathDetail() {
  const { pathId } = useParams()
  const isCurrentRoute = pathId === route.id

  return (
    <section className="screen screen-light">
      <header className="path-header">
        <p className="label">{route.date} - {route.city}</p>
        <h1>{isCurrentRoute ? route.title : 'Route detail'}</h1>
        <p>
          {route.distanceKm} km - {route.duration} - {spots.length} spots
        </p>
      </header>

      <div className="hero-image" aria-hidden="true" />

      <div className="stats-row">
        <div>
          <strong>{route.distanceKm} km</strong>
          <small>Distance</small>
        </div>
        <div>
          <strong>{route.duration}</strong>
          <small>Duration</small>
        </div>
        <div>
          <strong>{route.cellsLit}</strong>
          <small>Cells lit</small>
        </div>
      </div>

      <section className="panel route-list">
        {spots.map((spot, index) => (
          <PhotoCard
            key={spot.id}
            title={`${index + 1}. ${spot.name}`}
            subtitle={`Captured at ${spot.time}`}
            meta={`${spot.lens} - ${spot.exposure}`}
          />
        ))}
      </section>

      <footer className="path-footer">
        <Link className="btn btn-light" to="/">
          Save route
        </Link>
        <Link className="btn btn-primary" to="/upload">
          Publish another
        </Link>
      </footer>
    </section>
  )
}
