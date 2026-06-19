export type JobProps = {
  position: string;
  company: string;
  duration: string;
  description: string[];
};

export function Job(props: JobProps) {
  return (
    <ul>
      <li>
        <h3 className="font-semibold">
          {props.position} @ {props.company}
        </h3>
      </li>
      <li>
        <h4>{props.duration}</h4>
      </li>
      <li className="mx-4 my-2">
        <ul className="list-disc space-y-1 pl-5">
          {props.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
}
