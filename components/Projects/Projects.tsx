import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const projects = [
  {
    image: "/img/apps/iPet-project.png",
    prevTitle: "MERN fullstack SPA",
    title: "iPet",
    description:
      "Application to manage pets, events and relevant data such as vets, contacts, notes, etc. Made with React 18, MUI and Vite (frontend), and Node, MongoDB and Mongoose (backend). ",
  },
  {
    image: "/img/apps/iMovies-project.png",
    prevTitle: "MEVN fullstack SPA",
    title: "iMovies V2",
    description:
      "Remake of my app iMovies using Vue 3, Vite, Vitest, Tailwind CSS, TypeScript, SASS and Pinia (frontend), and Node, MongoDB and Mongoose (backend).",
  },
  {
    image: "/img/apps/iCompose-project.png",
    prevTitle: "Frontend SPA (Vue 3)",
    title: "iCompose",
    description:
      "Vue components portfolio using Vue 3, TypeScript, Vite and Tailwind CSS. Second version of my app iCompose. ",
  },
  {
    image: "/img/apps/iCode-project.png",
    prevTitle: "Frontend SPA (Vue 3)",
    title: "iCode",
    description:
      "iCode is a free HTML, CSS and JS online code playground that uses the Monaco Editor (powered by Visual Studio Code). Similar to others online IDE such as CodePen, you will be able to write HTML, CSS, and JS and see the result in real time.",
  },
  {
    image: "/img/apps/iShop-project.png",
    prevTitle: "Frontend SPA (Vue 3)",
    title: "iShop",
    description:
      "Fake e-commerce app developed with Vue 3 + Vite + Pinia and Google Firebase.",
  },
];

const Projects = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex flex-col w-auto justify-evenly items-center"
  >
    <h3 className="absolute top-20 text-2xl text-primary-1 uppercase font-extralight tracking-[20px] opacity-50 ml-5">
      Projects
    </h3>

    <div className="w-full absolute top-[30%] bg-gradient-to-br from-transparent via-dark-1/50 to-secondary-1/10 left-0 h-[500px] -skew-y-12 blur-lg" />
    <div className="projects__ray-1" />
    <div className="projects__ray-2" />
    <div className="projects__ray-3" />

    <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
      {projects.map((project, i) => (
        <Card key={i} {...project} />
      ))}
    </div>
  </motion.div>
);

export default Projects;
