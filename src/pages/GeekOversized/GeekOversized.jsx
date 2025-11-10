import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { animeOversized } from "../../data/products";

const AnimeOversized = () => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("");

  const handleNavigate = (product) => {
    const normalizedProduct = {
      ...product,
      oldPrice: product.oldPrice || `₹${parseInt(product.price) + 200}`,
      newPrice: product.newPrice || `₹${product.price}`,
      name: product.title || product.name,
      image: product.image || "",
    };
    navigate(`/product/${product.id}`, { state: normalizedProduct });
  };

  // ✅ Sorting
  const sortedProducts = [...animeOversized].sort((a, b) => {
    switch (sortOption) {
      case "az":
        return a.title.localeCompare(b.title);
      case "za":
        return b.title.localeCompare(a.title);
      case "low-high":
        return a.price - b.price;
      case "high-low":
        return b.price - a.price;
      case "newest":
        return b.id - a.id;
      case "best":
        return b.sales - a.sales;
      default:
        return 0;
    }
  });

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#fafafa" }}>
      {/* 🎬 Banner */}
      <div style={{ position: "relative", width: "100%", height: "70vh", overflow: "hidden" }}>
        <video
          src="/Videos/anime-banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(65%)",
          }}
        />
      </div>

      {/* 🔽 Sort Dropdown on Right Side */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end", // ✅ moves dropdown to right
          padding: "30px 80px 0 80px", // same side padding as grid below
        }}
      >
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#fff",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          <option value="">Sort By</option>
          <option value="az">Alphabetical (A → Z)</option>
          <option value="za">Alphabetical (Z → A)</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
          <option value="best">Best Selling</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* 🛍️ Product Grid - 3 per row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",
          padding: "50px 80px",
          justifyItems: "center",
        }}
      >
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleNavigate(product)}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              width: "100%",
              maxWidth: "320px",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <h3 style={{ margin: "15px 0 5px" }}>{product.title}</h3>
            <p style={{ fontWeight: "bold", color: "#333" }}>₹{product.price}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate(product);
              }}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#af3828",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeOversized;
