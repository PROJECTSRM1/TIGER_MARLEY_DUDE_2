import React from "react";
import "./Official_merchandise.css";
import { Link } from "react-router-dom";

const merchItems = [
  {
    id: 1,
    name: "Mumbai Indians",
    image: require("../../assets/official_merchandise/mumbai.jpg"),
    url: "/mumbai",
  },
  {
    id: 2,
    name: "Punjab Kings",
    image: require("../../assets/official_merchandise/punjab.jpg"),
    url: "/punjab",
  },
  {
    id: 3,
    name: "NASA",
    image: require("../../assets/official_merchandise/nasa.jpg"),
    url: "/nasa",
  },
];

const OfficialMM = () => {
  return (
    <div className="official-edition-container">
      <h2 className="official-title">OFFICIAL MERCHANDISE</h2>
      <div className="red-underline"></div>
      <p className="official-text">
        <em>Gear Up, Fans: Official Fan Merch T-Shirts for You!</em>
      </p>

      <div className="merch-grid">
        {merchItems.map((item) => (
          <Link to={item.url} key={item.id} className="merch-card">
            <img src={item.image} alt={item.name} className="merch-image" />
          </Link>
        ))}
      </div>

      <div className="clearance-section">
        <p className="clearance-subtitle">GREAT DEALS!</p>
        <h2 className="clearance-title">CLEARANCE STORE UPTO 50%</h2>
        <div className="size-buttons">
          <Link to="/size/xs" className="size-btn">SIZE XS</Link>
          <Link to="/size/s" className="size-btn">SIZE S</Link>
          <Link to="/size/m" className="size-btn active">SIZE M</Link>
          <Link to="/size/l" className="size-btn">SIZE L</Link>
          <Link to="/size/xl" className="size-btn">SIZE XL</Link>
          <Link to="/size/xxl" className="size-btn">SIZE 2XL</Link>
        </div>
      </div>

      <div className="promo-wrapper">
        <div className="promo-section">
          <div className="promo-card">
            <div className="promo-content">
              <h3>CORPORATE</h3>
              <p>Anything & Anything for your Teams / Office</p>
              <a
                href="https://api.whatsapp.com/send?phone=8247582810&text=Hi, I’m interested in Corporate Merchandise!"
                className="promo-btn"
              >
                Shop for your Team
              </a>
            </div>
            <img
              src={require("../../assets/official_merchandise/promo1.jpg")}
              alt="Corporate"
              className="promo-img"
            />
          </div>

          <div className="promo-card">
            <div className="promo-content">
              <h3>CUSTOMIZE</h3>
              <p>Design your own t-shirts, hoodies & more with Dudeme!</p>
              <a
                href="https://api.whatsapp.com/send?phone=8247582810&text=Hi, I want to customize my own T-shirt!"
                className="promo-btn"
              >
                Customize Now
              </a>
            </div>
            <img
              src={require("../../assets/official_merchandise/promo2.jpg")}
              alt="Customize"
              className="promo-img"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default OfficialMM;
