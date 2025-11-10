import React, { useState, createContext, useContext } from "react";
import { Search,User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import "./Navbar.css";
import { staticCartData } from "../../data/staticCartData";
import Register from "./../Register/Register";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// import { User } from "react-feather";
export const CartContext = createContext();

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(""); 
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Men");

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register");
  };
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const location = useLocation();
   // Detect if user should open login popup automatically
     useEffect(() => {
     const params = new URLSearchParams(location.search);
     const openLogin = params.get("openLogin");
     if (openLogin === "true") {
     setIsLoginOpen(true);
     }
     }, [location]);


  const productsData = {
    Combo: [
      { id: 1, title: "Pack of 2 Akatsuki Black & White Anime Combo", price: 950, oldPrice: 2199, image: "/assets/search_icon_images/search1.jpg" },
      { id: 2, title: "Pick Any 3 Oversized Anime Combo", price: 1497, oldPrice: 1949, image: "/assets/search_icon_images/search2.jpg" },
      { id: 3, title: "Pack of 2 DBZ White & Maroon Anime Combo", price: 950, oldPrice: 2199, image: "/assets/search_icon_images/search3.jpg" },
      { id: 4, title: "Pack of 2 Naruto Anime Combo", price: 950, oldPrice: 2199, image: "/assets/search_icon_images/search4.jpg" },
      { id: 5, title: "Pack of 3 Programmer Navy Geek Combo", price: 1349, oldPrice: 2299, image: "/assets/search_icon_images/search5.jpg" },
    ],
    "T-Shirts": [
      { id: 6, title: "Code More Sleep Less T-Shirt", price: 599, oldPrice: 999, image: "/assets/search_icon_images/thsirt1.jpg" },
      { id: 7, title: "Eat Sleep Code Repeat T-Shirt", price: 699, oldPrice: 999, image: "/assets/search_icon_images/thsirt2.jpg" },
      { id: 8, title: "Debugging Mode On T-Shirt", price: 649, oldPrice: 1099, image: "/assets/search_icon_images/thsirt3.jpg" },
      { id: 9, title: "Developer Fuel Coffee T-Shirt", price: 749, oldPrice: 1199, image: "/assets/search_icon_images/thsirt4.jpg" },
      { id: 10, title: "Error 404 Sleep Not Found T-Shirt", price: 799, oldPrice: 1299, image: "/assets/search_icon_images/thsirt5.jpg" },
    ],
    Hoodies: [
      { id: 11, title: "Backend Developer Hoodie", price: 999, oldPrice: 1599, image: "/assets/search_icon_images/hoodies1.jpg" },
      { id: 12, title: "Frontend Warrior Hoodie", price: 999, oldPrice: 1499, image: "/assets/search_icon_images/hoodies2.jpg" },
      { id: 13, title: "Debug Life Hoodie", price: 1099, oldPrice: 1599, image: "/assets/search_icon_images/hoodies3.jpg" },
      { id: 14, title: "Code Eat Sleep Hoodie", price: 999, oldPrice: 1499, image: "/assets/search_icon_images/hoodies4.jpg" },
      { id: 15, title: "Stay Calm and Code Hoodie", price: 1099, oldPrice: 1699, image: "/assets/search_icon_images/hoodies5.jpg" },
    ],
    Oversized: [
      { id: 16, title: "Big Brain Oversized Tee", price: 899, oldPrice: 1499, image: "/assets/search_icon_images/oversized1.jpg" },
      { id: 17, title: "Think Different Oversized Tee", price: 999, oldPrice: 1499, image: "/assets/search_icon_images/oversized2.jpg" },
      { id: 18, title: "Coding Marathon Oversized Tee", price: 999, oldPrice: 1499, image: "/assets/search_icon_images/oversized3.jpg" },
      { id: 19, title: "Late Night Debugger Oversized Tee", price: 999, oldPrice: 1499, image: "/assets/search_icon_images/oversized4.jpg" },
      { id: 20, title: "Zero Bugs Oversized Tee", price: 999, oldPrice: 1499, image: "/assets/search_icon_images/oversized5.jpg" },
    ],
  };

  const filteredProducts =
    selectedCategory && productsData[selectedCategory]
      ? productsData[selectedCategory].filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      )
      : [];

 // ✅ Handle login with validation + persistence
  const handleLogin = (e) => {
  e.preventDefault();

  // Clear previous errors
  setEmailError("");
  setPasswordError("");

  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!username) {
    setEmailError("Please enter your email.");
    return;
  }

  if (!emailPattern.test(username)) {
    setEmailError("Please enter a valid email address.");
    return;
  }


  if (!password) {
    setPasswordError("Please enter password.");
    return;
  }
    localStorage.setItem("userEmail", username);
    localStorage.setItem("userPassword", password);
    
    alert("Registration successful! You can now log in.");
    setUsername("");
    setPassword("");
    
     const savedEmail = localStorage.getItem("userEmail");
      const savedPassword = localStorage.getItem("userPassword");

      if (username === savedEmail && password === savedPassword) {
        setIsLoggedIn(true);
        setIsLoginOpen(false);

    // ✅ Save login info in localStorage
        localStorage.setItem("isLoggedIn", "true");
         localStorage.setItem("username", username);

    navigate("/shop-sign-in");
  } else {
    setPasswordError("Incorrect email or password.");
  }
  };

