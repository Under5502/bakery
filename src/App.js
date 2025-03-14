import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import Hero from "../src/components/Header/Hero";

import Main from "../src/components/Body/Main";

function App() {
  return (
    <div className="position-relative">
      <Hero />
      <Main />
    </div>
  );
}

export default App;
