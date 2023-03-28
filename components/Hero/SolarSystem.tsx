import { FC } from "react";
import { motion } from "framer-motion";

const SolarSystem: FC = () => (
  <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: [0.1, 0.2, 0.4, 0.8, 0.4, 1.0],
    }}
    transition={{
      duration: 2.5,
    }}
  >
    <div
      id="orbit-1"
      className="border border-[#ddd8c4] rounded-full absolute opacity-5"
    />
    <div
      id="orbit-2"
      className="border border-[#f8edeb] rounded-full absolute opacity-10"
    />
    <div id="orbit-3" className="border rounded-full absolute opacity-5" />
    <div
      id="orbit-4"
      className="border border-[#ffcb69] rounded-full absolute opacity-20"
    />

    <div
      id="sphere-1"
      className="h-[5px] w-[5px] bg-white rounded-full opacity-50"
    />
    <div
      id="sphere-2"
      className="h-[2px] w-[2px] bg-white rounded-full opacity-50"
    />
    <div
      id="sphere-3"
      className="h-[5px] w-[5px] bg-white rounded-full opacity-50 "
    />
    <div
      id="sphere-4"
      className="h-[10px] w-[10px] bg-[#ffcb69] rounded-full"
    />
  </motion.div>
);

export default SolarSystem;
