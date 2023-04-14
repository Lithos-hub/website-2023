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
        src="/me.jpg"
        className="h-[120px] w-[120px] lg:w-[250px] lg:h-[250px] mx-auto aspect-square rounded-full md:rounded-xl border border-secondary-1/20 shadow-xl"
      />
      <h4 className="font-extralight">
        This is my
        <span className="text-secondary-1 font-semibold"> history:</span>
      </h4>
      <div className="w-full md:w-[60vw]">
        <p className="text-[15px]">
          I started learning music at the age of 9, and it has been that way
          until 2020, when I started learning web development. Since then, I
          have been self-taught studying online with videos, documentation and
          developing my own projects. Meanwhile, I studied the DAW CFGS from
          October 2020 to May 2022.
        </p>
        <br />
        <p className="text-[15px]">
          In March 2021, I started my first job as a front-end developer at CGI
          company being in charge of the entire frontend of a banking
          application for almost a year.
        </p>
        <br />
        <p className="text-[15px]">
          Then, in June 2022, I started working as a front-end developer at
          Cathedral Software, where I currently continue, learning cutting-edge
          technologies, best practices and agile methodologies workflows.
        </p>
        <br />
        <p className="text-[15px]">
          In parallel, I continue my self-taught learning with backend
          tecnologies such as Node or MongoDB or mobile technologies such as
          Dart and Flutter (I can&apos;t stop learning).
        </p>
      </div>
    </article>
  </motion.div>
);

export default About;
