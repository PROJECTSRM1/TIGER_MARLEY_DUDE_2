import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Punjab.css";

const Punjab = () => {
  const navigate = useNavigate();

  const initialProducts = [
    { id: 1, name: "100% Punjabi", image: require("../../assets/punjab_images/pk1.jpg"), oldPrice: "₹1299", newPrice: "₹899" },
    { id: 2, name: "Punjab Kings Tee", image: require("../../assets/punjab_images/pk2.jpg"), oldPrice: "₹1399", newPrice: "₹999" },
    { id: 3, name: "Sadde Panga Changa", image: require("../../assets/punjab_images/pk3.jpg"), oldPrice: "₹1199", newPrice: "₹849" },
    { id: 4, name: "Chardi Kala Vibes", image: require("../../assets/punjab_images/pk4.jpg"), oldPrice: "₹1299", newPrice: "₹899" },
    { id: 5, name: "Royal Punjab Tee", image: require("../../assets/punjab_images/pk5.jpg"), oldPrice: "₹1399", newPrice: "₹999" },
    { id: 6, name: "Red Warrior", image: require("../../assets/punjab_images/pk6.jpg"), oldPrice: "₹1099", newPrice: "₹799" },
    { id: 7, name: "Golden Spirit", image: require("../../assets/punjab_images/pk7.jpg"), oldPrice: "₹1199", newPrice: "₹849" },
    { id: 8, name: "Bold Kings", image: require("../../assets/punjab_images/pk8.jpg"), oldPrice: "₹1299", newPrice: "₹899" },
    { id: 9, name: "Match Ready", image: require("../../assets/punjab_images/pk9.jpg"), oldPrice: "₹1399", newPrice: "₹999" },
    { id: 10, name: "Game Day Tee", image: require("../../assets/punjab_images/pk10.jpg"), oldPrice: "₹1199", newPrice: "₹849" },
    { id: 11, name: "Champion Mode", image: require("../../assets/punjab_images/pk11.jpg"), oldPrice: "₹1299", newPrice: "₹899" },
    { id: 12, name: "Punjabi Pride", image: require("../../assets/punjab_images/pk12.jpg"), oldPrice: "₹1399", newPrice: "₹999" },
  ];

  const [products, setProducts] = useState(initialProducts);

  // 🧠 Handle Sorting
  const handleSortChange = (e) => {
    const value = e.target.value;
    let sorted = [...products];

    if (value === "a-z") sorted.sort((a, b) => a.name.localeCompare(b.name));
    else if (value === "z-a") sorted.sort((a, b) => b.name.localeCompare(a.name));
    else if (value === "low-high") sorted.sort((a, b) => parseInt(a.newPrice.replace("₹", "")) - parseInt(b.newPrice.replace("₹", "")));
    else if (value === "high-low") sorted.sort((a, b) => parseInt(b.newPrice.replace("₹", "")) - parseInt(a.newPrice.replace("₹", "")));
    else sorted = initialProducts;

    setProducts(sorted);
  };
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className="punjab-page">
      <div className="punjab-banner">
        <img
          src={require("../../assets/punjab_images/punjab_banner.jpg")}
          alt="Punjab Kings Banner"
          className="banner-image"
        />
      </div>

      <div className="punjab-filter-sort">
        <div className="filter">⚙️ Filter</div>
        <select className="sort-dropdown" onChange={handleSortChange}>
          <option value="">Best selling</option>
          <option value="a-z">Alphabetically, A-Z</option>
          <option value="z-a">Alphabetically, Z-A</option>
          <option value="low-high">Price, low to high</option>
          <option value="high-low">Price, high to low</option>
        </select>
      </div>

      <div className="punjab-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="punjab-card"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.name} className="punjab-image" />
            <h3 className="punjab-name">{product.name}</h3>
            <div className="price-section">
              <span className="old-price">{product.oldPrice}</span>
              <span className="new-price">{product.newPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Punjab;
