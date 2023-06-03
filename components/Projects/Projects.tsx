import { motion } from "framer-motion";

import Card from "./Card";
import { HeaderTitle } from "@/components";
import Image from "next/image";
import SliderControl from "./SliderControl";
import { useMemo, useState } from "react";

// https://ui.dev/amiresponsive

const projects = [
  {
    image: "/img/apps/Infojobs-project.png",
    prevTitle: "React SPA + Node Proxy",
    href: "https://hackathon-infojobs-2023-lithoshub.netlify.app/",
    title: "Infojobs Hackathon 2023",
    description:
      "My submission for the Infojobs Hackathon 2023 where I propose several new features using OpenAI API (ChatGPT and Whisper) such as a labor assistant chatbot, a job smart search system, light and dark modes, and a skills generator and evaluator on each job offer based on the offer's requirements",
  },
  {
    image: "/img/apps/iPet-project.png",
    prevTitle: "MERN fullstack SPA",
    href: "https://main--ipet-spa.netlify.app/",
    title: "iPet",
    description:
      "Application to manage pets, events and relevant data such as vets, contacts, notes, etc. Made with React 18, MUI and Vite (frontend), and Node, MongoDB and Mongoose (backend). ",
  },
  {
    image: "/img/apps/iMovies-project.png",
    prevTitle: "MEVN fullstack SPA",
    href: "https://main--imovies-v2.netlify.app/",
    title: "iMovies V2",
    description:
      "Remake of my app iMovies using Vue 3, Vite, Vitest, Tailwind CSS, TypeScript, SASS and Pinia (frontend), and Node, MongoDB and Mongoose (backend).",
  },
  {
    image: "/img/apps/iCompose-project.png",
    prevTitle: "Frontend SPA (Vue 3)",
    href: "https://icompose.netlify.app/",
    title: "iCompose",
    description:
      "Vue components portfolio using Vue 3, TypeScript, Vite and Tailwind CSS. Second version of my app iCompose. ",
  },
  {
    image: "/img/apps/iCode-project.png",
    prevTitle: "Frontend SPA (Vue 3)",
    href: "https://icode-playground-app.netlify.app/",
    title: "iCode",
    description:
      "iCode is a free HTML, CSS and JS online code playground that uses the Monaco Editor (powered by Visual Studio Code). Similar to others online IDE such as CodePen, you will be able to write HTML, CSS, and JS and see the result in real time.",
  },
  {
    image: "/img/apps/iShop-project.png",
    prevTitle: "Frontend SPA (Vue 3)",
    href: "https://ishop-app.netlify.app/",
    title: "iShop",
    description:
      "Fake e-commerce app developed with Vue 3 + Vite + Pinia and Google Firebase.",
  },
];

const Projects = () => {
  const triggerScrollX = (direction: "left" | "right") => () => {
    const container = document.querySelector(
      "#projects-container"
    ) as HTMLElement;
    const scrollAmount = 1000;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col
     md:flex-row w-full justify-evenly mx-auto items-center"
    >
      <HeaderTitle title="Projects" />

      <div className="w-full absolute top-[30%] bg-gradient-to-br from-transparent via-dark-1/50 to-secondary-1/10 left-0 h-[500px] -skew-y-12 blur-lg" />
      <div className="projects__ray-1" />
      <div className="projects__ray-2" />
      <div className="projects__ray-3" />

      <section
        id="projects-container"
        className="w-full flex md:gap-[250px] overflow-x-scroll h-screen snap-x snap-mandatory md:w-auto md:px-[50vw] overflow-y-hidden relative"
      >
        {/* {projectIndexVisible > 0 && (
          <div className="absolute left-52 bg-red-500">
            <SliderControl
              direction="left"
              onTrigger={triggerScrollX("left")}
            />
          </div>
        )} */}
        {projects.map((project, i) => (
          <article
            key={i}
            className="project-wrapper flex justify-between w-screen"
          >
            <Card key={i} {...project} />
          </article>
        ))}
        {/* {projectIndexVisible < projects.length - 1 && (
          <div className="absolute right-52 bg-blue-500">
            <SliderControl
              direction="right"
              onTrigger={triggerScrollX("right")}
            />
          </div>
        )} */}
      </section>
    </motion.div>
  );
};

export default Projects;
