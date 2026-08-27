import { Link } from 'react-router-dom'

export default function Community() {
  return (
    <section className="screen screen-light community-screen">
      <header className="path-header">
        <p className="label">COMMUNITY</p>
        <h1>Coming in demo 2</h1>
        <p>讚好、收藏、留言、追蹤與探索頁排在第二階段。</p>
      </header>

      <div className="panel community-card">
        <div className="chip-row community-tabs">
          <button className="chip chip-active" type="button">
            Latest
          </button>
          <button className="chip" type="button">
            Popular
          </button>
          <button className="chip" type="button">
            Nearby
          </button>
        </div>
        <p className="community-note">現在先在 Discord 見。</p>
        <Link className="btn btn-light" to="/map">
          Join the Discord
        </Link>
      </div>
    </section>
  )
}
