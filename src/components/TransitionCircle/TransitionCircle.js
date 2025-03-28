import React from "react";
import { motion } from "framer-motion";
import "./TransitionCircle.scss";

const circleVariants = {
  initial: {
    scale: 0,
    y: 300,
    opacity: 1,
  },
  animate: {
    scale: 2,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    scale: 0,
    y: -300,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const TransitionCircle = () => {
  return (
    <motion.div
      className="transition-circle"
      variants={circleVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    />
  );
};

export default TransitionCircle;
