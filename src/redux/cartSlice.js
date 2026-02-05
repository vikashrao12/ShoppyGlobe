import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: (state, action) => {
      // logic baad me add karenge
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
