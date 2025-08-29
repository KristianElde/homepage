"use client";

/* eslint-disable @next/next/no-img-element */

import Education, { type EducationProps } from "../../components/education";
import { Job, JobProps } from "../../components/job";
import Role, { RoleProps } from "../../components/role";
import SectionHeader from "../../components/sectionHeader";
import { useLang } from "../../hooks/useLang";
import SectionHeader2 from "@/components/sectionHeader2";

export default function CV() {
  const language = useLang()[0];

  const educationsEN: EducationProps[] = [
    {
      educationName: "Artificial Intelligence",
      institution: "University of Amsterdam",
      duration: "September 2025 - June 2027",
      degree: "Masters degree",
      description:
        "Masters degree in Artificial Intelligence. A specialized programme focusing on advanced methods in AI, with particular depth in Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Knowledge Representation, and Multi-Agent Systems. The degree emphasizes both theoretical foundations and practical applications, combining research methodology, scientific exploration, and hands-on projects. It culminates in a research-oriented thesis, allowing for in-depth study of cutting-edge AI challenges in academia or industry.",
    },
    {
      educationName: "Informatics: Computer technology",
      institution: "University of Bergen",
      duration: "August 2023 - June 2025",
      degree: "Bachelors degree",
      description:
        "Bachelors degree in computer technology. Covering broadly within the field of computer science. The degree contains a lot of relevant informatics courses, such as Object-oriented programming, Database management systems, Algorithms and data structures, Operative systems, Software security and many more related topics. In addition, the degree covers a broad selection of mathematics courses, including Basic Calculus, Discrete math, Statistics and Linear algebra.",
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
      educationName: "Artificial Intelligence",
      institution: "University of Amsterdam",
      duration: "September 2025 - Juni 2027",
      degree: "Masters degree",
      description:
        "Mastergrad i Artificial Intelligence. Et spesialisert studieprogram med fordypning i avanserte metoder innen AI, særlig innen maskinlæring, dyp læring, Natural Language Processing, Computer Vision, Knowledge Representation og Multi-Agent Systems. Studiet kombinerer teoretiske fundamenter og praktiske anvendelser, med vekt på forskningsmetode, vitenskapelig utforskning og prosjekter. Graden avsluttes med en forskningsorientert masteroppgave, som gir mulighet til å fordype seg i AI-utfordringer i akademia eller industri.",
    },
    {
      educationName: "Informatikk: Datateknologi",
      institution: "Universitetet i Bergen",
      duration: "August 2023 - Juni 2025",
      degree: "Bachelorgrad",
      description:
        "Bachelorgrad i datateknologi. Graden dekker bredt innenfor informatikkfaget. Graden innholder mange relevante informatikk-emner, som Objektorientert programmering, Databaser og modellering, Algoritmer og datastrukturer, Operativsystemer, Programvaresikkerhet og mange andre relaterte emner. I tillegg dekker graden et bredt utvalg av matematikk-emner. Inkludert Grunnleggende Kalkulus, Diskret matematikk, Statistikk og Lineær algebra.",
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
      position: "Software developer",
      company: "Mnemonic",
      duration: "June 2025 - August 2025",
      description:
        "Summer internship at Mnemonic. Worked on a project involving graph visualization, gaining practical experience in software development, data representation, and teamwork in a collaborative environment.",
    },
    {
      position: "Teaching assistant",
      company: "University of Bergen",
      duration: "January 2024 - Present time",
      description:
        "Part-time job as an teaching assistant in the course, INF100: Introduction To Programming. Responsible for helping students with their assignments in group sessions, as well as grading and commenting on their work. Got to develop my educational and communicative skills, and got to further my understanding of the subject.",
    },
    {
      position: "Warehouse worker",
      company: "Asko Sentrallager",
      duration: "August 2020 - August 2024",
      description:
        "Various position percentages over the course of three years. Working full time for some stretches, while having it as a part time job during studies. Learned a lot about being reliable towards my employer, and developed a good work ethic.",
    },
  ];

  const jobsNO: JobProps[] = [
    {
      position: "Utvikler",
      company: "Mnemonic",
      duration: "Juni 2025 - August 2025",
      description:
        "Internship hos Mnemonic. Jobbet med et prosjekt innen graf-visualisering, og fikk praktisk erfaring med programvareutvikling, datarepresentasjon og teamarbeid i et samarbeidende miljø.",
    },
    {
      position: "Gruppeleder",
      company: "Universitetet i Bergen",
      duration: "Januar 2024 - dags dato",
      description:
        "Deltidsjobb som gruppeleder i emnet Introduksjon til programmering. Ansvarlig for å hjelpe studenter med oppgaver i gruppetimer, i tillegg til å rette og gi tilbakemeldinger på arbeidet deres. Utviklet mine pedagogiske og kommunikative egenskaper, og forbedret min forståelsen for faget.",
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
        "Webkom is a part of the student organization, echo. Webkom is responsible for maintaining and developing the student organizations website. Being part of a small team of developers i have gained valuable experience with working on projects in a team. I have also gained experience in, and learned lots about all aspects of full stack web development. In Webkom we mainly use a tech stack consisting of Next, React, TypeScript, Tailwind CSS and postgreSQL DB.",
    },
    {
      name: "Leader of echo Webkom",
      duration: "August 2024 - Present time",
      description:
        "After one year in Webkom, I became the leader of the group. In addition to developing and maintaining the echo website, the leadership role comes with several other responsibilities. I am responsible for organizing meetings, coordinating tasks, the recruitment process, creating onboarding plans for new members, and making technical decisions such as design choices and the development of the tech stack. Leading a team of developers has not only strengthened my leadership and collaboration skills but also made me a much better developer, as I have taken on a greater responsibility for the product we deliver.",
    },
    {
      name: "echo main board",
      duration: "January 2024 - Present time",
      description:
        "Echo's main board is responsible for facilitating the daily operations of the student association. This includes tasks such as managing events, making financial decisions, promoting echo, and further developing the organization.",
    },
  ];

  const rolesNO: RoleProps[] = [
    {
      name: "Medlem av echo Webkom",
      duration: "August 2023 - dags dato",
      description:
        "Webkom er en undergruppe av echo, linjeforeningen for informatikk på UiB. Webkom er ansvarlig for å drifte og utvikle linjeforeningens nettside. Det å være en del av et lite team med utviklere har gitt meg verdifull erfaring med prosjektarbeid og det å jobbe i et team. Jeg har også lært mye om alle aspekter ved full stack web-utvikling. I Webkom bruker vi hovedsakelig en tech-stack bestående av Next, React, TypeScript, Tailwind CSS og postgreSQL DB.",
    },
    {
      name: "Leder av echo Webkom",
      duration: "August 2024 - dags dato",
      description:
        "Etter ett år i Webkom ble jeg leder for gruppen. Ledervervet innebærer i tillegg til det å utvikle og vedlikeholde nettsiden til echo, en rekke andre ekstra ansvarsområder. Jeg er blant annet ansvarlig for å lede møter, koordinere arbeidsoppgaver, inntak av nye medlemmer, opplæringsplan for nye medlemmer og tekniske avgjørelser som designvalg og utvikling av tech-stacken. Det å være leder for et team med utviklere har både styrket leder- og samarbeidevnene mine, men også gjort meg til en mye bedre utvikler ettersom at jeg har fått et større ansvar for produktet vi leverer.",
    },
    {
      name: "echo hovedstyre",
      duration: "Januar 2024 - dags dato",
      description:
        "Echos hovedstyre har som oppgave å legge til rette for den daglige driften av linjeforeningen. Dette innebærer oppgaver som administrering av arrangementer, økonomiske beslutninger, promotering av echo og videreutvikling av organisasjonen.",
    },
  ];

  type personaliaProps = {
    q: string;
    a: string;
  };

  const personaliaEN: personaliaProps[] = [
    { q: "Name", a: "Kristian Elde Johansen" },
    { q: "Age", a: "23 years" },
    { q: "From", a: "Drøbak, Norway" },
    { q: "Hobbies", a: "Bouldering, Coding, Play handball, Watch football" },
  ];

  const personaliaNO: personaliaProps[] = [
    { q: "Navn", a: "Kristian Elde Johansen" },
    { q: "Alder", a: "23 år" },
    { q: "Fra", a: "Drøbak, Norge" },
    { q: "Hobbyer", a: "Buldring, Koding, Spille håndball, Se på fotball" },
  ];

  const techs: string[] = [
    "Python",
    "Java",
    "JavaScript/TypeScript",
    "web development",
    "Machine Learning",
    "SQL",
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
    <div className="lg:grid lg:grid-cols-4">
      <ul className=" mx-4 pt-8 text-md sm:space-x-6 space-y-6 sm:flex sm:flex-row grid-cols-2 lg:col-span-1 lg:flex-col lg:space-x-0">
        <li className="pt-6 lg:p-0 w-full sm:w-1/2 lg:w-full">
          <img
            src="profil_H24.JPG"
            alt=""
            width=""
            height=""
            className="border rounded-xl shadow-md"
          ></img>
        </li>
        <li className="border rounded-xl p-3 shadow-md  w-full sm:w-1/2 lg:w-full ">
          <SectionHeader2
            name={language === "en" ? "Personal details" : "Personalia"}
          />
          <ul className="pt-3 space-y-2">
            {personalia.map((line, i) => {
              return (
                <li key={i}>
                  <p>{line.q}</p>
                  <strong>{line.a}</strong>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="hidden lg:block border rounded-xl p-3 shadow-md">
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
      <ul className="mx-4 space-y-6 pt-8 text-md lg:col-span-3">
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
