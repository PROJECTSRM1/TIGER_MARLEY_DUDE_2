import React, { useState } from "react";
import "./CheckoutPop.css";

const CheckoutPopup = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    address: "",
    city: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <div className="checkout-overlay">
      <div className="checkout-container">
        <div className="checkout-header">
          <h3>Checkout</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="checkout-steps">
          <span className={step >= 1 ? "active" : ""}>Contact</span>
          <span className={step >= 2 ? "active" : ""}>Address</span>
          <span className={step === 3 ? "active" : ""}>Payment</span>
        </div>

        {step === 1 && (
          <div className="checkout-step">
            <h4>Contact details</h4>
            <input
              type="tel"
              name="phone"
              placeholder="Mobile number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            <label>
              <input type="checkbox" /> Send me offers and updates
            </label>
            <button onClick={handleNext}>Continue</button>
          </div>
        )}

        {step === 2 && (
          <div className="checkout-step">
            <h4>Shipping Address</h4>
            <input
              type="text"
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <div className="step-buttons">
              <button onClick={handlePrev}>Back</button>
              <button onClick={handleNext}>Continue</button>
            </div>
          </div>
        )}

    
        {step === 3 && (
          <div className="checkout-step">
            <h4>Payment Method</h4>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="">Select Payment Method</option>
              <option value="razorpay">Razorpay</option>
              <option value="card">Credit/Debit Card</option>
              <option value="cod">Cash on Delivery</option>
            </select>
            <div className="step-buttons">
              <button onClick={handlePrev}>Back</button>
              <button onClick={() => alert("Payment Complete!")}>Pay Now</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPopup;
