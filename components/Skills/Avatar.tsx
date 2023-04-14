import React, { FC, useState } from "react";
import { motion } from "framer-motion";
type Props = {
  image: string;
  name: string;
  index: number;
};

const Avatar: FC<Props> = ({ image, name, index }) => {
  const [displayName, setDisplayName] = useState(false);
  return (
    <div className="flex flex-col gap-2 text-center justify-center">
      <motion.div
        initial={{
          x: index % 2 === 0 ? -100 : 100,
          y: index % 2 === 0 ? -100 : 100,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="avatar mx-auto"
        onMouseEnter={() => setDisplayName(!displayName)}
        onMouseLeave={() => setDisplayName(!displayName)}
      >
        <motion.img
          alt={`${name} image`}
          src={image}
          className="p-2 rounded-xl my-auto"
        />
      </motion.div>
      {displayName ? (
        <motion.small
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: -5 }}
          transition={{
            duration: 0.5,
          }}
        >
          {name}
        </motion.small>
      ) : (
        <div className="h-5 w-full"></div>
      )}
    </div>
  );
};

export default Avatar;
