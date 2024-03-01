"use client";
import { motion, useAnimationControls } from "framer-motion";
import { skills } from "../../constants";
import { getRandomNumber } from "../../utils/random";
import { handleHoverBegin, handleHoverEnd } from "@/shared/utils/cursor";
import Image from "next/image";
import profile from "@/public/profile.png";

const FirstScroll = () => {
  const controls = useAnimationControls();

  const onEntry = () => {
    controls.start({
      opacity: 1,
      transition: { duration: 2 },
    });
  };

  const onLeave = () => {
    controls.start({
      opacity: 0,
      transition: { duration: 0 },
    });
  };
  return (
    <motion.div
      id="intro"
      initial={{ opacity: 0 }}
      animate={controls}
      className="sections overflow-hidden relative h-screen w-full bg-gray-400"
    >
      {/** NAME HEADING */}
      <motion.div
        onViewportEnter={onEntry}
        onViewportLeave={onLeave}
        className="flex pt-12 flex-col bg-black font-monoton text-gray-400 pl-4 bg-gray-00 pb-12"
      >
        <motion.span
          initial={{ x: -1500 }}
          animate={{ x: 0, transition: { delay: 2, duration: 0.5 } }}
          className="text-[200px]/[200px]"
        >
          MUHAMMAD
        </motion.span>
        <motion.span
          initial={{ x: +2500 }}
          animate={{ x: 0, transition: { delay: 2, duration: 0.5 } }}
          className="text-[200px]/[200px] pl-[0px]"
        >
          ALI{" "}
        </motion.span>
      </motion.div>

      {/** SKILLS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute right-0 w-[1100px] gap-12 rounded-xl transform flex justify-around items-center bottom-[50px] flex-wrap  h-[400px] p-12"
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
              className="hover:bg-gray-300 will-change-transform font-russo  text-4xl text-black p-4 rounded-2xl bg-gray-300   text-center"
              onHoverStart={handleHoverBegin}
              onHoverEnd={handleHoverEnd}
            >
              {skill}
            </motion.div>
          );
        })}
      </motion.div>

      {/** SIGNATURE DIV */}
      <motion.div className="absolute bottom-6 left-12">
        <div className="flex flex-col  text-black">
          <Image
            src={profile}
            width={200}
            height={200}
            alt="ali"
            className="rounded-[100px]  bg-gray-500"
          />
          <span
            className=" font-herrvon pl-8 text-7xl "
            style={{ transform: "rotate(-10deg)" }}
          >
            Javed M.
          </span>
          <span className="font-sans">
            ____________________________________________
          </span>
          <span className="font-mono self-end">SIGNATURE</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FirstScroll;
