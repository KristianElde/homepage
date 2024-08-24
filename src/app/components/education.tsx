export type EducationProps = {
  educationName: string;
  institution: string;
  duration: string;
  degree: string;
  description: string;
};

export function Education(props: EducationProps) {
  return (
    <ul>
      <li>
        <h3 className="font-semibold">
          {props.educationName} @ {props.institution}
        </h3>
      </li>
      <li>
        <h4>{props.duration}</h4>
      </li>
      <li className="mx-4 my-2">
        <p>{props.description}</p>
      </li>
    </ul>
  );
}

export default Education;
