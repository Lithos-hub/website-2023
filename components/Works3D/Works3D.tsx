import { motion } from "framer-motion";
import { useState } from "react";

interface Work {
  title: string;
  fileName: string;
}

const works3D = [
  {
    title: "Systematic Chaos - Original render",
    fileName: "systematic-chaos.jpg",
  },
  {
    title: "Hazy Dream - Original abstract render",
    fileName: "abstract-1-fog.jpg",
  },
  {
    title: "Other World - Original landscape render",
    fileName: "planet-landscape.png",
  },
  {
    title: "Contact - Original Sci-fi landscape",
    fileName: "scifi-4.png",
  },
  {
    title: "Bag End - Landscape render",
    fileName: "lotr-1.png",
  },
  {
    title: "Domain - Original sci-fi/futuristic render",
    fileName: "scifi-3.png",
  },
  {
    title: "Portal - Original magic/fantasy render",
    fileName: "magical-1.png",
  },
  {
    title: "Freedom - Original Sci-fi landscape",
    fileName: "scifi-2.png",
  },
  {
    title: "Final encounter - Original dark sci-fi render",
    fileName: "scifi-1.png",
  },
  {
    title: "The Arrival - Landscape render",
    fileName: "the-arrival.png",
  },
  {
    title: "Alien (1979) - Planet LV-426",
    fileName: "alien-1.png",
  },
  {
    title: "Sci-fi spaceship corridor",
    fileName: "scifi-corridor-1.png",
  },
  {
    title: "Millenium Falcon in Bespin - Low poly diorama",
    fileName: "star-wars-millenium.png",
  },
  {
    title: "Harry Potter - Hogwarts Express low poly diorama",
    fileName: "harry-potter-1.png",
  },
  {
    title: "Jurassic Park - T. Rex attack low poly diorama",
    fileName: "jurassic-1.png",
  },
  {
    title: "Star Wars - Death Star attack low poly diorama",
    fileName: "death-star.png",
  },
];

const Works3D = () => {
  const [imageToShow, setImageToShow] = useState<Work | null>(null);

  const showImage = (work: Work) => () => setImageToShow(work);
  const hideImage = () => () => setImageToShow(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="md:h-screen max-h-[80vh] md:max-h-none py-10 md:py-0 flex flex-col gap-5 overflow-y-scroll w-full items-center md:justify-center md:px-[10vw]"
    >
      <p className="w-[70vw] text-center">
        Since october 2023 I have been learning 3D modelling with Blender, and
        these are some of my works:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
        {works3D.map(({ fileName, title }, index) => (
          <div className="relative" key={index}>
            <motion.img
              key={index}
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              alt="Blender render"
              src={`/img/renders/${fileName}`}
              onClick={showImage({ fileName, title })}
              className="w-full h-full  aspect-square rounded-xl shadow-xl object-cover cursor-pointer hover:scale-105 duration-200"
            />
          </div>
        ))}
      </div>

      {/* Overlay when showing an image */}
      {imageToShow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={hideImage()}
          className="fixed top-0 left-0 w-screen h-screen backdrop-blur z-50"
        />
      )}

      {imageToShow && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-2xl overflow-hidden">
          <div className="mx-auto w-[80vw]">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={`/img/renders/${imageToShow.fileName}`}
              className="object-contain"
              onClick={hideImage()}
            />
            <h2 className="absolute bottom-0 left-0 w-full backdrop-blur bg-black/50 p-2">
              {imageToShow.title}
            </h2>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Works3D;
