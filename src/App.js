import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Main onCartClick={handleShowCart} />

      {isCartVisible && <Cart onClose={handleCloseCart} />}
    </div>
  );
}

export default App;
