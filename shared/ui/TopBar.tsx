import { motion } from "framer-motion";
import { handleHoverBegin, handleHoverEnd } from "../utils/cursor";
const TopBar = () => {
  return (
    <div className="flex justify-between items-center font-russo text-gray-400">
      <div className="flex flex-col items-center justify-center ">
        <span>Current Status</span>
        <div className="flex items-center justify-center gap-2">
          <motion.span
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-2 rounded-[8px] bg-green-400"
          ></motion.span>
          <span>Available</span>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <span>ISLAMABAD , PAKISTAN</span>
        <span>GMT + 5</span>
      </div>
      <motion.div
        onHoverStart={handleHoverBegin}
        onHoverEnd={handleHoverEnd}
        className="flex flex-col items-center"
      >
        <span>m.ali8.aj8@gmail.com</span>
        <span>+92-3360580392</span>
      </motion.div>
    </div>
  );
};

export default TopBar;
