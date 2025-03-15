import Cart from "./components/Body/Cart";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter";
import Navbar from "./components/Header/Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Layouts() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleOpenCart = () => setIsCartVisible(true);
  const handleCloseCart = () => setIsCartVisible(false);

  return (
    <div>
      <Navbar onCartClick={handleOpenCart} />
      <main>
        <Outlet context={{ onAddToCart: handleOpenCart }} />
      </main>
      <Newsletter />
      <Footer />
      {isCartVisible && <Cart onClose={handleCloseCart} />}
    </div>
  );
}

export default Layouts;
