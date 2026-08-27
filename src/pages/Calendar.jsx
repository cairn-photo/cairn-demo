import { Link } from 'react-router-dom'

const days = Array.from({ length: 31 }, (_, index) => index + 1)

export default function Calendar() {
  return (
    <section className="screen screen-light calendar-screen">
      <header className="path-header calendar-header">
        <p className="label">CALENDAR</p>
        <h1>August 2026</h1>
        <p>4 routes this month</p>
      </header>

      <div className="calendar-grid" aria-hidden="true">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <span key={day}>{day}</span>
        ))}
        {days.map((day) => (
          <button className={`calendar-day ${day === 4 || day === 12 || day === 18 || day === 26 ? 'is-active' : ''}`} key={day} type="button">
            {day}
          </button>
        ))}
      </div>

      <div className="panel calendar-summary">
        <p>完整的月度統計與 activity ring 排在第二階段。</p>
        <Link className="btn btn-primary" to="/record">
          Start recording
        </Link>
      </div>
    </section>
  )
}
