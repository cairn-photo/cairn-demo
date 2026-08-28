import { Link } from 'react-router-dom'
import StatusBar from '../components/StatusBar'

export default function VerifyCode() {
  return (
    <section className="screen screen-light auth-screen">
      <StatusBar theme="light" />

      <h1 className="auth-heading">Enter your code</h1>
      <p className="auth-sub">已寄出 6 位數驗證碼至 you@example.com</p>

      <div className="code-row" aria-label="Verification code">
        {['1', '2', '3', '4', '5', '6'].map((digit) => (
          <input className="code-cell" defaultValue={digit} key={digit} maxLength={1} />
        ))}
      </div>

      <p className="code-resend">沒收到？46 秒後可重寄</p>

      <div className="auth-field">
        <Link className="btn btn-primary-dark btn-block" to="/location">
          Verify
        </Link>
      </div>
    </section>
  )
}
