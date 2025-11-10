import HeroBanner from "../components/HeroBanner/HeroBanner";
import Navbar from "../components/Navbar/Navbar";
// import ProductCard from "../components/BannerImage";
// import { products } from "../data/products";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BannerImage from "../BannerImage/components/BannerImage";
import FandomFusion from "../components/FandomFusion/FandomFusion";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import LimitedEditionsImages from "../components/LimtedEditionImages/LimitedEditionImages";
import LimitedEE from "../components/LimitedEditions/LimitedEditions";
import Arrivals from "../components/Arrivals/Arrivals";
import OurEssential from "../components/Our_Essentials/Our_essientials";
import OfficialMM from "../components/Official_merchandise/Official_merchandise";
import ShopByThemes from "../components/ShopBy_themes/Shop_by_themes";
import BestSelling from "../components/BestSelling/bestSelling";
import FeaturesRecognitions from "../components/Feature_recognization/features_recognizations";
import UserShowcase from "../components/OurShowCase/OurShowcase";
import BannerImage from "../components/BannerImage/BannerImage";

export default function Home() {
  return (
    <>
      {/* <HeroBanner /> */}
      {/* <Navbar/> */}
      <BannerImage/>
      <FandomFusion/>
      <ProductCategories/>
      <LimitedEE/>
      <LimitedEditionsImages/>
      <Arrivals/>
      <OurEssential/>
      <OfficialMM/>
      <ShopByThemes/>
      <BestSelling/>
      <FeaturesRecognitions/>
      <UserShowcase/>
    </>
  );
}
