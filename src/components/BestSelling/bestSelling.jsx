import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bestselling.css";

const BestSelling = () => {
  const [activeTab, setActiveTab] = useState("Geek Tees");
  const navigate = useNavigate();

  const products = {
    "Geek Tees": [
      {
        id: 1,
        name: "Declare Variables not War",
        newPrice: "₹599",
        oldPrice: "₹1,199",
        image: require("../../assets/best_selling_images/geek1.jpg"),
      },
      {
        id: 2,
        name: "If It Works Don't Touch It",
        newPrice: "₹599",
        oldPrice: "₹1,199",
        image: require("../../assets/best_selling_images/geek2.jpg"),
      },
      {
        id: 3,
        name: "Programmer’s Life Hugs & Fixes",
        newPrice: "₹599",
        oldPrice: "₹1,199",
        image: require("../../assets/best_selling_images/geek3.jpg"),
      },
      {
        id: 4,
        name: "While Alive Eat Sleep Code",
        newPrice: "₹599",
        oldPrice: "₹1,199",
        image: require("../../assets/best_selling_images/geek4.jpg"),
      },
      {
        id: 5,
        name: "Eat Sleep Code Repeat",
        newPrice: "₹599",
        oldPrice: "₹1,199",
        image: require("../../assets/best_selling_images/geek5.jpg"),
      },
      {
        id: 6,
        name: "It's Not a Bug It's a Feature",
        newPrice: "₹599",
        oldPrice: "₹1,199",
        image: require("../../assets/best_selling_images/geek6.jpg"),
      },
    ],

    "Anime Oversized": [
      {
        id: 7,
        name: "Attack Titan Tee",
        newPrice: "₹799",
        oldPrice: "₹1,499",
        image: require("../../assets/best_selling_images/anime_oversize1.jpg"),
      },
      {
        id: 8,
        name: "Naruto Sage Mode Tee",
        newPrice: "₹799",
        oldPrice: "₹1,499",
        image: require("../../assets/best_selling_images/anime_oversize2.jpg"),
      },
      {
        id: 9,
        name: "Luffy Gear 5 Tee",
        newPrice: "₹799",
        oldPrice: "₹1,499",
        image: require("../../assets/best_selling_images/anime_oversize3.jpg"),
      },
      {
        id: 10,
        name: "Zoro Samurai Tee",
        newPrice: "₹799",
        oldPrice: "₹1,499",
        image: require("../../assets/best_selling_images/anime_oversize4.jpg"),
      },
      {
        id: 11,
        name: "Gojo Domain Tee",
        newPrice: "₹799",
        oldPrice: "₹1,499",
        image: require("../../assets/best_selling_images/anime_oversize5.jpg"),
      },
      {
        id: 12,
        name: "Levi Ackerman Tee",
        newPrice: "₹799",
        oldPrice: "₹1,499",
        image: require("../../assets/best_selling_images/anime_oversize6.jpg"),
      },
      {
        id: 13,
        name: "Demon Slayer Hoodie",
        newPrice: "₹999",
        oldPrice: "₹1,799",
        image: require("../../assets/best_selling_images/anime_oversize7.jpg"),
      },
      {
        id: 14,
        name: "Itachi Uchiha Hoodie",
        newPrice: "₹999",
        oldPrice: "₹1,799",
        image: require("../../assets/best_selling_images/anime_oversize8.jpg"),
      },
    ],

    "Anime Hoodie": [
      {
        id: 15,
        name: "Gojo Satoru Hoodie",
        newPrice: "₹999",
        oldPrice: "₹1,799",
        image: require("../../assets/best_selling_images/anime_hoodie1.jpg"),
      },
      {
        id: 16,
        name: "Levi Ackerman Hoodie",
        newPrice: "₹999",
        oldPrice: "₹1,799",
        image: require("../../assets/best_selling_images/anime_hoodie2.jpg"),
      },
      {
        id: 17,
        name: "Naruto Hoodie",
        newPrice: "₹999",
        oldPrice: "₹1,799",
        image: require("../../assets/best_selling_images/anime_hoodie3.jpg"),
      },
      {
        id: 18,
        name: "Luffy Gear 5 Hoodie",
        newPrice: "₹999",
        oldPrice: "₹1,799",
        image: require("../../assets/best_selling_images/anime_hoodie4.jpg"),
      },
      {
        id: 19,
        name: "Zoro Samurai Hoodie",
        newPrice: "₹999",
        oldPrice: "₹1,799",
        image: require("../../assets/best_selling_images/anime_hoodie5.jpg"),
      },
      {
        id: 20,
        name: "Demon Slayer Hoodie",
        newPrice: "₹999",
        oldPrice: "₹1,799",
        image: require("../../assets/best_selling_images/anime_hoodie6.jpg"),
      },
      {
        id: 21,
        name: "Itachi Uchiha Hoodie",
        newPrice: "₹999",
        oldPrice: "₹1,799",
        image: require("../../assets/best_selling_images/anime_hoodie7.jpg"),
      },
      {
        id: 22,
        name: "One Piece Crew Hoodie",
        newPrice: "₹999",
        oldPrice: "₹1,799",
        image: require("../../assets/best_selling_images/anime_hoodie8.jpg"),
      },
    ],
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <section className="bestselling-section">
      <h2 className="bestselling-title">#BestSelling Goodies</h2>

      <div className="bestselling-tabs">
        {Object.keys(products).map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="bestselling-grid">
        {products[activeTab].map((item) => (
          <div
            key={item.id}
            className="bestselling-card"
            onClick={() => handleProductClick(item)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>
              <span className="old-price">{item.oldPrice}</span>{" "}
              <span className="new-price">{item.newPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
