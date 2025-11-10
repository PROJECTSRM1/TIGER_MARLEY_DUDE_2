import React from "react";
import "./HeroBanner.css";
const HeroBanner = () => {
  return (
    <div className="top-offer-bar">
      <p>
        Buy Any <span className="highlight-number">2 🛍️</span> Get Flat{" "}
        <span className="highlight-offer">15% OFF</span> Use Code:
        <span className="highlight-code">BUY2</span>
      </p>
    </div>
  );
};

export default HeroBanner;
