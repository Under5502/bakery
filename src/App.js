import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "../src/components/Header/Hero";

import Main from "../src/components/Body/Main";
import Cart from "./components/Body/Cart";
import { useState } from "react";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleShowCart = () => {
    setIsCartVisible(true);
  };

  const handleCloseCart = () => {
    setIsCartVisible(false);
  };
  return (
    <div className="position-relative">
      <Hero />
      <Main onCartClick={handleShowCart} />

      {isCartVisible && <Cart onClose={handleCloseCart} />}
    </div>
  );
}

export default App;
