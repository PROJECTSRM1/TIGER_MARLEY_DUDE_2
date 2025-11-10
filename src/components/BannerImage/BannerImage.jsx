import React from "react";
import { useNavigate } from "react-router-dom";
import "./BannerImage.css";
import bannerImage from "../../assets/banner.jpg"; 

const BannerImage = () => {
  const navigate = useNavigate(); 

  return (
    <div className="banner-image-container">
      <img
        src={bannerImage}
        alt="Tigermarley Banner"
        className="banner-image"
      />

      <div className="banner-buttons">
        <button
          className="banner-btn football-btn"
          onClick={() => navigate("/football/dresses")}
        >
          FOOTBALL ⚽
        </button>

        <button
          className="banner-btn motorsports-btn"
          onClick={() => navigate("/motorsports")}
        >
          MOTORSPORTS 🏎️
        </button>
      </div>
    </div>
  );
};

export default BannerImage;
