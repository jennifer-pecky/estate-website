import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Ui/Hero-section/Hero";
import Listing from "./components/Ui/Card-section/Listing";
import Cooper from "./components/Ui/Cooper-sction/Cooper";

function App() {


  return (
    <>
      <div className="max-w-[1281px] mx-auto">
        <Header />
        <Hero />
        <Listing />
        <Cooper />
      </div>


    </>
  );
}

export default App;
