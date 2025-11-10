import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./XS_size.css";

const LSize = () => {
  const initialProducts = [
    { id: 1, name: "Eat Sleep Code Repeat Half Sleeve T-Shirt", image: require("../../assets/xl_xxl_xs_images/l1.jpg"), oldPrice: 1199, newPrice: 599 },
    { id: 2, name: "Keep Calm And Code On Half Sleeve T-Shirt", image: require("../../assets/xl_xxl_xs_images/l2.jpg"), oldPrice: 1199, newPrice: 599 },
    { id: 3, name: "Future Programmer Half Sleeve Unisex Tee", image: require("../../assets/xl_xxl_xs_images/l3.jpg"), oldPrice: 1199, newPrice: 599 },
    { id: 4, name: "Trust Me I Write Code Half Sleeve T-Shirt", image: require("../../assets/xl_xxl_xs_images/l4.jpg"), oldPrice: 1199, newPrice: 499 },
    { id: 5, name: "Debugging Is My Cardio Half Sleeve Tee", image: require("../../assets/xl_xxl_xs_images/l5.jpg"), oldPrice: 1199, newPrice: 699 },
    { id: 6, name: "Code Hard Or Go Home Unisex T-Shirt", image: require("../../assets/xl_xxl_xs_images/l6.jpg"), oldPrice: 1199, newPrice: 549 },
    { id: 7, name: "I Turn Coffee Into Code Tee", image: require("../../assets/xl_xxl_xs_images/l7.jpg"), oldPrice: 1199, newPrice: 599 },
    { id: 8, name: "99 Bugs In The Code Half Sleeve T-Shirt", image: require("../../assets/xl_xxl_xs_images/l8.jpg"), oldPrice: 1199, newPrice: 599 },
    { id: 9, name: "Talk Is Cheap Show Me The Code Tee", image: require("../../assets/xl_xxl_xs_images/l9.jpg"), oldPrice: 1199, newPrice: 549 },
    { id: 10, name: "Coding Is My Superpower T-Shirt", image: require("../../assets/xl_xxl_xs_images/l10.jpg"), oldPrice: 1199, newPrice: 699 },
    { id: 11, name: "Eat Sleep Compile Repeat T-Shirt", image: require("../../assets/xl_xxl_xs_images/l11.jpg"), oldPrice: 1199, newPrice: 499 },
    { id: 12, name: "No Bugs No Life Unisex Tee", image: require("../../assets/xl_xxl_xs_images/l12.jpg"), oldPrice: 1199, newPrice: 599 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [sortOption, setSortOption] = useState("Best selling");

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sorted = [...products];

    if (value === "Price, low to high") {
      sorted.sort((a, b) => a.newPrice - b.newPrice);
    } else if (value === "Price, high to low") {
      sorted.sort((a, b) => b.newPrice - a.newPrice);
    } else if (value === "Newest") {
      sorted.sort((a, b) => b.id - a.id);
    } else {
      sorted = initialProducts;
    }

    setProducts(sorted);
  };

  return (
    <div className="xs-container">
      <div className="xs-header">
        <p className="xs-subtitle">GREAT DEALS!</p>
        <h2 className="xs-title">CLEARANCE STORE UPTO 50%</h2>
        <div className="xs-size-buttons">
                  <Link to="/size/xs" className="size-btn active">SIZE XS</Link>
                  <Link to="/size/s" className="size-btn">SIZE S</Link>
                  <Link to="/size/m" className="size-btn">SIZE M</Link>
                  <Link to="/size/l" className="size-btn">SIZE L</Link>
                  <Link to="/size/xl" className="size-btn">SIZE XL</Link>
                  <Link to="/size/xxl" className="size-btn">SIZE 2XL</Link>
                </div>
      </div>

      <div className="xs-filter-bar">
        <div className="xs-filter">
          <span>⚙️ Filter</span>
        </div>

        <select className="xs-sort" value={sortOption} onChange={handleSort}>
          <option>Best selling</option>
          <option>Price, low to high</option>
          <option>Price, high to low</option>
          <option>Newest</option>
        </select>
      </div>

      <div className="xs-products-grid">
        {products.map((product) => (
          <div key={product.id} className="xs-card">
            <Link
              to={`/product/${product.id}`}
              state={{
                id: product.id,
                name: product.name,
                image: product.image,
                oldPrice: `₹${product.oldPrice}`,
                newPrice: `₹${product.newPrice}`,
              }}
              className="xs-link"
            >
              <img src={product.image} alt={product.name} className="xs-image" />
              <h4 className="xs-name">{product.name}</h4>
              <p className="xs-prices">
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

export default LSize;
