"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const Cursor = () => {
  const mouse = {
    x: useMotionValue(-100),
    y: useMotionValue(-100),
  };

  const cursorref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    let width = 50;

    if (cursorref?.current?.classList?.contains("cursor-hover-zoom")) {
      width = 100;
    }

    const { clientX, clientY } = e;
    mouse.x.set(clientX - width / 2);
    mouse.y.set(clientY - width / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={cursorref}
      className="cursor"
      style={{ top: mouse.y, left: mouse.x }}
    ></motion.div>
  );
};

export default Cursor;
