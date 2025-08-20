import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import OTS from "../../public/obinnatvstudios.webp";

const Hero = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}products.json`) // ✅ products.json must be inside public folder
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 4))) // ✅ only first 4
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="relative">
      {/* Hero Section */}
      <section
        className=" relative bg-white/70 backdrop-blur-md shadow-md  top-0 z-50"
        style={{ backgroundImage: `url(${OTS})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
      <div 
        className="relative bg-[url('/assets/hero4.png')] bg-cover bg-right h-screen flex items-center"
        style={{ backgroundPosition: 'top 25% right 0' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Tagline */}
          <h4 className="text-lg font-medium mb-3 text-gray-700 tracking-wide">✨ Obinnatv Stores is the Best </h4>
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">Get the Best From The Best</h2> */}
          <h1 className="text-5xl md:text-6xl font-extrabold  mb-4">Obinna<span className="text-[#FE7F02]">tv</span> Stores</h1>
          <p className="text-black mb-8 max-w-lg">
            Do you love fashion We gat you <span className="font-bold text-[#FE7F02]"> Na hii baridi</span> 
            shika sweater yako safii machandise ni mingi hapa kama imekubamba tell afriend to tell a friend  <span className="font-bold text-[#FE7F02]">Comming soon</span> 
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-12">
            <Link to="/products">
              <button className="absolute  bg-[#FE7F02] text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Quick Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {[
              { icon: "🚚", text: "Free Shipping within Nairobi" },
              { icon: "💳", text: "Secure Payments" },
              { icon: "⏰", text: "24/7 Support" },
              { icon: "💵", text: "Money-Back Guarantee" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-white/80 p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Promo Badge */}
        <div className="absolute top-8 right-8 bg-[#FE7F02] text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
          🎉 Hot Deals Today!
        </div>
      </div>
      </section>

      {/* === Featured Products Section === */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
               <Link to={`/product/${product.id}`}>
              <img 
                src={`${import.meta.env.BASE_URL}${product.img}`} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="text-[#FE7F02] font-bold">Ksh {product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero;

