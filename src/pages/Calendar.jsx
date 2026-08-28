import { Link } from 'react-router-dom'
import StatusBar from '../components/StatusBar'

const days = Array.from({ length: 31 }, (_, index) => index + 1)
const activeDays = new Set([4, 12, 18, 26])

export default function Calendar() {
  return (
    <section className="screen screen-light">
      <StatusBar theme="light" />

      <div className="calendar-header-row">
        <h1>August 2026</h1>
        <button className="calendar-nav" type="button">
          ‹
        </button>
      </div>

      <div className="calendar-grid" aria-hidden="true">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <span className="dow" key={day}>
            {day}
          </span>
        ))}
        {days.map((day) => (
          <button
            className={`calendar-day ${activeDays.has(day) ? 'is-active' : ''}`}
            key={day}
            type="button"
          >
            {day}
          </button>
        ))}
      </div>

      <div className="calendar-divider" />

      <div className="calendar-summary">
        <h2>4 routes this month</h2>
        <p>完整的月度統計與 activity ring 排在第二階段。</p>
      </div>

      <div className="calendar-cta">
        <Link className="btn btn-primary-dark btn-block" to="/record">
          Start recording
        </Link>
      </div>
    </section>
  )
}
