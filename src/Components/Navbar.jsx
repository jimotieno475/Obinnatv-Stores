// File: src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Search, Heart } from "lucide-react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi"; // ✅ use react-icons
import { useCart } from "../context/CartContext";
import logo from "../../public/logo.png"
import FavoritesIconWithBadge from "./FavoritesIconWithBadge";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Cara" className="h-11" />
          <span className="text-xl font-bold text-[#ccb507]"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 font-medium">
            <li><Link to="/" className="hover:text-[#FE7F02]">Home</Link></li>
            <li><Link to="/products" className="hover:text-[#FE7F02]">Shop</Link></li>
            {/* <li><Link to="/blog" className="hover:text-[#FE7F02]">Blog</Link></li> */}
            <li><Link to="/about" className="hover:text-[#FE7F02]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#FE7F02]">Contact</Link></li>
            
          </ul>

          {/* Cart Icon (Desktop) */}
          <Link to="/cart" className="ml-6 relative">
            <FiShoppingCart className="text-2xl text-gray-700 hover:text-[#FE7F02]" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FE7F02] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <FavoritesIconWithBadge />
        </nav>

        {/* Mobile Navigation Toggle + Cart */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Cart */}
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-2xl text-gray-700 hover:text-[#FE7F02]" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FE7F02] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Menu Button (hamburger / close) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-[#FE7F02] text-2xl"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-6">
          <ul className="flex flex-col space-y-6 text-center font-medium">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
            {/* <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li> */}
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;



