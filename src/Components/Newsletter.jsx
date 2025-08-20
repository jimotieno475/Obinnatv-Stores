// File: src/components/Newsletter.jsx
const Newsletter = () => {
  return (
    <section className="py-16 px-4 bg-[#041e42] bg-[url('/assets/banner/b14.png')] bg-[position:20%_30%]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h4 className="text-white text-2xl font-bold">Sign Up For Newsletters</h4>
          <p className="text-gray-400 mt-2">
            Get E-mail updates about our latest shop and <span className="text-yellow-400">special offers.</span>
          </p>
        </div>
        <div className="flex w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Your email address" 
            className="px-4 py-3 w-full md:w-64 focus:outline-none"
          />
          <button className="bg-[#088178] text-white font-semibold px-6 py-3">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter