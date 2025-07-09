import Crosshair from '../../assets/crosshair.svg?react';
import CrossedSwords from '../../assets/crossed-swords.svg?react';
import { useEffect, useRef } from 'react';

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

const defaultTimerDuration = 300;

export type OneToSix = 1 | 2 | 3 | 4 | 5 | 6;

export interface DatasheetProps {
  simplify: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  open: boolean;
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
    simplify,
    onClick,
    open,
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
  const wrappingRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const firstRender = useRef<boolean>(true);

  useEffect(() => {
    const parent = parentRef.current;
    const childHeight = wrappingRef.current?.getBoundingClientRect().height;
    if (!parent || !childHeight) return () => null;

    // handle closed to open
    if (open) {
      firstRender.current = false;
      parent.classList.remove('collapse-hidden');
      parent.style.height = `${childHeight.toString()}px`;
      const timer = setTimeout(() => {
        parent.classList.add('collapse-entered');
      }, defaultTimerDuration);

      const timer2 = setTimeout(() => {
        parent.style.height = 'auto';
      }, defaultTimerDuration + 100);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }

    if (!open) {
      // Prevents the collapse from opening early
      if (firstRender.current) {
        firstRender.current = false;
        return () => null;
      }

      parent.style.height = `${childHeight.toString()}px`; // switching from 'auto' to height size
      parent.classList.remove('collapse-entered');

      const timer = setTimeout(() => {
        parent.style.height = '0px';
      }, 1);

      const timer2 = setTimeout(() => {
        parent.classList.add('collapse-hidden');
      }, defaultTimerDuration + 100);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }

    return () => null;
  }, [open]);

  return (
    <div className='w-full text-black'>
      <HeaderButton stats={stats} open={open} handleClick={onClick} />

      <div
        ref={parentRef}
        style={{
          height: '0px',
          transitionDuration: `${defaultTimerDuration}ms`,
        }}
        className='collapse-container collapse-hidden'
      >
        <div
          ref={wrappingRef}
          className='grid grid-cols-4 bg-stone-100 border-red-900 border-2 border-t-0'
        >
          <EnhancementsBanner enhancements={enhancements} />
          <div className='col-span-4 md:col-span-3 md:border-r-2 border-red-900'>
            <DatasheetTable
              title='Ranged Weapons'
              simplify={simplify}
              icon={Crosshair}
              weapons={rangedWeapons}
            />
            <DatasheetTable
              title='Melee Weapons'
              simplify={simplify}
              icon={CrossedSwords}
              weapons={meleeWeapons}
            />
            <WargearOptions
              simplify={simplify}
              wargearOptions={wargearOptions}
            />
            <LeaderAbility simplify={simplify} leaderAbility={leaderAbility} />
          </div>

          <AbilitiesBlock
            simplify={simplify}
            abilities={abilities}
            unitComposition={unitComposition}
            setupAbilities={setupAbilities}
            wargearAbilities={wargearAbilities}
          />
          <div className='border-red-900 border-r-2 col-span-4 md:col-span-3 border-t-2 bg-stone-300 flex flex-col lg:flex-row lg:items-center lg:gap-2 lg:py-1 p-2'>
            <span className='uppercase'>Keywords:</span>{' '}
            <span>{keywords.join(', ')}</span>
          </div>
          <div className='border-t-2 border-red-900 col-span-4 md:col-span-1 p-3 bg-zinc-900 flex flex-col gap-1'>
            <span className='uppercase'>Faction Keywords:</span>
            <span>{factionKeywords.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
