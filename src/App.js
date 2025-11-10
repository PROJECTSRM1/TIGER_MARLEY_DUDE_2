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
import ProductCategories from "./components/ProductCategories/ProductCategories";
import ViewCart from "./pages/ViewCart";
import Mumbai from "./components/Official_merchandise/Mumbai";
import Punjab from "./components/Official_merchandise/punjab";
import Nasa from "./components/Official_merchandise/Nasa";

import XXLSize from "./components/Official_merchandise/XXLsize";
import XLSize from "./components/Official_merchandise/XL_size";
import LSize from "./components/Official_merchandise/L_size";
import MSize from "./components/Official_merchandise/M_size";
import SSize from "./components/Official_merchandise/S_size";
import XSSize from "./components/Official_merchandise/XS_size";
import CoffeeTea from "./components/ShopBy_themes/CoffeeTea";
import Sarcasam from "./components/ShopBy_themes/sarcasam";
import Gym from "./components/ShopBy_themes/Gym";
import Couple from "./components/ShopBy_themes/Couple";
import Pet from "./components/ShopBy_themes/Pet";

import Register from "./pages/Register/Register";
import ShopSignIn from "./pages/ShopSignIn";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Footer from "./components/OurShowCase/footer";

function App() {
  return (
    <Router>
      <HeroBanner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geek/tshirts" element={<GeekTshirts />} />
        <Route path="/geek/hoodies" element={<GeekHoodies />} />
        <Route path="/anime/oversized" element={<AnimeOversized />} />
        <Route path="/anime/hoodies" element={<AnimeHoodies />} />
        <Route path="/anime/hoodie" element={<AnimeHoodies />} />
        <Route path="/sport/oversized" element={<SportOversized />} />
        <Route path="/sport/hoodies" element={<SportHoodies />} />
        <Route path="football/dresses" element={<Football />} />
        <Route path="/motorsports" element={<Motorsports />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/checkout" element={<CheckoutPopup />} />
        <Route path="/geek/:category" element={<ProductCategories />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/view-cart" element={<ViewCart />} />
        <Route path="/mumbai" element={<Mumbai />} />
        <Route path="/punjab" element={<Punjab />} />
        <Route path="/nasa" element={<Nasa />} />
        <Route path="/size/xs" element={<XSSize />} />
        <Route path="/size/s" element={<SSize />} />
        <Route path="/size/m" element={<MSize />} />
        <Route path="/size/l" element={<LSize />} />
        <Route path="/size/xl" element={<XLSize />} />
        <Route path="/size/xxl" element={<XXLSize />} />
        <Route path="/coffee-tea" element={<CoffeeTea />} />
        <Route path="/sarcasam" element={<Sarcasam />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/couple" element={<Couple />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop-sign-in" element={<ShopSignIn />} />
 


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
