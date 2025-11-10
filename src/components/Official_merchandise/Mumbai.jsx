import React from "react";
import "./Mumbai.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Mumbai = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "MI: Travel Mug",
      newPrice: "₹999.00",
      oldPrice: "₹0",
      image: require("../../assets/mumbai_images/mi1.jpg"),
    },
    {
      id: 2,
      name: "MI: Classic White Embroidery Polo",
      newPrice: "₹1,259.00",
      oldPrice: "₹1,799.00",
      discount: "SAVE 30%",
      image: require("../../assets/mumbai_images/mi2.jpg"),
    },
    {
      id: 3,
      name: "MI: Mesh Men's Oversized T-Shirt",
      newPrice: "₹1,049.00",
      oldPrice: "₹1,499.00",
      discount: "SAVE 30%",
      image: require("../../assets/mumbai_images/mi3.jpg"),
    },
    {
      id: 4,
      name: "MI: Pattern Logo Back Print T-Shirt",
      newPrice: "₹1,049.00",
      oldPrice: "₹1,499.00",
      discount: "SAVE 30%",
      image: require("../../assets/mumbai_images/mi4.jpg"),
    },
    {
      id: 5,
      name: "MI: Blue Hoodie",
      newPrice: "₹1,899.00",
      oldPrice: "₹0",
      image: require("../../assets/mumbai_images/mi5.jpg"),
    },
    {
      id: 6,
      name: "MI: Cap Collection",
      newPrice: "₹699.00",
      oldPrice: "₹0",
      image: require("../../assets/mumbai_images/mi6.jpg"),
    },
    {
      id: 7,
      name: "MI: Jogger Pants",
      newPrice: "₹1,299.00",
      oldPrice: "₹0",
      image: require("../../assets/mumbai_images/mi7.jpg"),
    },
    {
      id: 8,
      name: "MI: Blue Graphic Tee",
      newPrice: "₹999.00",
      oldPrice: "₹0",
      image: require("../../assets/mumbai_images/mi8.jpg"),
    },
    {
      id: 9,
      name: "MI: Classic Jersey 2025",
      newPrice: "₹1,999.00",
      oldPrice: "₹0",
      image: require("../../assets/mumbai_images/mi9.jpg"),
    },
  ];

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <>
      <div className="mumbai-header">
        <div className="social-icons">
          <FaFacebookF />
          <FaXTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
        <h2 className="header-title">MI EXCLUSIVES</h2>
      </div>
      <div className="mumbai-container">
        <h1 className="mumbai-title">MUMBAI INDIANS OFFICIAL MERCHANDISE</h1>

        <div className="mumbai-grid">
          {products.map((item) => (
            <div
              key={item.id}
              className="product-card"
              onClick={() => handleProductClick(item)}
            >
              {item.discount && <div className="discount-tag">{item.discount}</div>}
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">
                  {item.newPrice}{" "}
                  {item.oldPrice !== "₹0" && (
                    <span className="product-old-price">{item.oldPrice}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mumbai;
