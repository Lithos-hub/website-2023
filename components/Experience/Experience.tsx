import React from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { HeaderTitle } from "@/components";

const Experience = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex relative overflow-hidden flex-col
     md:flex-row w-full justify-evenly mx-auto items-center"
  >
    <HeaderTitle title="Experience" />

    <div className="w-full flex md:gap-[250px] overflow-x-scroll h-screen snap-x snap-mandatory md:w-auto md:px-[50vw]">
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
          "/logos/three.png",
          "/logos/leaflet.png",
        ]}
        tasks={[
          "Landing page development using Next 13, TypeScript, Tailwind CSS and Three.js.",
          "SPA development using React 18, TypeScript, Tailwind CSS and AG Grid.",
          "SPA development using Vue 2.7, TypeScript, Tailwind CSS and AG Grid.",
          "SPA development using Vue 2.7, TypeScript, Tailwind CSS and Leaflet.js + Shapefiles.",
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
