import { Fragment } from 'react/jsx-runtime';
import type { OneToSix } from './Datasheet';

type CoreAbilities =
  | 'Deep Strike'
  | `Deadly Demise ${OneToSix}`
  | 'Fights First'
  | 'Firing Deck'
  | 'Infiltrators'
  | 'Leader'
  | 'Lone Operative'
  | `Scouts ${OneToSix}"`
  | 'Stealth';

export type Ability = {
  name: string;
  effect: string;
  note?: string;
};

type WargearAbility = Ability & {
  equipped: boolean;
};

export interface AbilitiesBlockProps {
  abilities: {
    core: CoreAbilities[];
    faction: 'Acts of Faith';
    datasheetAbilities: Ability[];
  };
  wargearAbilities: WargearAbility[];
  setupAbilities: Ability[];
  unitComposition: {
    models: string[];
    defaultWeapons: string[];
    points: { quantity: string; total: number }[];
    baseSizes: { model: string; size: number }[];
  };
}

export default function AbilitiesBlock(props: AbilitiesBlockProps) {
  const { abilities, wargearAbilities, setupAbilities, unitComposition } =
    props;

  return (
    <div className='bg-stone-100 border-red-900 divide-stone-900 text-black col-span-4 md:col-span-1 text-sm'>
      <div className='bg-red-950 py-1 flex items-center p-2 uppercase text-base font-bold text-white lg:h-10'>
        Abilities
      </div>
      <div className='divide-dotted divide-y'>
        <div className='p-2'>
          CORE: <strong>{abilities.core.join(', ')}</strong>
        </div>
        <div className='p-2'>
          FACTION: <strong>{abilities.faction}</strong>
        </div>
        <div className='p-2 flex flex-col gap-2'>
          {abilities.datasheetAbilities.map(({ name, effect, note }) => (
            <div key={name}>
              <strong>{name}:</strong> {effect} <br />
              <span className='italic'>{note}</span>
            </div>
          ))}
        </div>
      </div>

      {wargearAbilities.length > 0 && (
        <>
          <div className='bg-red-950 py-1 flex items-center p-2 uppercase text-base font-bold text-white lg:h-10'>
            Wargear Abilities
          </div>
          <div className='p-2 flex flex-col gap-2'>
            {wargearAbilities.map(({ name, effect }) => (
              <div key={name}>
                <strong>{name}:</strong> {effect}
              </div>
            ))}
          </div>
        </>
      )}
      <div className='bg-red-950 py-1 flex items-center p-2 uppercase text-base font-bold text-white lg:h-10'>
        Unit Composition
      </div>
      <div className='p-2 flex flex-col gap-2 divide-y divide-gray-300'>
        <div className='pb-2'>
          <ul className='list-disc list-inside'>
            {unitComposition.models.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {unitComposition.defaultWeapons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {unitComposition.points.map(({ quantity, total }) => (
          <div
            key={total}
            className='flex justify-between items-baseline w-full border-b-2 border-dotted border-black'
          >
            <div>{quantity}</div> <div>{total} pts</div>
          </div>
        ))}
        <div className='flex flex-col gap-1'>
          {unitComposition.baseSizes.map(({ model, size }) => (
            <div key={model}>
              {model}: {size}mm
            </div>
          ))}
        </div>
      </div>
      {setupAbilities.length > 1 &&
        setupAbilities.map(({ name, effect }) => (
          <Fragment key={name}>
            <div className='bg-red-950 py-1 flex items-center p-2 uppercase text-base font-bold text-white h-10'>
              {name}
            </div>
            <div className='p-2 flex flex-col gap-2'>{effect}</div>
          </Fragment>
        ))}
    </div>
  );
}
