// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./football.css";

// function Football() {
//   const navigate = useNavigate();

//   // ✅ Categories
//   const categories = [
//     { id: 1, name: "Oversized", image: "/assets/football/oversized.jpg" },
//     { id: 2, name: "Hoodie", image: "/assets/football/hoodie.jpg" },
//     { id: 3, name: "Half Sleeve", image: "/assets/football/halfsleeves.jpg" },
//   ];

//   // ✅ Products
//   const products = [
//     { id: 1, title: "Cristiano Red Devil Oversized Tee", image: "/assets/football/product1.jpg", oldPrice: 1299, price: 899, category: "Oversized" },
//     { id: 2, title: "Classic Manchester Street Tee", image: "/assets/football/product2.jpg", oldPrice: 1199, price: 799, category: "Half Sleeve" },
//     { id: 3, title: "Ronaldo No.7 Performance Tee", image: "/assets/football/product3.jpg", oldPrice: 1099, price: 749, category: "Half Sleeve" },
//     { id: 4, title: "Shadow Player Graphic Tee", image: "/assets/football/product4.jpg", oldPrice: 1099, price: 699, category: "Half Sleeve" },
//     { id: 5, title: "Goal Hunter Oversized Edition", image: "/assets/football/product5.jpg", oldPrice: 1299, price: 849, category: "Oversized" },
//     { id: 6, title: "PSG Blackout Hoodie", image: "/assets/football/product6.jpg", oldPrice: 1399, price: 999, category: "Hoodie" },
//     { id: 7, title: "United Flame Print Tee", image: "/assets/football/product7.jpg", oldPrice: 1299, price: 899, category: "Half Sleeve" },
//     { id: 8, title: "Red Legend Oversized Tee", image: "/assets/football/product8.jpg", oldPrice: 1199, price: 799, category: "Oversized" },
//     { id: 9, title: "R7 Signature Streetwear Tee", image: "/assets/football/product9.jpg", oldPrice: 1099, price: 749, category: "Half Sleeve" },
//     { id: 10, title: "Neon Shadow Graphic Tee", image: "/assets/football/product10.jpg", oldPrice: 999, price: 699, category: "Half Sleeve" },
//     { id: 11, title: "Goal Machine Oversized Tee", image: "/assets/football/product11.jpg", oldPrice: 1299, price: 849, category: "Oversized" },
//     { id: 12, title: "Paris Saint Hoodie Elite Edition", image: "/assets/football/product12.jpg", oldPrice: 1399, price: 999, category: "Hoodie" },
//     { id: 13, title: "Cristiano Street Mode Tee", image: "/assets/football/product13.jpg", oldPrice: 1299, price: 899, category: "Half Sleeve" },
//     { id: 14, title: "Red Thunder Oversized Tee", image: "/assets/football/product14.jpg", oldPrice: 1199, price: 799, category: "Oversized" },
//     { id: 15, title: "R7 Energy Training Tee", image: "/assets/football/product15.jpg", oldPrice: 1099, price: 749, category: "Half Sleeve" },
//     { id: 16, title: "Dark Mode Shadow Tee", image: "/assets/football/product16.jpg", oldPrice: 999, price: 699, category: "Half Sleeve" },
//     { id: 17, title: "Goal Seeker Premium Tee", image: "/assets/football/product17.jpg", oldPrice: 1299, price: 849, category: "Half Sleeve" },
//     { id: 18, title: "PSG Champion Hoodie", image: "/assets/football/product18.jpg", oldPrice: 1399, price: 999, category: "Hoodie" },
//     { id: 19, title: "CR7 Glory Edition Tee", image: "/assets/football/product19.jpg", oldPrice: 1299, price: 899, category: "Half Sleeve" },
//     { id: 20, title: "ManU Power Red Tee", image: "/assets/football/product20.jpg", oldPrice: 1199, price: 799, category: "Half Sleeve" },
//     { id: 21, title: "Ronaldo Legacy Tee", image: "/assets/football/product21.jpg", oldPrice: 1099, price: 749, category: "Half Sleeve" },
//     { id: 22, title: "Pink Silhouette Oversized Tee", image: "/assets/football/product22.jpg", oldPrice: 999, price: 699, category: "Oversized" },
//     { id: 23, title: "The Finisher Oversized Tee", image: "/assets/football/product23.jpg", oldPrice: 1299, price: 849, category: "Oversized" },
//     { id: 24, title: "PSG Luxe Edition Hoodie", image: "/assets/football/product24.jpg", oldPrice: 1399, price: 999, category: "Hoodie" },
//     { id: 25, title: "Game On Streetwear Tee", image: "/assets/football/product25.jpg", oldPrice: 1299, price: 899, category: "Half Sleeve" },
//     { id: 26, title: "Old Trafford Red Spirit Tee", image: "/assets/football/product26.jpg", oldPrice: 1199, price: 799, category: "Half Sleeve" },
//     { id: 27, title: "R7 King of Pitch Tee", image: "/assets/football/product27.jpg", oldPrice: 1099, price: 749, category: "Half Sleeve" },
//     { id: 28, title: "Dynamic Shadow Tee", image: "/assets/football/product28.jpg", oldPrice: 999, price: 699, category: "Half Sleeve" },
//     { id: 29, title: "Goal Chaser Oversized Tee", image: "/assets/football/product29.jpg", oldPrice: 1299, price: 849, category: "Oversized" },
//     { id: 30, title: "Paris Elite Black Hoodie", image: "/assets/football/product30.jpg", oldPrice: 1399, price: 999, category: "Hoodie" },
//     { id: 31, title: "Ronaldo Victory Tee", image: "/assets/football/product31.jpg", oldPrice: 1299, price: 899, category: "Half Sleeve" },
//     { id: 32, title: "Red Striker Graphic Tee", image: "/assets/football/product32.jpg", oldPrice: 1199, price: 799, category: "Half Sleeve" },
//     { id: 33, title: "R7 All-Star Street Tee", image: "/assets/football/product33.jpg", oldPrice: 1099, price: 749, category: "Half Sleeve" },
//     { id: 34, title: "Silhouette Glow Tee", image: "/assets/football/product34.jpg", oldPrice: 999, price: 699, category: "Half Sleeve" },
//   ];

