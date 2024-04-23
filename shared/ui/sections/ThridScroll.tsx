import { ProjectsLink } from "@/shared/constants";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../ProjectCard";

const ThridScroll = () => {
  return (
    <AnimatePresence>
      <motion.div
        id="work"
        className="row-center w-full relative thirdsection section-transition  h-[101vh] "
      >
        <div className="bg-black w-0 2xl:w-1/6 absolute left-0 h-screen z-50"></div>

        <div className="w-full min-w-[1100px] px-8 2xl:p-0 2xl:w-2/3 p-2">
          {ProjectsLink.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThridScroll;
