import Image from "next/image";
import React, { FC } from "react";

type Direction = "left" | "right";
interface Props {
  onTrigger: () => void;
  direction: Direction;
}

const SliderControl: FC<Props> = ({ onTrigger, direction }) => {
  return (
    <Image
      src="/icons/chevron-right.svg"
      alt="Button to move to the right in projects container"
      width="0"
      height="0"
      className={`cursor-pointer w-10 h-10 absolute top-1/2 -translate-y-1/2 z-50 ${
        direction === "right" ? "right-52" : "left-52 rotate-180"
      }}`}
      onClick={onTrigger}
    />
  );
};

export default SliderControl;
