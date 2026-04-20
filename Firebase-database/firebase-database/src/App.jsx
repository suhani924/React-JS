import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import InventoryPage from './pages/InventoryPage.jsx'

const App = () => {
  const [page, setPage] = useState('dashboard')

  return (
    <div style={{ minHeight: '100vh', background: '#171717' }}>
      <Navbar page={page} setPage={setPage} />
      <div className="page-wrapper" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        {page === 'dashboard' && <Dashboard setPage={setPage} />}
        {page === 'inventory' && <InventoryPage />}
      </div>
    </div>
  )
}

export default App