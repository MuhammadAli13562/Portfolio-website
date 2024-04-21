import { ProjectsLink } from "@/shared/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ProjectCard from "../ProjectCard";

const ThridScroll = () => {
  return (
    <AnimatePresence>
      <motion.div
        id="work"
        className="row-center w-full relative thirdsection section-transition  h-screen "
      >
        <div className="bg-black w-1/6 absolute left-0 h-screen z-50"></div>
        <div className="w-2/3 ">
          {ProjectsLink.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThridScroll;
