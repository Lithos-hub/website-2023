import { useMemo } from "react";
import { motion } from "framer-motion";

import { HeaderTitle } from "@/components";
import Timeline from "./Timeline";
import { Experience } from "@/models";

const Experience = () => {
  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const initialYear = 2021;
    return Array.from(
      { length: currentYear - initialYear + 1 },
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
            { techName: "Vue", imageUrl: "/logos/vue.png" },
            { techName: "Vuetify", imageUrl: "/logos/vuetify.png" },
            { techName: "JavaScript", imageUrl: "/logos/javascript.png" },
            { techName: "Sass", imageUrl: "/logos/sass.png" },
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
          finish: "CURRENTLY",
          initialYear: 2022,
          initialMonth: 6,
          endMonth: new Date().getMonth() + 1,
          stack: [
            { techName: "TypeScript", imageUrl: "/logos/typescript.png" },
            { techName: "Vue", imageUrl: "/logos/vue.png" },
            { techName: "React", imageUrl: "/logos/react.png" },
            { techName: "Next", imageUrl: "/logos/next.png" },
            { techName: "Jest", imageUrl: "/logos/jest.png" },
            { techName: "Tailwind", imageUrl: "/logos/tailwind.png" },
            { techName: "Sass", imageUrl: "/logos/sass.png" },
            { techName: "Three.js", imageUrl: "/logos/three.png" },
            { techName: "Leaflet", imageUrl: "/logos/leaflet.png" },
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
      <HeaderTitle title="Experience" />
      <Timeline years={years} experiences={experiences} />
      <div className="h-[50vh]" />
    </motion.div>
  );
};

export default Experience;
