export type RoleProps = {
  name: string;
  duration: string;
  description: string;
};

export function Role(props: RoleProps) {
  return (
    <ul className="space-y-2">
      <li>
        <h3>{props.name}</h3>
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

export default Role;
