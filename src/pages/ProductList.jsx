import useProducts from "../hooks/useProducts"

const ProductList = () => {
  const { productList, loading, errorMsg } = useProducts()

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading products...
      </p>
    )
  }

  if (errorMsg) {
    return (
      <p className="text-center mt-10 text-red-500">
        {errorMsg}
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productList.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-lg shadow"
        >
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
        </div>
      ))}
    </div>
  )
}

export default ProductList
