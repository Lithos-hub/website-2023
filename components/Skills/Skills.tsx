import React from "react";
import { motion } from "framer-motion";
import Avatar from "./Avatar";

import { HeaderTitle } from "@/components";

const skills = [
  {
    image: "/logos/html.svg",
    name: "HTML",
  },
  {
    image: "/logos/css.svg",
    name: "CSS",
  },
  {
    image: "/logos/javascript.svg",
    name: "JavaScript",
  },
  {
    image: "/logos/typescript.svg",
    name: "TypeScript",
  },
  {
    image: "/logos/vue.svg",
    name: "Vue",
  },
  {
    image: "/logos/react.svg",
    name: "React",
  },
  {
    image: "/logos/next.svg",
    name: "Next.js",
  },
  {
    image: "/logos/nuxt.svg",
    name: "Nuxt",
  },
  {
    image: "/logos/jest.svg",
    name: "Jest",
  },
  {
    image: "/logos/vitest.svg",
    name: "Vitest",
  },
  {
    image: "/logos/testing-library.svg",
    name: "Testing Library",
  },
  {
    image: "/logos/sass.svg",
    name: "SASS",
  },
  {
    image: "/logos/tailwind.svg",
    name: "Tailwind CSS",
  },
  {
    image: "/logos/three.svg",
    name: "Three.js",
  },
  {
    image: "/logos/leaflet.svg",
    name: "Leaflet.js",
  },
  {
    image: "/logos/git.svg",
    name: "Git",
  },
  {
    image: "/logos/docker.svg",
    name: "Docker",
  },
  {
    image: "/logos/node.svg",
    name: "Node",
  },
  {
    image: "/logos/mongo.svg",
    name: "MongoDB",
  },
];

const Skills = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen w-full flex flex-col items-center justify-center"
  >
    {/* <HeaderTitle title="Skills" /> */}

    <div className="grid grid-cols-4 md:grid-cols-4 gap-x-2 md:gap-x-10 lg:gap-x-20 mt-20">
      {skills.map(({ image, name }, i) => (
        <Avatar key={i} index={i} image={image} name={name} />
      ))}
    </div>
  </motion.div>
);

export default Skills;
