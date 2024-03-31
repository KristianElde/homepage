export type JobProps = {
  position: string;
  company: string;
  duration: string;
  description: string;
};

export function Job(props: JobProps) {
  return (
    <ul className="space-y-2">
      <li>
        <h3>
          {props.position} @ {props.company}
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
