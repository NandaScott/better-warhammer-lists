export interface LeaderAbilityProps {
  leaderAbility: string[];
}

export default function LeaderAbility(props: LeaderAbilityProps) {
  const { leaderAbility } = props;

  if (leaderAbility.length === 0) return null;

  return (
    <>
      <div className='bg-red-950 py-1 flex items-center p-2 uppercase text-base font-bold text-white lg:h-10'>
        Leader
      </div>
      <div className='text-black p-4'>
        <div>This unit can be attached to the following units:</div>
        <div className='flex flex-col gap-4 p-4 text-sm font-bold uppercase'>
          <ul className='list-disc list-inside [&_ul]:list-[revert]'>
            {leaderAbility?.map((entry) => (
              <li>{entry}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
