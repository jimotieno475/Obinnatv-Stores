// File: src/components/Notification.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const Notification = () => {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#e2c926c3] text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out">
        {notification}
      </div>
    </div>
  );
};

export default Notification;


