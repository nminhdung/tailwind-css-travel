import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offer/>
      <Plan/>
      <Rooms/>
      <ImageSlider/>
      <Footer/>
    </div>
  );
}

export default App;
