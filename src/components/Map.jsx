export default function Map({ theme = 'dark', pins = [], pathPoints = [], showPath = false }) {
  const isDark = theme === 'dark'

  return (
    <div className={`map-surface ${isDark ? 'map-dark' : 'map-light'}`}>
      <div className="map-hex" aria-hidden="true" />
      <div className="map-glow map-glow-a" />
      <div className="map-glow map-glow-b" />
      <div className="map-grid" />
      <div className="map-bend" aria-hidden="true" />

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
        <div
          className={`map-pin ${pin.highlight ? 'map-pin-highlight' : ''}`}
          key={pin.id}
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <span>{pin.label ?? ''}</span>
        </div>
      ))}
    </div>
  )
}
