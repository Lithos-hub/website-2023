import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Experience = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex relative overflow-hidden flex-col
     md:flex-row w-full justify-evenly mx-auto items-center"
  >
    <h3 className="absolute top-20 text-2xl text-primary-1 uppercase font-extralight tracking-[20px] opacity-50 ml-5">
      Experience
    </h3>

    <div className="w-full md:w-auto flex gap-[250px] md:px-[50vw] overflow-x-scroll h-screen snap-x snap-mandatory">
      <Card
        image="/logos/cathedral-software.png"
        title="Front-end Developer"
        subtitle="Cathedral Software"
        start="MAR 2022"
        finish="CURRENTLY"
        stack={[
          "/logos/typescript.png",
          "/logos/vue.png",
          "/logos/react.png",
          "/logos/next.png",
          "/logos/jest.png",
          "/logos/tailwind.png",
          "/logos/sass.png",
        ]}
        tasks={[
          "SPA development using React 18, TypeScript, Tailwind CSS and AG Grid.",
          "SPA development using Vue 2.7, TypeScript, Tailwind CSS and AG Grid.",
          "Testing with Jest, Vitest and Testing Library.",
          "Agile methodologies (Scrumban).",
          "Gitflow, conventional commits and good practices.",
        ]}
      />
      <Card
        image="/logos/cgi.png"
        title="Front-end Developer"
        subtitle="CGI"
        start="JUN 2021"
        finish="MAR 2022"
        stack={[
          "/logos/vue.png",
          "/logos/vuetify.png",
          "/logos/javascript.png",
          "/logos/sass.png",
        ]}
        tasks={[
          "SPA development using Vue 2.6, Vuetify and Google App Engine.",
          "Maintenance and integrations",
          "Gitflow.",
        ]}
      />
    </div>
  </motion.div>
);

export default Experience;
