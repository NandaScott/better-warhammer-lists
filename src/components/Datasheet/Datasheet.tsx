import clsx from 'clsx';
import Crosshair from '../../assets/crosshair.svg?react';
import CrossedSwords from '../../assets/crossed-swords.svg?react';
import { useEffect, useRef, useState } from 'react';
import HeaderButton, { type Stat } from './HeaderButton';
import type { EnhancementsBannerProps } from './EnhancementsBanner';
import EnhancementsBanner from './EnhancementsBanner';
import DatasheetTable, {
  type MeleeWeapon,
  type RangedWeapon,
} from './DatasheetTable';
import type { WargearOptionsProps } from './WeargearOptions';
import WargearOptions from './WeargearOptions';
import type { LeaderAbilityProps } from './LeaderAbility';
import LeaderAbility from './LeaderAbility';

export type OneToSix = 1 | 2 | 3 | 4 | 5 | 6;

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

type Ability = {
  name: string;
  effect: string;
  note?: string;
};

export interface DatasheetProps {
  stats: Stat[];
  enhancements: EnhancementsBannerProps['enhancements'];
  rangedWeapons: RangedWeapon[];
  meleeWeapons: MeleeWeapon[];
  abilities: {
    core: CoreAbilities[];
    faction: 'Acts of Faith';
    datasheetAbilities: Ability[];
  };
  wargearAbilities?: Ability[];
  setupAbilities?: Ability[];
  wargearOptions: WargearOptionsProps['wargearOptions'];
  leaderAbility: LeaderAbilityProps['leaderAbility'];
  unitComposition: {
    models: string[];
    defaultWeapons: string[];
    points: { quantity: string; total: number }[];
    baseSizes: { model: string; size: number }[];
  };
  keywords: string[];
  factionKeywords: string[];
}

export default function Datasheet(props: DatasheetProps) {
  const {
    stats,
    enhancements,
    rangedWeapons,
    meleeWeapons,
    abilities,
    wargearAbilities,
    setupAbilities,
    wargearOptions,
    leaderAbility,
    unitComposition,
    keywords,
    factionKeywords,
  } = props;

  // I don't know how or why, but defaulting this to true makes the component more responsive on initial load.
  const [open, setOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight = useRef<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      contentHeight.current = open
        ? contentRef.current.getBoundingClientRect().height
        : 0;
    }
  }, [open]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className='w-full'>
      <HeaderButton
        contentHeight={contentHeight.current}
        handleClick={handleClick}
        stats={stats}
      />

      <div
        style={{ maxHeight: `${contentHeight.current}px` }}
        className={clsx(
          'transition-all ease-in-out overflow-hidden w-full',
          open ? 'duration-300' : 'duration-150'
        )}
      >
        <div
          ref={contentRef}
          className='grid grid-cols-4 bg-stone-100 border-red-900 border-2 border-t-0'
        >
          <EnhancementsBanner enhancements={enhancements} />
          <div className='col-span-4 md:col-span-3 border-r-2 border-red-900'>
            <DatasheetTable icon={Crosshair} weapons={rangedWeapons} />
            <DatasheetTable icon={CrossedSwords} weapons={meleeWeapons} />
            <WargearOptions wargearOptions={wargearOptions} />
            <LeaderAbility leaderAbility={leaderAbility} />
          </div>

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
                  <div>
                    <strong>{name}:</strong> {effect} <br />
                    <span className='italic'>{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {wargearAbilities && (
              <>
                <div className='bg-red-950 py-1 flex items-center p-2 uppercase text-base font-bold text-white lg:h-10'>
                  Wargear Abilities
                </div>
                <div className='p-2 flex flex-col gap-2'>
                  {wargearAbilities.map(({ name, effect }) => (
                    <div>
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
                    <li>{item}</li>
                  ))}
                </ul>
                <ul>
                  {unitComposition.defaultWeapons.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
              {unitComposition.points.map(({ quantity, total }) => (
                <div className='flex justify-between items-baseline w-full border-b-2 border-dotted border-black'>
                  <div>{quantity}</div> <div>{total} pts</div>
                </div>
              ))}
              <div className='flex flex-col gap-1'>
                {unitComposition.baseSizes.map(({ model, size }) => (
                  <div>
                    {model}: {size}mm
                  </div>
                ))}
              </div>
            </div>
            {setupAbilities?.map(({ name, effect }) => (
              <>
                <div className='bg-red-950 py-1 flex items-center p-2 uppercase text-base font-bold text-white h-10'>
                  {name}
                </div>
                <div className='p-2 flex flex-col gap-2'>{effect}</div>
              </>
            ))}
          </div>
          <div className='border-red-900 border-r-2 col-span-4 md:col-span-3 border-t-2 text-black text-base bg-stone-300 flex flex-col lg:flex-row lg:items-center lg:gap-2 lg:py-1 p-2'>
            <span className='uppercase text-xs lg:text-base'>Keywords:</span>{' '}
            <strong>{keywords.join(', ')}</strong>
          </div>
          <div className='border-t-2 border-red-900 col-span-4 md:col-span-1 p-3 text-base text-white bg-zinc-900 flex flex-col gap-1'>
            <span className='uppercase text-xs'>Faction Keywords:</span>
            <strong>{factionKeywords.join(', ')}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
