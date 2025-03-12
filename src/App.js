import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "../src/components/Header/Hero";
import Footer from "../src/components/Footer/Footer";
import Main from "../src/components/Body/Main";
import Newsletter from "./components/Footer/Newsletter";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <div className="position-relative">
      <Hero />
      <Main />
    </div>
  );
}

export default App;
