// File: src/pages/ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { FiHeart, FiShare2, FiStar, FiArrowLeft } from "react-icons/fi";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        const enhancedData = data.map(product => ({
          ...product,
          category: product.category || "clothing",
          description: product.description || "A high-quality product from our collection.",
          details: product.details || [
            "Premium quality materials",
            "Comfortable fit",
            "Durable construction"
          ],
          sizes: product.sizes || ["XS", "S", "M", "L", "XL"],
          colors: product.colors || [
            { name: "Black", value: "#000000" },
            { name: "White", value: "#ffffff" },
            { name: "Blue", value: "#0000ff" }
          ],
          images: product.images || [product.img],
          rating: product.rating || 4.0,
          reviews: product.reviews || 25,
          inStock: product.inStock !== undefined ? product.inStock : true
        }));
        
        const foundProduct = enhancedData.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="h-96 bg-gray-200 rounded-lg mb-4"></div>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-20 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
            <div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-20 bg-gray-200 rounded mb-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
        <Link
          to="/products"
          className="inline-block bg-[#FE7F02] text-white px-6 py-2 rounded-lg hover:bg-[#e67200] transition"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const isFavorite = favorites.some(fav => fav.id === product.id);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      setErrorMessage("⚠️ Please select both size and color before adding to cart");
      setTimeout(() => setErrorMessage(""), 3000); // auto-hide
      return;
    }

    const productWithOptions = {
      ...product,
      selectedSize,
      selectedColor,
      quantity
    };

    addToCart(productWithOptions);
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 relative">
      {/* Notification */}
      {errorMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50 animate-fadeIn">
          <span>{errorMessage}</span>
          <button onClick={() => setErrorMessage("")} className="ml-2 font-bold">X</button>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{product.name}</span>
          </li>
        </ol>
      </nav>

      <button 
        onClick={() => navigate(-1)}
        className="flex items-center mb-6 text-gray-600 hover:text-[#FE7F02]"
      >
        <FiArrowLeft className="mr-2 text-[#FE7F02]" /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4 rounded-lg overflow-hidden">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`border rounded-lg overflow-hidden ${activeImage === index ? 'border-[#FE7F02]' : 'border-gray-200'}`}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
            <button
              onClick={handleToggleFavorite}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <FiHeart
                className={`text-xl ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"}`}
              />
            </button>
          </div>

          <p className="text-gray-600 mb-2">By {product.brand}</p>

          <div className="flex items-center mb-4">
            <div className="flex text-[#FE7F02] mr-2">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={i < Math.floor(product.rating || 4) ? "fill-current" : ""}
                />
              ))}
            </div>
            <span className="text-gray-600">({product.reviews || 0} reviews)</span>
          </div>

          <div className="mb-6">
            <span className="text-2xl font-bold text-[#FE7F02]">Ksh {product.price.toLocaleString()}</span>
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Size: {selectedSize && <span className="font-normal">({selectedSize})</span>}</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'border-[#FE7F02] bg-[#FFF5E6] text-[#FE7F02]' : 'border-gray-300 hover:border-gray-400'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Color: {selectedColor && <span className="font-normal">({selectedColor})</span>}</h3>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${selectedColor === color.name ? 'border-[#FE7F02]' : 'border-gray-300'}`}
                  style={{ backgroundColor: color.value }}
                  aria-label={color.name}
                >
                  {selectedColor === color.name && (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Quantity</h3>
            <div className="flex items-center border rounded-lg w-fit overflow-hidden">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition"
                disabled={quantity >= 10}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 bg-[#FE7F02] text-black py-3 px-6 rounded-lg hover:bg-black hover:text-[#FE7F02] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <FiShare2 />
            </button>
          </div>

          {/* Product Details */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Product Details</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {product.details.map((detail, index) => (
                <li key={index} className="mb-1">{detail}</li>
              ))}
            </ul>
          </div>

          {/* Delivery Info */}
          <div className="border-t pt-4">
            <div className="flex items-center text-gray-600 mb-1">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Delivery within 3-5 business days</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <span>30-day return policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
