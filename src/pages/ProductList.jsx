import useProducts from "../hooks/useProducts"
import ProductItem from "../components/ProductItem"

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
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ProductList
