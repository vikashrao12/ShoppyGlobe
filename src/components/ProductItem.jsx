const ProductItem = ({ item }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="h-40 w-full object-cover rounded"
        loading="lazy"
      />

      <h3 className="mt-2 font-semibold">
        {item.title}
      </h3>

      <p className="text-gray-600">
        ₹{item.price}
      </p>

      <button
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductItem
