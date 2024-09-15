"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Education, { type EducationProps } from "../../components/education";
import { Job, JobProps } from "../../components/job";
import Role, { RoleProps } from "../../components/role";
import SectionHeader from "../../components/sectionHeader";
import { useLang } from "../../hooks/useLang";
import SectionHeader2 from "@/components/sectionHeader2";

export default function CV() {
  const [language, changeLanguage] = useLang();

  const educationsEN: EducationProps[] = [
    {
      educationName: "Informatics: Computer technology",
      institution: "University of Bergen",
      duration: "August 2023 - Present time",
      degree: "Bachelors degree",
      description:
        "Bachelors degree in computer technology. Covering broadly within the field of computer science. The degree contains courses in Object oriented programming, Database management systems, Algorithms and data structures, Functional programming, Operative systems, Software security and many more related topics.",
    },
    {
      educationName: "Economics and leadership",
      institution: "Oslo Metropolitan University",
      duration: "August 2021 - June 2022",
      degree: "One-year program",
      description:
        "One-year program in economics and leadership. Having courses covering basic business economics, macro economics, leadership theory, accounting and marketing.",
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

  const jobsEN: JobProps[] = [
    {
      position: "Teaching assistant",
      company: "University of Bergen",
      duration: "January 2024 - Present time",
      description:
        "Part-time job as an teaching assistant in the course, INF100: Introduction To Programming. Responsible for helping students with their assignments in group sessions, as well as grading and commenting on their work. Got to develop my educational and communicative skills, and got to further my understanding for the subject.",
    },
    {
      position: "Warehouse worker",
      company: "Asko Sentrallager",
      duration: "August 2020 - August 2024",
      description:
        "Various position percentages over the course of three years. Working full time for some stretches, while having it as an part time job during studies. Learned a lot about being reliable towards my employeer, and developed a good work ethic.",
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

  const rolesEN: RoleProps[] = [
    {
      name: "Member of echo Webkom",
      duration: "August 2023 - Present time",
      description:
        "Webkom is a part of the student organization, echo. Webkom is responsible for maintaining and developing the student organizations website. Being part of a small team of developers i have gained valuable experience with working on projects in a team. I have also gained experience in and learned lots about all aspects of full stack web development. In Webkom we mainly used a tech stack consisting of Next, React, TypeScript, Tailwind CSS and postgres DB.",
    },
    {
      name: "Leader av echo Webkom",
      duration: "August 2024 - Present time",
      description: "",
    },
    {
      name: "echo main board",
      duration: "January 2024 - Present time",
      description:
        "Echos main board is responsible for the daily Echos hovedstyre har som oppgave å legge til rette for den daglige driften av linjeforeningen. Dette innebærer oppgaver som administrering av arrangementer, økonomiske beslutninger, promotering av echo og videreutvikling av organisasjonen.",
    },
  ];

  const rolesNO: RoleProps[] = [
    {
      name: "Medlem av echo Webkom",
      duration: "August 2023 - dags dato",
      description:
        "Webkom er en undergruppe av echo, linjeforeningen for informatikk på UiB. Webkom er ansvarlig for å drifte og utvikle linjeforeningens nettside. Det å være en del av et lite team av utviklere har gitt meg verdifull erfaring med prosjektarbeid og det å jobbe i et team. Jeg har også lært mye om alle aspekter ved full stack web-utvikling. I Webkom bruker vi hovedsakelig en tech-stack bestående av Next, React, TypeScript, Tailwind CSS og postgres DB.",
    },
    {
      name: "Leder av echo Webkom",
      duration: "August 2024 - dags dato",
      description: "",
    },
    {
      name: "echo hovedstyre",
      duration: "Januar 2024 - dags dato",
      description:
        "Echos hovedstyre har som oppgave å legge til rette for den daglige driften av linjeforeningen. Dette innebærer oppgaver som administrering av arrangementer, økonomiske beslutninger, promotering av echo og videreutvikling av organisasjonen.",
    },
  ];

  type personaliaType = {
    q: string;
    a: string;
  };

  const personaliaEN: personaliaType[] = [
    { q: "Name", a: "Kristian Elde Johansen" },
    { q: "Age", a: "23 years" },
    { q: "From", a: "Drøbak, Norway" },
    { q: "Hobbies", a: "Bouldering, Coding, Handball" },
  ];

  const personaliaNO: personaliaType[] = [
    { q: "Navn", a: "Kristian Elde Johansen" },
    { q: "Alder", a: "23 år" },
    { q: "Fra", a: "Drøbak, Norge" },
    { q: "Hobbyer", a: "Buldring, Koding, Håndball" },
  ];

  const techs: string[] = [
    "Python",
    "Java",
    "Haskell",
    "C",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Next JS",
    "Vercel",
    "Flyctl",
    "SQL",
    "PostgreSQL",
    "Supabase",
  ];

  const readMoreEN = {
    before: "Read more about my experience with the different technologies ",
    link: "here",
    after: ".",
  };

  const readMoreNO = {
    before: "Les mer om min erfaring med de ulike teknologiene ",
    link: "her",
    after: ".",
  };

  const educations = language === "en" ? educationsEN : educationsNO;
  const jobs = language === "en" ? jobsEN : jobsNO;
  const roles = language === "en" ? rolesEN : rolesNO;
  const personalia = language === "en" ? personaliaEN : personaliaNO;
  const readMore = language === "en" ? readMoreEN : readMoreNO;

  return (
    <div className="md:grid md:grid-cols-4">
      <ul className="flex flex-row mx-4 space-x-6 space-y-6 pt-8 text-md grid-cols-2 md:col-span-1 md:flex-col md:space-x-0">
        <li className="w-1/2 border rounded-xl shadow-md md:w-full">
          <img
            src="profil_H24.JPG"
            alt=""
            width=""
            height=""
            className="rounded-xl"
          ></img>
        </li>
        <li className="w-1/2 border rounded-xl p-3 shadow-md md:w-full">
          <SectionHeader2
            name={language === "en" ? "Personalia" : "Personalia"}
          />
          <ul className="pt-3 space-y-2">
            {personalia.map((line, i) => {
              return (
                <li key={i}>
                  <p>
                    {line.q}: <strong>{line.a}</strong>
                  </p>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="hidden md:block border rounded-xl p-3 shadow-md">
          <SectionHeader2
            name={language === "en" ? "Technologies" : "Teknologier"}
          />
          <ul className="list-disc list-inside space-y-1 pt-3">
            {techs.map((tech, i) => {
              return <li key={i}>{tech}</li>;
            })}
            <div className="pt-2">
              <p>
                {readMore.before}
                <a href="/projects" className="font-bold underline">
                  {readMore.link}
                </a>
                {readMore.after}
              </p>
            </div>
          </ul>
        </li>
      </ul>
      <ul className="mx-4 space-y-6 pt-8 text-md md:col-span-3">
        <li className="border rounded-xl p-3 shadow-md">
          <SectionHeader name={language === "en" ? "Education" : "Utdanning"} />
          <ul className="space-y-6 pt-1">
            {educations.map((education, i) => (
              <li key={i}>
                <Education {...education} />
              </li>
            ))}
          </ul>
        </li>
        <li className="border rounded-xl p-3 shadow-md">
          <SectionHeader
            name={language === "en" ? "Job experience" : "Jobberfaring"}
          />
          <ul className="space-y-6 pt-1">
            {jobs.map((job, i) => (
              <li key={i}>
                <Job {...job} />
              </li>
            ))}
          </ul>
        </li>
        <li className="border rounded-xl p-3 shadow-md">
          <SectionHeader
            name={language === "en" ? "Volunteer roles" : "Frivillige verv"}
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
    </div>
  );
}
