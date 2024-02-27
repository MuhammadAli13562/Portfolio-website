import { motion } from "framer-motion";

const Navbar = () => {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      transition={{ duration: 2 }}
      className="z-10 fixed bottom-0 p-8 flex text-white w-full font-mono justify-center gap-8 items-center transition-all duration-300"
    >
      <div className=" flex gap-2">
        <a
          href="#intro"
          className="section-link"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleScroll("#intro");
          }}
        >
          Intro
        </a>
        <a
          href="#techstack"
          className="section-link"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("#techstack");
          }}
        >
          Tech Stack
        </a>
        <a
          href="#projects"
          className="section-link"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("#projects");
          }}
        >
          Projects
        </a>
        <a
          href="#contactme"
          className="section-link"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleScroll("#contactme");
          }}
        >
          Contact me
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
