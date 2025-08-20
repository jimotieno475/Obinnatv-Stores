// File: src/App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Products from "./Components/Products";
import Banner from "./Components/Banner";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Notification from "./Components/Notification";
import Blog from "./Components/Blog";
import FavoritesPage from "./Components/FavoritesPage";
import { FavoritesProvider } from "./context/FavoritesContext";
import ProductDetail from "./Components/ProductDetail";
import AuthPage from "./Components/Auth";
import Login from "./Components/Login";
import Signup from "./Components/Signup";


function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <BrowserRouter>
    <FavoritesProvider>
    <Notification />
      <div className="App">
        {/* Keep header & footer constant */}
        <Navbar cartItems={cartItems} />

        <Routes>
          <Route
            path="/"
            element={<Hero />}
          />
          <Route
            path="/features"
            element={<Features />}
          />
          <Route
            path="/products"
            element={
              <Products
                
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/favourites" element={<FavoritesPage />} />
          <Route
            path="/product/:id"
            element={
              <ProductDetail setCartItems={setCartItems} />
            }/>
          

          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }/>
          <Route
            path="/new-arrivals"
            element={
              <Products
                title="New Arrivals"
                subtitle="Summer Collection New Modern Design"
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>

        <Footer />
      </div>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
