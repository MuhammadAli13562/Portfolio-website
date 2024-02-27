import { AnimatePresence, motion } from "framer-motion";

const FourthScroll = () => {
  return (
    <AnimatePresence>
      <motion.div
        id="contactme"
        key="sec3"
        className="thirdsection section-transition flex justify-center items-center h-screen bg-red-400"
      >
        FourthScroll
      </motion.div>
    </AnimatePresence>
  );
};

export default FourthScroll;
