import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShopSignIn.css";


const ShopSignIn = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const navigate = useNavigate();
  const handleContinue = () => {
    if (email) {
      setShowPopup(true);
    }
  };

  const closePopup = () => setShowPopup(false);

   const handleConfirm = (e) => {
    e.stopPropagation();
    // When the "Confirm it's you" button is clicked, navigate to the home page with a welcome message.
    console.log("Navigating to Home Page...")
    navigate('/home');
  };

  return (
    <div className="login-container">
  <h2 className="login-title">Sign in</h2>
  <p className="login-subtitle">Choose how you'd like to sign in</p>

  <button
    className="shop-login-btn"
    onClick={() => setShowConfirmPopup(true)}
    > 
    Sign in with Shop
  </button>

   <div className="divider">
    <span>or</span>
    </div>
    <div className="option-box" onClick={() => setIsEmailLogin(true)}>
     <div className={`radio-dot ${isEmailLogin ? "active" : ""}`}></div>
     <span>Sign in with Email</span>
     </div>

  <form
    className="login-form"
    onSubmit={(e) => {
      e.preventDefault();
      if (!username) {
        setEmailError("Please enter your email.");
        return;
      }
       setEmailError("");
       setShowPopup(true);
    }}
  >
    <div className="email-option" onClick={() => setIsEmailLogin(true)}>
      Login with Email
      </div>
      <input
      type="email"
      className="input-field"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Enter your email"
      />
      {emailError && <p className="error-text">{emailError}</p>}
     <button
    className="continue-btn"
    disabled={!isEmailLogin || !username.trim()} // ✅ only enabled when email login selected & email entered
    style={{
    background: (!isEmailLogin || !username.trim()) ? "#bfbfbf" : "#000",
    cursor: (!isEmailLogin || !username.trim()) ? "not-allowed" : "pointer"
    }}
    >
    Continue
    </button>
    </form>

    {/* Popup Overlay */}
      {showPopup && (
       <div className="popup-overlay">
       <div className="popup-card">
       <button className="close-icon" onClick={closePopup}>×</button>

        <h2 className="shop-logo">shop</h2>
        <h3 className="popup-heading">Sign in to Tiger Marley</h3>

        <div className="popup-email-box">
        <span className="user-icon">👤</span> {username}
        </div>

         <button className="confirm-btn" onClick={handleConfirm}>Confirm it’s you</button>

         <p className="popup-info">
          By continuing, Shop will share your name and email with Tiger Marley. <br />
          See their <a href="#">terms</a> and <a href="#">privacy policy</a>.
         </p>
        </div>
      </div>
      )}
    </div>
  );
};

export default ShopSignIn;