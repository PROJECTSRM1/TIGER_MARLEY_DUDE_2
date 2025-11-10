import React, { useState } from "react";
import "./CheckoutPop.css";
import { useNavigate } from "react-router-dom";

const CheckoutPopup = ({ onClose = () => {} }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!/^\d{10}$/.test(formData.phone))
        newErrors.phone = "Enter a valid 10-digit mobile number";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = "Enter a valid email address";
    } else if (step === 2) {
      if (!formData.address.trim())
        newErrors.address = "Address cannot be empty";
      if (!formData.city.trim())
        newErrors.city = "City cannot be empty";
      if (!/^\d{6}$/.test(formData.pincode))
        newErrors.pincode = "Enter a valid 6-digit pincode";
    } else if (step === 3) {
      if (!formData.paymentMethod)
        newErrors.paymentMethod = "Please select a payment method";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
    
      if (window.history.length > 1) {
        navigate(-1); 
      } else {
        navigate("/cart"); 
      }
    }
  };

  const handlePayment = () => {
    if (!validateStep()) return;

    const method = formData.paymentMethod.toLowerCase();

    if (method === "cod") {
      alert("Order placed successfully with Cash on Delivery!");
      onClose();
      navigate("/"); 
    } else if (method === "razorpay") {
      alert("Order placed successfully with Razorpay!");
      onClose();
      navigate("/");
    } else if (method === "gpay") {
      alert("Order placed successfully with Gpay!");
      onClose();
      navigate("/");
    } else if (method === "phonepe") {
      alert("Order placed successfully with PhonePe!");
      onClose();
      navigate("/");
    } else if (method === "paytm") {
      alert("Order placed successfully with Paytm!");
      onClose();
      navigate("/");
    } else {
      alert("Please select a valid payment option!");
    }
  };

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
            {errors.phone && <p className="error">{errors.phone}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label>
              <input type="checkbox" /> Send me offers and updates
            </label>

            <div className="step-buttons">
              <button onClick={handlePrev}>Back</button>
              <button onClick={handleNext}>Continue</button>
            </div>
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
            {errors.address && <p className="error">{errors.address}</p>}

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="error">{errors.city}</p>}

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            {errors.pincode && <p className="error">{errors.pincode}</p>}

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
              <option value="cod">Cash on Delivery</option>
              <option value="razorpay">Razorpay</option>
              <option value="phonepe">PhonePe</option>
              <option value="gpay">Google Pay</option>
              <option value="paytm">Paytm</option>
            </select>
            {errors.paymentMethod && (
              <p className="error">{errors.paymentMethod}</p>
            )}
            <div className="step-buttons">
              <button onClick={handlePrev}>Back</button>
              <button onClick={handlePayment}>Pay Now</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPopup;
