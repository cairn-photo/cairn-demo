import { BrowserRouter, Link, NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Launch from './pages/Launch'
import SignIn from './pages/SignIn'
import VerifyCode from './pages/VerifyCode'
import LocationPermission from './pages/LocationPermission'
import MapPage from './pages/MapPage'
import Calendar from './pages/Calendar'
import Community from './pages/Community'
import Profile from './pages/Profile'
import RecordIntro from './pages/RecordIntro'
import RecordActive from './pages/RecordActive'
import RouteSaved from './pages/RouteSaved'
import Upload from './pages/Upload'
import Spot from './pages/Spot'
import PathDetail from './pages/PathDetail'
import './App.css'

function PhoneLayout() {
  const location = useLocation()
  const showShellChrome =
    location.pathname === '/map' ||
    location.pathname === '/calendar' ||
    location.pathname === '/community' ||
    location.pathname === '/profile' ||
    location.pathname === '/record'

  const showFab = showShellChrome

  return (
    <div className="demo-stage">
      <div className="phone-frame">
        <main className={`phone-screen ${showShellChrome ? 'has-shell-chrome' : ''}`}>
          <Outlet />
        </main>

        {showFab ? (
          <Link className="record-fab" to="/record">
            <span className="record-fab-core" aria-hidden="true" />
          </Link>
        ) : null}

        {showShellChrome ? (
          <nav className="tab-bar" aria-label="Primary navigation">
            <NavLink className={({ isActive }) => (isActive ? 'active tab-item' : 'tab-item')} to="/map">
              <span className="tab-icon" aria-hidden="true" />
              <span className="tab-label">MAP</span>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active tab-item' : 'tab-item')} to="/calendar">
              <span className="tab-icon" aria-hidden="true" />
              <span className="tab-label">CALENDAR</span>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active tab-item' : 'tab-item')} to="/community">
              <span className="tab-icon" aria-hidden="true" />
              <span className="tab-label">COMMUNITY</span>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active tab-item' : 'tab-item')} to="/profile">
              <span className="tab-icon" aria-hidden="true" />
              <span className="tab-label">PROFILE</span>
            </NavLink>
          </nav>
        ) : null}
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PhoneLayout />}>
          <Route path="/" element={<Launch />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/verify" element={<VerifyCode />} />
          <Route path="/location" element={<LocationPermission />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/record" element={<RecordIntro />} />
          <Route path="/recording" element={<RecordActive />} />
          <Route path="/route-saved" element={<RouteSaved />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/spot/:spotId" element={<Spot />} />
          <Route path="/path/:pathId" element={<PathDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
