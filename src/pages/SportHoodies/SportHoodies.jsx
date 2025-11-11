import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sportHoodies } from "../../data/products";
import "./SportHoodies.css";

const SportHoodies = () => {
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

  
  const sortedProducts = [...sportHoodies].sort((a, b) => {
    switch (sortOption) {
      case "low-high":
        return a.price - b.price;
      case "high-low":
        return b.price - a.price;
      case "a-z":
        return a.title.localeCompare(b.title);
      case "z-a":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <div className="hoodie-container">
      
      <div className="category-row">
        <div
          className="category-card"
          onClick={() => navigate("/sport/oversized")}
        >
          <img src="/assets/Anime_-_Oversized.webp" alt="Sport Oversized" />
          <h3>Oversized</h3>
        </div>

        <div
          className="category-card"
          onClick={() => navigate("/sport/hoodies")}
        >
          <img src="/assets/Anime_-_Hoodies.webp" alt="Sport Hoodies" />
          <h3>Hoodies</h3>
        </div>

        <div className="category-card" onClick={() => navigate("/sport/half")}>
          <img src="/assets/Anime_Half.webp" alt="Sport Half Sleeve" />
          <h3>Half Sleeve</h3>
        </div>
      </div>

     
      <div className="sort-bar">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Default</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="a-z">Name: A–Z</option>
          <option value="z-a">Name: Z–A</option>
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

export default SportHoodies;
