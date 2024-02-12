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
}) => (
  <article className="relative bg-transparent backdrop-blur-lg w-full">
    {/* Right button with link to project and repo */}
    <div className="absolute w-[50px] flex flex-col justify-center items-center h-full bottom-0 right-0 bg-gradient-to-b from-primary-1/50 to-secondary-1/50 z-50">
      <a
        href={repo}
        target="_blank"
        className="bg-dark-1 h-full flex flex-col justify-center w-full items-center cursor-pointer hover:bg-white duration-300 hover:text-black"
      >
        <GitHub fontSize="medium" />
      </a>

      <a
        href={href}
        target="_blank"
        className={`${
          href
            ? "bg-secondary-1 hover:bg-white hover:text-dark cursor-pointer"
            : "bg-gray-500"
        } h-full text-black h-full flex flex-col justify-center w-full items-center duration-100`}
      >
        <OpenInNew fontSize="medium" />
      </a>
    </div>

    {/* Project logo */}
    <div className="flex gap-5 bg-black/50 pr-[50px]">
      <Image
        src={image}
        alt={title}
        width="0"
        height="0"
        sizes="100vw"
        className={`project-logo z-10 h-[70px] xl:h-[120px] w-auto p-2`}
      />

      <div className="z-0 p-2.5 flex justify-start items-start text-left w-full">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-2xl">{title}</h2>
          <strong className="text-sm text-gray-400">{prevTitle}</strong>
          <p>{description}</p>
        </div>
      </div>
    </div>
    <div className="p-5 w-full bg-gradient-to-b from-black/50 to-black/10 text-justify border-b-2 border-b-secondary-1/50 flex flex-col gap-5 justify-start h-full">
      Stack:
      <ul className="flex flex-wrap justify-left items-center gap-5 w-[calc(100%-50px)]">
        {stack.map((tech, i) => (
          <li key={i} className="flex items-center gap-2">
            <Image
              src={`/logos/${tech.icon}.svg`}
              alt={tech.name}
              width="16"
              height="16"
            />
            <span className="text-xs">{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default ProjectDetail;
