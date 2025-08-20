// File: src/pages/Cart.jsx (or wherever your Cart component is)
import React from "react";
import { FiTrash2, FiShoppingCart, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty, totalPrice, clearCart, notification, setNotification } = useCart();
  const navigate = useNavigate();

  return (
    <div className="mx-auto px-4 sm:px-6 max-w-7xl py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Your <span className="text-[#FE7F02]">Shopping</span> Cart</h1>

      {/* Notification */}
      {notification && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex justify-between items-center">
          <span>{notification}</span>
          <button onClick={() => setNotification("")}>
            <FiX size={18} />
          </button>
        </div>
      )}

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <FiShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-lg text-gray-600">Your cart is empty</p>
          <Link
            to="/products"
            className="mt-4 inline-block bg-[#FE7F02] text-white px-6 py-2 rounded-lg hover:bg-black hover:text-[#FE7F02] transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Cart Items ({cart.length})</h2>
              <button
                onClick={clearCart}
                className="flex items-center gap-1 text-red-500 hover:text-red-700 transition"
              >
                <FiTrash2 size={16} />
                <span className="hidden sm:inline">Clear Cart</span>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Desktop Header */}
              <div className="hidden sm:grid grid-cols-12 bg-gray-100 p-4 font-medium text-sm">
                <div className="col-span-4">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Options</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>

              {cart.map((item) => (
                <div key={item.uniqueKey} className="p-4 border-b last:border-b-0">
                  {/* === Mobile View === */}
                  <div className="sm:hidden flex flex-col items-center text-center">
                    <img
                      // ✅ UPDATED: Use the selectedImage property from the cart item
                      src={`${import.meta.env.BASE_URL}${item.selectedImage}`}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded mb-2"
                    />
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{item.category}</p>
                    
                    {/* Options & Price */}
                    <div className="flex justify-center gap-4 text-sm mb-2">
                        <span className="font-medium">Size: {item.selectedSize}</span>
                        <span className="font-medium">
                          Color: 
                          <span 
                            className="inline-block w-3 h-3 rounded-full ml-1 align-middle"
                            style={{ backgroundColor: item.colors?.find(c => c.name === item.selectedColor)?.value || '#ccc' }}
                          ></span>
                        </span>
                    </div>

                    {/* Quantity and Remove */}
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQty(item.uniqueKey, item.qty - 1)}
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                          disabled={item.qty <= 1}
                        >
                          -
                        </button>
                        <span className="px-4">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.uniqueKey, item.qty + 1)}
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.uniqueKey)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>

                    <p className="text-xl font-bold">Total: Ksh {(item.price * item.qty).toLocaleString()}</p>
                  </div>

                  {/* === Desktop View === */}
                  <div className="hidden sm:grid grid-cols-12 items-center gap-4">
                    {/* Product */}
                    <div className="col-span-4 flex items-center gap-4">
                      <img
                        // ✅ UPDATED: Use the selectedImage property here too
                        src={`${import.meta.env.BASE_URL}${item.selectedImage}`}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-center">Ksh {item.price.toLocaleString()}</div>

                    {/* Options */}
                    <div className="col-span-2 text-center">
                      <div className="text-sm mb-1">
                        <span className="font-medium">Size: </span>
                        {item.selectedSize}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Color: </span>
                        <span 
                          className="inline-block w-3 h-3 rounded-full mr-1 align-middle"
                          style={{ backgroundColor: item.colors?.find(c => c.name === item.selectedColor)?.value || '#ccc' }}
                        ></span>
                        {item.selectedColor}
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-2 flex justify-center">
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQty(item.uniqueKey, item.qty - 1)}
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                          disabled={item.qty <= 1}
                        >
                          -
                        </button>
                        <span className="px-4">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.uniqueKey, item.qty + 1)}
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total & Remove */}
                    <div className="col-span-2 flex items-center justify-between px-2">
                      <span className="text-sm">Ksh {(item.price * item.qty).toLocaleString()}</span>
                      <button
                        onClick={() => removeFromCart(item.uniqueKey)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Ksh {totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Ksh 0.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Ksh {totalPrice.toLocaleString()}</span>
              </div>
            </div>
            <button
              className="mt-6 w-full bg-[#FE7F02] text-white py-3 rounded-lg hover:bg-black hover:text-[#FE7F02] transition font-medium"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
            <Link
              to="/products"
              className="mt-4 inline-block w-full text-center text-[#FE7F02] hover:text-black transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;