type WargearOption = {
  entry: string;
  options?: string[];
};

export interface WargearOptionsProps {
  wargearOptions: WargearOption[];
}

export default function WargearOptions(props: WargearOptionsProps) {
  const { wargearOptions } = props;

  if (wargearOptions.length === 0) return null;

  return (
    <>
      <div className='bg-red-950 py-1 flex items-center p-2 uppercase text-base font-bold text-white lg:h-10'>
        Wargear Options
      </div>
      <div className='flex flex-col gap-4 text-black p-4 text-sm'>
        <ul className='list-disc list-inside [&_ul]:list-[revert]'>
          {wargearOptions?.map(({ entry, options }) => (
            <li key={entry}>
              {entry}{' '}
              <ul className='pl-4 list-disc list-inside'>
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
