import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Jumbotron = () => {
  const navigateToElement = (section: string) => {
    const element = document.querySelector(section);
    if (typeof window !== "undefined") {
      element?.scrollIntoView();
    }
  };

  return (
    <article className="flex flex-col gap-10 items-center">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 2.5,
        }}
        className="flex flex-col gap-5 text-center"
      >
        <h1 className="text-xl md:text-3xl tracking-widest font-extralight uppercase">
          Carlos Segura García
        </h1>
        <h2 className="text-sm md:text-lg font-extralight uppercase tracking-widest">
          Front-end Developer
        </h2>
      </motion.div>
      <h3 className="flex justify-center tracking-widest font-extrabold text-white text-lg md:text-3xl text-center mb-20">
        <Typewriter
          words={[
            "Hello!",
            "Welcome to my website",
            "I'm a front-end developer based in Spain",
          ]}
          loop={0}
          cursor
          cursorStyle={<span className="text-secondary-1">|</span>}
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h3>
      <nav className="grid grid-cols-2 md:grid-cols-4 gap-5 z-20">
        <button
          onClick={() => navigateToElement("#about")}
          className="uppercase font-extralight link"
        >
          About
        </button>
        <button
          onClick={() => navigateToElement("#experience")}
          className="uppercase font-extralight link"
        >
          Experience
        </button>
        <button
          onClick={() => navigateToElement("#skills")}
          className="uppercase font-extralight link"
        >
          Skills
        </button>
        <button
          onClick={() => navigateToElement("#projects")}
          className="uppercase font-extralight link"
        >
          Projects
        </button>
      </nav>
    </article>
  );
};

export default Jumbotron;
