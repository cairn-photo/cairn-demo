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
      <header className="status-row">
        <span>9:41</span>
        <span className="status-icons">▮▮▮ ◍ ▰</span>
      </header>

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
        <p className="label">CITY LIT</p>
        <p className="city-value">{route.coverage}%</p>
        <div className="meter">
          <span style={{ width: `${route.coverage}%` }} />
        </div>
      </div>

      <Map theme="dark" pins={mapPins} />

      <div className="map-helpers">
        <span>Tap a pin →</span>
        <span>◎ Locate</span>
      </div>

      <div className="map-note">
        <h1>Cairn</h1>
        <p>Mark the spot. Light the map.</p>
        <div className="map-links">
          <Link className="btn btn-light" to={`/spot/${spots[0].id}`}>
            Open spot
          </Link>
          <Link className="btn btn-primary" to="/upload">
            Start recording
          </Link>
        </div>
      </div>
    </section>
  )
}