//   // ✅ States
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOption, setSortOption] = useState("Best selling");

//   // ✅ Handlers
//   const handleCategoryClick = (categoryName) => {
//     const path = `/anime/${categoryName.toLowerCase().replace(/\s+/g, "")}`;
//     navigate(path);
//     setSelectedCategory(categoryName);
//   };

//   const handleProductClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   // ✅ Filter + Sort logic
//   const filteredProducts = products
//     .filter((p) => (selectedCategory === "All" ? true : p.category === selectedCategory))
//     .sort((a, b) => {
//       if (sortOption === "Low to High") return a.price - b.price;
//       if (sortOption === "High to Low") return b.price - a.price;
//       return 0;
//     });

//   return (
//     <div className="football-container">
//       {/* 🏷️ Category Cards */}
//       <div className="football-categories">
//         {categories.map((cat) => (
//           <div
//             key={cat.id}
//             className={`category-card ${selectedCategory === cat.name ? "active" : ""}`}
//             onClick={() => handleCategoryClick(cat.name)}
//           >
//             <img src={cat.image} alt={cat.name} />
//             <h3>{cat.name}</h3>
//           </div>
//         ))}
//       </div>

//       {/* ⚙️ Filters */}
//       <div className="football-filter">
//         <button className="filter-btn" onClick={() => setSelectedCategory("All")}>
//           ⚙️ Reset Filter
//         </button>

//         <select
//           className="sort-dropdown"
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//         >
//           <option>Best selling</option>
//           <option>Low to High</option>
//           <option>High to Low</option>
//         </select>
//       </div>

