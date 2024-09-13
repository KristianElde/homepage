interface SectionHeaderProps {
  name: string;
}

export function SectionHeader(props: SectionHeaderProps) {
  return <h1 className="border-b font-bold">{props.name}</h1>;
}

export default SectionHeader;
