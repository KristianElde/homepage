export type EducationProps = {
  educationName: string;
  institution: string;
  duration: string;
  degree: string;
  description: string;
};

export function Education(props: EducationProps) {
  return (
    <ul className="space-y-2">
      <li>
        <h3>{props.educationName}</h3>
      </li>
      <li className="mx-2">
        <h4>{props.institution}</h4>
        <h4>{props.duration}</h4>
        <h4>{props.degree}</h4>
      </li>
      <li className="mx-4">
        <p>{props.description}</p>
      </li>
    </ul>
  );
}

export default Education;
