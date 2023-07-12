import Header from "./components/Header";
import Menu from "./components/Menu";
import GridList from "./components/GridList";
import Footer from "./components/Footer";
import useListing from "./hooks/useListing";
import { useState, useEffect } from "react";
import ShowMap from "./components/ShowMap";
import Map from "./components/Map";

function App() {
  const [showMap, setShowMap] = useState(false);
  const { filteredListing } = useListing();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Header />
      <Menu isFixed={isFixed} />
      <div className={`${isFixed ? "mt-24" : ""}`}>
        {showMap ? <Map /> : <GridList lists={filteredListing} />}
      </div>
      <ShowMap showMap={showMap} setShowMap={setShowMap} />
      <Footer />
    </div>
  );
}

export default App;
