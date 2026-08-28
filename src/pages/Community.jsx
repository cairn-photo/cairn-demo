import { Link } from 'react-router-dom'

export default function Community() {
  return (
    <section className="screen screen-light community-screen">
      <header className="path-header">
        <p className="label">COMMUNITY</p>
        <h1>Community</h1>
        <p>Social features land in demo 2.</p>
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
        <div className="community-preview" aria-hidden="true">
          <div className="community-preview-row">
            <span />
            <span />
            <span />
          </div>
          <div className="community-preview-card" />
          <div className="community-preview-card" />
        </div>
        <p className="community-note">Real posts, comments, and follows will live here later.</p>
        <Link className="btn btn-light" to="/map">
          Join the Discord
        </Link>
      </div>
    </section>
  )
}
