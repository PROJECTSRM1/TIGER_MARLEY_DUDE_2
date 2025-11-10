import React, { useState, useEffect } from "react";
import "./features_recognization.css";

const FeaturesRecognitions = () => {
  const features = [
    { id: 1, image: require("../../assets/features_recognizations/Amazon.jpg") },
    { id: 2, image: require("../../assets/features_recognizations/augly.jpg") },
    { id: 3, image: require("../../assets/features_recognizations/INC.jpg") },
    { id: 4, image: require("../../assets/features_recognizations/IPL.jpg") },
    { id: 5, image: require("../../assets/features_recognizations/MI.jpg") },
    { id: 6, image: require("../../assets/features_recognizations/Punjab.jpg") },
    { id: 7, image: require("../../assets/features_recognizations/Razorpay.jpg") },
    { id: 8, image: require("../../assets/features_recognizations/Startup.jpg") },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const visibleFeatures = features.slice(currentIndex, currentIndex + 4);

  const displayFeatures =
    visibleFeatures.length < 4
      ? [...visibleFeatures, ...features.slice(0, 4 - visibleFeatures.length)]
      : visibleFeatures;

  return (
    <section className="features-section">
      <h2 className="features-title">
        <span>FEATURES & RECOGNITIONS</span>
      </h2>
      <div className="features-grid fade">
        {displayFeatures.map((item) => (
          <div className="feature-card" key={item.id}>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesRecognitions;
