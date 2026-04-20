// 📊 src/pages/Dashboard.jsx
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/inventorySlice'
import ProductList from '../components/ProductList'
import { useState } from 'react'

const LOW_STOCK = 10

const StatCard = ({ icon, label, value, color }) => (
  <div className="card fade-up" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    <div style={{
      width: '48px', height: '48px',
      background: `${color}18`,
      borderRadius: '12px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '22px', flexShrink: 0
    }}>
      {icon}
    </div>
    <div>
      <p style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700 }}>{label}</p>
      <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '26px', fontWeight: 800, color, lineHeight: 1.1, marginTop: '2px' }}>
        {value}
      </p>
    </div>
  </div>
)

const Dashboard = ({ setPage }) => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.inventory)
  const [editItem, setEditItem] = useState(null)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  // Stats
  const totalProducts = products.length
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0)
  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0)
  const lowStockCount = products.filter((p) => p.stock <= LOW_STOCK && p.stock > 0).length
  const outOfStock = products.filter((p) => p.stock === 0).length

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '28px', fontWeight: 800, color: '#f5f5f5' }}>
          Dashboard
        </h1>
        <p style={{ color: '#555', fontSize: '14px', marginTop: '4px' }}>
          Real-time overview of your inventory
        </p>
      </div>

      {/* Stat Cards */}
      <div className="stat-grid" style={{ marginBottom: '32px' }}>
        <StatCard icon="📦" label="Total Products" value={totalProducts} color="#4ade80" />
        <StatCard icon="🏷️" label="Total Stock" value={totalStock} color="#60a5fa" />
        <StatCard icon="💰" label="Inventory Value" value={`₹${totalValue.toLocaleString()}`} color="#f5f5f5" />
        <StatCard icon="⚠️" label="Low Stock" value={lowStockCount} color="#facc15" />
      </div>

      {/* Low stock & out of stock alert */}
      {(lowStockCount > 0 || outOfStock > 0) && (
        <div className="card fade-up" style={{
          marginBottom: '24px',
          borderColor: '#78350f',
          background: 'rgba(234,179,8,0.06)',
          display: 'flex', alignItems: 'center', gap: '12px'
        }}>
          <span style={{ fontSize: '22px' }}>🔔</span>
          <div>
            <p style={{ fontWeight: 700, color: '#facc15', fontSize: '14px' }}>Low Stock Alert</p>
            <p style={{ color: '#a16207', fontSize: '13px', marginTop: '2px' }}>
              {lowStockCount > 0 && `${lowStockCount} product(s) running low. `}
              {outOfStock > 0 && `${outOfStock} product(s) are out of stock.`}
              {' '}
              <span
                style={{ color: '#facc15', cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => setPage('inventory')}
              >
                View Inventory →
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Product Cards */}
      <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: 700, color: '#f5f5f5' }}>
          All Products
        </h2>
        <button className="btn-ghost" onClick={() => setPage('inventory')}>
          Manage Inventory →
        </button>
      </div>

      <ProductList onEdit={(item) => { setEditItem(item); setPage('inventory') }} />
    </div>
  )
}

export default Dashboard
