type WargearOption = {
  entry: string;
  options?: string[];
};

export interface WargearOptionsProps {
  simplify: boolean;
  wargearOptions: WargearOption[];
}

export default function WargearOptions(props: WargearOptionsProps) {
  const { simplify, wargearOptions } = props;

  if (wargearOptions.length === 0) return null;
  if (simplify) return null;

  return (
    <>
      <div className="flex items-center bg-red-950 p-2 py-3 font-bold text-white uppercase lg:h-10">
        Wargear Options
      </div>
      <div className="flex flex-col gap-4 p-4">
        <ul className="list-inside list-disc [&_ul]:list-[revert]">
          {wargearOptions?.map(({ entry, options }) => (
            <li key={entry}>
              {entry}{' '}
              <ul className="list-inside list-disc pl-4">
                {options?.map((val) => (
                  <li key={val}>{val}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
