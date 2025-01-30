// src/App.jsx
import React from "react";
import Header from "./components/Header";
import HeroPage from "./components/Hero";
import CardTech from "./components/CardsTech";
import ParallaxTiltEffectCards from "./components/CardsNTech";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <Header />
      <HeroPage />
      <CardTech />
      <ParallaxTiltEffectCards />
      <Register />
    </div>
  );
};

export default App;
