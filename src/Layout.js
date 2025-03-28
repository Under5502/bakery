import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter";
import Cart from "./components/Cart/Cart";
import DatePicker from "./components/Cart/DatePicker";
import TransitionCircle from "./components/TransitionCircle/TransitionCircle";
import { useNavigate } from "react-router-dom";

function Layouts() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showTransition, setShowTransition] = useState(true);
  const [showPageContent, setShowPageContent] = useState(false);

  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  // ✅ Hiệu ứng chuyển trang
  useEffect(() => {
    setShowTransition(true);
    setShowPageContent(false);

    const transitionTimeout = setTimeout(() => {
      setShowTransition(false);
    }, 1000); // Vòng tròn biến mất sau 1s

    const contentTimeout = setTimeout(() => {
      setShowPageContent(true);
    }, 1000); // Nội dung hiện sau vòng tròn

    return () => {
      clearTimeout(transitionTimeout);
      clearTimeout(contentTimeout);
    };
  }, [location.pathname]);

  // ✅ Animation cho nội dung trang
  const pageVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%" },
    exit: { opacity: 0, y: "-100%" },
  };

  // 🛒 Cart handler
  const handleOpenCart = () => setIsCartVisible(true);
  const handleCloseCart = () => setIsCartVisible(false);
  const handleCheckoutClick = () => {
    setIsCartVisible(false);
    setIsDatePickerVisible(true);
  };

  // 📅 DatePicker handler
  const handleDatePickerClose = () => setIsDatePickerVisible(false);
  const handleDatePickerSubmit = (data) => {
    console.log("DatePicker Submitted:", data);
    setIsDatePickerVisible(false);
  };

  const handleNavigateStart = () => {
    setShowTransition(true);
    setShowPageContent(false);
  };
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (
        !target ||
        target.target === "_blank" ||
        target.hasAttribute("download") ||
        target.getAttribute("rel") === "external"
      ) {
        return;
      }

      const href = target.getAttribute("href");
      const isInternal = href && href.startsWith("/") && !href.startsWith("//");

      if (isInternal) {
        e.preventDefault();

        setShowTransition(true);
        setShowPageContent(false);

        setTimeout(() => {
          navigate(href);
        }, 1000); // Delay chuyển trang
      }
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {showTransition && <TransitionCircle key={location.pathname} />}
      </AnimatePresence>

      {showPageContent && (
        <>
          <Navbar onCartClick={handleOpenCart} />

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
                    onNavigateStart: handleNavigateStart,
                  }}
                />
              </main>
              <Newsletter />
              <Footer />
            </motion.div>
          </AnimatePresence>
        </>
      )}

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
