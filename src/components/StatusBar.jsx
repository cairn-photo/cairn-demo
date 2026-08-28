export default function StatusBar({ theme = 'dark' }) {
  return (
    <header className={`status-row status-row-${theme}`}>
      <span>9:41</span>
      <span className="status-icons">▮▮▮ ◍ ▰</span>
    </header>
  )
}
