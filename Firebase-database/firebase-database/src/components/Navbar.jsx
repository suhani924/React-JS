// 🧭 src/components/Navbar.jsx
const Navbar = ({ page, setPage }) => {
  return (
    <nav style={{
      background: '#1a1a1a',
      borderBottom: '1px solid #2e2e2e',
      padding: '0 24px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '32px', height: '32px', background: '#22c55e',
          borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px'
        }}>📦</div>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '16px', color: '#f5f5f5' }}>
          InvenTrack
        </span>
      </div>

      {/* Nav Buttons */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => setPage('dashboard')}
          style={{
            padding: '7px 16px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '13px',
            background: page === 'dashboard' ? '#22c55e' : '#2e2e2e',
            color: page === 'dashboard' ? '#000' : '#aaa',
            transition: 'all 0.2s',
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => setPage('inventory')}
          style={{
            padding: '7px 16px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '13px',
            background: page === 'inventory' ? '#22c55e' : '#2e2e2e',
            color: page === 'inventory' ? '#000' : '#aaa',
            transition: 'all 0.2s',
          }}
        >
          Inventory
        </button>
      </div>
    </nav>
  )
}

export default Navbar
