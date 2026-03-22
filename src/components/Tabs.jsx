export default function Tabs({ activeTab, onChange }) {
  return (
    <nav className="tab-bar">
      <button
        className={`tab-btn${activeTab === 0 ? ' active' : ''}`}
        onClick={() => onChange(0)}
        aria-pressed={activeTab === 0}
      >
        Proporcja
      </button>
      <button
        className={`tab-btn${activeTab === 1 ? ' active' : ''}`}
        onClick={() => onChange(1)}
        aria-pressed={activeTab === 1}
      >
        Procent
      </button>
    </nav>
  )
}