//       {/* 🛒 Products */}
//       <div className="football-products">
//         {filteredProducts.map((item) => (
//           <div
//             key={item.id}
//             className="product-card"
//             onClick={() => handleProductClick(item.id)}
//           >
//             <img src={item.image} alt={item.title} />
//             <h4>{item.title}</h4>
//             <div className="price-section">
//               <span className="old-price">₹{item.oldPrice}</span>
//               <span className="new-price">₹{item.price}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Football;



















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./football.css";

function Football() {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Oversized", image: "/assets/football/oversized.jpg" },
    { id: 2, name: "Hoodie", image: "/assets/football/hoodie.jpg" },
    { id: 3, name: "Half Sleeve", image: "/assets/football/halfsleeves.jpg" },
  ];

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleProductClick = (item) => {
    
    navigate(`/product/${item.id}`, { state: item });
  };

const products = [
  { id: 1, name: "Cristiano Red Devil Oversized Tee", image: "/assets/football/product1.jpg", oldPrice: "₹1299", newPrice: "₹899", category: "Oversized" },
  { id: 2, name: "Classic Manchester Street Tee", image: "/assets/football/product2.jpg", oldPrice: "₹1199", newPrice: "₹799", category: "Half Sleeve" },
  { id: 3, name: "Ronaldo No.7 Performance Tee", image: "/assets/football/product3.jpg", oldPrice: "₹1099", newPrice: "₹749", category: "Half Sleeve" },
  { id: 4, name: "Shadow Player Graphic Tee", image: "/assets/football/product4.jpg", oldPrice: "₹1099", newPrice: "₹699", category: "Half Sleeve" },
  { id: 5, name: "Goal Hunter Oversized Edition", image: "/assets/football/product5.jpg", oldPrice: "₹1299", newPrice: "₹849", category: "Oversized" },
  { id: 6, name: "PSG Blackout Hoodie", image: "/assets/football/product6.jpg", oldPrice: "₹1399", newPrice: "₹999", category: "Hoodie" },
  { id: 7, name: "United Flame Print Tee", image: "/assets/football/product7.jpg", oldPrice: "₹1299", newPrice: "₹899", category: "Half Sleeve" },
  { id: 8, name: "Red Legend Oversized Tee", image: "/assets/football/product8.jpg", oldPrice: "₹1199", newPrice: "₹799", category: "Oversized" },
  { id: 9, name: "R7 Signature Streetwear Tee", image: "/assets/football/product9.jpg", oldPrice: "₹1099", newPrice: "₹749", category: "Half Sleeve" },
  { id: 10, name: "Neon Shadow Graphic Tee", image: "/assets/football/product10.jpg", oldPrice: "₹999", newPrice: "₹699", category: "Half Sleeve" },
  { id: 11, name: "Goal Machine Oversized Tee", image: "/assets/football/product11.jpg", oldPrice: "₹1299", newPrice: "₹849", category: "Oversized" },
  { id: 12, name: "Paris Saint Hoodie Elite Edition", image: "/assets/football/product12.jpg", oldPrice: "₹1399", newPrice: "₹999", category: "Hoodie" },
  { id: 13, name: "Cristiano Street Mode Tee", image: "/assets/football/product13.jpg", oldPrice: "₹1299", newPrice: "₹899", category: "Half Sleeve" },
  { id: 14, name: "Red Thunder Oversized Tee", image: "/assets/football/product14.jpg", oldPrice: "₹1199", newPrice: "₹799", category: "Oversized" },
  { id: 15, name: "R7 Energy Training Tee", image: "/assets/football/product15.jpg", oldPrice: "₹1099", newPrice: "₹749", category: "Half Sleeve" },
  { id: 16, name: "Dark Mode Shadow Tee", image: "/assets/football/product16.jpg", oldPrice: "₹999", newPrice: "₹699", category: "Half Sleeve" },
  { id: 17, name: "Goal Seeker Premium Tee", image: "/assets/football/product17.jpg", oldPrice: "₹1299", newPrice: "₹849", category: "Half Sleeve" },
  { id: 18, name: "PSG Champion Hoodie", image: "/assets/football/product18.jpg", oldPrice: "₹1399", newPrice: "₹999", category: "Hoodie" },
  { id: 19, name: "CR7 Glory Edition Tee", image: "/assets/football/product19.jpg", oldPrice: "₹1299", newPrice: "₹899", category: "Half Sleeve" },
  { id: 20, name: "ManU Power Red Tee", image: "/assets/football/product20.jpg", oldPrice: "₹1199", newPrice: "₹799", category: "Half Sleeve" },
  { id: 21, name: "Ronaldo Legacy Tee", image: "/assets/football/product21.jpg", oldPrice: "₹1099", newPrice: "₹749", category: "Half Sleeve" },
  { id: 22, name: "Pink Silhouette Oversized Tee", image: "/assets/football/product22.jpg", oldPrice: "₹999", newPrice: "₹699", category: "Oversized" },
  { id: 23, name: "The Finisher Oversized Tee", image: "/assets/football/product23.jpg", oldPrice: "₹1299", newPrice: "₹849", category: "Oversized" },
  { id: 24, name: "PSG Luxe Edition Hoodie", image: "/assets/football/product24.jpg", oldPrice: "₹1399", newPrice: "₹999", category: "Hoodie" },
  { id: 25, name: "Game On Streetwear Tee", image: "/assets/football/product25.jpg", oldPrice: "₹1299", newPrice: "₹899", category: "Half Sleeve" },
  { id: 26, name: "Old Trafford Red Spirit Tee", image: "/assets/football/product26.jpg", oldPrice: "₹1199", newPrice: "₹799", category: "Half Sleeve" },
  { id: 27, name: "R7 King of Pitch Tee", image: "/assets/football/product27.jpg", oldPrice: "₹1099", newPrice: "₹749", category: "Half Sleeve" },
  { id: 28, name: "Dynamic Shadow Tee", image: "/assets/football/product28.jpg", oldPrice: "₹999", newPrice: "₹699", category: "Half Sleeve" },
  { id: 29, name: "Goal Chaser Oversized Tee", image: "/assets/football/product29.jpg", oldPrice: "₹1299", newPrice: "₹849", category: "Oversized" },
  { id: 30, name: "Paris Elite Black Hoodie", image: "/assets/football/product30.jpg", oldPrice: "₹1399", newPrice: "₹999", category: "Hoodie" },
  { id: 31, name: "Ronaldo Victory Tee", image: "/assets/football/product31.jpg", oldPrice: "₹1299", newPrice: "₹899", category: "Half Sleeve" },
  { id: 32, name: "Red Striker Graphic Tee", image: "/assets/football/product32.jpg", oldPrice: "₹1199", newPrice: "₹799", category: "Half Sleeve" },
  { id: 33, name: "R7 All-Star Street Tee", image: "/assets/football/product33.jpg", oldPrice: "₹1099", newPrice: "₹749", category: "Half Sleeve" },
  { id: 34, name: "Silhouette Glow Tee", image: "/assets/football/product34.jpg", oldPrice: "₹999", newPrice: "₹699", category: "Half Sleeve" },
];


  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Best selling");

  const filteredProducts = products
    .filter((p) =>
      selectedCategory === "All" ? true : p.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOption === "Low to High")
        return parseInt(a.newPrice.replace("₹", "")) - parseInt(b.newPrice.replace("₹", ""));
      if (sortOption === "High to Low")
        return parseInt(b.newPrice.replace("₹", "")) - parseInt(a.newPrice.replace("₹", ""));
      return 0;
    });

  return (
    <div className="football-container">
      <div className="football-categories">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`category-card ${
              selectedCategory === cat.name ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(cat.name)}
          >
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>

      <div className="football-filter">
        <button
          className="filter-btn"
          onClick={() => setSelectedCategory("All")}
        >
          ⚙️ Reset Filter
        </button>

        <select
          className="sort-dropdown"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option>Best selling</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
      </div>

      <div className="football-products">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="product-card"
            onClick={() => handleProductClick(item)} 
          >
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <div className="price-section">
              <span className="old-price">{item.oldPrice}</span>
              <span className="new-price">{item.newPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Football;
