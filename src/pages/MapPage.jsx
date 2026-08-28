import { Link } from 'react-router-dom'
import Map from '../components/Map'
import StatusBar from '../components/StatusBar'
import { route, spots } from '../data/mockData'

export default function MapPage() {
  const mapPins = spots.map((spot) => ({
    id: spot.id,
    label: spot.size === 'lg' || spot.size === 'md' ? String(spot.photoCount || '') : '',
    x: spot.x,
    y: spot.y,
    size: spot.size,
    highlight: spot.highlight,
  }))

  return (
    <section className="screen screen-dark map-screen">
      <StatusBar theme="dark" />

      <header className="top-chips">
        <button className="chip chip-active" type="button">
          Everyone
        </button>
        <button className="chip" type="button">
          Mine
        </button>
        <button className="chip chip-right" type="button">
          Vancouver ▾
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
        <Link to="/spot/jericho-pier">Tap a pin →</Link>
        <span>◎ Locate</span>
      </div>
    </section>
  )
}