// ✅ Handle logout and clear localStorage
const handleLogout = () => {
  setIsLoggedIn(false);
  setUsername("");
  setPassword("");

  // ✅ Remove user data
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
};

// ✅ Restore login state on component mount
useEffect(() => {
  const savedLogin = localStorage.getItem("isLoggedIn");
  const savedUsername = localStorage.getItem("username");

  if (savedLogin === "true" && savedUsername) {
    setIsLoggedIn(true);
    setUsername(savedUsername);
  }
}, []);
  useEffect(() => {
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  setWishlistItems(storedWishlist);

  // Update when wishlist changes elsewhere
   window.addEventListener("storage", () => {
    const updatedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(updatedWishlist);
    });
   }, []);
  

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, setIsCartOpen }}>
      <header className="navbar">
        <div className="logo">
          <h1>
            Tiger<span>Marley</span>
          </h1>
        </div>

        <div className="icons">
          <Search className="icon" onClick={() => setIsSearchOpen(true)} />

          <div className="user-section">
            <User
              className="icon"
              onClick={() => {
                if (isLoggedIn) handleLogout();
                else setIsLoginOpen(true);
              }}
            />
            {isLoggedIn && <span className="username">Hi,<strong>{username}</strong></span>}
          </div>

          <div
          className="icon-badge"
          onClick={() => setIsWishlistOpen(true)}
          style={{ cursor: "pointer" }}
           >
         <Heart className="icon" />
         {wishlistItems.length > 0 && (
        <span className="badge">{wishlistItems.length}</span>
         )}
         </div>


          <div className="icon-badge" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="icon" />
            <span className="badge">{staticCartData.length}</span>
          </div>

          <Menu className="icon" onClick={() => setIsMenuOpen(true)} />
        </div>
      </header>

      {isCartOpen && (
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
      <div className="cart-header">
         <h3>Your Cart</h3>
        <X className="close-icon" onClick={() => setIsCartOpen(false)} />
      </div>

      {staticCartData.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {staticCartData.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
               </div>
             </div>
            ))}
           </div>
          )}
         </div>
        </div>
       )}

         {isWishlistOpen && (
  <div className="wishlist-overlay" onClick={() => setIsWishlistOpen(false)}>
    <div className="wishlist-drawer" onClick={(e) => e.stopPropagation()}>
      <div className="wishlist-header">
        <h3>My Wishlist ❤️</h3>
        <X className="close-icon" onClick={() => setIsWishlistOpen(false)} />
      </div>

      {wishlistItems.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => {
                    const updated = wishlistItems.filter(
                      (w) => w.name !== item.name
                    );
                    setWishlistItems(updated);
                    localStorage.setItem("wishlist", JSON.stringify(updated));
                  }}
                >
                  Remove
                  </button>
               </div>
            </div>
             ))}
           </div>
           )}
         </div>
       </div>
      )}


      {isSearchOpen && (
        <div className="search-overlay" onClick={() => setIsSearchOpen(false)}>
          <div
            className="search-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="search-header">
              <h3>SEARCH OUR SITE</h3>
              <X className="close-icon" onClick={() => setIsSearchOpen(false)} />
            </div>

            <select
              className="search-dropdown"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setQuery("");
              }}
              >
              <option value="">Select Category</option>
              <option value="Combo">Combo</option>
              <option value="T-Shirts">T-Shirts</option>
              <option value="Hoodies">Hoodies</option>
              <option value="Oversized">Oversized</option>
              </select>

            {selectedCategory && (
              <div className="search-input-box">
                <input
                  type="text"
                  placeholder={`Search in ${selectedCategory}`}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Search className="search-input-icon" />
              </div>
            )}

            {selectedCategory && (
              <div className="search-results">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => (
                    <div key={item.id} className="search-item">
                      <img src={item.image} alt={item.title} />
                      <div>
                        <h4>{item.title}</h4>
                        <p>
                          <span className="old-price">₹{item.oldPrice}</span>{" "}
                          <span className="new-price">₹{item.price}</span>
                        </p>
                      </div>
                    </div>
                  ))
                ) : query ? (
                  <p className="no-results">No results found</p>
                ) : (
                  <p className="no-results">
                    Type to search {selectedCategory} products
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {isLoginOpen && (
        <div className="login-overlay" onClick={() => setIsLoginOpen(false)}>
        <div className="login-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="login-header">
        <h3>
          {isForgotPasswordMode
            ? "Reset Your Password"
            : isRegisterMode
            ? "Create Account"
            : "Sign In"}
        </h3>
        <X className="close-icon" onClick={() => setIsLoginOpen(false)} />
       </div>

         {/* ✅ LOGIN FORM */}
         {!isRegisterMode && !isForgotPasswordMode && (
         <form className="login-form" onSubmit={handleLogin}>
          <label>
            Email <span>*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          {emailError && <p className="error-message">{emailError}</p>}

          <label>
            Password <span>*</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          {passwordError && <p className="error-message">{passwordError}</p>}

          <p
            className="forgot-password-link"
            onClick={() => setIsForgotPasswordMode(true)}
          >
            Forgot your password?
          </p>

          <button type="submit" className="login-btn">
            Sign In
          </button>

          <p className="register-prompt">
            New customer?{" "}
            <span
              className="register-link"
              onClick={() => setIsRegisterMode(true)}
            >
              Create an account
            </span>
          </p>
        </form>
         )}
  </div>
      {/* ✅ REGISTER FORM */}
      {isRegisterMode && !isForgotPasswordMode && (
        <form
          className="register-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Account created successfully!");
            setIsRegisterMode(false);
          }}
        >
          
           <h3>Create Account </h3>

          <label>
            First Name <span>*</span>
          </label>
          <input type="text" placeholder="Enter your first name" className="input-field" required />

          <label>
            Last Name <span>*</span>
          </label>
          <input type="text" placeholder="Enter your last name" className="input-field" required />

          <label>
            Email <span>*</span>
          </label>
          <input type="email" placeholder="Enter your email" className="input-field" required />

          <label>
            Password <span>*</span>
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className="input-field"
            required
          />

          <button type="submit" className="login-btn">
            Create Account
          </button>

          <p className="register-prompt">
            Already have an account?{" "}
            <span
              className="register-link"
              onClick={() => setIsRegisterMode(false)}
            >
              Sign In
            </span>
          </p>
        </form>
      )}

       {/* ✅ FORGOT PASSWORD FORM */}
       {isForgotPasswordMode && (
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Password reset link sent to your email!");
            setIsForgotPasswordMode(false);
          }}
          >
          <p className="forgot-password-info">
            Lost your password? Please enter your email address. You will receive a link to create a new password via email.
           </p>

          <label>
            Email address <span>*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="input-field"
            required
          />

          <button type="submit" className="login-btn">
            Reset Password
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => setIsForgotPasswordMode(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </div> 
)}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="menu-header">
              <h3>MENU</h3>
              <X className="close-icon" onClick={() => setIsMenuOpen(false)} />
            </div>

            <div className="menu-login">
              <a href="/" onClick={(e) => { e.preventDefault(); setIsLoginOpen(true); }}>
               <User style={{ marginRight: "8px" }} /> Login / Register
              </a>
            </div>

            <div className="menu-tabs">
              {["Men", "Women", "Kids"].map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="menu-content">

              {activeTab === "Men" && (
                <>
      
                  <div className="menu-section">
                    <h4>
                      Men’s Shirt <span className="tag red">New</span>
                    </h4>
                  </div>

                  <div className="menu-section">
                    <h4>
                      Geek <span className="tag yellow">Top Seller</span>
                    </h4>
                  </div>

                  <div className="menu-section">
                    <h4>Shop by Anime</h4>
                    <div className="anime-icons">
                      {[
                        "All",
                        "Naruto",
                        "1Piece",
                        "Demon",
                        "Titan",
                        "Jujutsu",
                        "Tokyo",
                        "Dragon",
                        "Pokemon",
                      ].map((item) => (
                        <div key={item} className="anime-item">
                          <img
                            src={`/assets/icons/${item.toLowerCase()}.jpg`}
                            alt={item}
                          />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="menu-section">
                    <h4>
                      <span className="tag red">Motorsport</span>
                    </h4>
                    <h4>
                      <span className="tag orange">Football</span>
                    </h4>
                    <h4>
                      <span className="tag blue">StreetWear</span>
                    </h4>
                    <h4>Couple</h4>
                    <h4>Solids</h4>
                    <h4>Combos</h4>
                    <h4>Clearance</h4>
                    <h4>Corporate Orders</h4>
                    <h4>Gift Cards</h4>
                  </div>

                  <div className="menu-section contact">
                    <h4>Get in Touch</h4>
                    <a href="mailto:care@dudeme.in" className="contact-email">
                      care@rm1codershub.com
                    </a>
                  </div>
                </>
              )}

              {activeTab === "Women" && (
                <>
                  <div className="menu-section">
                    <div className="menu-item">
                      <i className="fas fa-dragon"></i>
                      <p>
                        Anime <span className="tag orange">Best Selling</span>
                      </p>
                    </div>

                    <div className="menu-item">
                      <i className="fas fa-glasses"></i>
                      <p>Geek</p>
                    </div>

                    <div className="menu-item">
                      <i className="fas fa-heart"></i>
                      <p>Couple</p>
                    </div>

                    <div className="menu-item">
                      <i className="fas fa-tint"></i>
                      <p>Solids</p>
                    </div>

                    <div className="menu-item">
                      <i className="fas fa-layer-group"></i>
                      <p>Combos</p>
                    </div>

                    <div className="menu-item">
                      <i className="fas fa-fire"></i>
                      <p>Clearance</p>
                    </div>

                    <div className="menu-item">
                      <i className="fas fa-briefcase"></i>
                      <p>Corporate Orders</p>
                    </div>

                    <div className="menu-item">
                      <i className="fas fa-gift"></i>
                      <p>Gift Cards</p>
                    </div>
                  </div>

                  <div className="menu-section contact">
                    <h4>Get in Touch</h4>
                    <a href="mailto:care@dudeme.in" className="contact-email">
                      care@rm1codershub.com
                    </a>
                  </div>
                </>
              )}

              {activeTab === "Kids" && (
                <>
                  <div className="menu-section">
                    <h4>
                      Geek <span className="tag yellow">Top Seller</span>
                    </h4>
                  </div>

                  <div className="menu-section age-groups">
                    <div className="age-item">
                      <i className="fas fa-baby"></i>
                      <p>Age (1 to 2)</p>
                    </div>
                    <div className="age-item">
                      <i className="fas fa-child"></i>
                      <p>Age (2 to 3)</p>
                    </div>
                    <div className="age-item">
                      <i className="fas fa-user"></i>
                      <p>Age (3 to 4)</p>
                    </div>
                    <div className="age-item">
                      <i className="fas fa-user-graduate"></i>
                      <p>Age (5 to 6)</p>
                    </div>
                  </div>

                  <div className="menu-section others">
                    <div className="menu-link">
                      <i className="fas fa-briefcase"></i>
                      <p>Corporate Orders</p>
                    </div>
                    <div className="menu-link">
                      <i className="fas fa-gift"></i>
                      <p>Gift Cards</p>
                    </div>
                  </div>
                  
                  <div className="menu-section contact">
                    <h4>Get in Touch</h4>
                    <a href="mailto:care@dudeme.in" className="contact-email">
                      care@rm1codershub.com
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </CartContext.Provider>
  );
};

export default Navbar;