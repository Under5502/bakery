import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter";
import Navbar from "./components/Header/Navbar";
import DatePicker from "./components/Cart/DatePicker";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import TransitionCircle from "./components/TransitionCircle/TransitionCircle";
import { useEffect } from "react";
function Layouts() {
  const [showTransition, setShowTransition] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowTransition(true);

    const timer = setTimeout(() => {
      setShowTransition(false); // 👈 trigger unmount -> exit
    }, 1000); // Thời gian vòng tròn xuất hiện

    return () => clearTimeout(timer);
  }, [location.pathname]);

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
    <div>
      <Navbar onCartClick={handleOpenCart} />
      <AnimatePresence mode="wait">
        {showTransition && <TransitionCircle key={location.pathname} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      </AnimatePresence>
      {isCartVisible && (
        <Cart onClose={handleCloseCart} onCheckoutClick={handleCheckoutClick} />
      )}
      {isDatePickerVisible && (
        <DatePicker
          onClose={handleDatePickerClose}
          onSubmit={handleDatePickerSubmit}
        />
      )}
    </div>
  );
}

export default Layouts;
