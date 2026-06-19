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
      duration: "Sep 2025 - June 2027",
      degree: "Masters degree",
      description: [
        "GPA: 8.5/10",
        "Coursework: Machine Learning 1 + 2, Deep Learning 1 + 2, Computer Vision, Natural Language Processing, Information Retrieval, Reinforcement Learning, Fairness and Accountability in AI",
      ],
    },
    {
      educationName: "Informatics: Computer Technology",
      institution: "University of Bergen",
      duration: "Aug 2023 - June 2025",
      degree: "Bachelors degree",
      description: [
        "GPA: 4.9/5",
        "Completed the degree in 2 years instead of the standard 3-year duration",
        "Coursework: Programming, Algorithms, Software Development, Database Management, Operating Systems, Machine Learning, Mathematics, Statistics",
      ],
    },
    {
      educationName: "Economics and Leadership programme",
      institution: "Oslo Metropolitan",
      duration: "Aug 2021 - June 2022",
      degree: "One-year programme",
      description: [
        "Coursework: Business Economics, Macroeconomics, Leadership",
        "GPA: 4/5",
      ],
    },
  ];


  const educationsNO: EducationProps[] = [
    {
      educationName: "Artificial Intelligence",
      institution: "University of Amsterdam",
      duration: "Sep 2025 - Juni 2027",
      degree: "Mastergrad",
      description: [
        "GPA: 8.5/10",
        "Emner: Machine Learning 1 + 2, Deep Learning 1 + 2, Computer Vision, Natural Language Processing, Information Retrieval, Reinforcement Learning, Fairness and Accountability in AI",
      ],
    },
    {
      educationName: "Informatics: Computer Technology",
      institution: "University of Bergen",
      duration: "Aug 2023 - Juni 2025",
      degree: "Bachelorgrad",
      description: [
        "GPA: 4.9/5",
        "Fullførte graden på 2 år i stedet for standard varighet på 3 år",
        "Emner: Programmering, Algoritmer og Datastrukturer, Software Development, Database Management, Operativ Systemer, Maskinlæring, Matematikk, Statistikk",
      ],
    },
    {
      educationName: "Economics and Leadership programme",
      institution: "Oslo Metropolitan",
      duration: "Aug 2021 - Juni 2022",
      degree: "Årsstudium",
      description: [
        "Emner: Bedriftsøkonomi, Makroøkonomi, Ledelse",
        "GPA: 4/5",
      ],
    },
  ];

  const jobsEN: JobProps[] = [
    {
      position: "Internship as Data Scientist",
      company: "Oda",
      duration: "June 2026 - Aug 2026",
      description: [
        "Applying data analysis and model development to generate actionable business insights.",
      ],
    },
    {
      position: "Internship as Software Developer",
      company: "Mnemonic",
      duration: "June 2025 - Aug 2025",
      description: [
        "Built a graph-based visualization tool for software-module communication.",
        "Developed the project end-to-end in a small, independent team.",
      ],
    },
    {
      position: "Teaching Assistant",
      company: "University of Amsterdam",
      duration: "Sep 2026 - June 2027",
      description: [
        "Part of the MSc AI TA pool",
        "TA in the course Computer Vision",
        "Teaching seminars and grading coursework",
      ],
    },
    {
      position: "Teaching Assistant",
      company: "University of Bergen",
      duration: "Jan 2024 - Jun 2025",
      description: [
        "Taught Python programming.",
        "Provided cross-course informatics homework support.",
        "Graded coursework, assisted with teaching and held crash courses.",
      ],
    },
    {
      position: "Warehouse Worker",
      company: "ASKO",
      duration: "Aug 2020 - Aug 2024",
      description: [
        "Various position percentages. Part-time during studies.",
      ],
    },
  ];


  const jobsNO: JobProps[] = [
    {
      position: "Internship som Data Scientist",
      company: "Oda",
      duration: "Juni 2026 - Aug 2026",
      description: [
        "Bruker dataanalyse og modellutvikling for å skape innsikt.",
      ],
    },
    {
      position: "Internship som Software Developer",
      company: "Mnemonic",
      duration: "Juni 2025 - Aug 2025",
      description: [
        "Bygget et grafbasert visualiseringsverktøy for kommunikasjon mellom software-moduler.",
        "Utviklet prosjektet end-to-end i et lite, selvstendig team.",
      ],
    },
    {
      position: "Teaching Assistant",
      company: "University of Amsterdam",
      duration: "Sep 2026 - Juni 2027",
      description: [
        "Del av MSc AI TA pool",
        "TA i kurset Computer Vision",
        "Underviser seminarer og retter coursework",
      ],
    },
    {
      position: "Teaching Assistant",
      company: "Universitetet i Bergen",
      duration: "Jan 2024 - Jun 2025",
      description: [
        "Underviste i Python-programmering.",
        "Arrangerte leksehjelp for alle informatikkemner.",
        "Rettet innleveringer, assisterte med undervisning og holdt kræsjkurs.",
      ],
    },
    {
      position: "Warehouse Worker",
      company: "ASKO",
      duration: "Aug 2020 - Aug 2024",
      description: [
        "Varierende stillingsprosenter. Deltid under studier.",
      ],
    },
  ];

  const rolesEN: RoleProps[] = [
    {
      name: "echo Webkom",
      duration: "Aug 2023 - June 2025",
      description: [
        "Maintained and developed the student organization's website",
        "Served as leader the second year",
      ],
    },
    {
      name: "echo main board",
      duration: "Jan 2024 - April 2025",
      description: [
        "Responsible for facilitating the daily operations of the student association",
        "Managed events, made financial decisions, promoted echo and developed the organization",
      ],
    },
  ];


  const rolesNO: RoleProps[] = [
    {
      name: "echo Webkom",
      duration: "Aug 2023 - Juni 2025",
      description: [
        "Vedlikeholdt og utviklet nettsiden til studentorganisasjonen",
        "Var leder det andre året",
      ],
    },
    {
      name: "echo hovedstyre",
      duration: "Jan 2024 - April 2025",
      description: [
        "Ansvarlig for å tilrettelegge for den daglige driften av studentforeningen",
        "Administrerte arrangementer, tok økonomiske beslutninger, promoterte echo og videreutviklet organisasjonen",
      ],
    },
  ];

  type personaliaProps = {
    q: string;
    a: string;
  };

  type SkillGroup = {
    category: string;
    skills: string;
  };

  const personaliaEN: personaliaProps[] = [
    { q: "Name", a: "Kristian Elde Johansen" },
    { q: "Age", a: "25 years" },
    { q: "From", a: "Drøbak, Norway" },
    { q: "Hobbies", a: "Bouldering, Coding, Football" },
    { q: "Email", a: "kristian.elde@proton.me" },
    { q: "Phone", a: "+47 957 44 110" },
  ];

  const personaliaNO: personaliaProps[] = [
    { q: "Navn", a: "Kristian Elde Johansen" },
    { q: "Alder", a: "25 år" },
    { q: "Fra", a: "Drøbak, Norge" },
    { q: "Hobbyer", a: "Buldring, Koding, Fotball" },
    { q: "Email", a: "kristian.elde@proton.me" },
    { q: "Phone", a: "+47 957 44 110" },
  ];


  const skillsEN: SkillGroup[] = [
    {
      category: "Hard",
      skills: "Machine Learning, Software Development, Data Analysis, Git",
    },
    {
      category: "Soft",
      skills: "Teamwork, Driven, Structured, Analytical",
    },
    {
      category: "Languages",
      skills: "Python, JavaScript/TypeScript, Java, SQL, Go",
    },
  ];

  const skillsNO: SkillGroup[] = [
    {
      category: "Hard",
      skills: "Maskinlæring, Softwareutvikling, Dataanalyse, Git",
    },
    {
      category: "Soft",
      skills: "Samarbeid, Målrettet, Strukturert, Analytisk",
    },
    {
      category: "Språk",
      skills: "Python, JavaScript/TypeScript, Java, SQL, Go",
    },
  ];

  const educations = language === "en" ? educationsEN : educationsNO;
  const jobs = language === "en" ? jobsEN : jobsNO;
  const roles = language === "en" ? rolesEN : rolesNO;
  const personalia = language === "en" ? personaliaEN : personaliaNO;
  const skills = language === "en" ? skillsEN : skillsNO;

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
            name="Skills"
          />
          <ul className="list-disc list-inside space-y-1 pt-3">
            {skills.map((skill) => {
              return (
                <li key={skill.category}>
                  <strong>{skill.category}:</strong> {skill.skills}
                </li>
              );
            })}
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
            name={language === "en" ? "Work Experience" : "Jobberfaring"}
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
            name={language === "en" ? "Extracurricular Work" : "Frivillige verv"}
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
