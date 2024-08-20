export default function Projects() {
  const { language, changeLanguage } = useLang();

  const projectsEN: ProjectProps[] = [
    {
      projectName: "echo.uib.no",
      imgPath: "profile_picture.png",
      github: "",
      description: "",
    },
  ];

  const projectsNO: ProjectProps[] = [
    {
      projectName: "echo.uib.no",
      imgPath: "profile_picture.png",
      github: "",
      description:
        "Webkom er grovt. Lærer så mye! OM er gud. Jizze heeelt idiot der a. Zeno må drikke vann. Mer wafflin må komme for trenger utfyllende tekst til å vises på nettsiden. Kommer til å stå skrevet om hva jeg har lært og om hva jeg gjør.",
    },
  ];

  const projects = language === "en" ? projectsEN : projectsNO;

  return (
    <>
      <ul>
        {projects.map((project, i) => (
          <li key={i}>
            <Project {...project} />
          </li>
        ))}
      </ul>
    </>
  );
}
