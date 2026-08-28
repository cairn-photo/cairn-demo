import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import StepMeter from '../components/StepMeter'
import { matchedPhotos, route, uploadSummary } from '../data/mockData'

export default function Upload() {
  const [step, setStep] = useState(1)

  const stepTitle = useMemo(() => {
    if (step === 1) return 'Pick photos'
    if (step === 2) return 'Matched to your route'
    return 'Publish route'
  }, [step])

  const goNext = () => setStep((prev) => Math.min(prev + 1, 3))
  const goPrev = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <section className="screen screen-light">
      <StatusBar theme="light" />

      <header className="upload-header">
        <p className="label">STEP {step} OF 3</p>
        <StepMeter step={step} />
        <h1>{stepTitle}</h1>
      </header>

      {step === 1 && (
        <>
          <div className="upload-filter-row">
            <button className="chip chip-active" type="button">
              This route ({route.timeRangeDash})
            </button>
            <button className="chip" type="button">
              All photos
            </button>
          </div>
          <div className="upload-body">
            <div className="photo-grid" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, index) => (
                <div className="photo-grid-cell" key={index}>
                  <span className={`photo-check ${index < 5 ? 'on' : ''}`} />
                </div>
              ))}
            </div>
          </div>
          <footer className="upload-footer-bar">
            <p className="upload-meta">{uploadSummary.exifMessage}</p>
            <button className="btn btn-primary-dark btn-block" onClick={goNext} type="button">
              Match to route (5)
            </button>
          </footer>
        </>
      )}

      {step === 2 && (
        <>
          <div className="upload-body">
            <p className="auth-sub" style={{ marginTop: 0 }}>
              用每張照片的拍攝時間，在軌跡上找出當時的座標。
            </p>
            <div className="match-map" aria-hidden="true" />
            <div className="timeline">
              <span>18:04</span>
              <div>
                {[15, 38, 58, 78, 95].map((pos) => (
                  <span className="timeline-dot" key={pos} style={{ left: `${pos}%` }} />
                ))}
              </div>
              <span>19:47</span>
            </div>
            <ul className="match-list">
              {matchedPhotos.map((item) => (
                <li className="match-item" key={item.name}>
                  <div className="match-thumb" aria-hidden="true" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.meta}</p>
                  </div>
                  <span className="match-check">✓</span>
                </li>
              ))}
            </ul>
            <div className="unmatched-box">
              <header>
                <h3>2 張對不上</h3>
                <button className="chip" type="button">
                  Place manually
                </button>
              </header>
              <p>1 張缺 EXIF 拍攝時間，1 張落在軌跡時段之外。</p>
            </div>
            <p className="link-muted">相機時間不準？調整時鐘偏差 →</p>
          </div>
          <footer className="upload-footer-bar">
            <button className="btn btn-primary-dark btn-block" onClick={goNext} type="button">
              Looks right
            </button>
          </footer>
        </>
      )}

      {step === 3 && (
        <>
          <div className="upload-body">
            <input
              className="text-input"
              defaultValue={`${route.date} · West Side golden hour`}
              type="text"
            />

            <p className="field-label">Location precision</p>
            <div className="chip-row" style={{ padding: 0 }}>
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
            <p className="auth-sub">住家與私人空間附近建議選 Block level。</p>

            <div className="toggle-row">
              <div>
                <p>Share this route publicly</p>
                <small>關掉則只有自己看得到，但仍會點亮地圖</small>
              </div>
              <div className="toggle" aria-hidden="true">
                <span className="toggle-knob" />
              </div>
            </div>

            <div className="list-row">
              <div>
                <p>Choose which photos to show</p>
                <small>5 張中的 4 張將公開</small>
              </div>
              <span className="chevron">›</span>
            </div>

            <div className="checkbox-row">
              <span className="checkbox-box" aria-hidden="true" />
              <span>這些照片全部由本人拍攝，我擁有其著作權。</span>
            </div>
          </div>
          <footer className="upload-footer-bar">
            <Link className="btn btn-primary-dark btn-block" to={`/path/${route.id}`}>
              Publish
            </Link>
          </footer>
        </>
      )}

      {step > 1 && step < 3 ? (
        <div style={{ padding: '0 20px 12px' }}>
          <button className="btn btn-light btn-block" onClick={goPrev} type="button">
            Back
          </button>
        </div>
      ) : null}
    </section>
  )
}
