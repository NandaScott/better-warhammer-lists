export interface LeaderAbilityProps {
  simplify: boolean;
  leaderAbility: string[];
}

export default function LeaderAbility(props: LeaderAbilityProps) {
  const { simplify, leaderAbility } = props;

  if (leaderAbility.length === 0) return null;
  if (simplify) return null;

  return (
    <>
      <div className='bg-red-950 py-1 flex items-center p-2 uppercase lg:h-10'>
        Leader
      </div>
      <div className='p-4'>
        <div>This unit can be attached to the following units:</div>
        <div className='flex flex-col gap-4 p-4 uppercase'>
          <ul className='list-disc list-inside [&_ul]:list-[revert]'>
            {leaderAbility?.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
