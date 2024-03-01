import { backendlogos, frontendlogos } from "../../constants";
import { BackEnd_Ticker, FrontEnd_Ticker } from "../TechStack_Ticker";
import { motion, useAnimationControls } from "framer-motion";

const SecondScroll = () => {
  const labelAnimate = useAnimationControls();
  const tickerAnimate = useAnimationControls();

  return (
    <motion.div
      id="tech"
      className="sections relative flex flex-col  h-screen w-full "
    >
      {/* SECOND PAGE*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={tickerAnimate}
        onViewportEnter={() => {
          tickerAnimate.start({
            opacity: 1,
            transition: { delay: 0.8, duration: 2 },
          });
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
        animate={labelAnimate}
        onViewportEnter={() => {
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
        onViewportLeave={() =>
          labelAnimate.start({
            opacity: 0,
            x: -1500,
            transition: { duration: 0 },
          })
        }
        className="absolute top-[300px] bg-white  w-full font-orbitron text-[200px] text-black text-center"
      >
        TECH - STACK
      </motion.div>
    </motion.div>
  );
};

export default SecondScroll;
