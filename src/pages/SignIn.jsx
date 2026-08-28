import { Link } from 'react-router-dom'
import StatusBar from '../components/StatusBar'

export default function SignIn() {
  return (
    <section className="screen screen-light auth-screen">
      <StatusBar theme="light" />

      <h1 className="auth-heading">
        Sign in or create
        <br />
        your account
      </h1>
      <p className="auth-sub">用同一組帳號記錄路線與上傳作品。</p>

      <div className="auth-tabs">
        <button className="chip chip-active" type="button">
          Email
        </button>
        <button className="chip" type="button">
          Phone
        </button>
      </div>

      <div className="auth-field">
        <input className="text-input" defaultValue="you@example.com" type="email" />
      </div>

      <div className="auth-field">
        <Link className="btn btn-primary-dark btn-block" to="/verify">
          Continue
        </Link>
      </div>

      <div className="auth-or">OR</div>

      <div className="auth-stack">
        <button className="btn btn-light btn-block" type="button">
          Continue with Apple
        </button>
        <button className="btn btn-light btn-block" type="button">
          Continue with Google
        </button>
      </div>

      <footer className="auth-footer">
        <p>繼續即表示同意 Terms 與 Privacy Policy。</p>
        <p>位置資料的用途在 Privacy Policy 內明示。</p>
      </footer>
    </section>
  )
}
