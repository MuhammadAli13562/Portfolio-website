import { AnimatePresence, motion } from "framer-motion";

const FourthScroll = () => {
  return (
    <motion.div
      id="contactme"
      className="fourthsection relative section-transition flex justify-center items-center h-screen "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "just", duration: 5 }}
    ></motion.div>
  );
};

export default FourthScroll;
