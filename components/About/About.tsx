import React from "react";
import { motion } from "framer-motion";
import { HeaderTitle } from "@/components";

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex flex-col w-auto justify-evenly items-center px-[10vw]"
  >
    <HeaderTitle title="About" />

    <article className="text-center flex flex-col gap-5 mx-auto">
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        alt="Carlos Segura García biography image"
        src="/me.jpg"
        className="h-[120px] w-[120px] lg:w-[200px] lg:h-[200px] mx-auto aspect-square rounded-full md:rounded-xl border border-secondary-1/20 shadow-xl"
      />
      <h4 className="font-extralight">
        This is my
        <span className="text-secondary-1 font-semibold"> history:</span>
      </h4>
      <div className="w-full lg:w-[50vw]">
        <p className="text-[15px]">
          Music has been a part of my life since I was 9, but in 2020, I
          discovered my passion for web development. With a self-taught
          approach, I dove into online resources, video tutorials, and my own
          projects. Concurrently, I pursued my studies in DAW CFGS from October
          2020 to May 2022.
        </p>
        <br />
        <p className="text-[15px]">
          I kickstarted my career in March 2021 as a frontend developer at a CGI
          company, where I led the development of the entire frontend of a
          banking application for nearly a year. My expertise in web development
          led me to Cathedral Software in June 2022, where I work as a frontend
          developer.{" "}
          <strong>
            Here, I continually learn new and cutting-edge technologies, best
            practices, and agile methodologies.
          </strong>
        </p>
        <br />
        <p className="text-[15px]">
          Moreover, I explore other areas of development, such as backend
          technologies like Node and{" "}
          <strong>
            MongoDB, mobile technologies like Dart and Flutter and WebGL
            technologies like Three.js.
          </strong>{" "}
          I&apos;m always eager to learn and stay up-to-date with the latest
          trends and tools in the industry.
        </p>
        <br />
      </div>
    </article>
  </motion.div>
);

export default About;
