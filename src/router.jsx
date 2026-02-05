import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import App from "./App"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import ProductDetail from "./pages/ProductDetail"


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "checkout",
        element: <Checkout />
      },
      {
        path: "product/:id",
        element: <ProductDetail />
      }


    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default appRouter
