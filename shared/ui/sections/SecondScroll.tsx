import { backendlogos, frontendlogos } from "../../constants";
import { BackEnd_Ticker, FrontEnd_Ticker } from "../TechStack_Ticker";
import { motion, useAnimationControls } from "framer-motion";

const SecondScroll = () => {
  const labelAnimate = useAnimationControls();
  const tickerAnimate = useAnimationControls();

  return (
    <motion.div
      id="tech"
      onViewportEnter={() => {
        tickerAnimate.start({
          opacity: 1,
          transition: { delay: 1, duration: 2 },
        });
        labelAnimate.start({
          opacity: [1, 1, 0.1],
          x: [-1500, 0, 0], // Animation properties
          transition: {
            duration: 3,
            times: [0, 0.05, 1],
            type: "just",
          },
        });
      }}
      onViewportLeave={() => {
        tickerAnimate.start({ opacity: 0, transition: { duration: 1 } });
        labelAnimate.start({
          opacity: 0,
          x: -1500,
          transition: { duration: 0 },
        });
      }}
      className=" h-[101vh] relative "
    >
      <div className="place-center flex flex-col gap-[5rem] xl:gap-[7rem] 2xl:gap-[10rem]">
        <motion.div animate={tickerAnimate}>
          <FrontEnd_Ticker stack={frontendlogos} duration={12} />
        </motion.div>
        {/** TECH STACK LABEL */}
        <motion.div
          animate={labelAnimate}
          className="bg-white   w-full font-orbitron text-6xl  md:text-[5rem] lg:text-[7rem]  text-black text-center"
        >
          TECH - STACK
        </motion.div>
        {/**-------------------- */}
        <motion.div animate={tickerAnimate}>
          <BackEnd_Ticker stack={backendlogos} duration={10} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SecondScroll;
