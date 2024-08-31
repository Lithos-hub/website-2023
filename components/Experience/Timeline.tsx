import { FC, useRef, useEffect } from "react";
import { Experience } from "@/models";
import ExperienceDetail from "./ExperienceDetail";

interface Props {
  years: number[];
  experiences: Experience[];
}

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const Timeline: FC<Props> = ({ years, experiences }) => {
  const timelineBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineBar.current) {
      // Scroll to the end of the timeline when the component is mounted
      timelineBar.current.scrollLeft = timelineBar.current.scrollWidth;
      }
  }, []);

  return (
    <div
      ref={timelineBar}
      className="flex flex-col absolute h-[80vh] mt-20 2xl:w-[90vw] shadow-2xl mx-auto overflow-x-auto"
    >
      <div className="flex flex-col 2xl:flex-row w-screen px-5">
        {/* Timeline */}
        {years.map((year, i) => (
          <div key={i} className="relative w-full">
            <div key={i} className="flex flex-col gap-10 w-[25vw]">
              <div
                className={`flex flex-col items-start gap-5 justify-center mb-5  w-full pl-5 ${
                  i !== 0 && "md:border-l border-secondary-1/10"
                } `}
              >
                <p className="text-primary-1/20 3xl:text-5xl 2xl:text-3xl text-2xl tracking-widest">
                  {year}
                </p>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-12 w-full relative">
              {MONTHS.map((month, i) => {
                const experience = experiences.find(
                  (experience) =>
                    experience.initialYear === year &&
                    experience.initialMonth - 1 === i
                ) as Experience;

                return (
                  <>
                    {/* Highlighted month */}
                    <div key={i} className={`flex flex-col 2xl:gap-5 relative`}>
                      <div className="mx-auto">
                        <div
                          className={`flex flex-col m-auto items-center justify-center gap-10 w-[34px] aspect-square ${
                            experience &&
                            experience.initialMonth - 1 === i &&
                            "rounded-full border border-secondary-1/30 bg-gradient-to-tr from-secondary-1/10 to-transparent"
                          }`}
                        >
                          <p className="p-2  text-primary-1 text-xs">{month}</p>
                        </div>
                        {experience && experience.initialMonth - 1 === i && (
                          <div className="hidden md:block mx-auto h-10 w-[1px] bg-secondary-1/30 z-0" />
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex md:grid md:grid-cols-12 relative items-center justify-center">
              {MONTHS.map((_, i) => {
                const experience = experiences.find(
                  (experience) =>
                    experience.initialYear === year &&
                    experience.initialMonth - 1 === i
                ) as Experience;

                return experience ? <ExperienceDetail {...experience} /> : null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
