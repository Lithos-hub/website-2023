import React from "react";
import { motion } from "framer-motion";
import Avatar from "./Avatar";

import { HeaderTitle } from "@/components";

const skills = [
  {
    image: "/logos/html.png",
    name: "HTML",
  },
  {
    image: "/logos/css.png",
    name: "CSS",
  },
  {
    image: "/logos/javascript.png",
    name: "JavaScript",
  },
  {
    image: "/logos/typescript.png",
    name: "TypeScript",
  },
  {
    image: "/logos/vue.png",
    name: "Vue",
  },
  {
    image: "/logos/react.png",
    name: "React",
  },
  {
    image: "/logos/next.png",
    name: "Next.js",
  },
  {
    image: "/logos/nuxt.png",
    name: "Nuxt",
  },
  {
    image: "/logos/jest.png",
    name: "Jest",
  },
  {
    image: "/logos/vitest.png",
    name: "Vitest",
  },
  {
    image: "/logos/testing-library.png",
    name: "Testing Library",
  },
  {
    image: "/logos/sass.png",
    name: "SASS",
  },
  {
    image: "/logos/tailwind.png",
    name: "Tailwind CSS",
  },
  {
    image: "/logos/three.png",
    name: "Three.js",
  },
  {
    image: "/logos/git.png",
    name: "Git",
  },
  {
    image: "/logos/docker.png",
    name: "Docker",
  },
  {
    image: "/logos/node.png",
    name: "Node",
  },
  {
    image: "/logos/mongo.png",
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
    <HeaderTitle title="Skills" />

    <div className="grid grid-cols-4 md:grid-cols-4 gap-x-2 md:gap-x-10 lg:gap-x-20 mt-20">
      {skills.map(({ image, name }, i) => (
        <Avatar key={i} index={i} image={image} name={name} />
      ))}
    </div>
  </motion.div>
);

export default Skills;
