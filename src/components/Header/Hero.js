import React from "react";

import "./Hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const slideFromBottomLeft = {
    hidden: {
      opacity: 0,
      x: -50,
      y: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
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

        <div className="indulge">
          <h1>INDULGE</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
