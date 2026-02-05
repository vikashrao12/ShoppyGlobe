import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ShoppyGlobe</h1>

        <nav className="space-x-4">
          <Link to="/" className="cursor-pointer hover:underline">Home</Link>
          <Link to="/cart" className="cursor-pointer hover:underline">Cart</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
