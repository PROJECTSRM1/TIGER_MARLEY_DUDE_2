import React from "react";
import { useNavigate } from "react-router-dom";
import { animeOversized } from "../../data/products";
import sarcasamBanner from "../../assets/shop_by_themes/sarcasam_banner.jpg";
import "./Sarcasam.css";

const Sarcasam = () => {
  const navigate = useNavigate();

  const formattedProducts = animeOversized.map((item) => ({
    ...item,
    name: item.title,
    newPrice: `₹${item.price}`,
    oldPrice: `₹${item.price + 200}`, 
  }));

  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className="sarcasam-container">
      <div className="sarcasam-banner">
        <img src={sarcasamBanner} alt="Sarcasam Banner" />
      </div>

      <div className="sarcasam-grid">
        {formattedProducts.map((product) => (
          <div
            className="sarcasam-card"
            key={product.id}
            onClick={() => handleViewDetails(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="sarcasam-img"
            />
            <h3 className="sarcasam-title">{product.name}</h3>
            <p className="sarcasam-price">{product.newPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sarcasam;
