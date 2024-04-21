import React from "react";
import { ProjectType } from "../constants";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { handleHoverBegin, handleHoverEnd } from "../utils/cursor";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [scopeImg, animateImg] = useAnimate();
  const [scopeText, animateText] = useAnimate();

  const handleHoverStartLocal = () => {
    animateImg(scopeImg.current, { x: 0 });
    animateText(scopeText.current, { x: 500 });
  };

  const handleHoverEndLocal = () => {
    animateImg(scopeImg.current, { x: -400 });
    animateText(scopeText.current, { x: 0 });
  };
  return (
    <motion.div
      onHoverStart={handleHoverStartLocal}
      onHoverEnd={handleHoverEndLocal}
      className="flex border-y-[0.1rem] relative border-gray-500 p-8"
    >
      <motion.div ref={scopeImg} initial={{ x: -400 }}>
        <Image src={project.image} width={300} height={300} alt={project.name} />
      </motion.div>
      <motion.div ref={scopeText} initial={{ x: 0 }} className="absolute flex-1 col-center">
        <h1 className="text-4xl font-russo text-gray-400">{project.name}</h1>
        {/* <span>Tech Stack : {project.tech}</span> */}
      </motion.div>
      <motion.div
        onHoverStart={handleHoverBegin}
        onHoverEnd={handleHoverEnd}
        className="absolute right-0 col-center gap-4 p-2"
      >
        <Link href={project.code} target="_blank">
          <motion.div className="project-btn">code</motion.div>
        </Link>
        <Link href={project.website} target="_blank">
          <motion.div className="project-btn ">website</motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
