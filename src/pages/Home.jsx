import { Link } from 'react-router-dom'
import Map from '../components/Map'
import { route, spots } from '../data/mockData'

export default function Home() {
  const mapPins = spots.map((spot, index) => ({
    id: spot.id,
    label: index < 2 ? String(spot.photoCount) : '',
    x: spot.x,
    y: spot.y,
    highlight: index > 0,
  }))

  return (
    <section className="screen screen-dark">
      <header className="top-chips">
        <button className="chip chip-active" type="button">
          Everyone
        </button>
        <button className="chip" type="button">
          Mine
        </button>
        <button className="chip chip-right" type="button">
          Vancouver
        </button>
      </header>

      <div className="city-progress">
        <p className="label">City lit</p>
        <p>{route.coverage}%</p>
        <div className="meter">
          <span style={{ width: `${route.coverage}%` }} />
        </div>
      </div>

      <Map theme="dark" pins={mapPins} />

      <footer className="panel panel-dark">
        <h2>Map Home</h2>
        <p>Tap a pin to open a spot, or start recording a new route.</p>
        <div className="actions-grid">
          <Link className="btn btn-light" to={`/spot/${spots[0].id}`}>
            Open spot
          </Link>
          <Link className="btn btn-primary" to="/upload">
            Upload flow
          </Link>
        </div>
      </footer>
    </section>
  )
}
