import React from "react";
import { useNavigate } from "react-router-dom";
import { animeHoodies } from "../../data/products";

const AnimeHoodies = () => {
  const navigate = useNavigate();

  const handleNavigate = (product) => {
    const normalizedProduct = {
      ...product,
      oldPrice: product.oldPrice || `₹${parseInt(product.price) + 200}`,
      newPrice: product.newPrice || `₹${product.price}`,
      name: product.title || product.name,
      image: product.image || "",
    };
    navigate(`/product/${product.id}`, { state: normalizedProduct });
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
        {animeHoodies.map((product) => (
          <div
            key={product.id}
            onClick={() => handleNavigate(product)} 
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              width: "220px",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h3 style={{ margin: "15px 0 5px" }}>{product.title}</h3>
            <p style={{ fontWeight: "bold" }}>₹{product.price}</p>

            {/* <button
              onClick={(e) => {
                e.stopPropagation(); 
                handleNavigate(product);
              }}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#af3828",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeHoodies;
