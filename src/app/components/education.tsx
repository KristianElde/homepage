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
        <h3>
          {props.educationName} @ {props.institution}
        </h3>
      </li>
      <li>
        <h4>{props.duration}</h4>
      </li>
      <li className="mx-4">
        <p>{props.description}</p>
      </li>
    </ul>
  );
}

export default Education;
