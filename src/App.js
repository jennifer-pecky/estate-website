import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Ui/Hero-section/Hero";
import Card from "./components/Ui/Card-section/Card";
import { CARD__DATA } from "./Asset/Data/Data.js"
import Listing from "./components/Ui/Card-section/Listing";
import Cooper from "./components/Ui/Cooper-sction/Cooper";

function App() {
  const cards = CARD__DATA.map(item => {
    return (
      <Card
        id={item.id}
        imgUrl={item.imgUrl}
        title={item.title}
        prize={item.prize}
        desc={item.desc}
      />
    )
  })

  return (
    <>
      <Header />
      <Hero />
      <Listing />
      <div className="flex">
        {cards}
      </div>
      <Cooper />

    </>
  );
}

export default App;
