import { BrowserRouter, Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Spot from './pages/Spot'
import PathDetail from './pages/PathDetail'
import './App.css'

function PhoneLayout() {
  return (
    <div className="demo-stage">
      <div className="phone-frame">
        <div className="phone-notch" aria-hidden="true" />

        <main className="phone-screen">
          <Outlet />
        </main>

        <nav className="tab-bar" aria-label="Primary navigation">
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
            Map
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/upload">
            Upload
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/spot/jericho-pier">
            Spot
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/path/west-side-golden-hour">
            Path
          </NavLink>
        </nav>

        <Link className="record-fab" to="/upload">
          Record
        </Link>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PhoneLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/spot/:spotId" element={<Spot />} />
          <Route path="/path/:pathId" element={<PathDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
