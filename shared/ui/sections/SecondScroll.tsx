import { backendlogos, frontendlogos } from "../../constants";
import { BackEnd_Ticker, FrontEnd_Ticker } from "../TechStack_Ticker";
import { motion, useAnimationControls } from "framer-motion";

const SecondScroll = () => {
  const labelAnimate = useAnimationControls();
  const tickerAnimate = useAnimationControls();

  return (
    <motion.div id="tech" className="relative flex flex-col  h-screen w-full ">
      {/* SECOND PAGE*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={tickerAnimate}
        onViewportEnter={() => {
          tickerAnimate.start({ opacity: 1, transition: { duration: 2 } });
        }}
        onViewportLeave={() => {
          tickerAnimate.start({ opacity: 0, transition: { duration: 1 } });
        }}
        className=" flex flex-col gap-[400px] mt-12"
      >
        <FrontEnd_Ticker stack={frontendlogos} duration={12} />

        <BackEnd_Ticker stack={backendlogos} duration={10} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={labelAnimate}
        onViewportEnter={() =>
          labelAnimate.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, type: "spring" },
          })
        }
        onViewportLeave={() =>
          labelAnimate.start({
            opacity: 0,
            x: -1500,
            transition: { duration: 2 },
          })
        }
        className="absolute top-[300px]  w-full font-orbitron text-[200px] text-gray-500 text-center"
      >
        TECH - STACK
      </motion.div>
    </motion.div>
  );
};

export default SecondScroll;
