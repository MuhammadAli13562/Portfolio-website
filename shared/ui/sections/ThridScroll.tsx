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
        className="sections relative thirdsection section-transition flex justify-center items-center h-[101vh] "
      >
        <div className="text-8xl font-russo text-gray-600 w-1/3">
          Under Maintainence
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThridScroll;
