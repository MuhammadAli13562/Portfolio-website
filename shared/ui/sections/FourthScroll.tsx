import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import FAQ from "../FAQ";
import { FAQcontent } from "@/shared/constants";
import WorkLinksBar from "../WorkLinksBar";
import BottomBar from "../BottomBar";

const FourthScroll = () => {
  const contactheading = "Ready to crank out some top-notch tech 🚀?";

  const HeadingControls = useAnimationControls();
  const WorklinksControls = useAnimationControls();
  const bottombarControls = useAnimationControls();

  const showWorkLinks = () => {
    WorklinksControls.start({
      opacity: 1,
      transition: { duration: 2 },
    });
    bottombarControls.start({
      opacity: 1,
      transition: { duration: 1 },
    });
  };
  const hideWorkLinks = () => {
    WorklinksControls.start({
      opacity: 0,
      transition: { duration: 0 },
    });
    bottombarControls.start({
      opacity: 0,
      transition: { duration: 0.2 },
    });
  };

  const handleViewEnter = () => {
    HeadingControls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", damping: 10 },
    });
  };
  const handleViewLeave = () => {
    HeadingControls.start({
      opacity: 0,
      x: -1500,
      transition: { duration: 0 },
    });
  };

  return (
    <motion.div
      id="contact"
      onViewportEnter={() => {
        handleViewEnter();
        showWorkLinks();
      }}
      onViewportLeave={() => {
        handleViewLeave();
        hideWorkLinks();
      }}
      className="relative sections fourthscroll section-transition flex flex-col gap-24 items-center h-[100vh]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={HeadingControls}
        className="font-sans font-semibold text-8xl w-3/5 text-center mt-12 text-gray-500"
      >
        {contactheading}
      </motion.div>
      <FAQ FAQcontent={FAQcontent} />
      <WorkLinksBar WorklinksControls={WorklinksControls} />
    </motion.div>
  );
};

export default FourthScroll;
