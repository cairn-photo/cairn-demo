import { Link } from 'react-router-dom'
import Map from '../components/Map'
import StatusBar from '../components/StatusBar'

export default function RecordIntro() {
  return (
    <section className="screen screen-dark record-screen">
      <StatusBar theme="dark" />

      <div className="record-topline">
        <span>RECORD</span>
        <span className="gps-pill">GPS ●●●○ Good</span>
      </div>

      <Map theme="dark" />

      <div className="record-copy">
        <p>按下開始後，App 會在背景記錄你走過的路線。收起手機照常拍照即可。</p>
      </div>

      <div className="record-cta-wrap">
        <Link className="record-start" to="/recording">
          Start recording
        </Link>
      </div>
    </section>
  )
}
