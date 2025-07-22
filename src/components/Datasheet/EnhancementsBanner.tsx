import ArmyOfFaithDetatchment from '../../content/Sororitas/detatchments/army-of-faith';
import type { Enhancement } from '../../content/core/types';

export interface EnhancementsBannerProps {
  simple?: boolean;
  enhancements: string[];
}

export default function EnhancementsBanner(props: EnhancementsBannerProps) {
  const { simple, enhancements } = props;

  if (enhancements.length === 0) return null;

  const getEnhancements: Enhancement[] = enhancements.map(
    (name) => ArmyOfFaithDetatchment.enhancements[name]
  );

  return (
    <>
      {getEnhancements.map(({ name, effect }) => (
        <div key={name} className="col-span-4 flex flex-col">
          <div className="bg-red-950 p-4 font-bold text-white uppercase">
            {name}
          </div>
          <div className="p-4">
            {simple ? (effect.simple ?? effect.oracle) : effect.oracle}
          </div>
        </div>
      ))}
    </>
  );
}
