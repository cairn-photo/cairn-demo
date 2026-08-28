export default function Map({ theme = 'dark', pins = [], pathPoints = [], showPath = false }) {
  const isDark = theme === 'dark'

  return (
    <div className={`map-surface ${isDark ? 'map-dark' : 'map-light'}`}>
      {isDark ? (
        <svg className="map-stage" viewBox="0 0 375 760" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <pattern id="mapHex" width="34" height="30" patternUnits="userSpaceOnUse">
              <path d="M17 0 L34 8.5 L34 21.5 L17 30 L0 21.5 L0 8.5 Z" fill="none" stroke="#22262C" strokeWidth="1" />
            </pattern>
            <radialGradient id="mapGlowA">
              <stop offset="0%" stopColor="#3A3F46" />
              <stop offset="100%" stopColor="#15171A" />
            </radialGradient>
            <radialGradient id="mapGlowB">
              <stop offset="0%" stopColor="#3A3F46" />
              <stop offset="100%" stopColor="#15171A" />
            </radialGradient>
          </defs>

          <rect width="375" height="760" fill="#15171A" />
          <g opacity="0.55">
            <circle cx="150" cy="348" r="98" fill="url(#mapGlowA)" />
            <circle cx="265" cy="463" r="66" fill="url(#mapGlowA)" />
            <circle cx="82" cy="525" r="52" fill="url(#mapGlowA)" />
          </g>
          <g stroke="#262B31" strokeWidth="1.2" fill="none">
            <path d="M-10 283 H385" />
            <path d="M-10 401 H385" />
            <path d="M-10 519 H385" />
            <path d="M96 16 V770" />
            <path d="M198 16 V770" />
            <path d="M292 16 V770" />
            <path d="M-10 603 C 90 563, 180 613, 385 558" stroke="#1D2228" strokeWidth="10" />
          </g>
          <rect x="0" y="26" width="375" height="734" fill="url(#mapHex)" opacity="0.55" />
        </svg>
      ) : null}

      {!isDark ? <div className="map-light-overlay" aria-hidden="true" /> : null}

      {showPath && pathPoints.length > 1 && (
        <svg className="map-route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polyline
            points={pathPoints.map((point) => `${point.x},${point.y}`).join(' ')}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {pins.map((pin) => (
        <div className="map-pin-wrap" key={pin.id} style={{ left: `${pin.x}%`, top: `${pin.y}%` }}>
          <span className={`map-pin-glow ${pin.highlight ? 'highlight' : ''}`} aria-hidden="true" />
          <div className={`map-pin ${pin.highlight ? 'map-pin-highlight' : ''}`}>
            <span>{pin.label ?? ''}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
