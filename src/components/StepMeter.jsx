export default function StepMeter({ step, total = 3 }) {
  return (
    <div className="step-meter" aria-hidden="true">
      {Array.from({ length: total }).map((_, index) => (
        <span className={index < step ? 'on' : ''} key={index} />
      ))}
    </div>
  )
}
