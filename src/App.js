import React from "react";
import Navbar from "./common/components/Navbar";
import MainHeader from "./modules/main-header/MainHeader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <MainHeader />
        <div style={{ height: "300vh", backgroundColor: "#fafafa" }} />
      </header>
    </div>
  );
}

export default App;
