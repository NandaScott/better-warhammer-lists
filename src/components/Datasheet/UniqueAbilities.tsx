export interface UniqueAbilitiesProps {
  uniqueAbilities?: {
    title: string;
    abilities: { name: string; text: string }[];
  };
}

export default function UniqueAbilities(props: UniqueAbilitiesProps) {
  const { uniqueAbilities } = props;

  if (!uniqueAbilities) return null;

  return (
    <>
      <div className="flex items-center bg-red-950 p-2 py-3 font-bold text-white uppercase md:gap-4 lg:h-10">
        {uniqueAbilities.title}
      </div>
      <div className="p-2">
        {uniqueAbilities.abilities.map(({ name, text }) => (
          <div key={name} className="flex flex-col gap-2">
            <span className="max-w-fit rounded border-2 border-stone-700 bg-black p-1 px-2 font-semibold text-white">
              {name}
            </span>
            {text}
          </div>
        ))}
      </div>
    </>
  );
}
