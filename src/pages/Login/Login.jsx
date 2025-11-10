import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import "./Login.css";

const Login = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(username)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setPasswordError("Please enter password.");
      return;
    }

    if (username === "test@example.com" && password === "password123") {
      onLogin(username);
      onClose();
    } else {
      setPasswordError("Incorrect email or password.");
    }
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="login-header">
          <h3>LOGIN</h3>
          <X className="close-icon" onClick={onClose} />
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email <span>*</span></label>
          <input
            type="email"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}

          <label>Password <span>*</span></label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}

          <a href="/" className="forgot-password">Forgot your password?</a>
          <button type="submit" className="login-btn">Sign In</button>
          <button
            type="button"
            className="new-account"
            onClick={() => navigate("/register")}
          >
            New customer? Create an account
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;