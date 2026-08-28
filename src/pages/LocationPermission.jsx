import { Link } from 'react-router-dom'
import StatusBar from '../components/StatusBar'

export default function LocationPermission() {
  return (
    <section className="screen screen-light auth-screen">
      <StatusBar theme="light" />

      <div className="perm-hero" aria-hidden="true" />

      <h1 className="auth-heading">
        Cairn needs to run
        <br />
        in the background
      </h1>
      <p className="auth-sub">
        記錄一趟拍攝路線時，App 會在背景持續記下帶時間戳的軌跡。回家上傳照片時，系統用照片的拍攝時間在軌跡上找出座標——你不必手動標記任何一個機位。
      </p>
      <p className="perm-warning">選「使用 App 期間」的話，熄屏後路線會斷掉。</p>

      <div className="perm-actions">
        <Link className="btn btn-primary-dark btn-block" to="/map">
          Allow while using → Always
        </Link>
        <Link className="btn btn-light btn-block" to="/map">
          Not now
        </Link>
      </div>

      <p className="perm-note">軌跡只在你按下 Start recording 之後才記錄，結束即停止。</p>
    </section>
  )
}
