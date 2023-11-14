import { FC } from "react";

import { LinkedIn, Email, GitHub } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  activeSection: string;
}

const Header: FC<Props> = ({ activeSection }) => {
  return (
    <header className="z-50 fixed top-0 bg-black/20 backdrop-blur-lg lg:bg-transparent lg:backdrop-blur-0">
      <nav className="flex justify-between w-screen p-5 items-center">
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
            <IconButton
              color="primary"
              aria-label="Email link"
              component="label"
            >
              <Email />
            </IconButton>
          </Link>

          <Link href="https://github.com/Lithos-hub" target="_blank">
            <IconButton
              color="primary"
              aria-label="GitHub link"
              component="label"
            >
              <GitHub />
            </IconButton>
          </Link>

          <Link href="https://www.behance.net/carlossegura25" target="_blank">
            <IconButton
              color="primary"
              aria-label="Behance link"
              component="label"
            >
              <motion.img src="/logos/behance.svg" className="h-7" />
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
          {/* Gradient text using tailwind */}
          <h1 className="text-xl lg:text-3xl font-light text-transparent bg-clip-text uppercase tracking-widest lg:tracking-[45px] bg-gradient-to-br from-primary-1/10 to-secondary-1/60">
            {activeSection}
          </h1>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
