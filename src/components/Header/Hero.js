import React, { useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion } from "framer-motion";
import "./Hero.scss"; // Đảm bảo là import đúng file SCSS
gsap.registerPlugin(MotionPathPlugin);

const Hero = () => {
  const buttonRef = useRef(null);

  const handleHover = () => {
    const button = buttonRef.current;
    button.classList.add("bite");
    const rect = button.getBoundingClientRect();
    const startLeft = rect.right + window.scrollX;
    const startTop = rect.top + window.scrollY;

    for (let i = 0; i < 3; i++) {
      const crumb = document.createElement("div");
      crumb.className = "crumb";
      document.body.appendChild(crumb);

      const randomScale = 0.5 + Math.random() * 1; // Kích thước từ 0.5 đến 1.7 lần
      crumb.style.transform = `scale(${randomScale})`;

      const offsetX = i * 20 + Math.random() * 10;
      const offsetY = Math.random() * 30;
      crumb.style.left = `${startLeft - offsetX - 80}px`;
      crumb.style.top = `${startTop + offsetY + 50}px`;

      gsap.to(crumb, {
        duration: 1.7 + Math.random() * 1.8,
        ease: "power1.out",
        motionPath: {
          path: [
            { x: 20 + Math.random() * 10, y: 10 - Math.random() * 20 },
            { x: 30 + Math.random() * 20, y: 440 + Math.random() * 60 },
          ],
          curviness: 1,
          autoRotate: false,
        },
        scale: 1,
        rotation: Math.random() * 90,
        onComplete: () => crumb.remove(),
      });
    }
  };

  const handleLeave = () => {
    buttonRef.current.classList.remove("bite"); // ✅ remove lại class
  };

  return (
    <div className="hero-container">
      <motion.div
        className="hero-content"
        initial={{ opacity: 1, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-hero">
          <h1 className="hero-h1">
            A BAKING
            <br /> LOVE AFFAIR
          </h1>
        </div>

        <div
          className="indulge"
          ref={buttonRef}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <h1>INDULGE</h1>
        </div>
        <svg width="0" height="0">
          <defs>
            <clipPath id="roundedTopLeft" clipPathUnits="objectBoundingBox">
              <path d="M0.1,0.1 Q0.1,0 0.2,0 L0.9,0.1 L0.75,0.8 L0.2,1 Z" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
