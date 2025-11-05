import React, { useState, createContext, useContext } from "react";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import "./Navbar.css";

// 🧠 Cart Context (shared globally)
export const CartContext = createContext();

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Men");

  // 🛒 Cart Drawer State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // 🧩 Category-based product data
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

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
    } else {
      alert("Please enter username and password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  // 🛒 Remove item from cart
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
            {isLoggedIn && <span className="username">Hi, {username}</span>}
          </div>

          <div className="icon-badge">
            <Heart className="icon" />
            <span className="badge">0</span>
          </div>

          <div className="icon-badge" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="icon" />
            <span className="badge">{cartItems.length}</span>
          </div>

          <Menu className="icon" onClick={() => setIsMenuOpen(true)} />
        </div>
      </header>

      {/* 🛒 CART DRAWER */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3>Your Cart</h3>
              <X className="close-icon" onClick={() => setIsCartOpen(false)} />
            </div>

            {cartItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty.</p>
            ) : (
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>₹{item.price}</p>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
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
              <h3>LOGIN</h3>
              <X className="close-icon" onClick={() => setIsLoginOpen(false)} />
            </div>

            <form className="login-form" onSubmit={handleLogin}>
              <label>
                Email <span>*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label>
                Password <span>*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <a href="/" className="forgot-password">
                Forgot your password?
              </a>

              <button type="submit" className="login-btn">
                Sign In
              </button>

              <a href="/" className="new-account">
                New customer? Create your account
              </a>
            </form>
          </div>
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
              <a href="/" onClick={() => setIsLoginOpen(true)}>
                Login / Register
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
