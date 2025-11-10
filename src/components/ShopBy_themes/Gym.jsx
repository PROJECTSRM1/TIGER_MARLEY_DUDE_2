import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import gym1 from "../../assets/shop_by_themes/gym1.jpg";
import gym2 from "../../assets/shop_by_themes/gym2.jpg";
import gym3 from "../../assets/shop_by_themes/gym3.jpg";
import gym4 from "../../assets/shop_by_themes/gym4.jpg";
import gym5 from "../../assets/shop_by_themes/gym5.jpg";
import gym6 from "../../assets/shop_by_themes/gym6.jpg";
import gym7 from "../../assets/shop_by_themes/gym7.jpg";
import gym8 from "../../assets/shop_by_themes/gym8.jpg";
import gym9 from "../../assets/shop_by_themes/gym9.jpg";
import gym10 from "../../assets/shop_by_themes/gym10.jpg";
import gym11 from "../../assets/shop_by_themes/gym11.jpg";
import gym12 from "../../assets/shop_by_themes/gym12.jpg";
import "./Gym.css";

const Gym = () => {
  const navigate = useNavigate();

  const gymProducts = [
    { id: 1, name: "Be A Voice Not An Echo", image: gym1, newPrice: "₹599", oldPrice: "₹1099", soldOut: true },
    { id: 2, name: "Think It's Not Illegal Yet", image: gym2, newPrice: "₹599", oldPrice: "₹1099" },
    { id: 3, name: "Do It Half Sleeve", image: gym3, newPrice: "₹599", oldPrice: "₹1099" },
    { id: 4, name: "Limitless Half Sleeve", image: gym4, newPrice: "₹599", oldPrice: "₹1099" },
    { id: 5, name: "Believe Unisex Tee", image: gym5, newPrice: "₹599", oldPrice: "₹1099" },
    { id: 6, name: "Yes You Can Tee", image: gym6, newPrice: "₹599", oldPrice: "₹1099" },
    { id: 7, name: "Today Tee", image: gym7, newPrice: "₹599", oldPrice: "₹1099" },
    { id: 8, name: "Don't Quit Shirt", image: gym8, newPrice: "₹599", oldPrice: "₹1099" },
    { id: 9, name: "Hustle Tee", image: gym9, newPrice: "₹599", oldPrice: "₹1099" },
    { id: 10, name: "Never Skip Day Tee", image: gym10, newPrice: "₹599", oldPrice: "₹1099" },
    { id: 11, name: "Iron Mode Tee", image: gym11, newPrice: "₹599", oldPrice: "₹1099" },
    { id: 12, name: "Push Harder Tee", image: gym12, newPrice: "₹599", oldPrice: "₹1099" },
  ];

  const [sortOption, setSortOption] = useState("featured");

  const sortedProducts = [...gymProducts].sort((a, b) => {
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
    <div className="gym-page">
      <div className="gym-header">
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
            <option value="oldToNew">Date, old to new</option>
            <option value="newToOld">Date, new to old</option>
          </select>
        </div>
      </div>

      <div className="gym-grid">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="gym-card"
            onClick={() => handleViewDetails(product)}
          >
            <div className="gym-img-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <h3 className="gym-name">{product.name}</h3>
            <p className="gym-prices">
              <span className="old-price">{product.oldPrice}</span>
              <span className="new-price">{product.newPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gym;
