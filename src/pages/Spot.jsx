import { Link, useParams } from 'react-router-dom'
import Map from '../components/Map'
import StatusBar from '../components/StatusBar'
import { routePathPoints, spots } from '../data/mockData'

export default function Spot() {
  const { spotId } = useParams()
  const spot = spots.find((item) => item.id === spotId) ?? spots[0]

  const pins = spots.map((item) => ({
    id: item.id,
    x: item.x,
    y: item.y,
    size: item.size,
    highlight: item.id === spot.id,
    label: item.size === 'lg' || item.size === 'md' ? String(item.photoCount || '') : '',
  }))

  return (
    <section className="screen screen-dark spot-screen">
      <div className="spot-map-layer">
        <StatusBar theme="dark" />
        <Map theme="dark" pins={pins} pathPoints={routePathPoints} showPath />
      </div>

      <div className="spot-sheet">
        <div className="spot-sheet-handle" aria-hidden="true" />
        <div className="spot-sheet-header">
          <h1>{spot.name}</h1>
          <span className="spot-photo-count">{spot.photoCount} PHOTOS</span>
        </div>
        <p className="spot-subtitle">{spot.note}</p>

        <div className="spot-photo-row" aria-hidden="true">
          {[0, 1, 2].map((index) => (
            <div className="spot-photo-thumb" key={index} />
          ))}
        </div>

        <div className="exif-pills">
          <span className="exif-pill">35mm</span>
          <span className="exif-pill">f/8</span>
          <span className="exif-pill">1/250</span>
          <span className="exif-pill">ISO 100</span>
        </div>

        {spot.headsUp ? (
          <div className="heads-up">
            <p className="heads-up-label">HEADS UP</p>
            <p>{spot.headsUp}</p>
          </div>
        ) : null}

        <Link className="btn btn-outline-dark btn-block" to="/upload">
          View all photos here
        </Link>
      </div>
    </section>
  )
}
