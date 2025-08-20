// File: src/components/Banner.jsx
const Banner = () => {
  return (
    <section 
      className="py-16 px-4 bg-[url('/assets/banner/b2.jpg')] bg-cover bg-center text-center text-white"
    >
      <div className="container mx-auto">
        <h4 className="text-lg mb-2">Repair Services</h4>
        <h2 className="text-3xl font-bold mb-4">
          Up to <span className="text-red-500">70% Off</span> All t-shirt & Accessories
        </h2>
        <button className="bg-white text-black font-semibold py-3 px-8 rounded hover:bg-[#ef3636] hover:text-white transition-colors">
          Explore More
        </button>
      </div>
    </section>
  )
}

export default Banner