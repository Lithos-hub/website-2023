import React, { FC } from "react";

import { motion } from "framer-motion";

type Props = {
  image: string;
  title: string;
  prevTitle: string;
  description: string;
  href: string;
};

const Card: FC<Props> = ({ image, prevTitle, title, href, description }) => {
  return (
    <article className="project__card snap-center overflow-hidden max-w-[90vw] px-5 md:max-w-auto">
      <a href={href} target="_blank">
        <motion.img
          alt={`${title} - project image`}
          src={image}
          width="0"
          height="0"
          sizes="100vw"
          className="w-[500px] h-auto mx-auto z-50"
          initial={{
            y: -30,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
      </a>

      <h2 className="text-2xl font-semibold text-center text-white z-50">
        <span className="underline decoration-secondary-1/50">{prevTitle}</span>
        : {title}
      </h2>

      <p className="text-lg text-center md:max-w-[50vw] z-50">{description}</p>
    </article>
  );
};

export default Card;
