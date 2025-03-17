import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./components/Body/Main";
import Cart from "./components/Body/Cart";
import DatePicker from "./components/Body/DatePicker";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handleShowCart = () => {
    setIsCartVisible(true);
  };

  const handleCloseCart = () => {
    setIsCartVisible(false);
  };

  const handleCheckoutClick = () => {
    // ✅ Khi click Check Out: ẩn Cart, hiện DatePicker ngay

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
    <div className="position-relative">
      <Main onCartClick={handleShowCart} />

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

export default App;
