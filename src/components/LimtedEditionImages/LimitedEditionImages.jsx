import React from "react";
import { useNavigate } from "react-router-dom";
import "./LimitedEditionImage.css";
const limitedEditions = [
  {
    id: 1,
    name: "Ajith Kumar Racing Motorsport Fan Hoodie",
    oldPrice: "₹2,000",
    newPrice: "₹999",
    image: require("../../assets/images/hoodie1.jpg"),
    description:
      "Premium motorsport fan hoodie with AJITH RACING graphics. Comfortable cotton blend ideal for race lovers.",
  },
  {
    id: 2,
    name: "OG Fire Storm Hoodie",
    oldPrice: "₹2,000",
    newPrice: "₹1,299",
    image: require("../../assets/images/hoodie2.jpg"),
    description:
      "Bold and fiery OG hoodie designed for streetwear enthusiasts. Sleek, soft, and stylish.",
  },
  {
    id: 3,
    name: "Ajith Kumar Car Racing Motorsport Hoodie",
    oldPrice: "₹2,000",
    newPrice: "₹999",
    image: require("../../assets/images/hoodie3.jpg"),
    description:
      "Designed for car racing fans. Lightweight, breathable, and eye-catching motorsport graphics.",
  },
  {
    id: 4,
    name: "They Call Him OG Hoodie",
    oldPrice: "₹2,000",
    newPrice: "₹999",
    image: require("../../assets/images/hoodie4.jpg"),
    description:
      "Simple, powerful, and premium. The OG hoodie for the true fan community.",
  },
  {
    id: 5,
    name: "Customized Ajith Kumar Racing Hoodie",
    oldPrice: "₹2,000",
    newPrice: "₹1,199",
    image: require("../../assets/images/hoodie5.jpg"),
    description:
      "Custom hoodie with Ajith racing logo. Perfect blend of comfort and fan pride.",
  },
  {
    id: 6,
    name: "They Call Him OG Oversized T-shirt",
    oldPrice: "₹1,600",
    newPrice: "₹799",
    image: require("../../assets/images/hoodie6.jpg"),
    description:
      "Oversized fit, smooth finish. Made for those who live the OG vibe.",
  },
  {
    id: 7,
    name: "Limited Edition Black Motorsport Hoodie",
    oldPrice: "₹2,200",
    newPrice: "₹1,299",
    image: require("../../assets/images/hoodie7.jpg"),
    description:
      "Black limited edition motorsport hoodie – limited stock for racing fans.",
  },
];

const LimitedEditionsImages = () => {
  const navigate = useNavigate();

  return (
    <div className="limited-editions-section">
 
      <div className="limited-grid">
        {limitedEditions.map((item) => (
          <div
            key={item.id}
            className="limited-card"
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
    </div>
  );
};

export default LimitedEditionsImages;
