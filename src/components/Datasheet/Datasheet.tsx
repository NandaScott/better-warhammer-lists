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
import { Badge } from '../Badge';
import UniqueAbilities, { type UniqueAbilitiesProps } from './UniqueAbilities';

const defaultTimerDuration = 300;

export type DiceType = 'D3' | 'D6';
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
  damaged?: AbilitiesBlockProps['damaged'];
  supremeCommander?: AbilitiesBlockProps['supremeCommander'];
  uniqueAbilities?: UniqueAbilitiesProps['uniqueAbilities'];
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
    damaged,
    uniqueAbilities,
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
    <div className="w-full text-black">
      <HeaderButton stats={stats} open={open} handleClick={onClick} />

      <div
        ref={parentRef}
        style={{
          height: '0px',
          transitionDuration: `${defaultTimerDuration}ms`,
        }}
        className="collapse-container collapse-hidden"
      >
        <div
          ref={wrappingRef}
          className="grid grid-cols-4 border-2 border-t-0 border-red-900 bg-stone-100"
        >
          <EnhancementsBanner enhancements={enhancements} />
          <div className="col-span-4 border-red-900 lg:col-span-3 lg:border-r-2">
            <div className="overflow-x-auto">
              <DatasheetTable
                title="Ranged Weapons"
                simplify={simplify}
                icon={Crosshair}
                weapons={rangedWeapons}
              />
              <DatasheetTable
                title="Melee Weapons"
                simplify={simplify}
                icon={CrossedSwords}
                weapons={meleeWeapons}
              />
            </div>
            <WargearOptions
              simplify={simplify}
              wargearOptions={wargearOptions}
            />
            <LeaderAbility simplify={simplify} leaderAbility={leaderAbility} />
            <UniqueAbilities uniqueAbilities={uniqueAbilities} />
          </div>

          <AbilitiesBlock
            simplify={simplify}
            abilities={abilities}
            unitComposition={unitComposition}
            setupAbilities={setupAbilities}
            wargearAbilities={wargearAbilities}
            damaged={damaged}
          />
          <div className="col-span-4 flex flex-col gap-2 border-t-2 border-red-900 bg-stone-300 p-2 md:col-span-2 lg:col-span-3 lg:items-start lg:gap-2 lg:border-r-2 lg:p-4">
            <span className="font-semibold underline underline-offset-2">
              Keywords
            </span>{' '}
            <div className="flex flex-wrap gap-2">
              {keywords.map((text) => (
                <Badge key={text} size="medium" text={text} />
              ))}
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-2 border-t-2 border-red-900 bg-zinc-900 p-3 md:col-span-2 lg:col-span-1">
            <span className="font-semibold text-white underline underline-offset-2">
              Faction Keywords
            </span>
            <div className="flex flex-wrap gap-2">
              {factionKeywords.map((text) => (
                <Badge key={text} size="medium" text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
