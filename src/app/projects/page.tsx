"use client";

import { useTheme } from "next-themes";
import { useLang } from "../components/langContext";
import { Project, ProjectProps } from "../components/project";

export default function Projects() {
  const [language, changeLanguage] = useLang();
  const { theme } = useTheme();
  const websiteImg =
    theme === "light" ? "homepage-dark.png" : "homepage-light.png";

  const projectsEN: ProjectProps[] = [
    {
      projectName: "echos website",
      imgPath: "echo-uib.png",
      github: "https://github.com/echo-webkom/echo-web-mono",
      description: "lorem",
      stack:
        "NextJS, React, TypeScript, Postgresql DB, HTML, TailwindCSS, Vercel",
      link: "https://echo.uib.no",
    },
    {
      projectName: "Retail Repair data dashboard",
      imgPath: "rr-pie.png",
      github: "https://github.com/KristianElde/retail-repair",
      description:
        "I completed an assignment for a company that repairs lawnmowers. I developed a data dashboard with various graphs and charts that make it easier for them to analyze their routines and streamline operations!",
      stack: "Python, Streamlit, Postgresql DB, Flyctl",
      link: "https://retail-repair-delicate-hill-6442.fly.dev",
    },
    {
      projectName: "Personal website",
      imgPath: websiteImg,
      github: "https://github.com/KristianElde/homepage",
      description: "lorem",
      stack: "React, TypeScript, HTML, TailwindCSS, Vercel",
      link: "/",
    },
    {
      projectName: "Chess",
      imgPath: "chess-comb.png",
      github: "https://github.com/KristianElde/chess",
      description: "lorem",
      stack: "Java, Java Swing AWT",
      link: "none",
    },
    {
      projectName: "Hoytekken",
      imgPath: "hoytekken.png",
      github: "https://github.com/KristianElde/hoytekken",
      description: "lorem",
      stack: "Java, LibGDX",
      link: "https://hoytekken.vercel.app/",
    },
  ];

  const projectsNO: ProjectProps[] = [
    {
      projectName: "echos nettside",
      imgPath: "echo-uib.png",
      github: "https://github.com/echo-webkom/echo-web-mono",
      description: "lorem",
      stack: "NextJS, React, TypeScript, Postgresql DB, HTML, TailwindCSS",
      link: "echo.uib.no",
    },
    {
      projectName: "Retail Repair data dashboard",
      imgPath: "rr-pie.png",
      github: "https://github.com/KristianElde/retail-repair",
      description:
        "Gjorde et oppdrag for en bedrift som driver med reperasjon av gressklippere. Utviklet et data dashboard med ulike grafer og diagrammer som gjør det enklere for dem å analysere egne rutiner og effektivisere driften!",
      stack: "Python, Streamlit, Postgresql DB, Flyctl",
      link: "retail-repair-delicate-hill-6442.fly.dev",
    },
    {
      projectName: "Personlig nettside",
      imgPath: websiteImg,
      github: "https://github.com/KristianElde/homepage",
      description: "lorem",
      stack: "React, TypeScript, HTML, TailwindCSS, Vercel",
      link: "/",
    },
    {
      projectName: "Sjakk",
      imgPath: "chess-comb.png",
      github: "https://github.com/KristianElde/chess",
      description: "lorem",
      stack: "Java, Java Swing AWT",
      link: "none",
    },
    {
      projectName: "Hoytekken",
      imgPath: "hoytekken.png",
      github: "https://github.com/KristianElde/hoytekken",
      description: "lorem",
      stack: "Java, LibGDX",
      link: "https://hoytekken.vercel.app/",
    },
  ];

  const projects = language === "en" ? projectsEN : projectsNO;

  return (
    <>
      <ul className="mx-4 space-y-12 pt-8 text-md">
        {projects.map((project, i) => (
          <li key={i}>
            <Project props={project} i={i} />
          </li>
        ))}
      </ul>
    </>
  );
}
