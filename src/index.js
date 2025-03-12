import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Main from "./components/Body/Main";
import Layouts from "./Layout";
import Cookie from "./Collections/Cookies/Cookie";
import Cake from "./Collections/Cakes/Cake";
import About from "./Collections/About/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Layouts>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="/" element={<Main />} />
        <Route path="/cookies" element={<Cookie />} />
        <Route path="/cakes" element={<Cake />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layouts>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
