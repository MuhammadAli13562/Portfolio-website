import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { sections } from "../constants";
import { handleHoverBegin, handleHoverEnd } from "../utils/cursor";

const Navbar = () => {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollYProgress = window.scrollY;

      // Determine which section is in view based on scroll position
      let activeSectionId = activeSection;
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        const top = section?.offsetTop;
        const height = section?.offsetHeight;
        if (scrollYProgress >= top! && scrollYProgress < top! + height!) {
          activeSectionId = sectionId;
        }
      });

      // Update activeSection state
      setActiveSection(activeSectionId);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    handleScroll();
    // Remove event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array to run the effect only once

  return (
    <motion.div
      transition={{ duration: 2 }}
      className="z-10 fixed transform rotate-90  -right-[175px] top-[240px] flex text-white  font-mono justify-start  items-center"
      onHoverStart={handleHoverBegin}
      onHoverEnd={handleHoverEnd}
    >
      <div className=" flex  gap-2  section-link-bg">
        <div
          className={`section-link ${
            activeSection === "intro" && "active-section-link"
          }`}
          onClick={(e) => {
            handleScroll("#intro");
          }}
        >
          Intro
        </div>
        <div
          className={`section-link ${
            activeSection === "techstack" && "active-section-link"
          }`}
          onClick={(e) => {
            handleScroll("#techstack");
          }}
        >
          Tech Stack
        </div>
        <div
          className={`section-link ${
            activeSection === "projects" && "active-section-link"
          }`}
          onClick={(e) => {
            handleScroll("#projects");
          }}
        >
          Projects
        </div>
        <div
          className={`section-link ${
            activeSection === "contactme" && "active-section-link"
          }`}
          onClick={(e) => {
            handleScroll("#contactme");
          }}
        >
          Contact
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
