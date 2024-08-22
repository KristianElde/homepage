"use client";

import { useLang } from "../components/langContext";
import { Project, ProjectProps } from "../components/project";

export default function Projects() {
  const { language, changeLanguage } = useLang();

  const projectsEN: ProjectProps[] = [
    {
      projectName: "echos website",
      imgPath: "echo-uib.png",
      github: "",
      description: "",
      link: "echo.uib.no",
    },
    {
      projectName: "Retail Repair data dashboard",
      imgPath: "rr-pie.png",
      github: "",
      description:
        "Gjorde et oppdrag for en bedrift som driver med reperasjon av gressklippere. Utviklet et data dashboard med ulike grafer og diagrammer som gjør det enklere for dem å analysere egne rutiner og effektivisere driften!",
      link: "retail-repair-delicate-hill-6442.fly.dev",
    },
  ];

  const projectsNO: ProjectProps[] = [
    {
      projectName: "echos nettside",
      imgPath: "echo-uib.png",
      github: "",
      description: "",
      link: "echo.uib.no",
    },
    {
      projectName: "Retail Repair data dashboard",
      imgPath: "rr-pie.png",
      github: "",
      description:
        "Gjorde et oppdrag for en bedrift som driver med reperasjon av gressklippere. Utviklet et data dashboard med ulike grafer og diagrammer som gjør det enklere for dem å analysere egne rutiner og effektivisere driften!",
      link: "retail-repair-delicate-hill-6442.fly.dev",
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
