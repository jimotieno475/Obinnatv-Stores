// File: src/components/CartSummary.jsx
import { useCart } from "../context/CartContext";

const CartSummary = () => {
  const { cart, totalItems, totalPrice, clearCart, notification } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
      
      {notification && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {notification}
        </div>
      )}
      
      <div className="mb-4">
        <p className="flex justify-between mb-2">
          <span>Items:</span>
          <span>{totalItems}</span>
        </p>
        <p className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>Ksh {totalPrice.toLocaleString()}</span>
        </p>
      </div>
      
      {cart.length > 0 && (
        <button
          onClick={clearCart}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors"
        >
          Clear Cart
        </button>
      )}
      
      {cart.length === 0 && (
        <p className="text-gray-500 text-center py-4">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartSummary;