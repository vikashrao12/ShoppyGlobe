import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setSearchText } from "../redux/searchSlice"

const Header = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.qty,
    0
  )

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto p-4 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          ShoppyGlobe
        </Link>

        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) =>
            dispatch(setSearchText(e.target.value))
          }
          className="border px-3 py-2 rounded w-full sm:w-64"
        />

        <Link
          to="/cart"
          className="relative self-end sm:self-auto"
        >
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}

export default Header
