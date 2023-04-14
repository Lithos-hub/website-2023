import { useEffect, useRef } from "react";
import Head from "next/head";

import { DefaultLayout } from "../layout";
import {
  About,
  Experience,
  Header,
  Hero,
  Projects,
  Skills,
} from "@/components";
import { useIntersectionObserver } from "@/hooks/useIsVisible";
import Jumper from "@/components/Jumper/Jumper";

const origin = typeof window !== "undefined" && window.location.origin;

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const heroIsVisible = useIntersectionObserver(
    { threshold: 0.5, root: null, rootMargin: "50px 50px 50px 50px" },
    heroRef
  );
  const aboutIsVisible = useIntersectionObserver(
    { threshold: 0.5, root: null, rootMargin: "50px 50px 50px 50px" },
    aboutRef
  );
  const experienceIsVisible = useIntersectionObserver(
    { threshold: 0.5, root: null, rootMargin: "50px 50px 50px 50px" },
    experienceRef
  );
  const skillsIsVisible = useIntersectionObserver(
    { threshold: 0.5, root: null, rootMargin: "50px 50px 50px 50px" },
    skillsRef
  );
  const projectsIsVisible = useIntersectionObserver(
    { threshold: 0.5, root: null, rootMargin: "50px 50px 50px 50px" },
    projectsRef
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (heroIsVisible) document.location.href = "#hero";
      if (aboutIsVisible) document.location.href = "#about";
      if (experienceIsVisible) document.location.href = "#experience";
      if (skillsIsVisible) document.location.href = "#skills";
      if (projectsIsVisible) document.location.href = "#projects";
    }
  }, [
    aboutIsVisible,
    experienceIsVisible,
    heroIsVisible,
    projectsIsVisible,
    skillsIsVisible,
  ]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Carlos Segura García | Front-end developer</title>
        <meta name="author" content="Carlos Segura García" />
        <meta name="copyright" content="Carlos Segura García" />
        <meta
          name="description"
          content="Carlos Segura García is a front-end developer based in Spain. Check out his portfolio website showcasing his skills as a front-end developer using technologies such as Vue, React, Next.js, Tailwind CSS and responsive design techniques. Browse through his projects and see how he can help bring your website ideas to life."
        />
        <meta
          name="keywords"
          content="Carlos Segura García, Web developer, Web development, Front-end developer, software engineering, software developer, Vue, Vue 3, TypeScript, Nuxt, Docker, Node.js, MongoDB, Mongoose, Express.js, Testing, Pinia, Jest, Testing library, Next.js, Web design, UI/UX design, Portfolio, Responsive design, Tailwind, HTML, CSS, JavaScript, React, Website optimization"
        />
        <meta
          property="og:title"
          content="Carlos Segura Garcia | Front-end developer"
        />
        <meta
          property="og:description"
          content="Main website and web portfolio of Carlos Segura Garcia. Checkout my portfolio and different projects I have been developing, my skills and bio. Whether you are a company or someone who wants to carry out a project and needs a developer, feel free to visit my website to see my skills. If you are a developer who would like to collaborate with me on a project, I would love to meet you too! "
        />
        <meta property="og:image" content={`${origin}/banner.jpg`} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logos/favicon.ico" />
      </Head>

      <DefaultLayout>
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden z-0">
          {/* Header */}
          <Header />
          {/* Hero */}
          <section
            ref={heroRef}
            id="hero"
            className="h-screen flex flex-col w-auto items-center justify-center relative snap-center overflow-hidden"
          >
            <Hero />
          </section>
          {/* About */}
          <section
            ref={aboutRef}
            id="about"
            className="h-screen bg-gradient-to-b from-transparent to-[#0f0d0f] relative snap-center"
          >
            <About />
          </section>
          {/* Experience */}
          <section
            ref={experienceRef}
            id="experience"
            className="h-screen bg-gradient-to-b from-[#0f0d0f] to-[#0c0b11] relative snap-center w-screen"
          >
            <Experience />
          </section>
          {/* Skills */}
          <section
            ref={skillsRef}
            id="skills"
            className="h-screen bg-gradient-to-b from-[#0c0b11] to-[#110a1a] relative snap-center"
          >
            <Skills />
          </section>
          {/* Projects */}
          <section
            ref={projectsRef}
            id="projects"
            className="h-screen bg-gradient-to-b from-[#110a1a] to-transparent relative snap-center"
          >
            <Projects />
          </section>
          {!heroIsVisible && <Jumper />}
        </div>
      </DefaultLayout>
    </>
  );
}
