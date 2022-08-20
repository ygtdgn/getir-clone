import './style.css';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Campaigns from "./components/Campaigns";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import MobileApp from "./components/MobileApp";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import {useWindowWidth} from '@react-hook/window-size'

function App() {

  const windowWith = useWindowWidth()
  
  return (
      <>
          <Header />
          {windowWith <= 768 && <Campaigns />}
          <HeroSection />
          <Categories />
          {windowWith > 768 && <Campaigns />}
        <div className="container mx-auto grid pt-8 gap-y-6">
        <Favorites />
          <MobileApp />
          <Cards />
        </div>
        <Footer />
      </>
  );
}

export default App;
