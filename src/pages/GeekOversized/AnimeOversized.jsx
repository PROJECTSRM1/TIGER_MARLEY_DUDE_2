import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { animeOversized } from "../../data/products";
import "./AnimeOversized.css";

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
    <div className="anime-page">
      
      <div className="banner">
        <video
          src="/Videos/anime-banner.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

     
      <div className="category-section">
        <div
          className="category-card"
          onClick={() => navigate("/anime/oversized")}
        >
          <img src="/assets/Anime_-_Oversized.webp" alt="Anime Oversized" />
          <h3>Oversized</h3>
        </div>

        <div
          className="category-card"
          onClick={() => navigate("/anime/hoodies")}
        >
          <img src="/assets/Anime_-_Hoodies.webp" alt="Anime Hoodies" />
          <h3>Hoodies</h3>
        </div>

        <div
          className="category-card"
          onClick={() => navigate("/anime/half")}
        >
          <img src="/assets/Anime_Half.webp" alt="Anime Half Sleeve" />
          <h3>Half Sleeve</h3>
        </div>
      </div>

      
      <div className="sort-bar">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
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

      
      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleNavigate(product)}
          >
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeOversized;
