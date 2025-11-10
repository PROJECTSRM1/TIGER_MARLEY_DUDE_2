import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ArrivalsPage.css";

const Arrivals = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Ronaldo Siuuuuu Hoodie",
      oldPrice: "₹1,499",
      newPrice: "₹1,099",
      image: require("../../assets/arrival_images/hoodie1.jpg"),
    },
    {
      id: 2,
      name: "Red Devils Half Sleeve Tee",
      oldPrice: "₹899",
      newPrice: "₹599",
      image: require("../../assets/arrival_images/hoodie2.jpg"),
    },
    {
      id: 3,
      name: "Arsenal Half Sleeve Tee",
      oldPrice: "₹899",
      newPrice: "₹599",
      image: require("../../assets/arrival_images/hoodie3.jpg"),
    },
    {
      id: 4,
      name: "FCB Back To Football Tee",
      oldPrice: "₹899",
      newPrice: "₹599",
      image: require("../../assets/arrival_images/hoodie4.jpg"),
    },
    {
      id: 5,
      name: "Chelsea Blue Pride Tee",
      oldPrice: "₹999",
      newPrice: "₹699",
      image: require("../../assets/arrival_images/hoodie5.jpg"),
    },
    {
      id: 6,
      name: "Real Madrid Spirit Hoodie",
      oldPrice: "₹1,599",
      newPrice: "₹1,199",
      image: require("../../assets/arrival_images/hoodie6.jpg"),
    },
    {
      id: 7,
      name: "Liverpool Anfield Red Tee",
      oldPrice: "₹899",
      newPrice: "₹599",
      image: require("../../assets/arrival_images/hoodie7.jpg"),
    },
    {
      id: 8,
      name: "Man City Champions Hoodie",
      oldPrice: "₹1,499",
      newPrice: "₹1,099",
      image: require("../../assets/arrival_images/hoodie8.jpg"),
    },
    {
      id: 9,
      name: "PSG Messi Edition Hoodie",
      oldPrice: "₹1,599",
      newPrice: "₹1,199",
      image: require("../../assets/arrival_images/hoodie9.jpg"),
    },
    {
      id: 10,
      name: "Juventus Black & White Tee",
      oldPrice: "₹999",
      newPrice: "₹699",
      image: require("../../assets/arrival_images/hoodie10.jpg"),
    },
    {
      id: 11,
      name: "Bayern Munich Red Flame Hoodie",
      oldPrice: "₹1,799",
      newPrice: "₹1,299",
      image: require("../../assets/arrival_images/hoodie11.jpg"),
    },
    {
      id: 12,
      name: "Inter Milan Classic Blue Tee",
      oldPrice: "₹899",
      newPrice: "₹599",
      image: require("../../assets/arrival_images/hoodie12.jpg"),
    },
    {
      id: 13,
      name: "Tottenham White Edition Tee",
      oldPrice: "₹899",
      newPrice: "₹599",
      image: require("../../assets/arrival_images/hoodie13.jpg"),
    },
    {
      id: 14,
      name: "AC Milan Heritage Hoodie",
      oldPrice: "₹1,499",
      newPrice: "₹1,099",
      image: require("../../assets/arrival_images/hoodie14.jpg"),
    },
    {
      id: 15,
      name: "Napoli Spirit Tee",
      oldPrice: "₹899",
      newPrice: "₹599",
      image: require("../../assets/arrival_images/hoodie15.jpg"),
    },
    {
      id: 16,
      name: "Atletico Madrid Street Hoodie",
      oldPrice: "₹1,499",
      newPrice: "₹1,099",
      image: require("../../assets/arrival_images/hoodie16.jpg"),
    },
  ];

  const [index, setIndex] = useState(0);
  const visibleCount = 4;

  const nextSlide = () => {
    if (index + visibleCount < products.length) {
      setIndex(index + visibleCount);
    }
  };

  const prevSlide = () => {
    if (index - visibleCount >= 0) {
      setIndex(index - visibleCount);
    }
  };

  return (
    <div className="arrival-edition-container">
      <h2 className="arrival-title">New Arrivals</h2>
      <div className="red-underline"></div>
      <p className="arrival-text">
        <em>Epic Themes Await: Streetwear Oversized Tees Here!</em>
      </p>

      <div className="arrival-carousel">
        <button className="arrow left" onClick={prevSlide} disabled={index === 0}>
          ❮
        </button>

        <div className="arrival-grid">
          {products.slice(index, index + visibleCount).map((item) => (
            <div
              key={item.id}
              className="arrival-card"
              onClick={() => navigate(`/product/${item.id}`, { state: item })}
            >
              <div className="image-container">
                <img src={item.image} alt={item.name} />
              </div>
              <h3 className="product-name">{item.name}</h3>
              <div className="price-row">
                <span className="old-price">{item.oldPrice}</span>
                <span className="new-price">{item.newPrice}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          className="arrow right"
          onClick={nextSlide}
          disabled={index + visibleCount >= products.length}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Arrivals;
