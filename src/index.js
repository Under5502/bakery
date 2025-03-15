import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layouts from "./Layout";
import Main from "./components/Body/Main";
import Cookie from "./Collections/Cookies/Cookie";
import Cake from "./Collections/Cakes/Cake";
import About from "./Collections/About/About";
import Contact from "./Collections/Contact/Contact";
import ProductPage from "./ProductPage/ProductPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Route cha sử dụng Layouts */}
      <Route path="/" element={<Layouts />}>
        <Route index element={<Main />} />
        <Route path="cookies" element={<Cookie />} />
        <Route path="cakes" element={<Cake />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<ProductPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
