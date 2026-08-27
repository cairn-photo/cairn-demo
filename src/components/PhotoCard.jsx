export default function PhotoCard({ title, subtitle, meta }) {
  return (
    <article className="photo-card">
      <div className="photo-thumb" aria-hidden="true" />
      <div className="photo-copy">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <small>{meta}</small>
      </div>
    </article>
  )
}
