import { FC } from "react";
import { ExpandLess } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const Jumper: FC = () => {
  const jumpToTop = () => {
    const element = document.querySelector("#hero");
    if (typeof window !== "undefined") {
      element?.scrollIntoView();
    }
  };

  return (
    <Button
      className="fixed bottom-10 right-10 flex flex-col gap cursor-pointer rounded-full hover:text-secondary-1 duration-200 z-20"
      onClick={jumpToTop}
    >
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.75,
          ease: "easeInOut",
        }}
      >
        <ExpandLess />
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.5,
          ease: "easeInOut",
        }}
      >
        <ExpandLess />
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.25,
          ease: "easeInOut",
        }}
      >
        <ExpandLess />
      </motion.div>
    </Button>
  );
};

export default Jumper;
