import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartDrawer.css";
import { staticCartData } from "../../data/staticCartData";

function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const subtotal = staticCartData.reduce(
    (total, item) => total + item.price,
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
          {staticCartData.length === 0 ? (
            <p>Your Cart is Empty</p>
          ) : (
            staticCartData.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <span className="new-price">₹{item.price}</span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="checkout-section">
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
          <button className="viewcart-btn" onClick={()=>{onClose();navigate("/view-cart");}}>VIEW CART</button>
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
