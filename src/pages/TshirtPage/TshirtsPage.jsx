import React from "react";
import { geekTshirts } from "../../data/products";

const TshirtsPage = () => {
  const tshirts = geekTshirts.filter((p) => p.category === "t-shirts");

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>T-Shirts Collection</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {tshirts.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              width: "220px",
              textAlign: "center"
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{product.title}</h3>
            <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TshirtsPage;
