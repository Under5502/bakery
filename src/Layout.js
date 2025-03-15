import Cart from "./components/Body/Cart";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter";
import Navbar from "./components/Header/Navbar";
import { useState, cloneElement } from "react";

function Layouts({ children }) {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleOpenCart = () => setIsCartVisible(true);
  const handleCloseCart = () => setIsCartVisible(false);

  const childrenWithProps = cloneElement(children, {
    onAddToCart: handleOpenCart,
  });
  return (
    <div>
      <Navbar onCartClick={handleOpenCart} />

      <main>{childrenWithProps}</main>
      <Newsletter />
      <Footer />
      {isCartVisible && <Cart onClose={handleCloseCart} />}
    </div>
  );
}

export default Layouts;
