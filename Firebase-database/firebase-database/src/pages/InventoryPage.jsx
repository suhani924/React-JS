// 🗂️ src/pages/InventoryPage.jsx
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/inventorySlice'
import ProductForm from '../components/ProductForm'
import ProductTable from '../components/ProductTable'

const InventoryPage = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.inventory)
  const [editItem, setEditItem] = useState(null)
  const [search, setSearch] = useState('')
  const [filterCategory, setFilterCategory] = useState('')

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const categories = [...new Set(products.map((p) => p.category))]

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = filterCategory ? p.category === filterCategory : true
    return matchSearch && matchCat
  })

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '28px', fontWeight: 800, color: '#f5f5f5' }}>
          Inventory
        </h1>
        <p style={{ color: '#555', fontSize: '14px', marginTop: '4px' }}>
          Add, edit, and manage all your products
        </p>
      </div>

      <div className="inventory-layout">
        {/* Left: Form */}
        <div>
          <ProductForm
            editItem={editItem}
            clearEdit={() => setEditItem(null)}
          />
        </div>

        {/* Right: Search + Table */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Search & Filter */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              className="form-input"
              placeholder="🔍 Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ flex: 1 }}
            />
            <select
              className="form-input"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              style={{ width: '160px' }}
            >
              <option value="">All Categories</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Table */}
          <ProductTable
            onEdit={(item) => setEditItem(item)}
            products={filtered}
          />

          <p style={{ color: '#444', fontSize: '12px', textAlign: 'right' }}>
            Showing {filtered.length} of {products.length} products
          </p>
        </div>
      </div>
    </div>
  )
}

export default InventoryPage
