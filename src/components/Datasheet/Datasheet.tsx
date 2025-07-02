import clsx from 'clsx';
import ChevronDown from '../../assets/chevron-down.svg?react';
import Crosshair from '../../assets/crosshair.svg?react';
import CrossedSwords from '../../assets/crossed-swords.svg?react';
import { LabelledBox } from '../LabelledBox';
import { useEffect, useRef, useState } from 'react';
import { Transition } from '@headlessui/react';

type Keyword = string; // TODO

type CoreAbilities = string; // TODO

type Ability = {
  name: string;
  effect: string;
};

type RangedWeapon = {
  type: 'ranged';
  quantity: number;
  name: string;
  keywords: Keyword[];
  range: number;
  attacks: number | 'D6' | 'D3';
  ballisticSkill: number | 'N/A';
  strength: number;
  armorPen: number;
  damage: number | 'D6' | 'D3';
};

type MeleeWeapon = {
  type: 'melee';
  quantity: number;
  name: string;
  keywords: Keyword[];
  range: 'Melee';
  attacks: number | 'D6' | 'D3';
  weaponSkill: number;
  strength: number;
  armorPen: number;
  damage: number | 'D6' | 'D3';
};

interface DatasheetProps {
  name: string;
  movement: number;
  toughness: number;
  save: number;
  invuln: number;
  wounds: number;
  leadership: number;
  objective: number;
  rangedWeapons: RangedWeapon[];
  meleeWeapons: MeleeWeapon[];
  abilities: {
    core: CoreAbilities[];
    faction: 'Acts of Faith';
    other: Ability[];
  };
  wargearAbilities?: Ability[];
  keywords: string[];
  factionKeywords: string[];
}

