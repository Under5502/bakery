import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter";
import Navbar from "./components/Header/Navbar";
import DatePicker from "./components/Cart/DatePicker";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function Layouts() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const pageVariants = {
    hidden: { opacity: 0, y: "100%" }, // Bắt đầu từ dưới, không nhìn thấy
    visible: { opacity: 1, y: "0%" }, // Đến vị trí bình thường
    exit: { opacity: 0, y: "-100%" },
  };

  const curtainVariants = {
    hidden: { opacity: 0 }, // Lớp che phủ ẩn khi bắt đầu
    visible: { opacity: 1 }, // Lớp che phủ xuất hiện
    exit: { opacity: 0 }, // Lớp che phủ biến mất khi rời đi
  };
  const handleOpenCart = () => setIsCartVisible(true);
  const handleCloseCart = () => setIsCartVisible(false);

  const handleCheckoutClick = () => {
    setIsCartVisible(false);
    setIsDatePickerVisible(true);
  };

  const handleDatePickerClose = () => {
    setIsDatePickerVisible(false);
  };

  const handleDatePickerSubmit = (data) => {
    console.log("DatePicker Submitted:", data);
    setIsDatePickerVisible(false);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <Navbar onCartClick={handleOpenCart} />
      <main>
        <Outlet
          context={{
            onAddToCart: handleOpenCart,
            onCheckoutClick: handleCheckoutClick,
          }}
        />
      </main>
      <Newsletter />
      <Footer />

      {isCartVisible && (
        <Cart onClose={handleCloseCart} onCheckoutClick={handleCheckoutClick} />
      )}
      {isDatePickerVisible && (
        <DatePicker
          onClose={handleDatePickerClose}
          onSubmit={handleDatePickerSubmit}
        />
      )}
    </motion.div>
  );
}

export default Layouts;
