import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex flex-col w-auto justify-evenly items-center px-[10vw]"
  >
    <article className="text-center grid grid-cols-7 items-center gap-5 mx-auto">
      <div className="col-span-3 flex flex-col gap-5">
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
          className=" h-[120px] w-[120px] lg:w-[200px] lg:h-[200px] mx-auto aspect-square rounded-full md:rounded-xl border border-secondary-1/20 shadow-xl"
        />
        <div className="text-sm md:text-base">
          <p>Since I was a child, my main vocation has been music. </p> <br />
          <p>
            In 2020 I discovered the world of programming and the enormous
            possibilities it offers at a creative and professional level.
          </p>
          <br />
          <p>
            Since then, I work and keep learning in what has become a new
            passion.
          </p>
        </div>
      </div>
      <ul className="col-span-4 w-full lg:w-[50vw] flex flex-col gap-5 text-sm md:text-base">
        <p>Bio timeline: </p>
        <li className="flex flex-col gap-1">
          <h3 className="text-secondary-1">Years 2001-2011</h3>
          <p>Music conservatory studies</p>
        </li>

        <li className="flex flex-col gap-1">
          <h3 className="text-secondary-1">Years 2011-2016</h3>
          <p>Modern music and jazz studies</p>
        </li>

        <li className="flex flex-col gap-1">
          <h3 className="text-secondary-1">Years 2016-2020</h3>
          <p>Music history university degree</p>
        </li>

        <li className="flex flex-col gap-1">
          <h3 className="text-secondary-1">October 2020 - May 2022</h3>
          <p>Official web development studies (CFGS)</p>
        </li>

        <li className="flex flex-col gap-1">
          <h3 className="text-secondary-1">Year 2020</h3>
          <p>
            Self-taught learning: Python, HTML, CSS, JS, Angular, React, Vue...
          </p>
        </li>

        <li className="flex flex-col gap-1">
          <h3 className="text-secondary-1">October 2020</h3>
          <p>First web apps with Vue</p>
        </li>

        <li className="flex flex-col gap-1">
          <h3 className="text-secondary-1">March 2021</h3>
          <p>First developer job! 🚀 </p>
        </li>

        <li className="flex flex-col gap-1">
          <h3 className="text-secondary-1">Everything else...</h3>
          <p>Is in the section below, so scroll down!</p>
        </li>
      </ul>
    </article>
  </motion.div>
);

export default About;
