import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { geekHoodies } from "../../data/products";
import "./GeekHoodies.css";

const GeekHoodies = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("az");
  const navigate = useNavigate();

  const filteredProducts = geekHoodies.filter((product) => {
    switch (filter) {
      case "under1000":
        return product.price < 1000;
      case "1000to1500":
        return product.price >= 1000 && product.price <= 1500;
      case "above1500":
        return product.price > 1500;
      default:
        return true;
    }
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "az":
        return a.title.localeCompare(b.title);
      case "za":
        return b.title.localeCompare(a.title);
      case "lowHigh":
        return a.price - b.price;
      case "highLow":
        return b.price - a.price;
      default:
        return 0;
    }
  });

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

  return (
    <div className="hoodies-container">
      {/* Header */}
      <div className="hoodies-header">
        <button onClick={() => setFilterOpen(true)} className="filter-btn">
          🧩 Filter
        </button>

        <div className="sort-section">
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="az">Alphabetically, A–Z</option>
            <option value="za">Alphabetically, Z–A</option>
            <option value="lowHigh">Price: Low to High</option>
            <option value="highLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Filter Sidebar */}
      {filterOpen && (
        <>
          <div className="filter-sidebar">
            <div className="filter-header">
              <h2>Filter Options</h2>
              <button
                onClick={() => setFilterOpen(false)}
                className="close-btn"
              >
                ✖
              </button>
            </div>

            <h3>Price</h3>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    name="price"
                    value="under1000"
                    checked={filter === "under1000"}
                    onChange={(e) => setFilter(e.target.value)}
                  />{" "}
                  ₹0 — ₹999
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="price"
                    value="1000to1500"
                    checked={filter === "1000to1500"}
                    onChange={(e) => setFilter(e.target.value)}
                  />{" "}
                  ₹1000 — ₹1500
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="price"
                    value="above1500"
                    checked={filter === "above1500"}
                    onChange={(e) => setFilter(e.target.value)}
                  />{" "}
                  ₹1500+
                </label>
              </li>
            </ul>

            <button
              className="apply-btn"
              onClick={() => setFilterOpen(false)}
            >
              Apply Filters
            </button>
          </div>

          <div className="overlay" onClick={() => setFilterOpen(false)}></div>
        </>
      )}

      {/* Product Grid */}
      <div className="hoodies-grid">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="hoodie-card"
            onClick={() => handleNavigate(product)}
          >
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>
            <p className="price">
              <span className="old">₹{parseInt(product.price) + 1000}</span>{" "}
              ₹{product.price}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate(product);
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

export default GeekHoodies;
