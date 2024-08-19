"use client";

import { useState } from "react";
import Education, { type EducationProps } from "../components/education";
import { Job, JobProps } from "../components/job";
import Role, { RoleProps } from "../components/role";
import SectionHeader from "../components/sectionHeader";

export default function CV() {
  const [english, setEnglish] = useState(true);

  const englishOn = () => {
    setEnglish(true);
  };
  const englishOff = () => {
    setEnglish(false);
  };

  const educationsEN: EducationProps[] = [
    {
      educationName: "Informatics: Computer technology",
      institution: "University of Bergen",
      duration: "August 2023 - Present time",
      degree: "Bachelors degree",
      description:
        "Bachelors degree in computer technology. Covering broadly within the field of computer science. The degree contains courses in Object oriented programming, Database management systems, Algorithms and datastructures, Functional programming, Operative systems, Sofware security and many more related topics.",
    },
    {
      educationName: "Economics and leadership",
      institution: "Oslo Metropolitan University",
      duration: "August 2021 - June 2022",
      degree: "One-year program",
      description:
        "One-year program in economics and leadership. Having courses covering basic buisness economics, macroeconomics, leadership theory, accounting and marketing.",
    },
  ];

  const jobsEN: JobProps[] = [
    {
      position: "Teaching assistant",
      company: "University of Bergen",
      duration: "January 2024 - Present time",
      description:
        "Part-time job as an teaching assistant in the cours, Introduction to programming. Responsible for helping students with their assignments in group sessions, as well as grading and commenting on their work. Got to develop my educational and communicative skills, and got to further my understanding for the subject.",
    },
    {
      position: "Warehouse worker",
      company: "Asko Sentrallager",
      duration: "August 2020 - August 2024",
      description:
        "Various position percantages over the course of three years. Working full time for some stretsches, while having it as an part time job during studies. Learned a lot about being reliable towards my employeer, and developed a good work ethic.",
    },
  ];

  const rolesEN: RoleProps[] = [
    {
      name: "echo Webkom",
      duration: "August 2023 - Present time",
      description:
        "Webkom is a part of the student organization, echo. Webkom is responsible for maintaining and developing the student organizations website. Being part of a small team of developers i have gained valuable experience with working on projects in a team. I have also gained experience in and learned lots about all aspects of full stack web development. In Webkom we mainly used a tech stack consisting of Next, React, TypeScript, Tailwind CSS and postgres DB.",
    },
    {
      name: "echo main board",
      duration: "January 2024 - Present time",
      description:
        "Echos main board is responsible for the daily Echos hovedstyre har som oppgave å legge til rette for den daglige driften av linjeforeningen. Dette innebærer oppgaver som administrering av arrangementer, økonomiske beslutninger, promotering av echo og videreutvikling av organisasjonen.",
    },
  ];

  const educationsNO: EducationProps[] = [
    {
      educationName: "Informatikk: Datateknologi",
      institution: "Universitetet i Bergen",
      duration: "August 2023 - dags dato",
      degree: "Bachelorgrad",
      description:
        "Bachelorgrad i datateknologi. Graden dekker bredt innenfor informatikk-faget. Den innholder emner som objekt orientert programmering, Databaser og modellering, Algoritmer og datastrukturer, Funksjonell programmering, Operativ systemer, Programvaresikkerhet i tillegg til mange andre relaterte emner.",
    },
    {
      educationName: "Økonomi og ledelse",
      institution: "OsloMet",
      duration: "August 2021 - Juni 2022",
      degree: "Årsstudium",
      description:
        "Årsstudium i økonomi og ledelse. Hadde emner som bedriftsøkonomi, samfunnsøkonomi, ledelsesteori, regnskapsføring og markedsføring.",
    },
  ];

  const jobsNO: JobProps[] = [
    {
      position: "Gruppeleder",
      company: "Universitetet i Bergen",
      duration: "Januar 2024 - dags dato",
      description:
        "Deltidsjobb som gruppeleder i emnet, Introduksjon til programmering. Ansvarlig for å hjelpe studenter med oppgaver i gruppetimer, i tillegg til å rette og gi tilbakemeldinger på arbeidet deres. Utviklet mine pedagogiske og kommunikative egenskaper, og forbedret forståelsen min for faget.",
    },
    {
      position: "Lagermedarbeider",
      company: "Asko Sentrallager",
      duration: "August 2020 - August 2024",
      description:
        "Varierende stillingprosenter over en 3-årsperiode. Jobbet fulltid enkelte perioder, og hadde deltidsstilling under studier. Lærte mye om det å være pålitelig ovenfor en arbeidsgiver, og tilegnet meg en god arbeidsmoral.",
    },
  ];

  const rolesNO: RoleProps[] = [
    {
      name: "echo Webkom",
      duration: "August 2023 - dags dato",
      description:
        "Webkom er en undergruppe av echo, linjeforeningen for informatikk på UiB. Webkom er ansvarlig for å drifte og utvikle linjeforeningens nettside. Det å være en del av et lite team av utviklere har gitt meg verdifull erfaring med prosjektarbeid og det å jobbe i et team. Jeg har også lært mye om alle aspekter ved full stack web-utvikling. I Webkom bruker vi hovedsakelig en tech-stack bestående av Next, React, TypeScript, Tailwind CSS og postgres DB.",
    },
    {
      name: "echo hovedstyre",
      duration: "Januar 2024 - dags dato",
      description:
        "Echos hovedstyre har som oppgave å legge til rette for den daglige driften av linjeforeningen. Dette innebærer oppgaver som administrering av arrangementer, økonomiske beslutninger, promotering av echo og videreutvikling av organisasjonen.",
    },
  ];

  const educations = english ? educationsEN : educationsNO;
  const jobs = english ? jobsEN : jobsNO;
  const roles = english ? rolesEN : rolesNO;

  return (
    <>
      <div className="space-x-2">
        <button className="h-10 w-10" onClick={englishOn}>
          <img
            className={!english ? "opacity-30" : ""}
            src="uk.png"
            alt=""
            width={200}
            height={200}
          />
        </button>
        <button className="h-10 w-10" onClick={englishOff}>
          <img
            className={english ? "opacity-30" : ""}
            src="norway.png"
            alt=""
            width={200}
            height={200}
          />
        </button>
      </div>
      <ul className="mx-4 space-y-12 pt-8 text-md">
        <li>
          <SectionHeader name={english ? "Education" : "Utdanning"} />
          <ul className="space-y-6 pt-1">
            {educations.map((education, i) => (
              <li key={i}>
                <Education {...education} />
              </li>
            ))}
          </ul>
        </li>
        <li>
          <SectionHeader name={english ? "Job experience" : "Jobberfaring"} />
          <ul className="space-y-6 pt-1">
            {jobs.map((job, i) => (
              <li key={i}>
                <Job {...job} />
              </li>
            ))}
          </ul>
        </li>
        <li>
          <SectionHeader
            name={english ? "Volunteer roles" : "Frivillige verv"}
          />
          <ul className="space-y-6 pt-1">
            {roles.map((role, i) => (
              <li key={i}>
                <Role {...role}></Role>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
