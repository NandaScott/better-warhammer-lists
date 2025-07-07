export interface EnhancementsBannerProps {
  enhancements: {
    name: string;
    effect: string;
  }[];
}

export default function EnhancementsBanner(props: EnhancementsBannerProps) {
  const { enhancements } = props;

  if (enhancements.length === 0) return null;

  return (
    <>
      {enhancements.map(({ name, effect }) => (
        <div key={name} className='col-span-4 flex flex-col'>
          <div className='uppercase p-4 text-white font-bold text-lg items-center bg-red-950'>
            {name}
          </div>
          <div className='text-black p-4'>{effect}</div>
        </div>
      ))}
    </>
  );
}
