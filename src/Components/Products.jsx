import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  // Fetch products.json
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2"> <p>Avalibale<span className="text-[#FE7F02]"> Clothes</span></p></h2>
        <p className="text-gray-600 text-center mb-8"> Make your order right away <span className="text-black">Obinna<span className="text-[#FE7F02]">tv</span> Studios</span> the best place to get a cool drip</p>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-[#cce7d0] rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow relative group"
              >
                <Link to={`/product/${product.id}`}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="rounded-xl mb-4 w-full h-64 object-cover"
                />
                <div className="px-2">
                  <span className="text-gray-500 text-sm">{product.brand}</span>
                  <h5 className="font-medium mt-1">{product.name}</h5>
                  <div className="flex text-yellow-400 my-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-sm"></i>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <h4 className="font-bold text-[#FE7F02]">Ksh {product.price}</h4>
                    {/* <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-2 bg-[#FE7F02] text- px-4 py-2 rounded-full hover:bg-black hover:text-[#FE7F02] transition-colors"
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span className="text-sm font-medium">Add to Cart</span>
                    </button> */}
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
