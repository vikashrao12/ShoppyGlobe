import { useDispatch, useSelector } from "react-redux"
import {
  increaseQty,
  decreaseQty,
  removeFromCart
} from "../redux/cartSlice"
import { useNavigate } from "react-router-dom"


const Cart = () => {
  const dispatch = useDispatch()
  const cartData = useSelector((state) => state.cart.cartItems)
  const navigate = useNavigate()


  const totalPrice = cartData.reduce(
    (total, item) => total + item.price * item.qty,
    0
  )

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">
        Your Cart
      </h2>

      {cartData.length === 0 ? (
        <p className="text-gray-500">
          Cart is empty
        </p>
      ) : (
        <div className="grid gap-4">
          {cartData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded shadow"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  ₹{item.price}
                </p>
              </div>

              {/* Quantity buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span className="font-medium">
                  {item.qty}
                </span>

                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-lg font-semibold">
              Total: ₹{totalPrice}
            </p>
          </div>
        </div>
      )}
      {cartData.length == 0 ? "" : <button
        onClick={() => navigate("/checkout")}
        className="mt-3 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Checkout
      </button>}

    </div>
  )
}

export default Cart
