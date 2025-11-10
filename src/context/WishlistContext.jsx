import React, { createContext, useContext, useState } from "react";

// Create context
const WishlistContext = createContext(null);

// Provider component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // ➕ Add product to wishlist
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.name === product.name)) return prev;
      return [...prev, product];
    });
  };

  // ❌ Remove product from wishlist
  const removeFromWishlist = (productName) => {
    setWishlist((prev) => prev.filter((item) => item.name !== productName));
  };

  // 🔍 Check if product is already in wishlist
  const isInWishlist = (productName) => {
    return wishlist.some((item) => item.name === productName);
  };

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

// ✅ Hook to access wishlist
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
