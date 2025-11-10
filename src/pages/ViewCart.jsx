import React from "react";
import "../pages/ViewCart.css";
import { staticCartData } from "../data/staticCartData";

const ViewCart = () => {
  const subtotal = staticCartData.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="view-cart">
      <h2>Shopping Cart</h2>

      <div className="cart-table">
        <div className="cart-row header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>

        {staticCartData.map((item) => (
          <div className="cart-row" key={item.id}>
            <div className="product-info">
              <img src={item.image} alt={item.title} />
              <div>
                <p className="product-title">{item.title}</p>
                <p className="product-meta">Color: {item.color}</p>
                <p className="product-meta">Size: {item.size}</p>
              </div>
            </div>

            <div className="price">
              <span className="old-price">₹{item.oldPrice}</span>
              <span className="new-price">₹{item.price}</span>
            </div>

            <div className="quantity">
              <span>{item.qty}</span>
            </div>

            <div className="total">₹{item.price * item.qty}</div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Subtotal: <strong>₹{subtotal}</strong></p>
        <button className="checkout-btn">CHECK OUT</button>
      </div>
    </div>
  );
};

export default ViewCart;