import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  image: string;
  title: string;
  prevTitle: string;
  description: string;
};

const Card: FC<Props> = ({ image, prevTitle, title, description }) => {
  return (
    <article className="project__card snap-center">
      <motion.img
        alt={`${title} - project image`}
        src={image}
        width="0"
        height="0"
        sizes="100vw"
        className="w-[500px] h-auto mx-auto"
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      />

      <h2 className="text-2xl font-semibold text-center text-white">
        <span className="underline decoration-secondary-1/50">{prevTitle}</span>
        : {title}
      </h2>

      <p className="text-lg text-center max-w-[50vw]">{description}</p>
    </article>
  );
};

export default Card;
