import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedCreations from "./components/FeaturedCreations";
import About from "./components/About";
import CustomOrder from "./components/CustomOrder";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <FeaturedCreations />
        <About />
        <CustomOrder />
        <Gallery />
      </main>

      <Footer />
    </>
  );
}

export default App;