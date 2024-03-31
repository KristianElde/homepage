import Education, { type EducationProps } from "../components/education";
import { Job, JobProps } from "../components/job";
import Role, { RoleProps } from "../components/role";
import SectionHeader from "../components/sectionHeader";

export default function CV() {
  const educations: EducationProps[] = [
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

  const jobs: JobProps[] = [
    {
      position: "Teaching assistant",
      company: "University of Bergen",
      duration: "January 2024 - Present time",
      description:
        "Part-time job as an teaching assistant in th cours, Introduction to programming. Responsible for helping students with their assignments in group sessions, as well as grading and commenting on their work. Got to develop my educational and communicative skills, and got to further my understanding for the subject.",
    },
    {
      position: "Warehouse worker",
      company: "Asko Sentrallager",
      duration: "August 2020 - August 2023",
      description:
        "Various position percantages over the course of three years. Working full time for some stretsches, while having it as an part time job during studies. Learned a lot about being reliable towards my employeer, and developed a good work ethic.",
    },
  ];

  const roles: RoleProps[] = [
    {
      name: "echo Webkom",
      duration: "August 2023 - Present time",
      description:
        "Webkom is a part of the student organization, echo. Webkom is responsible for maintaining and developing the student organizations website. Being part of a small team of developers i have gained valuable experience with working on projects in a team. I have also gained experience in and learned lots about all aspects of full stack web development. In Webkom we mainly used a techstack consisting of Next, React, TypeScript, Tailwind CSS and postgres DB.",
    },
    {
      name: "echo main board",
      duration: "January 2024 - Present time",
      description: "",
    },
  ];
  return (
    <>
      <ul className="mx-4 space-y-12 pt-8 text-md">
        <li>
          <SectionHeader name="Education" />
          <ul className="space-y-6 pt-1">
            {educations.map((education, i) => (
              <li key={i}>
                <Education {...education} />
              </li>
            ))}
          </ul>
        </li>
        <li>
          <SectionHeader name="Job experience" />
          <ul className="space-y-6 pt-1">
            {jobs.map((job, i) => (
              <li key={i}>
                <Job {...job} />
              </li>
            ))}
          </ul>
        </li>
        <li>
          <SectionHeader name="Volunteer roles" />
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
