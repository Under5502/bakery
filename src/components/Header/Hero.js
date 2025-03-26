import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.scss";

const Hero = () => {
  const [particles, setParticles] = useState([]);

  const createParticles = () => {
    const newParticles = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i,
      dx: `${Math.random() * 80 - 40}px`, // Bay lệch về hai phía
      dy: `${-Math.random() * 100 - 50}px`, // Bay lên cao hơn
      size: `${15 + Math.random() * 10}px`, // Hạt có kích thước ngẫu nhiên
    }));
    setParticles(newParticles);
  };

  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => setParticles([]), 1800);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  const slideFromBottomLeft = {
    hidden: { opacity: 0, x: -50, y: 50 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div className="hero-container">
      <motion.div
        className="hero-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={slideFromBottomLeft}
      >
        <div className="text-hero">
          <h1 className="hero-h1">
            A BAKING
            <br /> LOVE AFFAIR
          </h1>
        </div>

        <div className="indulge" onMouseEnter={createParticles}>
          <h1>INDULGE</h1>
          {particles.map((p) => (
            <span
              key={p.id}
              className="particle"
              style={{
                "--dx": p.dx,
                "--dy": p.dy,
                "--size": p.size,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
