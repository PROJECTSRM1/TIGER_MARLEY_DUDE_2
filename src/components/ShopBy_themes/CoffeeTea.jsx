import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CoffeeTea.css";

const CoffeeTea = () => {
  const initialProducts = [
    { id: 1, name: "You Are Hot | I Can Make U Wet | Tea Biscuit Unisex Tee", image: require("../../assets/shop_by_themes/coffeetea1.jpg"), oldPrice: 1199, newPrice: 599 },
    { id: 2, name: "Words Cannot Espresso How Much You Mean To Me", image: require("../../assets/shop_by_themes/coffeetea2.jpg"), oldPrice: 1199, newPrice: 599 },
    { id: 3, name: "The Never Ending Cycle Breakfast Lunch Dinner", image: require("../../assets/shop_by_themes/coffeetea3.jpg"), oldPrice: 1199, newPrice: 599 },
    { id: 4, name: "Latte Love Everyday Unisex Half Sleeve", image: require("../../assets/shop_by_themes/coffeetea4.jpg"), oldPrice: 1199, newPrice: 549 },
    { id: 5, name: "Espresso Yourself | Coffee Lovers Edition", image: require("../../assets/shop_by_themes/coffeetea5.jpg"), oldPrice: 1199, newPrice: 499 },
    { id: 6, name: "Coffee Makes Everything Possible", image: require("../../assets/shop_by_themes/coffeetea6.jpg"), oldPrice: 1199, newPrice: 699 },
    { id: 7, name: "Brew-tiful Morning Energy Tee", image: require("../../assets/shop_by_themes/coffeetea7.jpg"), oldPrice: 1199, newPrice: 649 },
    { id: 8, name: "Caffeine Queen Unisex Tee", image: require("../../assets/shop_by_themes/coffeetea8.jpg"), oldPrice: 1199, newPrice: 599 },
    { id: 9, name: "Just Brew It | Coffee Life Tee", image: require("../../assets/shop_by_themes/coffeetea9.jpg"), oldPrice: 1199, newPrice: 499 },
    { id: 10, name: "No Talkie Before Coffee | Morning Mood Tee", image: require("../../assets/shop_by_themes/coffeetea10.jpg"), oldPrice: 1199, newPrice: 699 },
    { id: 11, name: "Love You a Latte | Cute Coffee Design Tee", image: require("../../assets/shop_by_themes/coffeetea11.jpg"), oldPrice: 1199, newPrice: 599 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [sortOption, setSortOption] = useState("Featured");

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sorted = [...products];

    if (value === "Price, low to high") {
      sorted.sort((a, b) => a.newPrice - b.newPrice);
    } else if (value === "Price, high to low") {
      sorted.sort((a, b) => b.newPrice - a.newPrice);
    } else if (value === "Alphabetically, A-Z") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "Alphabetically, Z-A") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      sorted = initialProducts;
    }

    setProducts(sorted);
  };

  return (
    <div className="coffee-container">

      <div className="filter-bar">
        <div className="filter-left">
          <span>⚙️ Filter</span>
        </div>

        <select className="sort-select" value={sortOption} onChange={handleSort}>
          <option>Featured</option>
          <option>Alphabetically, A-Z</option>
          <option>Alphabetically, Z-A</option>
          <option>Price, low to high</option>
          <option>Price, high to low</option>
        </select>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link
              to={`/product/${product.id}`}
              state={{
                id: product.id,
                name: product.name,
                image: product.image,
                oldPrice: `₹${product.oldPrice}`,
                newPrice: `₹${product.newPrice}`,
              }}
              className="product-link"
            >
              <img src={product.image} alt={product.name} className="product-img" />
              <h4 className="product-name">{product.name}</h4>
              <p className="product-price">
                <span className="old-price">₹{product.oldPrice}</span>
                <span className="new-price">₹{product.newPrice}</span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeTea;
