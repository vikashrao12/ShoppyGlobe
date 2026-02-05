import useProducts from "../hooks/useProducts"
import ProductItem from "../components/ProductItem"
import { useSelector } from "react-redux"

const ProductList = () => {
  const { productList, loading, errorMsg } = useProducts()
  const searchText = useSelector(
    (state) => state.search.searchText
  )

  const filteredProducts = productList.filter((item) =>
    item.title.toLowerCase().includes(
      searchText.toLowerCase()
    )
  )


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
      {filteredProducts.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ProductList
