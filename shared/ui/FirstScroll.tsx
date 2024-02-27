"use client";
import { motion } from "framer-motion";
import { skills } from "../constants";
import { getRandomNumber } from "../utils/random";

const FirstScroll = () => {
  return (
    <motion.div
      id="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="relative h-screen w-full firstsection"
    >
      <div className="flex flex-col bg-black font-monoton primary-color pt-4 pl-4 bg-gray-00 pb-24">
        <span className="text-[210px]/[200px]">Muhammad</span>
        <span className="text-[210px]/[200px]">Ali</span>
      </div>
      <motion.div className="absolute top-[500px] w-full firstsectionbg  h-12"></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute right-0 w-[1201px]  rounded-xl transform flex justify-around items-center    bottom-[110px] flex-wrap  h-[349px] p-12"
      >
        {skills.map((skill) => {
          return (
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.2,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.7, transition: { duration: 0.5 } }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                duration: getRandomNumber(2, 6), // Set a duration for the entire animation cycle
              }}
              className="hover:bg-gray-300 will-change-transform font-russo select-none cursor-crosshair text-4xl text-black p-4 rounded-2xl bg-gray-500   text-center"
            >
              {skill}
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div className="absolute bottom-32 left-12">
        <div className="flex flex-col  text-black">
          <span
            className=" font-herrvon pl-8 text-7xl "
            style={{ transform: "rotate(-10deg)" }}
          >
            Javed M.
          </span>
          <span className="font-sans">_____________________________</span>
          <span className="font-mono self-start">SIGNATURE</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FirstScroll;
