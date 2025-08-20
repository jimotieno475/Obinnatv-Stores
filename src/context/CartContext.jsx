// File: src/context/CartContext.jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 2000); // auto-hide after 2s
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
    showNotification("✅ Successfully added to cart");
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    showNotification("🗑️ Item removed from cart");
  };

  const updateQty = (id, qty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
    showNotification("🔄 Cart updated");
  };

  const clearCart = () => {
    setCart([]);
    showNotification("🛒 Cart cleared");
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalItems,
        totalPrice,
        notification,
        setNotification, // expose it if needed
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
