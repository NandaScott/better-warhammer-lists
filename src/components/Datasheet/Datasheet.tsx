// Base
import { Fragment } from 'react';
import { v4 as uuidV4 } from 'uuid';
import clsx from 'clsx';
import './Datasheet.css';

// Internal Components
import HeaderButton from './HeaderButton';
import { DatasheetTable } from '../DatasheetTable';
import { Badge } from '../Badge';
import { Collapse } from '../Collapse';

// Icons
import Crosshair from '../../assets/icons/crosshair.svg?react';
import CrossedSwords from '../../assets/icons/crossed-swords.svg?react';
import SkullIcon from '../../assets/icons/skull-icon.svg?react';

// Content
import type { Datasheet } from '../../content/core/types';

export interface DatasheetProps extends Datasheet {
  simplify: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  open: boolean;
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
    wargearAbilities: pWargearAbilities,
    setupAbilities,
    wargearOptions,
    leaderAbility,
    unitComposition,
    keywords,
    factionKeywords,
    damaged,
    uniqueAbilities,
    supremeCommander,
  } = props;

  const wargearAbilities = Object.values(pWargearAbilities);

  const wargear = wargearAbilities.filter((val) => {
    if (!simplify) return true;
    if (!val.equipped) return false;
    return true;
  });

  return (
    <div className="w-full text-black">
      <HeaderButton stats={stats} open={open} handleClick={onClick} />

      <Collapse
        open={open}
        className="grid grid-cols-4 border-2 border-t-0 border-red-900 bg-stone-100"
      >
        <div
          key={enhancements.name}
          className={clsx(
            'col-span-4 flex flex-col',
            enhancements.name ?? 'hidden'
          )}
        >
          <div className="banner p-4">{enhancements.name}</div>
          <div className="p-4">
            {simplify
              ? (enhancements.effect?.simple ?? enhancements.effect?.oracle)
              : enhancements.effect?.oracle}
          </div>
        </div>

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

          <div className={clsx(simplify && 'hidden')}>
            <div className="banner">Wargear Options</div>
            <div className="flex flex-col gap-4 p-4">
              <ul>
                {wargearOptions.map(({ entry, options }) => (
                  <li key={uuidV4()}>
                    {entry}{' '}
                    <ul className="pl-4">
                      {options?.map((val) => (
                        <li key={val}>{val}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={clsx(leaderAbility.length === 0 && 'hidden')}>
            <div className="banner">Leader</div>
            <div className="p-4">
              <div>This unit can be attached to the following units:</div>
              <div className="flex flex-col gap-4 p-4 uppercase">
                <ul>
                  {leaderAbility?.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={clsx(!uniqueAbilities && 'hidden')}>
            <div className="banner flex items-center p-2 py-3 md:gap-4 lg:h-10">
              {uniqueAbilities?.title}
            </div>
            <div className="p-2">
              {uniqueAbilities?.abilities.map(({ name, text }) => (
                <div key={name} className="flex flex-col gap-2">
                  <span className="max-w-fit rounded border-2 border-stone-700 bg-black p-1 px-2 font-semibold text-white">
                    {name}
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4 divide-stone-900 border-red-900 bg-stone-100 lg:col-span-1">
          <div className="banner">Abilities</div>
          <div className="divide-y divide-dotted">
            <div className="p-2">
              CORE: <span>{abilities.core.join(', ')}</span>
            </div>
            <div className="p-2">
              FACTION: <span>{abilities.faction}</span>
            </div>
            <div className="flex flex-col gap-2 p-2">
              {abilities.datasheetAbilities.map(({ name, effect, note }) => (
                <div key={name} className="flex flex-col gap-1">
                  <span className="font-semibold underline underline-offset-2">
                    {name}
                  </span>{' '}
                  {effect}
                  <span className={clsx('italic', !note && 'hidden')}>
                    {note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={clsx(!damaged && 'hidden')}>
            <div className="banner">
              <SkullIcon />
              {damaged?.title}
            </div>
            <div className="p-2">{damaged?.text}</div>
          </div>

          <div className={clsx(!supremeCommander && 'hidden')}>
            <div className="banner p-2 py-3 md:gap-4 lg:h-10">
              Supreme Commander
            </div>
            <div className="p-2">{supremeCommander?.text}</div>
          </div>

          <div className={clsx(wargear.length === 0 && 'hidden')}>
            <div className="banner">Wargear Abilities</div>
            <div className="flex flex-col gap-2 p-2">
              {wargear.map(({ name, effect }) => (
                <div key={name}>
                  <span className="font-semibold underline underline-offset-2">
                    {name}
                  </span>
                  <br />
                  {effect}
                </div>
              ))}
            </div>
          </div>

          <div className={clsx(simplify && 'hidden')}>
            <div className="banner">Unit Composition</div>
            <div className="flex flex-col gap-2 divide-y divide-gray-300 p-2">
              <div className="pb-2">
                <ul>
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
                  className="flex w-full items-baseline justify-between border-b-2 border-dotted border-black"
                >
                  <div>{quantity}</div> <div>{total} pts</div>
                </div>
              ))}
              <div className="flex flex-col gap-1">
                {unitComposition.baseSizes.map(({ model, size }) => (
                  <div key={model}>
                    {model}: {size}mm
                  </div>
                ))}
              </div>
            </div>
          </div>

          {setupAbilities.length > 1 &&
            setupAbilities.map(({ name, effect }) => (
              <Fragment key={name}>
                <div className="banner">{name}</div>
                <div className="flex flex-col gap-2 p-2">{effect}</div>
              </Fragment>
            ))}
        </div>

        <div className="datasheet-footer bg-stone-300 p-2 lg:col-span-3 lg:items-start lg:gap-2 lg:border-r-2 lg:p-4">
          <span className="keyword-title">Keywords</span>{' '}
          <div className="keyword-list">
            {keywords.map((text) => (
              <Badge key={text} size="medium" text={text} />
            ))}
          </div>
        </div>
        <div className="datasheet-footer bg-zinc-900 p-3 lg:col-span-1">
          <span className="keyword-title text-white">Faction Keywords</span>
          <div className="keyword-list">
            {factionKeywords.map((text) => (
              <Badge key={text} size="medium" text={text} />
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
}
