import React, { useRef } from "react";
import "./ourshowcase.css";

const users = [
  { id: 1, image: require("../../assets/showourcaseimages/alok.jpg") },
  { id: 2, image: require("../../assets/showourcaseimages/vpiruthuma.jpg") },
  { id: 3, image: require("../../assets/showourcaseimages/vishal.jpg") },
  { id: 4, image: require("../../assets/showourcaseimages/gokul.jpg") },
  { id: 5, image: require("../../assets/showourcaseimages/amrutha.jpg") },
  { id: 6, image: require("../../assets/showourcaseimages/ayushi_bani.jpg") },
  { id: 7, image: require("../../assets/showourcaseimages/bhavana.jpg") },
  { id: 8, image: require("../../assets/showourcaseimages/dev.jpg") },
  { id: 9, image: require("../../assets/showourcaseimages/manjit.jpg") },
  { id: 10, image: require("../../assets/showourcaseimages/rahul.jpg") },
  { id: 11, image: require("../../assets/showourcaseimages/souvik.jpg") },
];

const UserShowcase = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount =
        direction === "left"
          ? -containerRef.current.offsetWidth
          : containerRef.current.offsetWidth;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="user-showcase">
      <h2>WE COULDN’T HAVE SHOWN IT BETTER</h2>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={() => scroll("left")}>
          &lt;
        </button>

        <div className="user-cards-container" ref={containerRef}>
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img
                src={user.image}
                alt={`User ${user.id}`}
                className="user-image"
              />
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default UserShowcase;
