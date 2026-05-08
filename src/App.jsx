import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VillageInfo from "./components/VillageInfo";
import News from "./components/News";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminModal from "./components/AdminModal";
import ImportantInfo from "./components/ImportantInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ReelsSection from "./components/ReelsSection";
import "./style.css";
function App() {
  return (
    <>
     
      <Navbar />
      <Hero />
      <VillageInfo />
      <News />
      <Gallery />
      <ReelsSection />
      <Contact />
      <ImportantInfo />
      <Footer />
      
      {/* बाकी sections */}
    </>
  );
}

export default App;