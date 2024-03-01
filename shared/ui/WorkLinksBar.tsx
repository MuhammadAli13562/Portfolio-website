import { workLinks } from "../constants";
import Image from "next/image";
import { AnimationControls, motion } from "framer-motion";
import { handleHoverBegin, handleHoverEnd } from "../utils/cursor";

const WorkLinksBar = ({
  WorklinksControls,
}: {
  WorklinksControls: AnimationControls;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={WorklinksControls}
      className=" p-4 scale-75 rounded-full fixed top-1/2 transform -translate-y-1/2 left-[30px] flex flex-col row-center gap-12 "
    >
      <motion.div
        animate={{ opacity: [0.4, 0.1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute pointer-events-none bg-white w-full h-full border-2 border-solid rounded-full"
      ></motion.div>
      {workLinks.map((worklink) => {
        return (
          <motion.a
            onHoverStart={handleHoverBegin}
            onHoverEnd={handleHoverEnd}
            href={worklink.link}
            target="_blank"
          >
            <Image
              src={worklink.icon}
              width={90}
              height={200}
              alt={worklink.platform}
              className="opacity-70 hover:scale-150 transform transition-all"
            />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default WorkLinksBar;
