import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/Header/Header";
import Hero from "../src/components/Header/Hero";
import Footer from "../src/components/Footer/Footer";
import Main from "../src/components/Body/Main";
import Newsletter from "../src/components/Body/Newsletter";

function App() {
  return (
    <div className="position-relative">
      <Header />
      <Hero />
      <Main />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
