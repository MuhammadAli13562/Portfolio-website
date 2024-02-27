import { AnimatePresence, motion } from "framer-motion";

const ThridScroll = () => {
  return (
    <AnimatePresence>
      <motion.div
        id="projects"
        key="sec3"
        className="thirdsection section-transition flex justify-center items-center h-screen bg-red-400"
      >
        ThridScroll
      </motion.div>
    </AnimatePresence>
  );
};

export default ThridScroll;
