import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Ui/Hero-section/Hero";
import Listing from "./components/Ui/Card-section/Listing";
import Cooper from "./components/Ui/Cooper-sction/Cooper";
import Footer from "./components/Footer/Footer";

function App() {


  return (
    <>
      <div className="max-w-[1281px] mx-auto">
        <Header />
        <Hero />
        <Listing />
        <Cooper />
        <Footer />
      </div>


    </>
  );
}

export default App;
