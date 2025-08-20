import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowLeft, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import OTS from "../../public/obinnatvstudios.webp"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">
        {/* Left Side - Branding & Illustration */}
<div
  className="bg-cover bg-center w-full md:w-2/5 flex flex-col justify-between p-8 md:p-12 text-white"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${OTS})`,
  }}
>
          <div>
            <Link to="/" className="inline-flex  text-white items-center  font-bold text-xl mb-8">
              <FiShoppingBag className="mr-2" />
             <p> Obinna<span className="text-[#FE7F02]">tv</span> Studios </p>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-blue-100">
              Sign in to access your personalized shopping experience, wishlist, and order history.
            </p>
          </div>
          
          <div className="hidden md:block mt-8">
            <div className="flex items-center text-blue-200">
              <div className="flex -space-x-3 mr-4">
                <div className="w-10 h-10 rounded-full bg-[#FE7F02] border-2 border-black"></div>
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#FE7F02]"></div>
                <div className="w-10 h-10 rounded-full bg-black border[#FE7F02]"></div>
              </div>
              <p className="text-sm">Join thousands of happy shoppers</p>
            </div>
          </div>

          {/* Decorative Graphic */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#FE7F02] bg-opacity-20">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-3/5 bg-white p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Sign In<span className="text-[#FE7F02]"> to Your</span>  Account</h2>
              <p className="text-gray-600 mt-2">Enter your credentials to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FE7F02] focus:border-[#FE7F02] transition"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-12 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FE7F02] focus:border-[#FE7F02] transition"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FiEyeOff className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FiEye className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#FE7F02] focus:ring-[#FE7F02] border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-[#FE7F02] hover:text-black transition">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FE7F02] text-black py-3 px-4 rounded-xl hover:bg-black  hover:text-[#FE7F02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 font-medium shadow-md transform hover:scale-105 active:scale-95"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8">
              {/* <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div> */}

              {/* <div className="mt-4 grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </button>

                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>

                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
              </div> */}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="font-medium text-[#FE7F02] hover:text-black transition">
                  Sign up now
                </Link>
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link 
                to="/" 
                className="inline-flex items-center text-sm text-[#FE7F02] hover:text-gray-700 transition"
              >
                <FiArrowLeft className="mr-1" />
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;