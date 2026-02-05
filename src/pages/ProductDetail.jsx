import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice"
import { useNavigate } from "react-router-dom"

const ProductDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/${id}`
        )

        if (!res.ok) {
          throw new Error("Product not found")
        }

        const data = await res.json()
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">
        {error}
      </p>
    )
  }

  return (
    <div className="max-w-5xl mx-auto p-4 border rounded bg-white shadow m-10">
      <Link to="/" className="text-blue-600 underline">
        ← Back
      </Link>

      <div className="grid md:grid-cols-2 gap-6 mt-6 bg-white p-6 rounded shadow">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-80 object-cover rounded"
          loading="lazy"
        />

        <div>
          <h2 className="text-2xl font-bold mb-2">
            {product.title}
          </h2>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-xl font-semibold mb-4">
            ₹{product.price}
          </p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="mt-3 m-10 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Checkout
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail
