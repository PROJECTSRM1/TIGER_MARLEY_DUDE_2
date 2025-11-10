import React from "react";
import "./FootballHoodies.css";

const FootballHoodies = () => {
  const categories = [
    {
      id: 1,
      name: "Oversized",
      image: "/src/assets/footballHoodies/oversized.png",
    },
    {
      id: 2,
      name: "Hoodie",
      image: "/src/assets/footballHoodies/hoodie.png",
    },
    {
      id: 3,
      name: "Half Sleeve",
      image: "/src/assets/footballHoodies/halfsleeve.png",
    },
  ];

  const products = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Football Hoodie ${i + 1}`,
    image: `/src/assets/footballHoodies/football${i + 1}.png`,
    price: `₹${899 + (i % 5) * 50}`,   }));

  return (
    <div className="football-hoodies-page">
      <h2 className="section-title">Football Hoodies</h2>

      <div className="categories">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      <div className="filter-sort">
        <div className="filter">
          <span>⚙️ Filter</span>
        </div>
        <div className="sort">
          <select>
            <option>Best Selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootballHoodies;
