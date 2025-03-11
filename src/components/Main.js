import React from "react";
import "./Main.scss"; // Import SCSS

const Main = () => {
  return (
    <section className="main-section">
      {/* Tiêu đề */}
      <div className="main-heading">
        <h2 className="main-title">
          <span>Good</span> <span>food</span> <span>should</span>
          <br />
          <span>both</span> <span>comfort</span> <span>and</span>
          <br />
          <span>nourish</span> <span>the</span> <span>soul.</span>
        </h2>
        <img
          src="https://bernicebakery.com/cdn/shop/files/cake.svg?v=1714513357&width=400"
          alt="Cake Illustration"
          width="200"
          height="132"
        />
      </div>

      {/* Nội dung */}
      <div className="main-content">
        <p>
          We are centrally located in the neighborhood of St-Henri. Stop by for
          a coffee, catch up on work, or grab some of our delicious goodies to
          go. With cookies and cakes available for online order, there’s
          something for everyone, and every occasion.
        </p>
      </div>
    </section>
  );
};

export default Main;
