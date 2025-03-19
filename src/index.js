import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layouts from "./Layout";
import Cookie from "./Collections/Cookies/Cookie";
import Cake from "./Collections/Cakes/Cake";
import About from "./Collections/About/About";
import Contact from "./Collections/Contact/Contact";
import ProductPage from "./Page/ProductPage/ProductPage";
import ScrollTop from "./components/ScrollTop";
import Main from "./Page/Body/Main";
import DatePicker from "./components/Cart/DatePicker";

import "./App.scss";
import { AnimatePresence, motion } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root"));

function AnimatedRoutes() {
  const location = useLocation(); // Lấy thông tin vị trí hiện tại của URL

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Route cha sử dụng Layouts */}
        <Route path="/" element={<Layouts />}>
          <Route index element={<Main />} />
          <Route path="cookies" element={<Cookie />} />
          <Route path="cakes" element={<Cake />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="datepicker" element={<DatePicker />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

root.render(
  <BrowserRouter>
    <ScrollTop />
    <AnimatedRoutes />
  </BrowserRouter>
);

reportWebVitals();
