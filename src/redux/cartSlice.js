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
    },
    increaseQty: (state, action) => {
        const item = state.cartItems.find(
          (product) => product.id === action.payload
      )
        if (item) {
          item.qty += 1
       }
      },

    decreaseQty: (state, action) => {
        const item = state.cartItems.find(
          (product) => product.id === action.payload
        )
        if (item && item.qty > 1) {
          item.qty -= 1
        }
      },

    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
          (product) => product.id !== action.payload
        )
      },

        }
      })

export const { addToCart, increaseQty, decreaseQty, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
