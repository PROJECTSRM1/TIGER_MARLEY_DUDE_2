import React, { useRef } from "react";
import "./Shop_by_theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const themes = [
  {
    id: 1,
    title: "Coffee & Tea",
    img: require("../../assets/shop_by_themes/Coffee_tea.jpg"),
    bg: "#f7f7f7",
    url: "coffee-tea",
  },
  {
    id: 2,
    title: "Sarcasm",
    img: require("../../assets/shop_by_themes/sarcasam.jpg"),
    bg: "#ffecec",
    url: "sarcasam",
  },
  {
    id: 3,
    title: "Gym / Motivational",
    img: require("../../assets/shop_by_themes/gym_motivational.jpg"),
    bg: "#f3fff1",
    url: "gym",
  },
  {
    id: 4,
    title: "Couple",
    img: require("../../assets/shop_by_themes/couple.jpg"),
    bg: "#fff7ed",
    url: "/couple",
  },
  {
    id: 5,
    title: "Pets",
    img: require("../../assets/shop_by_themes/pets.jpg"),
    bg: "#ffe8e8",
    url: "/pet",
  },
 
];

const ShopByThemes = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="themes-section">
      <h2 className="themes-title">SHOP BY THEMES</h2>
      <div className="red-underline"></div>
      <p className="themes-subtitle">
        Curate your closet. Pick your Favorite Designs!
      </p>

      <div className="themes-container">
        <button className="nav-btn left" onClick={() => scroll("left")}>
          <ChevronLeft size={28} />
        </button>

        <div className="themes-scroll" ref={scrollRef}>
          {themes.map((theme) => (
            <Link
              to={theme.url}
              key={theme.id}
              className="theme-card"
              style={{ backgroundColor: theme.bg }}
            >
              <img src={theme.img} alt={theme.title} className="theme-img" />
              <p className="theme-name">{theme.title}</p>
            </Link>
          ))}
        </div>

        <button className="nav-btn right" onClick={() => scroll("right")}>
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default ShopByThemes;
