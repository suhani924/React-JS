// 🃏 src/components/ProductItem.jsx
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/inventorySlice'

const LOW_STOCK_THRESHOLD = 10

const getStockBadge = (stock) => {
  if (stock === 0) return <span className="badge-red">Out of Stock</span>
  if (stock <= LOW_STOCK_THRESHOLD) return <span className="badge-yellow">Low Stock</span>
  return <span className="badge-green">In Stock</span>
}

const ProductItem = ({ product, onEdit }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    if (window.confirm(`Delete "${product.name}"?`)) {
      dispatch(deleteProduct(product.id))
    }
  }

  return (
    <div className="card fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '15px', color: '#f5f5f5' }}>
            {product.name}
          </p>
          <p style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>{product.category}</p>
        </div>
        {getStockBadge(product.stock)}
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Stock</p>
          <p style={{ fontWeight: 700, fontSize: '20px', color: product.stock <= LOW_STOCK_THRESHOLD ? '#facc15' : '#4ade80' }}>
            {product.stock}
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Price</p>
          <p style={{ fontWeight: 700, fontSize: '20px', color: '#f5f5f5' }}>₹{product.price}</p>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button className="btn-edit" style={{ flex: 1 }} onClick={() => onEdit(product)}>✏️ Edit</button>
        <button className="btn-delete" style={{ flex: 1 }} onClick={handleDelete}>🗑 Delete</button>
      </div>
    </div>
  )
}

export default ProductItem
