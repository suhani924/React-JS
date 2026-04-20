// 📦 src/redux/inventorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../firebase/firebaseConfig'
import {
  ref,
  push,
  get,
  update,
  remove,
  child,
} from 'firebase/database'

const DB_PATH = 'inventory'

// ─── Fetch All Products ───────────────────────────
export const fetchProducts = createAsyncThunk('inventory/fetchProducts', async () => {
  const snapshot = await get(ref(db, DB_PATH))
  if (snapshot.exists()) {
    const data = snapshot.val()
    return Object.entries(data).map(([id, value]) => ({ id, ...value }))
  }
  return []
})

// ─── Add Product ──────────────────────────────────
export const addProduct = createAsyncThunk('inventory/addProduct', async (product) => {
  const newRef = await push(ref(db, DB_PATH), product)
  return { id: newRef.key, ...product }
})

// ─── Update Product ───────────────────────────────
export const updateProduct = createAsyncThunk('inventory/updateProduct', async ({ id, data }) => {
  await update(ref(db, `${DB_PATH}/${id}`), data)
  return { id, data }
})

// ─── Delete Product ───────────────────────────────
export const deleteProduct = createAsyncThunk('inventory/deleteProduct', async (id) => {
  await remove(ref(db, `${DB_PATH}/${id}`))
  return id
})

// ─── Slice ────────────────────────────────────────
const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch
    builder.addCase(fetchProducts.pending, (state) => { state.loading = true })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })

    // Add
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload)
    })

    // Update
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const { id, data } = action.payload
      const index = state.products.findIndex((p) => p.id === id)
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...data }
      }
    })

    // Delete
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload)
    })
  },
})

export default inventorySlice.reducer
