"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  const mouse = {
    x: useMotionValue(-100),
    y: useMotionValue(-100),
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - 50 / 2);
    mouse.y.set(clientY - 50 / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{ top: mouse.y, left: mouse.x }}
    ></motion.div>
  );
};

export default Cursor;
