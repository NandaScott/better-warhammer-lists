import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import type { JSX } from 'react';
import type { OneToSix } from './Datasheet';
import { Badge } from '../Badge';

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
  title: 'Ranged Weapons' | 'Melee Weapons';
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
  const { simplify, icon: Icon, weapons, title } = props;

  return (
    <table className='w-full text-sm'>
      <thead className='uppercase bg-red-950 text-white'>
        <tr className='grid grid-cols-11 gap-2 items-center py-1 lg:h-10'>
          <th className='col-span-1 p-1 mx-auto'>
            <Icon className='fill-white w-4 h-4 lg:w-5 lg:h-5' />
          </th>
          <th className='col-span-4 text-left'>{title}</th>
          <th className='col-span-1'> {title === 'Ranged Weapons' && 'R'}</th>
          <th className='col-span-1'>A</th>
          <th className='col-span-1'>BS</th>
          <th className='col-span-1'>S</th>
          <th className='col-span-1'>AP</th>
          <th className='col-span-1'>D</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-dotted'>
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
                className={clsx('grid grid-cols-11 w-full py-1 gap-2', {
                  'bg-stone-100': i % 2 === 0,
                  'bg-stone-200': i % 2 !== 0,
                })}
              >
                <td colSpan={1} className='text-right col-span-1'>
                  {quantity > 0 ? `${quantity}x` : ''}
                </td>
                <td
                  colSpan={4}
                  className='text-left col-span-4 flex flex-col gap-1'
                >
                  <div>
                    {profiled && <span className='text-red-900'>➤</span>} {name}{' '}
                  </div>
                  <div className='flex gap-2'>
                    {keywords.length > 0 &&
                      keywords.map((text) => <Badge text={text} />)}
                  </div>
                </td>
                <td colSpan={1} className='text-center col-span-1'>
                  {title === 'Ranged Weapons' ? `${range}"` : ''}
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
