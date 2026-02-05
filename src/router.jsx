import { createBrowserRouter } from "react-router-dom"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
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
