import { useMemo } from "react";
import { motion } from "framer-motion";

import { HeaderTitle } from "@/components";
import Timeline from "./Timeline";
import { Experience } from "@/models";

const Experience = () => {
  const years = useMemo(() => {
    const currentYearPlusOne = new Date().getFullYear() + 1;
    const initialYear = 2021;
    return Array.from(
      { length: currentYearPlusOne - initialYear + 1 },
      (_, i) => initialYear + i
    );
  }, []);

  const experiences = useMemo(
    () =>
      [
        {
          image: "/logos/cgi.png",
          title: "Front-end Developer",
          subtitle: "CGI",
          initialYear: 2021,
          initialMonth: 3,
          endMonth: 6,
          start: "MAR 2021",
          finish: "JUN 2022",
          stack: [
            { techName: "Vue", imageUrl: "/logos/vue.svg" },
            { techName: "Vuetify", imageUrl: "/logos/vuetify.svg" },
            { techName: "JavaScript", imageUrl: "/logos/javascript.svg" },
            { techName: "SASS", imageUrl: "/logos/sass.svg" },
          ],
          tasks: [
            "Frontend development (Vue, Vuetify and Google App Engine)",
            "Frontend apps maintenance and integrations",
            "Gitflow forkflow",
          ],
        },
        {
          image: "/logos/cathedral-software.png",
          title: "Front-end Developer",
          subtitle: "Cathedral Software",
          start: "JUN 2022",
          finish: "AUG 2023",
          initialYear: 2022,
          initialMonth: 6,
          endMonth: new Date().getMonth() + 1,
          stack: [
            { techName: "Vue", imageUrl: "/logos/vue.svg" },
            { techName: "React", imageUrl: "/logos/react.svg" },
            { techName: "TypeScript", imageUrl: "/logos/typescript.svg" },
            { techName: "Next", imageUrl: "/logos/next.svg" },
            { techName: "leaflet", imageUrl: "/logos/leaflet.svg" },
            { techName: "Jest", imageUrl: "/logos/jest.svg" },
            { techName: "Vitest", imageUrl: "/logos/vitest.svg" },
            {
              techName: "Testing Library",
              imageUrl: "/logos/testing-library.svg",
            },
            { techName: "Tailwind", imageUrl: "/logos/tailwind.svg" },
            { techName: "SASS", imageUrl: "/logos/sass.svg" },
            { techName: "Three.js", imageUrl: "/logos/three.svg" },
          ],
          tasks: [
            "Landing page development (Next 13, TypeScript, Tailwind CSS and Three.js)",
            "SPA development (React, TypeScript, Tailwind CSS and AG Grid)",
            "SPA development (Vue, TypeScript, Tailwind CSS and AG Grid)",
            "SPA development (Vue, TypeScript, Tailwind CSS and Leaflet.js)",
            "Testing (Jest, Vitest and Testing Library)",
            "Agile methodologies (Scrumban).",
            "Gitflow, conventional commits and best practices.",
          ],
        },
        {
          image: "/logos/innoIT.png",
          title: "Front-end Developer",
          subtitle: "InnoIT",
          start: "AUG 2023",
          finish: "CURRENTLY",
          initialYear: 2023,
          initialMonth: 8,
          endMonth: new Date().getMonth() + 1,
          stack: [
            { techName: "Vue", imageUrl: "/logos/vue.svg" },
            { techName: "TypeScript", imageUrl: "/logos/typescript.svg" },
            { techName: "Nuxt", imageUrl: "/logos/nuxt.svg" },
            { techName: "Jest", imageUrl: "/logos/jest.svg" },
            { techName: "SASS", imageUrl: "/logos/sass.svg" },
          ],
          tasks: [
            "Migration project from Vue 2/Nuxt 2 to Vue 3/Nuxt 3",
            "Software architecture tasks",
            "Testing (Jest)",
            "Gitflow, conventional commits and best practices.",
          ],
        },
      ] as Experience[],
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col gap-10 justify-center items-center overflow-x-auto"
    >
      <Timeline years={years} experiences={experiences} />
    </motion.div>
  );
};

export default Experience;
