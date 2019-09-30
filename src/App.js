import React from "react";
import Navbar from "./common/components/Navbar";
import MainHeader from "./modules/main-header/MainHeader";
import HeroImagesFeatures from "./modules/hero-image-features/HeroImagesFeatures";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <MainHeader />
        <HeroImagesFeatures />
        <div style={{ height: "300vh", backgroundColor: "black" }} />
      </header>
    </div>
  );
}

export default App;
