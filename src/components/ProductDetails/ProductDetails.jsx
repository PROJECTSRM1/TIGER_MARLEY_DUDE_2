import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CartDrawer from "./CartDrawer"; // 🛒 Import the Cart Drawer component
import "./ProductDetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");
  const [mainMedia, setMainMedia] = useState(product?.image || "");
  const [activeTab, setActiveTab] = useState("description");
  const [isCartOpen, setIsCartOpen] = useState(false);

  if (!product) {
    return (
      <div className="no-product">
        Product not found.
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const thumbnails = [
    { src: product.image },
    { src: product.image },
    { src: product.image },
  ];

  const handleAddToCart = () => {
    setIsCartOpen(true);
  };

  const cartItems = [
    {
      name: product.name,
      price: parseInt(product.newPrice.replace("₹", "")),
      oldPrice: parseInt(product.oldPrice.replace("₹", "")),
      qty: quantity,
      size: size,
      color: "White",
      image: product.image,
    },
  ];

  return (
    <div className="product-detail-page">
      <div className="breadcrumb">
        <span onClick={() => navigate("/")}>Home</span> ›{" "}
        <span>Limited Editions</span> › <b>{product.name}</b>
      </div>
      <div className="product-detail-container">
        <div className="media-section">
          <div className="thumbnail-list">
            {thumbnails.map((item, idx) => (
              <div
                key={idx}
                className="thumb-wrapper"
                onClick={() => setMainMedia(item.src)}
              >
                <img src={item.src} alt="thumb" className="thumb" />
              </div>
            ))}
          </div>

          <div className="main-media">
            <img src={mainMedia} alt={product.name} />
          </div>
        </div>

        <div className="info-section">
          <h2>{product.name}</h2>
          <div className="rating">
            ⭐⭐⭐⭐☆ <span>15 Reviews</span>
          </div>

          <div className="price">
            <span className="old-price">{product.oldPrice}</span>
            <span className="new-price">{product.newPrice}</span>
          </div>

          <div className="size-section">
            <p>SIZE: {size}</p>
            <div className="sizes">
              {["S", "M", "L", "XL", "2XL"].map((s) => (
                <button
                  key={s}
                  className={`size-btn ${size === s ? "active" : ""}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="color-section">
            <p>COLOR: WHITE</p>
            <div className="color white"></div>
          </div>

          <div className="cart-actions">
            <div className="quantity">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                −
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>

            <button className="add-to-cart" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>

          <p className="offer">
            Pay Online & Get Flat <b>15% Off.</b> Use Code: <b>BUY2</b> Faster
            dispatch!
          </p>

          <div className="categories">
            Categories: Limited Editions, Motorsport, Music Hoodies, New Arrivals
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-tabs">
          <button
            className={activeTab === "description" ? "active-tab" : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={activeTab === "additional" ? "active-tab" : ""}
            onClick={() => setActiveTab("additional")}
          >
            Additional Information
          </button>
        </div>

        {activeTab === "description" && (
          <div className="footer-content">
            <h4>Printed Hoodies – Not Embroidered</h4>
            <p>
              <b>Wash Note:</b> Machine wash cold, use mild detergent, dry in the
              shade. Do not iron directly or scrub on print.
            </p>
            <p>
              <b>Standard Sizing:</b> U.S. and EU standards; size variation ±0.5".
            </p>
            <p>
              <b>Processing Time:</b> 24–48 hours.
            </p>
            <p>
              <b>Delivery Time:</b> 3–5 days metro, 4–7 days rest of India.
            </p>
          </div>
        )}

        {activeTab === "additional" && (
          <div className="additional-info-table">
            <table>
              <tbody>
                <tr>
                  <td><b>Size</b></td>
                  <td>S, M, L, XL, 2XL</td>
                </tr>
                <tr>
                  <td><b>Color</b></td>
                  <td>White</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </div>
  );
};

export default ProductDetails;
