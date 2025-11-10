import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nasa.css";

const Nasa = () => {
  const initialProducts = [
    {
      id: 1,
      name: "NASA Classic Tee",
      image: require("../../assets/nasa_images/nasa1.jpg"),
      oldPrice: 1299,
      newPrice: 899,
    },
    {
      id: 2,
      name: "Space Explorer",
      image: require("../../assets/nasa_images/nasa2.jpg"),
      oldPrice: 1399,
      newPrice: 999,
    },
    {
      id: 3,
      name: "Mission Control",
      image: require("../../assets/nasa_images/nasa3.jpg"),
      oldPrice: 1199,
      newPrice: 849,
    },
    {
      id: 4,
      name: "Galaxy Dreams",
      image: require("../../assets/nasa_images/nasa4.jpg"),
      oldPrice: 1399,
      newPrice: 999,
    },
    {
      id: 5,
      name: "Rocket Launch",
      image: require("../../assets/nasa_images/nasa5.jpg"),
      oldPrice: 1099,
      newPrice: 799,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleSortChange = (e) => {
    const value = e.target.value;
    let sortedProducts = [...products];

    switch (value) {
      case "a-z":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-high":
        sortedProducts.sort((a, b) => a.newPrice - b.newPrice);
        break;
      case "high-low":
        sortedProducts.sort((a, b) => b.newPrice - a.newPrice);
        break;
      default:
        sortedProducts = initialProducts;
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="nasa-page">

      <div className="nasa-banner">
        <img
          src={require("../../assets/nasa_images/nasa_banner.jpg")}
          alt="NASA Banner"
          className="banner-image"
        />
      </div>

      <div className="nasa-filter-sort">
        <div className="filter">⚙️ Filter</div>
        <select className="sort-dropdown" onChange={handleSortChange}>
          <option value="">Best selling</option>
          <option value="a-z">Alphabetically, A-Z</option>
          <option value="z-a">Alphabetically, Z-A</option>
          <option value="low-high">Price, low to high</option>
          <option value="high-low">Price, high to low</option>
        </select>
      </div>

      <div className="nasa-grid">
        {products.map((product) => (
          <div key={product.id} className="nasa-card">
         
            <Link
              to={`/product/${product.id}`}
              state={{
                id: product.id,
                name: product.name,
                image: product.image,
                oldPrice: `₹${product.oldPrice}`,
                newPrice: `₹${product.newPrice}`,
              }}
              className="nasa-link"
            >
              <img src={product.image} alt={product.name} className="nasa-image" />
              <h3 className="nasa-name">{product.name}</h3>
              <div className="price-section">
                <span className="old-price">₹{product.oldPrice}</span>
                <span className="new-price">₹{product.newPrice}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nasa;
