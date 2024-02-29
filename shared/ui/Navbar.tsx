import {
  AnimationControls,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import { navlinks } from "../constants";
import { handleHoverBegin, handleHoverEnd } from "../utils/cursor";

const Navbar = ({
  thirdAnimationControls,
}: {
  thirdAnimationControls: AnimationControls;
}) => {
  const animateControls = useAnimationControls();
  const handleClickNavbarLink = (id: string, index: number) => {
    // Floating Tablet Animation
    animateControls.start({
      x: 80 * index + 8,
      transition: { duration: 0.3, ease: "linear" },
    });

    // Scrolling To the requested section
    document.querySelector(id)?.scrollIntoView({
      behavior: "instant",
    });

    // if reach end of scroll translate last div upwards
  };

  return (
    <motion.div
      id="navbar"
      className="z-10 fixed bg-gray-800 px-2 bottom-2 right-1/2 translate-x-1/2 rounded-full transform  font-mono row-center "
      onHoverStart={handleHoverBegin}
      onHoverEnd={handleHoverEnd}
    >
      {/** FLOATING TABLET  */}
      <div className="absolute w-full z-50  pointer-events-none">
        <motion.div
          initial={{ x: 8 }}
          animate={animateControls}
          className="w-[80px] h-[25px] rounded-full opacity-30 bg-gray-400 "
        ></motion.div>
      </div>

      {/** NAVBAR LINKS  */}
      <div className="flex">
        {navlinks.map((navlink, index) => {
          const href = navlink.toLowerCase().replace(/\s/g, "");
          return (
            <motion.div
              className="w-[80px] h-8 text-[14px] font-russo  row-center text-gray-400 "
              onClick={() => {
                handleClickNavbarLink("#" + href, index);
              }}
            >
              {navlink}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Navbar;
