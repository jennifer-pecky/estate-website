import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Ui/Hero-section/Hero";
import Card from "./components/Ui/Card-section/Card";
import { CARD__DATA } from "./Asset/Data/Data.js"

function App() {
  const cards = CARD__DATA.map(item => {
    return (
      <Card
        img={item.img}
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
      {cards}
    </>
  );
}

export default App;
