import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartDrawer.css";

function CartDrawer({ isOpen, onClose, cartItems }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>
                  {item.size} / {item.color}
                </p>
                <div className="cart-item-actions">
                  <span className="old-price">₹{item.oldPrice}</span>
                  <span className="new-price">₹{item.price}</span>
                  <div className="qty-control">
                    <button>-</button>
                    <span>{item.qty}</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="suggestions">
          <h4>You may also like</h4>
          <div className="suggestion-item">
            <img src="/assets/sample1.jpg" alt="suggestion" />
            <div>
              <p>Pikachu x Sasuke Unisex Tee</p>
              <span className="old-price">₹1,199</span>
              <span className="new-price">₹649</span>
            </div>
          </div>
        </div>

        <div className="checkout-section">
          <div className="coupon-banner">
            <p>Checkout now to claim your coupon</p>
          </div>
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>₹{subtotal}</span>
          </div>
          <p className="cart-meta">Safe Shipping | Secure Payments</p>

          <button
            className="checkout-btn"
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
          >
            CHECK OUT
          </button>

          <button className="viewcart-btn">VIEW CART</button>
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
