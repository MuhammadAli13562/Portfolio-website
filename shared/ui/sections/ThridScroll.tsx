import {
  AnimatePresence,
  AnimationControls,
  motion,
  useAnimationControls,
} from "framer-motion";

const ThridScroll = () => {
  return (
    <AnimatePresence>
      <motion.div
        id="work"
        className="row-center  relative thirdsection section-transition  h-screen "
      >
        <div className="text-5xl lg:text-8xl md:text-6xl font-russo text-gray-600 w-1/3">
          Under Construction
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThridScroll;
