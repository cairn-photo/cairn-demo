import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { route, uploadSummary } from '../data/mockData'

const steps = [
  {
    id: 1,
    title: 'Pick photos',
    hint: 'Choose photos from this route time window.',
    cta: 'Match to route',
  },
  {
    id: 2,
    title: 'Match result',
    hint: 'Review automatic matches and place any unmatched photos.',
    cta: 'Looks right',
  },
  {
    id: 3,
    title: 'Publish route',
    hint: 'Choose precision and visibility before publishing.',
    cta: 'Publish',
  },
]

export default function Upload() {
  const [step, setStep] = useState(1)

  const stepData = useMemo(() => steps.find((item) => item.id === step) ?? steps[0], [step])

  const goNext = () => {
    setStep((prev) => (prev < 3 ? prev + 1 : prev))
  }

  const goPrev = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev))
  }

  return (
    <section className="screen screen-light">
      <header className="upload-header">
        <p className="label">Step {step} of 3</p>
        <div className="step-meter" aria-hidden="true">
          {[1, 2, 3].map((item) => (
            <span className={item <= step ? 'on' : ''} key={item} />
          ))}
        </div>
        <h1>{stepData.title}</h1>
        <p>{stepData.hint}</p>
      </header>

      <div className="panel upload-body">
        {step === 1 && (
          <>
            <p className="mono-pill">This route ({route.timeRange})</p>
            <div className="photo-grid" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, index) => (
                <div className="photo-grid-cell" key={index} />
              ))}
            </div>
            <p className="small-muted">
              EXIF loaded for {uploadSummary.selectedPhotos} photos. Ready to match.
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <div className="timeline">
              <span>18:04</span>
              <div />
              <span>19:47</span>
            </div>
            <ul className="match-list">
              <li>Jericho Pier - matched</li>
              <li>Locarno Beach - matched</li>
              <li>Spanish Banks - matched</li>
            </ul>
            <p className="small-muted">
              {uploadSummary.needsManualPlacement} photos need manual placement.
            </p>
          </>
        )}

        {step === 3 && (
          <>
            <label className="field-label" htmlFor="route-title">
              Route title
            </label>
            <input className="text-input" defaultValue={`${route.date} - West Side golden hour`} id="route-title" />

            <p className="field-label">Location precision</p>
            <div className="chip-row">
              <button className="chip chip-active" type="button">
                Exact
              </button>
              <button className="chip" type="button">
                Block level
              </button>
              <button className="chip" type="button">
                City only
              </button>
            </div>
            <label className="toggle-row">
              <input defaultChecked type="checkbox" />
              <span>Share this route publicly</span>
            </label>
          </>
        )}
      </div>

      <footer className="upload-footer">
        <button className="btn btn-light" disabled={step === 1} onClick={goPrev} type="button">
          Back
        </button>
        {step < 3 ? (
          <button className="btn btn-primary" onClick={goNext} type="button">
            {stepData.cta}
          </button>
        ) : (
          <Link className="btn btn-primary" to={`/path/${route.id}`}>
            View route detail
          </Link>
        )}
      </footer>
    </section>
  )
}
