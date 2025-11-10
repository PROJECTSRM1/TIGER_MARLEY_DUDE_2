import React, { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!firstname.trim()) newErrors.firstname = "First name is required.";
    if (!lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Please enter a valid email.";
    if (!password.trim()) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Save user data to localStorage (temporary)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("User already exists. Please sign in.");
      navigate("/?openLogin=true");
      return;
    }

    users.push({ firstname, lastname, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please sign in.");
    navigate("/?openLogin=true");
  };

  return (
    <>
      {isOpen && (
        <div
          className="register-overlay"
          onClick={() => {
            setIsOpen(false);
            navigate("/");
          }}
        >
          <div
            className="register-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="register-header">
              <h3>Create Account</h3>
              <X
                className="close-icon"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/");
                }}
              />
            </div>

            <form className="register-form" onSubmit={handleRegister}>
              <label>
                First Name <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              {errors.firstname && (
                <p className="error-message">{errors.firstname}</p>
              )}

              <label>
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              {errors.lastname && (
                <p className="error-message">{errors.lastname}</p>
              )}

              <label>
                Email Address <span>*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="error-message">{errors.email}</p>
              )}

              <label>
                Password <span>*</span>
              </label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}

              <button type="submit" className="register-btn">
                Create Account
              </button>

              <p className="already-account">
                Already a customer?{" "}
                <span
                  className="login-link"
                  onClick={() => navigate("/?openLogin=true")}
                >
                  Sign In
                </span>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;