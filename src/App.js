import React from "react";
import Navbar from "./common/components/Navbar";
import MainHeader from "./modules/main-header/MainHeader";
import HeroImagesFeatures from "./modules/hero-image-features/HeroImagesFeatures";
import AlwaysOn from "./modules/always-on/AlwaysOn";
import SustainableShopping from "./modules/sustainable-shopping/SustainableShopping";
import WaitlistForm from "./modules/waitlist-form/WaitlistForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <MainHeader />
        <HeroImagesFeatures />
        <AlwaysOn />
        <SustainableShopping />
        <WaitlistForm />
      </header>
    </div>
  );
}

export default App;
