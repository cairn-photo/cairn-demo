import { Link, useParams } from 'react-router-dom'
import Map from '../components/Map'
import PhotoCard from '../components/PhotoCard'
import { routePathPoints, spots } from '../data/mockData'

export default function Spot() {
  const { spotId } = useParams()
  const spot = spots.find((item) => item.id === spotId) ?? spots[0]

  const pins = spots.map((item) => ({
    id: item.id,
    x: item.x,
    y: item.y,
    highlight: item.id === spot.id,
    label: item.id === spot.id ? String(item.photoCount) : '',
  }))

  return (
    <section className="screen screen-dark">
      <Map theme="dark" pins={pins} pathPoints={routePathPoints} showPath />

      <div className="panel panel-dark spot-sheet">
        <p className="label">Spot sheet</p>
        <h1>{spot.name}</h1>
        <p>{spot.photoCount} photos from this stop.</p>

        <PhotoCard title="Main angle" subtitle={spot.note} meta={spot.exposure} />
        <PhotoCard title="Wide option" subtitle="Try lower perspective for foreground texture." meta={spot.lens} />

        <div className="actions-grid">
          <Link className="btn btn-light" to="/">
            Back to map
          </Link>
          <Link className="btn btn-primary" to="/upload">
            Add photos
          </Link>
        </div>
      </div>
    </section>
  )
}
