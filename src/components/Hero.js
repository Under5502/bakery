import React from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="position-relative w-100 vh-100">
      {/* Background Image */}
      <img
        src="https://bernicebakery.com/cdn/shop/files/bernicefrontcounter.jpg?v=1712175696&width=1920"
        alt="Bakery Interior"
        className="w-100 h-100 object-fit-cover"
      />

      {/* Hero Text */}
      <Container className="position-absolute bottom-0 start-0 mb-5 text-white">
        <h1 className="display-1 fw-bold">
          A BAKING
          <br />
          LOVE AFFAIR
        </h1>
      </Container>

      {/* Indulge Button */}
      <div className="position-absolute bottom-0 end-0 mb-5 me-5">
        <div
          className="bg-danger text-white fs-5 fw-bold rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: "130px",
            height: "130px",
            transform: "rotate(12deg)",
          }}
        >
          INDULGE
        </div>
      </div>
    </div>
  );
};

export default Hero;
