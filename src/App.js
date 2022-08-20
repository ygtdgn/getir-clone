import './style.css';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Campaigns from "./components/Campaigns";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import MobileApp from "./components/MobileApp";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

function App() {
  return (
      <>
          <Header />
          <HeroSection />
          <Categories />
          <Campaigns />
        <div className="container mx-auto grid gap-y-6">
        <Favorites />
          <MobileApp />
          <Cards />
         
        </div>
        <Footer />
      </>
  );
}

export default App;
