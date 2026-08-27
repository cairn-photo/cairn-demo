import { Link } from 'react-router-dom'
import Map from '../components/Map'

export default function RecordIntro() {
  return (
    <section className="screen screen-dark record-screen">
      <header className="status-row record-status">
        <span>9:41</span>
        <span className="status-icons">▮▮▮ ◍ ▰</span>
      </header>

      <div className="record-topline">
        <span>RECORD</span>
        <span className="gps-pill">GPS ●●●○ Good</span>
      </div>

      <Map theme="dark" />

      <div className="record-copy">
        <p>
          按下開始後，App 會在背景記錄你走過的路線。收起手機照常拍照即可。
        </p>
      </div>

      <div className="record-cta-wrap">
        <Link className="record-start" to="/recording">
          <span className="record-start-core" aria-hidden="true" />
          <span>Start recording</span>
        </Link>
      </div>
    </section>
  )
}
