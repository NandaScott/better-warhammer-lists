import clsx from 'clsx';
import Crosshair from '../../assets/crosshair.svg?react';
import CrossedSwords from '../../assets/crossed-swords.svg?react';
import { useEffect, useRef, useState } from 'react';

import HeaderButton, { type HeaderButtonProps } from './HeaderButton';
import EnhancementsBanner, {
  type EnhancementsBannerProps,
} from './EnhancementsBanner';
import DatasheetTable, {
  type DatasheetTableMeleeProps,
  type DatasheetTableRangedProps,
} from './DatasheetTable';
import WargearOptions, { type WargearOptionsProps } from './WeargearOptions';
import LeaderAbility, { type LeaderAbilityProps } from './LeaderAbility';
import AbilitiesBlock, { type AbilitiesBlockProps } from './AbilitiesBlock';

export type OneToSix = 1 | 2 | 3 | 4 | 5 | 6;

export interface DatasheetProps {
  stats: HeaderButtonProps['stats'];
  enhancements: EnhancementsBannerProps['enhancements'];
  rangedWeapons: DatasheetTableRangedProps['weapons'];
  meleeWeapons: DatasheetTableMeleeProps['weapons'];
  wargearOptions: WargearOptionsProps['wargearOptions'];
  leaderAbility: LeaderAbilityProps['leaderAbility'];
  abilities: AbilitiesBlockProps['abilities'];
  wargearAbilities: AbilitiesBlockProps['wargearAbilities'];
  setupAbilities: AbilitiesBlockProps['setupAbilities'];
  unitComposition: AbilitiesBlockProps['unitComposition'];
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

          <AbilitiesBlock
            abilities={abilities}
            unitComposition={unitComposition}
            setupAbilities={setupAbilities}
            wargearAbilities={wargearAbilities}
          />
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
