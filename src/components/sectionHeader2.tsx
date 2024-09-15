interface SectionHeaderProps {
  name: string;
}

export function SectionHeader2(props: SectionHeaderProps) {
  return <h3 className="border-b font-bold">{props.name}</h3>;
}

export default SectionHeader2;
