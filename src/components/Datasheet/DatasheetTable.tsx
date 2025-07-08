import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import type { JSX } from 'react';
import type { OneToSix } from './Datasheet';

type Keyword = 'Vehicle' | 'Psyker' | 'Infantry';

type WeaponAbilities =
  | 'Assault'
  | `Rapid Fire ${OneToSix}`
  | 'Ignores Cover'
  | 'Twin-linked'
  | 'Pistol'
  | 'Torrent'
  | 'Lethal Hits'
  | 'Lance'
  | 'Indirect Fire'
  | 'Precision'
  | 'Blast'
  | `Melta ${OneToSix}`
  | 'Heavy'
  | 'Hazardous'
  | 'Devastating Wounds'
  | `Sustained Hits ${OneToSix}`
  | 'Extra Attacks'
  | `Anti-${Keyword} ${OneToSix}+`
  | 'One Shot';

type Weapon = {
  quantity: number;
  name: string;
  keywords: WeaponAbilities[];
  attacks: number | 'D6' | 'D3';
  strength: number;
  armorPen: number;
  damage: number | 'D6' | 'D3';
  profiled?: boolean;
};

export type RangedWeapon = Weapon & {
  type: 'ranged';
  range: number;
  ballisticSkill: number | 'N/A';
};

export type MeleeWeapon = Weapon & {
  type: 'melee';
  range: 'Melee';
  weaponSkill: number;
};

interface DatasheetTableCommonProps {
  simplify?: boolean;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
      desc?: string | undefined;
      descId?: string | undefined;
    }
  >;
}

export interface DatasheetTableRangedProps extends DatasheetTableCommonProps {
  weapons: RangedWeapon[];
}
export interface DatasheetTableMeleeProps extends DatasheetTableCommonProps {
  weapons: MeleeWeapon[];
}

type DatasheetTableProps = DatasheetTableRangedProps | DatasheetTableMeleeProps;

const SkillCell = (
  props: React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  > & { profile: RangedWeapon | MeleeWeapon }
) => {
  const { profile, ...rest } = props;

  if (profile.type === 'ranged') {
    const { ballisticSkill } = profile;
    return (
      <td {...rest}>
        {ballisticSkill}
        {ballisticSkill === 'N/A' ? '' : '+'}
      </td>
    );
  }

  const { weaponSkill } = profile;
  return <td {...rest}>{weaponSkill}+</td>;
};

export default function DatasheetTable(
  props: DatasheetTableRangedProps
): JSX.Element;
export default function DatasheetTable(
  props: DatasheetTableMeleeProps
): JSX.Element;
export default function DatasheetTable(
  props: DatasheetTableProps
): JSX.Element {
  const { simplify, icon: Icon, weapons } = props;

  return (
    <table className='w-full'>
      <thead>
        <tr className='uppercase grid grid-cols-12 w-full py-1 items-center bg-red-950 lg:h-10 text-xs lg:text-base'>
          <th className='col-span-1 p-1 mx-auto'>
            <Icon className='fill-white w-4 h-4 lg:w-5 lg:h-5' />
          </th>
          <th className='col-span-5 text-left'>Ranged Weapons</th>
          <th className='col-span-1'>RNG</th>
          <th className='col-span-1'>A</th>
          <th className='col-span-1'>BS</th>
          <th className='col-span-1'>S</th>
          <th className='col-span-1'>AP</th>
          <th className='col-span-1'>D</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-dotted text-sm'>
        {weapons
          .filter((profile) => {
            if (!simplify) return profile;
            if (profile.quantity > 0) return profile;
          })
          .map((profile, i) => {
            const {
              name,
              quantity,
              profiled,
              keywords,
              range,
              attacks,
              strength,
              armorPen,
              damage,
            } = profile;

            return (
              <tr
                key={`${name}-${uuidv4()}`}
                className={clsx('grid grid-cols-12 w-full py-1 text-black', {
                  'bg-stone-100': i % 2 === 0,
                  'bg-stone-200': i % 2 !== 0,
                })}
              >
                <td colSpan={1} className='text-right mr-4 col-span-1'>
                  {quantity > 0 ? `${quantity}x` : ''}
                </td>
                <td
                  colSpan={4}
                  className='text-left col-span-5 warp-break-word'
                >
                  {profiled && <span className='text-red-900'>➤</span>} {name}{' '}
                  {keywords.length > 0 && (
                    <strong className='text-red-900 text-xs lg:text-sm'>
                      [{keywords.join(', ')}]
                    </strong>
                  )}
                </td>
                <td colSpan={1} className='text-center col-span-1'>
                  {`${range}${range === 'Melee' ? '' : '"'}`}
                </td>
                <td colSpan={1} className='text-center col-span-1'>
                  {attacks}
                </td>
                <SkillCell
                  profile={profile}
                  colSpan={1}
                  className='text-center col-span-1'
                />
                <td colSpan={1} className='text-center col-span-1'>
                  {strength}
                </td>
                <td colSpan={1} className='text-center col-span-1'>
                  {`${armorPen > 0 ? '-' : ''}${armorPen}`}
                </td>
                <td colSpan={1} className='text-center col-span-1'>
                  {damage}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
