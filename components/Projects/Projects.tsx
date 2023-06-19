import { motion } from "framer-motion";

import { ProjectDetail } from "@/components";
import { Project } from "@/models";

// https://ui.dev/amiresponsive

const projects: Project[] = [
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
      className="lg:h-full py-20 lg:py-0 w-full flex flex-col items-center justify-center"
    >
      {/* <HeaderTitle title="Projects" /> */}

      <div className="w-full absolute top-[30%] bg-gradient-to-br from-transparent via-dark-1/50 to-secondary-1/10 left-0 h-[500px] -skew-y-12 blur-lg" />
      <div className="projects__ray-1" />
      <div className="projects__ray-2" />
      <div className="projects__ray-3" />

      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-5">
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
