import { motion } from "framer-motion";

import { ProjectDetail } from "@/components";
import { Project } from "@/models";

// https://ui.dev/amiresponsive

const projects: Project[] = [
  {
    image: "/img/apps/vue-form-latte.png",
    stack: [
      { name: "Vue", icon: "vue" },
      { name: "TS", icon: "typescript" },
      { name: "Vitest", icon: "vitest" },
      { name: "Tailwind", icon: "tailwind" },
    ],
    prevTitle: "NPM Package",
    repo: "https://github.com/Lithos-hub/vue-form-latte",
    title: "Vue Form Latte",
    description: "Component library to generate dynamic forms",
  },
  // {
  //   image: "/img/apps/iTrackFlow.jpg",
  //   stack: [
  //     { name: "Nuxt", icon: "nuxt" },
  //     { name: "Vue", icon: "vue" },
  //     { name: "TS", icon: "typescript" },
  //     { name: "Vitest", icon: "vitest" },
  //     { name: "Tailwind", icon: "tailwind" },
  //     { name: "SCSS", icon: "sass" },
  //   ],
  //   prevTitle: "Nuxt 3 landing page + app",
  //   repo: "https://github.com/Lithos-hub/iTrackFlow",
  //   title: "iTrackFlow",
  //   description:
  //     "Web tool for musicians, composers and music bands to improve the workflow and the music production",
  // },
  {
    image: "/img/apps/iUI.jpg",
    stack: [
      { name: "Vue", icon: "vue" },
      { name: "TS", icon: "typescript" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "SCSS", icon: "sass" },
    ],
    prevTitle: "UI components portfolio",
    href: "https://iui-app.netlify.app/",
    repo: "https://github.com/Lithos-hub/iUI",
    title: "iUI",
    description:
      "iUI is a components portfolio made with Vue 3, TypeScript, Tailwind CSS, SASS, Vitest and Vite.",
  },
  {
    image: "/img/apps/iOrbit.jpg",
    stack: [
      { name: "React", icon: "react" },
      { name: "Three.js", icon: "three" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "TS", icon: "typescript" },
    ],
    prevTitle: "Solar system 3D model",
    href: "https://i-orbit.vercel.app/",
    repo: "https://github.com/Lithos-hub/iOrbit",
    title: "iOrbit",
    description:
      "Interactive 3D solar system model using React Three Fiber (Three.js) and React.",
  },
  {
    image: "/img/apps/iAdopt.jpg",
    stack: [
      { name: "Next 13", icon: "next" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "TS", icon: "typescript" },
      { name: "OpenAI", icon: "openai" },
      { name: "Mongo DB", icon: "mongo" },
    ],
    prevTitle: "Next 13 Landing App",
    href: "https://i-adopt-landing-app.vercel.app/",
    repo: "https://github.com/Lithos-hub/iAdopt-LandingApp",
    title: "iAdopt",
    description:
      "Chatbot tool that helps animal shelters to find the best match for their animals and potential adopters using ChatGPT.",
  },
  {
    image: "/img/apps/infojobs.svg",
    stack: [
      { name: "React", icon: "react" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "SCSS", icon: "sass" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "TS", icon: "typescript" },
      { name: "Node", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "OpenAI", icon: "openai" },
    ],
    prevTitle: "React SPA + Node Proxy",
    href: "https://hackathon-infojobs-2023-lithoshub.netlify.app/",
    repo: "https://github.com/Lithos-hub/infojobs-hackathon",
    title: "Infojobs Hackathon 2023",
    description:
      "My submission for the Infojobs Hackathon 2023 where I propose several new features using OpenAI API (ChatGPT and Whisper).",
  },
  {
    image: "/img/apps/iPet.jpg",
    stack: [
      { name: "React", icon: "react" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "SCSS", icon: "sass" },
      { name: "TS", icon: "typescript" },
      { name: "Vitest", icon: "vitest" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Node", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "Mongo DB", icon: "mongo" },
    ],
    prevTitle: "MERN fullstack SPA",
    href: "https://main--ipet-spa.netlify.app/",
    repo: "https://github.com/Lithos-hub/iPet-SPA",
    title: "iPet",
    description:
      "Application to manage pets, events, appointments, vets, contacts, notes, etc.",
  },
  {
    image: "/img/apps/iMovies.jpg",
    stack: [
      { name: "Vue 3", icon: "vue" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "SCSS", icon: "sass" },
      { name: "TS", icon: "typescript" },
      { name: "Vitest", icon: "vitest" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Node", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "Mongo DB", icon: "mongo" },
    ],
    prevTitle: "MEVN fullstack SPA",
    href: "https://main--imovies-v2.netlify.app/",
    repo: "https://github.com/Lithos-hub/iMovies-v2-SPA",
    title: "iMovies",
    description: "App to search, display and save movies using the TMDB API.",
  },
  {
    image: "/img/apps/iCompose.jpg",
    stack: [
      { name: "Vue 3", icon: "vue" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "SCSS", icon: "sass" },
      { name: "Vitest", icon: "vitest" },
      { name: "TS", icon: "typescript" },
      { name: "Tailwind", icon: "tailwind" },
    ],
    prevTitle: "Frontend SPA (Vue 3)",
    href: "https://icompose.netlify.app/",
    repo: "https://github.com/Lithos-hub/iCompose-v2",
    title: "iCompose",
    description: "Vue components portfolio made from scratch.",
  },
  {
    image: "/img/apps/iCode.jpg",
    stack: [
      { name: "Vue 3", icon: "vue" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "SCSS", icon: "sass" },
      { name: "JS", icon: "javascript" },
    ],
    prevTitle: "Frontend SPA (Vue 3)",
    href: "https://icode-playground-app.netlify.app/",
    repo: "https://github.com/Lithos-hub/iCode",
    title: "iCode",
    description:
      "Online code editor with HTML, CSS and JavaScript using Monaco Editor.",
  },
  {
    image: "/img/apps/iShop.jpg",
    stack: [
      { name: "Vue 3", icon: "vue" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "SCSS", icon: "sass" },
      { name: "JS", icon: "javascript" },
      { name: "Firebase", icon: "firebase" },
    ],
    prevTitle: "Frontend SPA (Vue 3)",
    href: "https://ishop-app.netlify.app/",
    repo: "https://github.com/Lithos-hub/iShop",
    title: "iShop",
    description: "Fake e-commerce app simulating a real ordering process.",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="lg:h-screen h-full w-full flex flex-col w-screen items-center justify-center"
    >
      <div className="w-full absolute top-[30%] bg-gradient-to-br from-transparent via-dark-1/50 to-secondary-1/10 left-0 h-[500px] -skew-y-12 blur-lg" />
      <div className="projects__ray-1" />
      <div className="projects__ray-2" />
      <div className="projects__ray-3" />

      <div className="flex flex-col w-[95vw] max-h-[75vh] overflow-y-auto">
        {projects.map((project, i) => (
          <article key={i}>
            <ProjectDetail {...project} />
          </article>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
