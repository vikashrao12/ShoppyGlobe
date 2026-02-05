import { useEffect, useState } from "react"

const useProducts = () => {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        setProductList(data.products)
      } catch (error) {
        setErrorMsg("Failed to load products");
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  return { productList, loading, errorMsg }
}

export default useProducts
