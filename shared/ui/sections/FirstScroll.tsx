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
      className="sections overflow-hidden relative h-[101vh] w-full bg-gray-400 flex flex-col"
    >
      {/** NAME HEADING */}
      <motion.div
        onViewportEnter={onEntry}
        onViewportLeave={onLeave}
        className="flex flex-col bg-black font-monoton text-gray-400 2xl:text-[13rem] xl:text-
        [10rem] lg:text-[9rem]  md:text-8xl sm:text-8xl text-[5rem] h-1/3 2xl:h-1/2"
      >
        <motion.span
          initial={{ x: -1600 }}
          animate={{ x: 0, transition: { delay: 2, duration: 0.5 } }}
          className=" "
        >
          MUHAMMAD
        </motion.span>
        <motion.span
          initial={{ x: +2500 }}
          animate={{ x: 0, transition: { delay: 2, duration: 0.5 } }}
          className=" "
        >
          ALI
        </motion.span>
      </motion.div>
      <div className="flex flex-col justify-center flex-1">
        <div className="flex justify-between items-center w-full px-8">
          {/** SIGNATURE DIV */}
          <motion.div className="">
            <div className="flex flex-col  text-black">
              <Image
                src={profile}
                width={200}
                height={200}
                alt="ali"
                className="rounded-[100px]  bg-gray-500"
              />
              <div className=" flex-col hidden md:flex">
                <span
                  className=" font-herrvon pl-8 text-7xl "
                  style={{ transform: "rotate(-10deg)" }}
                >
                  Javed M.
                </span>
                <span className="font-sans">____________________________________________</span>
                <span className="font-mono self-end">SIGNATURE</span>
              </div>
            </div>
          </motion.div>

          {/** SKILLS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="w-1/2 flex-col  2xl:flex gap-2 rounded-xl transform flex h-full "
          >
            {skills.map((skill) => {
              return (
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "black",
                    color: "white",
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.7, transition: { duration: 0.5 } }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    ease: "linear",
                    repeat: Infinity,
                    duration: getRandomNumber(2, 6), // Set a duration for the entire animation cycle
                  }}
                  className="hover:bg-gray-300 max-w-[40vw] md:scale-[0.] lg:scale-100 will-change-transform font-russo  text-sm md:text-3xl sm:text-2xl lg:text-4xl text-black  p-0 md:p-2 lg:p-4 rounded-2xl bg-gray-300   text-center"
                  onHoverStart={handleHoverBegin}
                  onHoverEnd={handleHoverEnd}
                >
                  {skill}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FirstScroll;
