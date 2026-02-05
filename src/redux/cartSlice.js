import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload

      const itemFound = state.cartItems.find(
        (item) => item.id === newItem.id
      )

      if (itemFound) {
        itemFound.qty += 1
      } else {
        state.cartItems.push({
          ...newItem,
          qty: 1
        })
      }
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
