import React from "react";
import { Brand, Cta, Navbar } from "./components/index";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers/index";
import "./App.css";

const App = () => {
  return (
    <div className="App gradient__bg">
      <Navbar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
