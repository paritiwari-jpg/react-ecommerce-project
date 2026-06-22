import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedCars from "./components/FeaturedCars";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Cart from "./components/cart";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedCars />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;