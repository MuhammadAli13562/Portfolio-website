import {
  AnimatePresence,
  AnimationControls,
  motion,
  useAnimationControls,
} from "framer-motion";

const ThridScroll = ({
  thirdAnimationControls,
}: {
  thirdAnimationControls: AnimationControls;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        id="work"
        animate={thirdAnimationControls}
        className="relative thirdsection section-transition flex justify-center items-center h-screen "
      >
        Projects
      </motion.div>
    </AnimatePresence>
  );
};

export default ThridScroll;
