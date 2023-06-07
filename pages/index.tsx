import { useEffect, useMemo, useRef } from "react";
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

  const title = useMemo(() => {
    let activeSection = "#hero";
    if (typeof window !== "undefined") {
      if (heroIsVisible) {
        document.location.href = "#hero";
        activeSection = "#hero";
      }
      if (aboutIsVisible) {
        document.location.href = "#about";
        activeSection = "#about";
      }
      if (experienceIsVisible) {
        document.location.href = "#experience";
        activeSection = "#experience";
      }
      if (skillsIsVisible) {
        document.location.href = "#skills";
        activeSection = "#skills";
      }
      if (projectsIsVisible) {
        document.location.href = "#projects";
        activeSection = "#projects";
      }
    }

    return {
      "#hero":
        "Welcome to My Portfolio | Carlos Segura García, Front-end Developer",
      "#about": "Get to Know Me | My History and Background",
      "#experience":
        "My Work Experience | Companies, Technologies and Competences",
      "#skills": "My Technical Skills | Web Technologies I Specialize In",
      "#projects":
        "Highlighted Projects | Web Applications Developed by Carlos Segura García",
    }[activeSection];
  }, [
    aboutIsVisible,
    experienceIsVisible,
    heroIsVisible,
    projectsIsVisible,
    skillsIsVisible,
  ]);

  const activeSection = useMemo(() => {
    if (heroIsVisible) return "#hero";
    if (aboutIsVisible) return "#about";
    if (experienceIsVisible) return "#experience";
    if (skillsIsVisible) return "#skills";
    if (projectsIsVisible) return "#projects";
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
        <title>{title}</title>
        <meta
          name="google-site-verification"
          content="jxGUtj4OPhY1NvdojyaDnxtwiWRJDJymkPTRPdDtH7w"
        />
        <meta name="author" content="Carlos Segura García" />
        <meta name="copyright" content="Carlos Segura García" />
        <meta
          name="description"
          content="Carlos Segura García is a frontend developer based in Spain. Check out his portfolio website showcasing his skills as a frontend developer using technologies such as Vue, React, Next.js, Tailwind CSS and responsive design techniques. Browse through his projects and see how he can help bring your website ideas to life."
        />
        <meta
          name="keywords"
          content="Carlos Segura García, Web Developer, frontend Developer, Software Engineer, Vue.js, Vue 3, Nuxt.js, React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, Mongoose, Jest, Testing Library, Pinia, UI/UX Design, Responsive Design, Website Optimization, HTML, CSS, SASS, Tailwind CSS, Git, Docker, Three.js"
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <div className="snap-y snap-proximity h-screen overflow-y-scroll overflow-x-hidden z-0">
          {/* Header */}
          <Header activeSection={activeSection as string} />
          {/* Hero */}
          <section
            ref={heroRef}
            id="hero"
            className="h-screen snap-center flex flex-col w-auto items-center justify-center relative overflow-hidden"
          >
            <Hero />
          </section>
          {/* About */}
          <section
            ref={aboutRef}
            id="about"
            className="h-screen snap-center bg-gradient-to-b from-transparent to-[#0f0d0f] relative"
          >
            <About />
          </section>
          {/* Experience */}
          <section
            ref={experienceRef}
            id="experience"
            className="h-screen snap-center bg-gradient-to-b from-[#0f0d0f] to-[#0c0b11] relative w-screen"
          >
            <Experience />
          </section>
          {/* Skills */}
          <section
            ref={skillsRef}
            id="skills"
            className="h-screen snap-center bg-gradient-to-b from-[#0c0b11] to-[#110a1a] relative"
          >
            <Skills />
          </section>
          {/* Projects */}
          <section
            ref={projectsRef}
            id="projects"
            className="h-screen lg:snap-center bg-gradient-to-b from-[#110a1a] to-transparent relative"
          >
            <Projects />
          </section>
          {!heroIsVisible && <Jumper />}
        </div>
      </DefaultLayout>
    </>
  );
}