export default function Datasheet(props: DatasheetProps) {
  const {
    name,
    movement,
    toughness,
    save,
    invuln,
    wounds,
    leadership,
    objective,
    rangedWeapons,
    meleeWeapons,
    abilities,
    wargearAbilities,
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
      <button
        onClick={handleClick}
        className='cursor-pointer border-2 border-red-900 flex items-center justify-between w-full font-bold text-center align-middle bg-red-950'
      >
        <div className='p-2 px-4 text-xl uppercase flex gap-8 items-center'>
          {name}

          <div className='flex text-center align-middle text-sm gap-2'>
            <LabelledBox label='M'>{movement}"</LabelledBox>
            <LabelledBox label='T'>{toughness}</LabelledBox>
            <LabelledBox label='SV'>{save}+</LabelledBox>
            <LabelledBox label='INV'>{invuln}+</LabelledBox>
            <LabelledBox label='W'>{wounds}</LabelledBox>
            <LabelledBox label='LD'>{leadership}+</LabelledBox>
            <LabelledBox label='OC'>{objective}</LabelledBox>
          </div>
        </div>
        <div
          className={clsx('transition-transform duration-150 p-2 px-4', {
            'rotate-180': contentHeight.current > 0,
          })}
        >
          <ChevronDown />
        </div>
      </button>

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
          <table className='border-r-2 border-red-900 col-span-3'>
            <tr className='uppercase grid grid-cols-12 w-full py-1 items-center bg-red-950 h-10'>
              <th className='col-span-1 p-1 mx-auto'>
                <Crosshair className='fill-white w-5 h-5' />
              </th>
              <th className='col-span-5 text-left'>Ranged Weapons</th>
              <th className='col-span-1'>Range</th>
              <th className='col-span-1'>A</th>
              <th className='col-span-1'>BS</th>
              <th className='col-span-1'>S</th>
              <th className='col-span-1'>AP</th>
              <th className='col-span-1'>D</th>
            </tr>
            {rangedWeapons.map(
              (
                {
                  quantity,
                  name,
                  keywords,
                  range,
                  attacks,
                  ballisticSkill,
                  strength,
                  armorPen,
                  damage,
                },
                i
              ) => (
                <tr
                  className={clsx(
                    'border-t border-dotted grid grid-cols-12 w-full py-1 text-black',
                    { 'bg-stone-100': i % 2 === 0, 'bg-stone-200': i % 2 !== 0 }
                  )}
                >
                  <td colSpan={1} className='text-right mr-4 col-span-1'>
                    {quantity}x
                  </td>
                  <td colSpan={4} className='text-left col-span-5'>
                    {name}{' '}
                    <strong className='text-red-900'>
                      [{keywords.join(', ')}]
                    </strong>
                  </td>
                  <td colSpan={1} className='text-center col-span-1'>
                    {range}"
                  </td>
                  <td colSpan={1} className='text-center col-span-1'>
                    {attacks}
                  </td>
                  <td colSpan={1} className='text-center col-span-1'>
                    {ballisticSkill}+
                  </td>
                  <td colSpan={1} className='text-center col-span-1'>
                    {strength}
                  </td>
                  <td colSpan={1} className='text-center col-span-1'>
                    {armorPen}
                  </td>
                  <td colSpan={1} className='text-center col-span-1'>
                    {damage}
                  </td>
                </tr>
              )
            )}
            <tr className='uppercase grid grid-cols-12 w-full py-1 items-center bg-red-950'>
              <th className='col-span-1 p-1 mx-auto'>
                <CrossedSwords className='fill-white w-5 h-5' />
              </th>
              <th className='col-span-5 text-left'>Ranged Weapons</th>
              <th className='col-span-1'>Range</th>
              <th className='col-span-1'>A</th>
              <th className='col-span-1'>WS</th>
              <th className='col-span-1'>S</th>
              <th className='col-span-1'>AP</th>
              <th className='col-span-1'>D</th>
            </tr>
            {meleeWeapons.map(
              (
                {
                  quantity,
                  name,
                  range,
                  attacks,
                  weaponSkill,
                  strength,
                  armorPen,
                  damage,
                },
                i
              ) => (
                <tr
                  className={clsx(
                    'border-t border-dotted grid grid-cols-12 w-full py-1 text-black',
                    { 'bg-stone-100': i % 2 === 0, 'bg-stone-200': i % 2 !== 0 }
                  )}
                >
                  <td colSpan={1} className='text-right mr-4 col-span-1'>
                    {quantity}x
                  </td>
                  <td colSpan={4} className='text-left col-span-5'>
                    {name}
                  </td>
                  <td colSpan={1} className='text-center col-span-1'>
                    {range}
                  </td>
                  <td colSpan={1} className='text-center col-span-1'>
                    {attacks}
                  </td>
                  <td colSpan={1} className='text-center col-span-1'>
                    {weaponSkill}+
                  </td>
                  <td colSpan={1} className='text-center col-span-1'>
                    {strength}
                  </td>
                  <td colSpan={1} className='text-center col-span-1'>
                    {armorPen}
                  </td>
                  <td colSpan={1} className='text-center col-span-1'>
                    {damage}
                  </td>
                </tr>
              )
            )}
          </table>
          <div className='bg-stone-100 border-red-900 col-span-1 divide-stone-900 divide-dotted divide-y text-black'>
            <div className='bg-red-950 py-1 flex items-center p-2 uppercase text-base font-bold text-white h-10'>
              Abilities
            </div>
            <div className='p-2'>
              CORE: <strong>{abilities.core}</strong>
            </div>
            <div className='p-2'>
              FACTION: <strong>{abilities.faction}</strong>
            </div>
            <div className='p-2 flex flex-col gap-2'>
              {abilities.other.map(({ name, effect }) => (
                <div>
                  <strong>{name}:</strong> {effect}
                </div>
              ))}
            </div>
            <div className='bg-red-950 py-1 flex items-center p-2 uppercase text-base font-bold text-white h-10'>
              Wargear Abilities
            </div>
            {wargearAbilities && (
              <div className='p-2 flex flex-col gap-2'>
                {wargearAbilities.map(({ name, effect }) => (
                  <div>
                    <strong>{name}:</strong> {effect}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className='col-span-3 border-red-900 border-r-2 border-t-2 text-black text-base bg-stone-300 flex items-center gap-2 py-1 p-2'>
            <span className='uppercase'>Keywords:</span>{' '}
            <strong>{keywords.join(', ')}</strong>
          </div>
          <div className='border-t-2 border-red-900 p-3 text-base text-white bg-zinc-900 flex flex-col gap-1'>
            <span className='uppercase text-xs'>Faction Keywords:</span>
            <strong>{factionKeywords.join(', ')}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
