import Education, { type EducationProps } from "../components/education";

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
  return (
    <>
      <h1 className="border-b mx-4">Curriculum vitae</h1>
      <ul className="mx-4 space-y-4 pt-4">
        <li>
          <h2>Utdanning</h2>
          <ul className="space-y-4 mx-2">
            {educations.map((education, i) => (
              <li
                key={i}
                className={
                  i % 2 === 0 ? "bg-background" : "bg-background-shade"
                }
              >
                <Education {...education} />
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h2>Job experience</h2>
        </li>
        <li>
          <h2>Volounteer roles</h2>
        </li>
      </ul>
    </>
  );
}
