import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import { Suspense } from "react"

const App = () => {
  return (
    <>
      <Header />

      <main className="bg-gray-100 min-h-screen p-4">
        <Suspense
          fallback={
            <p className="text-center mt-10 text-gray-500">
              Loading...
            </p>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}

export default App
