import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import FAQ from "../FAQ";
import { FAQcontent } from "@/shared/constants";
import WorkLinksBar from "../WorkLinksBar";

const FourthScroll = () => {
  const contactheading = "Ready to crank out some top-notch tech 🚀?";

  const HeadingControls = useAnimationControls();
  const WorklinksControls = useAnimationControls();

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
      onViewportEnter={handleViewEnter}
      onViewportLeave={handleViewLeave}
      className="relative sections fourthscroll section-transition flex flex-col gap-24 items-center h-[101vh]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-sans font-semibold text-4xl md:text-6xl lg:text-7xl lg:w-4/5 xl:text-7xl 2xl:text-8xl w-full text-center pt-12 text-gray-500"
      >
        {contactheading}
      </motion.div>
      <FAQ FAQcontent={FAQcontent} WorklinksControls={WorklinksControls} />
      <WorkLinksBar WorklinksControls={WorklinksControls} />
    </motion.div>
  );
};

export default FourthScroll;
