import { FC } from "react";

import { LinkedIn, Email, GitHub } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import { motion } from "framer-motion";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="flex justify-between p-2 mx-auto sticky top-0 z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
      >
        <Link
          href="https://www.linkedin.com/in/carlos-segura-garcia/"
          target="_blank"
        >
          <IconButton
            color="primary"
            aria-label="LinkedIn link"
            component="label"
          >
            <LinkedIn />
          </IconButton>
        </Link>
        <Link href="mailto:lithos.contact@gmail.com">
          <IconButton color="primary" aria-label="Email link" component="label">
            <Email />
          </IconButton>
        </Link>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
      >
        <Link href="https://github.com/Lithos-hub" target="_blank">
          <IconButton
            color="primary"
            aria-label="GitHub link"
            component="label"
          >
            <GitHub />
          </IconButton>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
