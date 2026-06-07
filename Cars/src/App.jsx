import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedCars from "./components/FeaturedCars";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
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

export default App;