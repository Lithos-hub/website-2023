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
  <article className="relative bg-transparent backdrop-blur-lg md:w-[320px]">
    {/* Right button with link to project and repo */}
    <div className="project-button absolute w-[50px] flex flex-col justify-center items-center h-[170px] bottom-0 right-0 bg-gradient-to-b from-primary-1/50  to-secondary-1/50 z-50">
      <a
        href={repo}
        target="_blank"
        className="projectrepo-button-inner bg-dark-1  h-full flex flex-col justify-end pb-5 w-full items-center cursor-pointer hover:bg-white duration-300 hover:text-black"
      >
        <GitHub fontSize="medium" />
      </a>
      <a
        href={href}
        target="_blank"
        className="projectapp-button-inner bg-secondary-1 text-black border border-black h-full flex flex-col justify-center w-full items-center cursor-pointer hover:bg-dark-1 duration-100 hover:text-primary-1"
      >
        <OpenInNew fontSize="medium" />
      </a>
    </div>

    <Image
      src={image}
      alt={title}
      width="0"
      height="0"
      sizes="100vw"
      className={`project-logo z-10 absolute top-0 left-0 max-h-[80px] w-auto p-2`}
    />

    <div className="z-0 p-2.5 flex justify-end items-start text-right w-full min-h-[80px] bg-black/50 ml-auto">
      <div className="w-[50px]" />
      <div className="flex flex-col gap-3">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-400">{prevTitle}</p>
      </div>
    </div>
    <div className="p-5 min-h-[250px] w-full bg-gradient-to-b from-black/50 to-black/10 text-justify border-b-2 border-b-secondary-1/50 flex flex-col gap-5 justify-start h-full">
      <p className="text-sm pb-5">{description}</p>

      <ul className="flex flex-wrap justify-left items-center gap-5 w-[calc(100%-50px)]">
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

export default ProjectDetail;
