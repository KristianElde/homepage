interface SectionHeaderProps {
  name: string;
}

export function SectionHeader(props: SectionHeaderProps) {
  return <h2 className="border-b font-bold">{props.name}</h2>;
}

export default SectionHeader;
