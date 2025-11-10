import React from "react";
import { useNavigate } from "react-router-dom";
import { animeOversized } from "../../data/products";

const AnimeOversized = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {animeOversized.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              width: "220px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", borderRadius: "10px" }}
              onClick={() => handleViewDetails(product.id)}
            />
            <h3 style={{ margin: "15px 0 5px" }}>{product.title}</h3>
            <p style={{ fontWeight: "bold" }}>₹{product.price}</p>

            <button
              style={{
                marginTop: "10px",
                padding: "8px 18px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#e63946",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => handleViewDetails(product.id)}
            >
              View Details
            </button>
            <button
              style={{
                marginTop: "10px",
                padding: "8px 18px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#333",
                color: "#fff",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeOversized;
