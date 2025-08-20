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

  // ✅ UPDATED: Now takes product, size, color, AND quantity
 // File: src/context/CartContext.jsx

// (imports and other functions remain the same)

const addToCart = (product, selectedSize, selectedColor, qty, selectedImage) => {
  setCart((prevCart) => {
    const uniqueKey = `${product.id}-${selectedSize}-${selectedColor}`;
    const existingItem = prevCart.find((item) => item.uniqueKey === uniqueKey);

    if (existingItem) {
      return prevCart.map((item) =>
        item.uniqueKey === uniqueKey
          ? { ...item, qty: item.qty + qty }
          : item
      );
    }

    const productToAdd = {
      ...product,
      price: Number(product.price),
      selectedSize,
      selectedColor,
      qty: qty,
      uniqueKey,
      // ✅ Now store the selected image URL in the cart item
      selectedImage: selectedImage,
    };

    return [...prevCart, productToAdd];
  });
  showNotification("✅ Successfully added to cart");
};

// (the rest of the component remains the same)

  const removeFromCart = (uniqueKey) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.uniqueKey !== uniqueKey)
    );
    showNotification("🗑️ Item removed from cart");
  };

  const updateQty = (uniqueKey, newQty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.uniqueKey === uniqueKey
          ? { ...item, qty: Math.max(1, newQty) }
          : item
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
        setNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);