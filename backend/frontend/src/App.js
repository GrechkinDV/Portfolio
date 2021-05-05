import "./App.css";
import TopSection from "./sections/TopSection";
import ServicesSection from "./sections/ServicesSection";
import UpworkSection from "./sections/UpworkSection";
import PortfolioSection from "./sections/PortfolioSection";
import Navigation from "./sections/Navigation";

import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />

      <TopSection />
      <ServicesSection />
      <UpworkSection />
      <PortfolioSection />

      <Map />
      <Footer />
    </div>
  );
}

export default App;
