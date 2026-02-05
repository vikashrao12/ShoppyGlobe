import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeFromCart } from "../redux/cartSlice"
import { useState } from "react"

const Checkout = () => {
  const cartData = useSelector(
    (state) => state.cart.cartItems || []
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: ""
  })

  const totalPrice = cartData.reduce(
    (total, item) => total + item.price * item.qty,
    0
  )

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill all details")
      return
    }

    // empty cart
    cartData.forEach((item) => {
      dispatch(removeFromCart(item.id))
    })

    alert("Order placed")

    navigate("/")
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">
        Checkout
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Form */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-4">
            Delivery Details
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
          />

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>

        {/* Summary */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-4">
            Order Summary
          </h3>

          {cartData.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-sm mb-2"
            >
              <span>
                {item.title} × {item.qty}
              </span>
              <span>
                ₹{item.price * item.qty}
              </span>
            </div>
          ))}

          <hr className="my-3" />

          <p className="font-semibold">
            Total: ₹{totalPrice}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Checkout
