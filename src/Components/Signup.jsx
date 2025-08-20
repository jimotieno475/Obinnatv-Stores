import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiPhone, FiArrowLeft, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import OTS from "../../public/obinnatvstudios.webp"

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    console.log("Signup data:", formData);
    // Handle signup logic here
  };

  const passwordRequirements = [
    { id: 1, text: "At least 8 characters", met: formData.password.length >= 8 },
    { id: 2, text: "Contains a number", met: /\d/.test(formData.password) },
    { id: 3, text: "Contains a special character", met: /[!@#$%^&*]/.test(formData.password) },
    { id: 4, text: "Contains uppercase letter", met: /[A-Z]/.test(formData.password) },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12">
          <Link to="/" className="inline-flex items-center text-gray-700 mb-6 hover:text-[#FE7F02] transition-colors">
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Link>

          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Create <span className="text-[#FE7F02]">Your</span> Account</h1>
              <p className="text-gray-600">Join thousands of happy shoppers today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FE7F02] focus:border-black  transition"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

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
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FE7F02] focus:border-black  transition"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FE7F02] focus:border-black  transition"
                    placeholder="Enter your phone number"
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
                    className="pl-10 pr-12 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FE7F02] focus:border-black  transition"
                    placeholder="Create a password"
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
                
                {/* Password Requirements */}
                {formData.password && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">Password must contain:</p>
                    <ul className="space-y-1">
                      {passwordRequirements.map(req => (
                        <li key={req.id} className="flex items-center text-sm">
                          <span className={`inline-flex items-center justify-center w-4 h-4 mr-2 rounded-full ${req.met ? 'bg-teal-500 text-white' : 'bg-gray-300 text-gray-300'}`}>
                            <FiCheck className="w-3 h-3" />
                          </span>
                          <span className={req.met ? "text-teal-600" : "text-gray-500"}>{req.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 pr-12 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FE7F02] focus:border-black transition"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FiEye className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="focus:[#FE7F02] h-4 w-4 text-[#FE7F02] border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="text-gray-700">
                    I agree to the{" "}
                    <a href="#" className="text-[#FE7F02] hover:text-black font-medium">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#FE7F02] hover:text-black font-medium">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FE7F02] text-black py-3 px-4 rounded-xl hover:bg-black hover:text-[#FE7F02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-200 font-medium shadow-md"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                {/* <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                </div> */}
              </div>
{/* 
              <div className="mt-4 grid grid-cols-3 gap-3">
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

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-[#FE7F02] hover:text-black transition">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image & Benefits */}
          <div
            className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 text-white bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${OTS})`,
            }}
          >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Welcome <span className="text-[#FE7F02]">to Our </span> Community!</h2>
            <p className="text-[#FE7F02]">Join thousands of satisfied customers who shop with us</p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#FE7F02] bg-opacity-20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-[#FE7F02]">Exclusive Deals</h3>
                <p className=" mt-1">Get access to members-only discounts and offers</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#FE7F02] bg-opacity-20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-[#FE7F02]">Fast Checkout</h3>
                <p className=" eal-100 mt-1">Save your details for quicker purchases</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10  rounded-full bg-[#FE7F02] bg-opacity-20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-[#FE7F02]">Wishlist Feature</h3>
                <p className="text mt-1">Save items you love for later</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FE7F02] bg-opacity-30 rounded-lg p-4">
            <p className="text-sm text-black text-center">
              "I've been shopping here for years! The quality and service are exceptional."
            </p>
            <p className="text-sm font-medium text-white text-center mt-2">- Ajim Jadola , Loyal Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;