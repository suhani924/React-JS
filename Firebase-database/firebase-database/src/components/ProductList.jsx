// 📋 src/components/ProductList.jsx
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const ProductList = ({ onEdit }) => {
  const { products, loading, error } = useSelector((state) => state.inventory)

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '60px', color: '#555' }}>
      <div className="spin" style={{ fontSize: '28px', display: 'inline-block' }}>⟳</div>
      <p style={{ marginTop: '12px', fontSize: '14px' }}>Loading products...</p>
    </div>
  )

  if (error) return (
    <div style={{ textAlign: 'center', padding: '40px', color: '#f87171' }}>
      ⚠️ Error: {error}
    </div>
  )

  if (products.length === 0) return (
    <div style={{
      textAlign: 'center', padding: '60px',
      background: '#1f1f1f', borderRadius: '16px', border: '1px dashed #2e2e2e'
    }}>
      <p style={{ fontSize: '32px' }}>📦</p>
      <p style={{ color: '#555', marginTop: '8px', fontSize: '14px' }}>No products yet. Add your first product!</p>
    </div>
  )

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onEdit={onEdit} />
      ))}
    </div>
  )
}

export default ProductList
