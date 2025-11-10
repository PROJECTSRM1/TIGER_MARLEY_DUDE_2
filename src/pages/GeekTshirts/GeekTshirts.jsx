import React from "react";
import { useNavigate } from "react-router-dom";
import { geekTshirts } from "../../data/products";
import "./GeekTshirts.css"; // add this line

const categories = [
  { key: "shop-all", label: "SHOP ALL", img: "/images/categories/all.png" },
  { key: "t-shirts", label: "T-SHIRTS", img: "/images/categories/tshirts.png" },
  { key: "hoodies", label: "HOODIES", img: "/images/categories/hoodies.png" },
  { key: "oversized", label: "OVERSIZED", img: "/images/categories/oversized.png" },
  { key: "full-sleeve", label: "SLEEVES", img: "/images/categories/sleeves.png" },
  { key: "kids", label: "KIDS", img: "/images/categories/kids.png" },
];

const GeekTshirts = () => {
  const navigate = useNavigate();

  return (
    <div className="geek-container">
      {/* Banner */}
      <img
        src="/images/geek-banner.png"
        alt="Geek Banner"
        className="geek-banner"
      />

      {/* Category Buttons */}
      <div className="geek-categories">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="category-item"
            onClick={() => navigate(`/geek/${cat.key}`)}
          >
            <img src={cat.img} alt={cat.label} />
            <span>{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="geek-grid">
        {geekTshirts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() =>
              navigate(`/product/${product.id}`, {
                state: {
                  id: product.id,
                  name: product.title,
                  image: product.image,
                  oldPrice: `₹${parseInt(product.price) + 300}`,
                  newPrice: `₹${product.price}`,
                  description:
                    product.description || "High-quality geek t-shirt for fans.",
                },
              })
            }
          >
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <p className="price">₹{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeekTshirts;
