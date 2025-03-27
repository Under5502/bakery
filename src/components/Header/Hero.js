import React, { useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion } from "framer-motion";
import "./Hero.scss"; // Đảm bảo là import đúng file SCSS
gsap.registerPlugin(MotionPathPlugin);

const Hero = () => {
  const containerRef = useRef(null);

  const handleHover = () => {
    const container = containerRef.current;
    container.classList.add("bite");

    // Lấy bounding rect và cộng thêm giá trị scroll để có tọa độ tuyệt đối
    const rect = container.getBoundingClientRect();
    const startLeft = rect.right + window.scrollX;
    const startTop = rect.top + window.scrollY;

    // Tạo 3 crumb tại vị trí góc trên bên phải
    for (let i = 0; i < 3; i++) {
      const crumb = document.createElement("div");
      crumb.className = "crumb";
      document.body.appendChild(crumb);

      // Lệch ngẫu nhiên nhẹ
      const offsetX = Math.random() * 20;
      const offsetY = Math.random() * 20;
      crumb.style.left = `${startLeft - offsetX - 70}px`;
      crumb.style.top = `${startTop + offsetY + 30}px`;

      gsap.to(crumb, {
        duration: 1.2 + Math.random() * 0.2,
        ease: "power2.inOut",
        motionPath: {
          path: [
            { x: 0, y: 0 },
            {
              x: 10 + Math.random() * 10, // chuyển động nhẹ sang phải
              y: -40 - Math.random() * 20, // chuyển động nhẹ lên trên
            },
            {
              x: 30 + Math.random() * 20, // chuyển động xa hơn một chút
              y: 180 + Math.random() * 60,
            },
          ],
          curviness: 1.1,
          autoRotate: false,
        },
        scale: 0.4,
        rotation: Math.random() * 90,
        opacity: 1,
        onComplete: () => crumb.remove(),
      });
    }
  };

  const handleLeave = () => {
    containerRef.current.classList.remove("bite"); // ✅ remove lại class
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
          ref={containerRef}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <h1>INDULGE</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
