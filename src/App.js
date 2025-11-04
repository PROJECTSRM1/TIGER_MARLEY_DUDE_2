import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GeekTshirts from "./pages/GeekTshirts/GeekTshirts";
import GeekHoodies from "./pages/GeekHoodies/GeekHoodies";
import AnimeHoodies from "./pages/AnimeHoodies/AnimeHoodies";
import AnimeOversized from "./pages/GeekOversized/GeekOversized";
import SportHoodies from "./pages/SportHoodies/SportHoodies";
import SportOversized from "./pages/SportsOversized/SportsOversized";
import Football from "./components/football/football";
import Motorsports from "./components/football/motorsports";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CheckoutPopup from "./components/ProductDetails/CheckoutPop";

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geek/tshirts" element={<GeekTshirts />} />
        <Route path="/geek/hoodies" element={<GeekHoodies />} />
         <Route path="/anime/oversized" element={<AnimeOversized />} />
          <Route path="/anime/hoodies" element={<AnimeHoodies />} />
          <Route path="/anime/hoodie" element={<AnimeHoodies />} />
           <Route path="/sport/oversized" element={<SportOversized />} />
            <Route path="/sport/hoodies" element={<SportHoodies/>} />
            <Route path="football/dresses" element={<Football/>}/>
            <Route path="/motorsports" element={<Motorsports/>}/>
            <Route path="/product/:id" element={<ProductDetails />} />
           
            <Route path="/checkout" element={<CheckoutPopup />} />

      </Routes>
    </Router>
  );
}

export default App;
