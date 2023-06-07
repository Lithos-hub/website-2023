import { FC } from "react";

import { Project } from "@/models";
import Image from "next/image";
import { GitHub, OpenInNew } from "@mui/icons-material";

const ProjectDetail: FC<Project> = ({
  image,
  prevTitle,
  title,
  stack,
  href,
  repo,
  description,
}) => {
  const rightLines = 20;

  return (
    <article className="relative bg-transparent backdrop-blur-lg w-[320px]">
      <div className="h-[2px] w-[224px] bg-secondary-1 absolute top-0 right-[-2px] z-10" />
      <div className="h-[41.5px] w-[2px] bg-secondary-1 absolute top-[65px] right-[12px] rotate-45 rounded-t" />
      <div className="h-[71px] w-[2px] bg-secondary-1 absolute top-[2px] -right-[2px] rounded-br-xl" />

      {/* Right lines to decoration */}
      {[...Array(rightLines)].map((_, i) => (
        <div
          key={i}
          className={`project-line h-[45px] w-[2px] absolute right-[12px] rotate-45 rounded-t`}
          style={{
            top: `${i * 8 + 65}px`,
            backgroundColor: `#ffedd8${i * 6}`,
          }}
        />
      ))}

      {/* Right button with link to project and repo */}
      <div className="project-button absolute w-[31px] flex flex-col justify-center items-center h-[170px] bottom-0 -right-[2px] bg-gradient-to-b from-primary-1/50  to-secondary-1/50 z-50">
        <a
          href={repo}
          target="_blank"
          className="h-full flex flex-col justify-end pb-5 w-full items-center cursor-pointer hover:bg-black/50 duration-300"
        >
          <GitHub fontSize="small" />
        </a>
        <a
          href={href}
          target="_blank"
          className="h-full flex flex-col justify-center w-full items-center cursor-pointer hover:bg-black/50 duration-300"
        >
          <OpenInNew fontSize="small" />
        </a>
      </div>

      <Image
        src={image}
        alt={title}
        width="0"
        height="0"
        sizes="100vw"
        className={`project-logo z-10 absolute top-0 left-0 h-[100px] w-[100px] ${
          image.includes("infojobs") && "bg-[#167db7]"
        }`}
      />

      <div className="project-header z-0 p-2.5 flex justify-end items-start text-right w-full rounded-tl-[100px] min-h-[100px] bg-black/50 ml-auto">
        <div className="w-[50px]" />
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-gray-400">{prevTitle}</p>
        </div>
      </div>
      <div className="p-5 min-h-[270px] max-w-[293px] bg-gradient-to-b from-black/50 to-black/10 text-justify border-r-2 border-b-2 border-r-secondary-1/50 border-b-secondary-1/50 flex flex-col gap-5 justify-between h-full">
        <p className="text-sm">{description}</p>

        <ul className="flex flex-wrap justify-center items-center gap-5">
          {stack.map((tech, i) => (
            <li key={i} className="flex items-center gap-2">
              <Image
                src={`/logos/${tech.icon}.svg`}
                alt={tech.name}
                width="16"
                height="16"
              />
              <span className="text-sm font-extralight">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectDetail;
