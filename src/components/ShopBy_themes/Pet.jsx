import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import pet1 from "../../assets/shop_by_themes/pet1.jpg";
import pet2 from "../../assets/shop_by_themes/pet2.jpg";
import pet3 from "../../assets/shop_by_themes/pet3.jpg";
import pet4 from "../../assets/shop_by_themes/pet4.jpg";
import pet5 from "../../assets/shop_by_themes/pet5.jpg";
import pet6 from "../../assets/shop_by_themes/pet6.jpg";
import "./Pet.css";

const Pet = () => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("featured");

  const petProducts = [
    { id: 1, name: "What the Duck Unisex Half Sleeve T-Shirt", image: pet1, newPrice: "₹599", oldPrice: "₹1199" },
    { id: 2, name: "Mother of Dogs Boyfriend Fit Half Sleeve T-Shirt", image: pet2, newPrice: "₹599", oldPrice: "₹1199", soldOut: true },
    { id: 3, name: "Ew People Cat Unisex Half Sleeve T-Shirt", image: pet3, newPrice: "₹599", oldPrice: "₹1199", soldOut: true },
    { id: 4, name: "Mother of Cats Boyfriend Fit Half Sleeve T-Shirt", image: pet4, newPrice: "₹599", oldPrice: "₹1199", soldOut: true },
    { id: 5, name: "Fox You Unisex Half Sleeve T-Shirt", image: pet5, newPrice: "₹599", oldPrice: "₹1199", soldOut: true },
    { id: 6, name: "Zero Fluffs Given Cat Unisex Half Sleeve T-Shirt", image: pet6, newPrice: "₹599", oldPrice: "₹1199", soldOut: true },
  ];

  const sortedProducts = [...petProducts].sort((a, b) => {
    if (sortOption === "a-z") return a.name.localeCompare(b.name);
    if (sortOption === "z-a") return b.name.localeCompare(a.name);
    if (sortOption === "lowToHigh")
      return parseInt(a.newPrice.replace("₹", "")) - parseInt(b.newPrice.replace("₹", ""));
    if (sortOption === "highToLow")
      return parseInt(b.newPrice.replace("₹", "")) - parseInt(a.newPrice.replace("₹", ""));
    return 0;
  });

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className="pet-page">
      <div className="pet-header">
        <div className="sort-dropdown">
          <FiFilter size={18} style={{ marginRight: "8px", color: "#444" }} />
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="best">Best selling</option>
            <option value="a-z">Alphabetically, A–Z</option>
            <option value="z-a">Alphabetically, Z–A</option>
            <option value="lowToHigh">Price, low to high</option>
            <option value="highToLow">Price, high to low</option>
          </select>
        </div>
      </div>

      <div className="pet-grid">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="pet-card"
            onClick={() => handleProductClick(product)}
            style={{ cursor: "pointer" }}
          >
            <div className="pet-img-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <h3 className="pet-name">{product.name}</h3>
            <p className="pet-prices">
              <span className="old-price">{product.oldPrice}</span>
              <span className="new-price">{product.newPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pet;
