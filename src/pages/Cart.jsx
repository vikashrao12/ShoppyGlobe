import { useSelector } from "react-redux"

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartItems)

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
              className="flex items-center gap-4 bg-white p-4 rounded shadow"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  ₹{item.price} × {item.qty}
                </p>
              </div>

              <p className="font-bold">
                ₹{item.price * item.qty}
              </p>
            </div>
          ))}

          <div className="text-right mt-4">
            <p className="text-lg font-semibold">
              Total: ₹{totalPrice}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
