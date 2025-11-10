import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import couple1 from "../../assets/shop_by_themes/couple1.jpg";
import couple2 from "../../assets/shop_by_themes/couple2.jpg";
import couple3 from "../../assets/shop_by_themes/couple3.jpg";
import couple4 from "../../assets/shop_by_themes/couple4.jpg";
import couple5 from "../../assets/shop_by_themes/couple5.jpg";
import couple6 from "../../assets/shop_by_themes/couple6.jpg";
import couple7 from "../../assets/shop_by_themes/couple7.jpg";
import couple8 from "../../assets/shop_by_themes/couple8.jpg";
import couple9 from "../../assets/shop_by_themes/couple9.jpg";
import coupleBanner from "../../assets/shop_by_themes/couple_banner.jpg";
import "./Couple.css";

const Couple = () => {
  const navigate = useNavigate();

  const coupleProducts = [
    { id: 1, name: "Soulmate Combo Tee", image: couple1, newPrice: "₹999", oldPrice: "₹1799" },
    { id: 2, name: "Together Forever Tee", image: couple2, newPrice: "₹999", oldPrice: "₹1799" },
    { id: 3, name: "King & Queen Tee", image: couple3, newPrice: "₹999", oldPrice: "₹1799" },
    { id: 4, name: "Love You Always Tee", image: couple4, newPrice: "₹999", oldPrice: "₹1799" },
    { id: 5, name: "Perfect Pair Tee", image: couple5, newPrice: "₹999", oldPrice: "₹1799" },
    { id: 6, name: "You & Me Tee", image: couple6, newPrice: "₹999", oldPrice: "₹1799" },
    { id: 7, name: "Mr & Mrs Tee", image: couple7, newPrice: "₹999", oldPrice: "₹1799" },
    { id: 8, name: "Better Together Tee", image: couple8, newPrice: "₹999", oldPrice: "₹1799" },
    { id: 9, name: "Love Bond Tee", image: couple9, newPrice: "₹999", oldPrice: "₹1799" },
  ];

  const [sortOption, setSortOption] = useState("featured");

  const sortedProducts = [...coupleProducts].sort((a, b) => {
    if (sortOption === "a-z") return a.name.localeCompare(b.name);
    if (sortOption === "z-a") return b.name.localeCompare(a.name);
    if (sortOption === "lowToHigh")
      return parseInt(a.newPrice.replace("₹", "")) - parseInt(b.newPrice.replace("₹", ""));
    if (sortOption === "highToLow")
      return parseInt(b.newPrice.replace("₹", "")) - parseInt(a.newPrice.replace("₹", ""));
    return 0;
  });

  const handleViewDetails = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className="couple-page">

      <div className="couple-banner">
        <img src={coupleBanner} alt="Couple Collection" />
      </div>
      <div className="couple-header">
        <div className="sort-dropdown">
          <FiFilter size={18} style={{ marginRight: "8px", color: "#444" }} />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="best">Best selling</option>
            <option value="a-z">Alphabetically, A–Z</option>
            <option value="z-a">Alphabetically, Z–A</option>
            <option value="lowToHigh">Price, low to high</option>
            <option value="highToLow">Price, high to low</option>
          </select>
        </div>
      </div>

      <div className="couple-grid">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="couple-card"
            onClick={() => handleViewDetails(product)}
          >
            <div className="couple-img-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <h3 className="couple-name">{product.name}</h3>
            <p className="couple-prices">
              <span className="old-price">{product.oldPrice}</span>
              <span className="new-price">{product.newPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Couple;
