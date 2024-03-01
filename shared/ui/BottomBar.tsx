import { AnimationControls, motion } from "framer-motion";

const BottomBar = ({
  bottombarControls,
}: {
  bottombarControls: AnimationControls;
}) => {
  return (
    <motion.div
      animate={bottombarControls}
      className="fixed rotate-90 top-1/2 transform -translate-y-1/2 -left-24 text-center font-mono text-xl text-gray-400 "
    >
      Build with &#x1F5A4; by Ali
    </motion.div>
  );
};

export default BottomBar;
