"use client";

import { useTheme } from "next-themes";
import { useLang } from "../../hooks/useLang";
import { Project, ProjectProps } from "../../components/project";

export default function Projects() {
  const [language, changeLanguage] = useLang();
  const { theme } = useTheme();
  const websiteImg =
    theme === "light" ? "homepage-dark.png" : "homepage-light.png";

  const projects: ProjectProps[] = [
    {
      projectNameEN: "echos website",
      projectNameNO: "echos nettside",
      imgPath: "echo-uib.png",
      github: "https://github.com/echo-webkom/echo-web-mono",
      descriptionEN:
        "Throughout my time at UiB, I have been part of a group called Webkom, and from my second year, I was also the leader of the group. Webkom consists of a team of 10-12 developers who are responsible for the development and maintenance of the student association echo's website. As part of this team, I did everything from fixing small bugs to implementing larger features. Being a part of Webkom, I have learned a lot about web development, system design, teamwork, and tech leadership. I have also become well acquainted with the various technologies that our tech stack consists of!",
      descriptionNO:
        "Gjennom tiden min på UiB har jeg vært med i en gruppe som heter Webkom, og fra mitt 2. år var jeg også leder for gruppen. Webkom består av et team på 10-12 utviklere, som er ansvarlig for utvikling og vedlikehold av linjeforeningen, echo's nettside. Som en del av dette teamet gjorde jeg alt fra å fikse små bugs til å implementere større features. Som del av Webkom har jeg lært masse om web-utvikling, systemdesign, team-arbeid og tech-ledelse. Jeg har også blitt godt kjent med de ulike teknologiene som tech-stacken vår består av!",
      stack:
        "NextJS, React, TypeScript, Postgresql DB, HTML, TailwindCSS, Vercel, Flyctl",
      link: "https://echo.uib.no",
    },
    {
      projectNameEN: "Retail Repair data dashboard",
      projectNameNO: "Retail Repair data dashbord",
      imgPath: "rr-login.png",
      github: "",
      descriptionEN:
        "I completed a project for a company that specializes in robot lawnmower repair. I developed a data dashboard with various graphs and charts, making it easier for them to analyze their routines and streamline operations! This project gave me valuable experience in delivering a product to a client. I learned a lot from the collaboration process with the client to develop a product that met their requirements. The application retrieves data through an API from the company's workshop system for logging repairs. It then stores the data in its own database and fetches it from there to visually present various statistics using different plots and diagrams.",
      descriptionNO:
        "Gjorde et oppdrag for en bedrift som driver med reparasjon av robotgressklippere. Utviklet et data dashboard med ulike grafer og diagrammer som gjør det enklere for dem å analysere egne rutiner og effektivisere driften! Dette prosjektet ga meg verdifull erfaring med å levere et produkt til en kunde! Jeg lærte mye av samarbeidsprosessen med kunden, gjennom å utvikle et produkt som tilfredsstilte deres krav. Applikasjonen henter data gjennom et API til bedriftens verksteds-system for logging av reparasjoner. Lagrer deretter data i en egen database, og fetcher derfra for å framstille ulike statistikker grafisk ved hjelp av ulike plot og diagrammer.",
      stack: "Python, Streamlit, Postgresql DB, Flyctl",
      link: "https://retail-repair.fly.dev",
    },
    {
      projectNameEN: "Personal website",
      projectNameNO: "Personlig nettside",
      imgPath: websiteImg,
      github: "https://github.com/KristianElde/homepage",
      descriptionEN: "lorem",
      descriptionNO: "Laget denne nettsiden får å ha et sted å sammenstille",
      stack: "React, TypeScript, HTML, TailwindCSS, Vercel",
      link: "/",
    },
    {
      projectNameEN: "Chess",
      projectNameNO: "Sjakk",
      imgPath: "chess-comb.png",
      github: "https://github.com/KristianElde/chess",
      descriptionEN:
        "I created a chess app in the course INF101: Object-Oriented Programming. This was a rewarding project where I had a lot of autonomy to choose what I wanted to make and figure out how to solve the task. I enjoyed the challenge of programmatically describing all the chess rules and had fun with the task of creating an AI to play against. The AI never became very advanced, as it could only think two moves ahead. I also added the option to choose a Star Wars theme for the pieces! All in all, this was a project I really enjoyed creating!",
      descriptionNO:
        "Lagde en sjakk-app i faget INF101: Objektorientert programmering. Dette var et givende prosjekt hvor jeg hadde veldig stor autonomi til å selv velge hva jeg vill lage og til å finne ut hvordan jeg ville løse oppgaven. Jeg likte utfordringen med å beskrive alle sjakkreglene programmatisk, og koste meg med oppgaven med å lage en AI man kunne spille mot. AI'en ble aldri veldig avansert, da den kunne tenke bare 2 trekk fremover. La også til muligheten til å velge et Star Wars-tema på brikkene! Dette var et prosjekt jeg alt i alt koste meg veldig med å lage!",
      stack: "Java, Java Swing AWT",
      link: "none",
    },
    {
      projectNameEN: "Høytekken",
      projectNameNO: "Høytekken",
      imgPath: "hoytekken.png",
      github: "https://github.com/KristianElde/hoytekken",
      descriptionEN:
        "I created a classic 2D fighter game in the course INF112: Introduction to System Development. This course was primarily a project-based course where we were tasked with developing a game in groups. Through this, I learned a lot about working on a larger project with multiple people and many different modules, each responsible for parts of the program's logic. I gained valuable experience in both system development and collaboration in project work. In addition to this, it was a very enjoyable course, with plenty of programming and independent problem-solving!",
      descriptionNO:
        "Lagde et klassisk 2D-fighter spill i faget INF112: Innføring i systemutvikling. Dette faget var i hovedsak et prosjekt-fag hvor vi skulle utvikle et spill i grupper. Gjennom dette lærte jeg mye om å jobbe på et større prosjekt med flere personer, og mange ulike moduler med ulikt ansvar for deler av logikken til hele programmet. Jeg lærte mye om både systemutvikling og samarbeid i prosjektarbeid. I tillegg til dette var det et veldig gøy fag, med mye programmering og selvstendig problemløsning!",
      stack: "Java, LibGDX",
      link: "https://hoytekken.vercel.app/",
    },
  ];

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
