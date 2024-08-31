import React, { FC, useMemo } from "react";
import { motion } from "framer-motion";
import { Check } from "@mui/icons-material";
import { Experience } from "@/models";
import { Tooltip } from "@mui/material";

import { useWindowWidth } from "@react-hook/window-size";

const ExperienceDetail: FC<Experience> = ({
  image,
  title,
  subtitle,
  initialMonth,
  endMonth,
  stack,
  start,
  initialYear,
  finish,
  tasks,
}) => {
  const onlyWidth = useWindowWidth();

  const { totalMonths, colStart, colEnd } = useMemo(() => {
    const currentMonth = new Date().getMonth() + 1;

    let totalMonths = 0;

    if (finish === "CURRENTLY" && initialYear === new Date().getFullYear()) {
      totalMonths = currentMonth - initialMonth + 1;
    } else if (
      finish === "CURRENTLY" &&
      initialYear !== new Date().getFullYear()
    ) {
      totalMonths = 12 - initialMonth + 1 + new Date().getMonth() + 1;
    } else if (
      finish !== "CURRENTLY" &&
      initialYear !== new Date().getFullYear()
    ) {
      totalMonths = 12 - initialMonth + 1 + endMonth - 1;
    } else if (
      finish !== "CURRENTLY" &&
      initialYear === new Date().getFullYear()
    ) {
      totalMonths = endMonth;
    }

    return {
      totalMonths,
      colStart: initialMonth,
      colEnd: initialMonth + totalMonths,
    };
  }, [finish, initialYear, initialMonth, endMonth]);

  const cardWidth = useMemo(
    () => (onlyWidth >= 1450 && totalMonths ? 420 : 350),
    [onlyWidth, totalMonths]
  );

  return (
    <div
      className={`flex flex-col gap-5 z-50 w-full col-start-${colStart} 2xl:col-end-${colEnd}`}
      style={{
        width: `${cardWidth}px`,
        maxWidth: `${cardWidth + 50}px`,
      }}
    >
      <article className="experience__card relative">
        <div className="flex justify-between w-full items-center">
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
            className="w-16 aspect-square object-contain"
          />
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <h3 className="text-sm text-secondary-1">{subtitle}</h3>
          </div>
        </div>
        <ul className="flex flex-wrap mx-auto w-full gap-5 justify-center items-center">
          {stack.map((item, i) => (
            <li key={i} className="mx-auto">
              <Tooltip title={item.techName} placement="top">
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
                  src={item.imageUrl}
                  className="h-5 aspect-square  w-auto"
                />
              </Tooltip>
            </li>
          ))}
        </ul>
        <h4 className="flex gap-5 justify-between md:mx-auto font-bold text-secondary-1">
          <small>{start}</small>
          <small>-</small>
          <small className={`${finish === "CURRENTLY" && "text-green-500"}`}>
            {finish}
          </small>
        </h4>
        <ul>
          {tasks.map((task, i) => (
            <li key={i} className="text-justify">
              <Check color="secondary" className="text-xs" />
              <small className="ml-2 text-xs">{task}</small>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default ExperienceDetail;
