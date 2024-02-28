import { AnimatePresence, motion } from "framer-motion";

const ThridScroll = () => {
  return (
    <AnimatePresence>
      <motion.div
        id="projects"
        className="relative thirdsection section-transition flex justify-center items-center h-screen "
      >
        Projects
      </motion.div>
    </AnimatePresence>
  );
};

export default ThridScroll;
