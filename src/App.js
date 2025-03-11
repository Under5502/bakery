import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Main from "./components/Main";
import YourStylesheet from "./components/YourStylesheet";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="position-relative">
      <Header />
      <Hero />
      <Main />
      <YourStylesheet />
      <Footer />
    </div>
  );
}

export default App;
