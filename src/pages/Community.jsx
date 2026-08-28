import StatusBar from '../components/StatusBar'

export default function Community() {
  return (
    <section className="screen screen-light">
      <StatusBar theme="light" />

      <header className="community-header">
        <h1>Community</h1>
      </header>

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

      <div className="community-feed">
        <div className="feed-card-placeholder" aria-hidden="true">
          <div className="avatar" />
          <div className="lines">
            <span />
            <span />
          </div>
        </div>
        <div className="feed-image-placeholder" />

        <div className="coming-soon-card">
          <h2>Coming in demo 2</h2>
          <p>讚好、收藏、留言、追蹤與探索頁排在第二階段。</p>
          <p>現在先在 Discord 見。</p>
          <a className="btn btn-light" href="https://discord.gg/XmGk5HU5A3" rel="noreferrer" target="_blank">
            Join the Discord
          </a>
        </div>
      </div>
    </section>
  )
}
