export interface UniqueAbilitiesProps {
  uniqueAbilities?: {
    title: string;
    abilities: { name: string; text: string }[];
  };
}

export default function UniqueAbilities(props: UniqueAbilitiesProps) {
  const { uniqueAbilities } = props;

  if (!uniqueAbilities) return null;

  return <></>;
}
