// 📊 src/components/ProductTable.jsx
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/inventorySlice'

const LOW_STOCK = 10

const getStockBadge = (stock) => {
  if (stock === 0) return <span className="badge-red">Out of Stock</span>
  if (stock <= LOW_STOCK) return <span className="badge-yellow">Low Stock</span>
  return <span className="badge-green">In Stock</span>
}

const ProductTable = ({ onEdit, products: filteredProducts }) => {
  const dispatch = useDispatch()
  const { products: allProducts, loading } = useSelector((state) => state.inventory)
  const products = filteredProducts ?? allProducts

  const handleDelete = (product) => {
    if (window.confirm(`Delete "${product.name}"?`)) {
      dispatch(deleteProduct(product.id))
    }
  }

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '60px', color: '#555' }}>
      <div className="spin" style={{ fontSize: '28px', display: 'inline-block' }}>⟳</div>
    </div>
  )

  if (products.length === 0) return (
    <div style={{
      textAlign: 'center', padding: '60px',
      background: '#1f1f1f', borderRadius: '16px', border: '1px dashed #2e2e2e'
    }}>
      <p style={{ fontSize: '32px' }}>📦</p>
      <p style={{ color: '#555', marginTop: '8px', fontSize: '14px' }}>No products found.</p>
    </div>
  )

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ overflowX: 'auto' }}>
        <table className="inv-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id}>
                <td style={{ color: '#555', fontSize: '12px' }}>{i + 1}</td>
                <td style={{ fontWeight: 600, color: '#f5f5f5' }}>{p.name}</td>
                <td>
                  <span className="badge-gray">{p.category}</span>
                </td>
                <td style={{
                  fontWeight: 700,
                  color: p.stock === 0 ? '#f87171' : p.stock <= LOW_STOCK ? '#facc15' : '#4ade80'
                }}>
                  {p.stock}
                </td>
                <td style={{ color: '#f5f5f5' }}>₹{p.price}</td>
                <td>{getStockBadge(p.stock)}</td>
                <td>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button className="btn-edit" onClick={() => onEdit(p)}>✏️ Edit</button>
                    <button className="btn-delete" onClick={() => handleDelete(p)}>🗑</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductTable
