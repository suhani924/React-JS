// 📝 src/components/ProductForm.jsx
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, updateProduct } from '../redux/inventorySlice'

const CATEGORIES = ['Electronics', 'Clothing', 'Food & Beverage', 'Furniture', 'Stationery', 'Other']

const emptyForm = { name: '', category: '', stock: '', price: '' }

const ProductForm = ({ editItem, clearEdit }) => {
  const dispatch = useDispatch()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Populate form when editing
  useEffect(() => {
    if (editItem) {
      setForm({
        name: editItem.name,
        category: editItem.category,
        stock: editItem.stock,
        price: editItem.price,
      })
    } else {
      setForm(emptyForm)
    }
    setErrors({})
  }, [editItem])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = true
    if (!form.category) e.category = true
    if (form.stock === '' || isNaN(form.stock) || Number(form.stock) < 0) e.stock = true
    if (form.price === '' || isNaN(form.price) || Number(form.price) < 0) e.price = true
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: false })
  }

  const handleSubmit = async () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }

    setLoading(true)
    const payload = {
      name: form.name.trim(),
      category: form.category,
      stock: Number(form.stock),
      price: Number(form.price),
    }

    if (editItem) {
      await dispatch(updateProduct({ id: editItem.id, data: payload }))
      clearEdit()
    } else {
      await dispatch(addProduct(payload))
    }

    setForm(emptyForm)
    setLoading(false)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2000)
  }

  return (
    <div className="card fade-up">
      <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '16px', fontWeight: 700, marginBottom: '20px', color: '#f5f5f5' }}>
        {editItem ? '✏️ Edit Product' : '➕ Add Product'}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

        {/* Name */}
        <div>
          <label className="form-label">Product Name</label>
          <input
            className={`form-input ${errors.name ? 'error' : ''}`}
            name="name"
            placeholder="e.g. Wireless Mouse"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* Category */}
        <div>
          <label className="form-label">Category</label>
          <select
            className={`form-input ${errors.category ? 'error' : ''}`}
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Stock */}
        <div>
          <label className="form-label">Stock Quantity</label>
          <input
            className={`form-input ${errors.stock ? 'error' : ''}`}
            name="stock"
            type="number"
            placeholder="e.g. 50"
            value={form.stock}
            onChange={handleChange}
          />
        </div>

        {/* Price */}
        <div>
          <label className="form-label">Price (₹)</label>
          <input
            className={`form-input ${errors.price ? 'error' : ''}`}
            name="price"
            type="number"
            placeholder="e.g. 999"
            value={form.price}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <button
          className="btn-green"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? '⏳ Saving...' : editItem ? '✅ Update Product' : '➕ Add Product'}
        </button>

        {editItem && (
          <button className="btn-ghost" onClick={clearEdit}>
            ✕ Cancel Edit
          </button>
        )}

        {success && (
          <p style={{ textAlign: 'center', color: '#4ade80', fontSize: '13px', fontWeight: 600 }}>
            ✓ {editItem ? 'Updated' : 'Added'} successfully!
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductForm
