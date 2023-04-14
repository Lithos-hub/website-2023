import Image from "next/image";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { Check } from "@mui/icons-material";

interface Props {
  image: string;
  title: string;
  subtitle: string;
  stack: string[];
  start: string;
  finish: string;
  tasks: string[];
}

const Card: FC<Props> = ({
  image,
  title,
  subtitle,
  stack,
  start,
  finish,
  tasks,
}) => (
  <article className="experience__card snap-center overflow-hidden max-w-[90vw] px-5 md:max-w-auto">
    <motion.img
      initial={{
        y: -50,
        opacity: 0,
      }}
      whileInView={{
        y: [-50, 10, 0],
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      alt={`${title} -  ${subtitle} - experience image`}
      src={image}
      className="h-24 md:h-[120px] md:w-[120px] mx-auto"
    />
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <h3>{subtitle}</h3>
    </div>
    <ul className="grid grid-cols-4 md:flex gap-5 justify-center w-auto mx-auto">
      {stack.map((item, i) => (
        <li key={i} className="mx-auto">
          <motion.img
            initial={{
              x: i % 2 === 0 ? -50 : 50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            alt="Technology stack image"
            src={item}
            className="h-7 md:h-[35px] w-auto"
          />
        </li>
      ))}
    </ul>
    <h4 className="flex gap-5 justify-between mx-10 md:mx-auto">
      <span>{start}</span>
      <span className="font-bold">-</span>
      <span>{finish}</span>
    </h4>
    <ul className="mx-auto">
      {tasks.map((task, i) => (
        <li key={i} className="gap-2 my-2">
          <Check color="secondary" />
          <span className="text-xs ml-2">{task}</span>
        </li>
      ))}
    </ul>
  </article>
);

export default Card;
