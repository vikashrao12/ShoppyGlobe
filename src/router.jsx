import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import App from "./App"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default appRouter
