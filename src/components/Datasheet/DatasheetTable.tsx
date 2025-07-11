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

type SkillCellProps = React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
> & { profile: RangedWeapon | MeleeWeapon };

const SkillCell = (props: SkillCellProps) => {
  const { profile, ...rest } = props;

  if (profile.type === 'ranged') {
    const { ballisticSkill } = profile;
    return (
      <td {...rest} headers="weapon-skill" className="col-span-1">
        {ballisticSkill}
        {ballisticSkill === 'N/A' ? '' : '+'}
      </td>
    );
  }

  const { weaponSkill } = profile;
  return (
    <td {...rest} headers="weapon-skill" className="col-span-1">
      {weaponSkill}+
    </td>
  );
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
    <table className="min-w-xl text-sm">
      <thead className="bg-red-950 text-white uppercase">
        <tr className="relative flex items-center py-2">
          <th headers="icon" className="col-span-1">
            <Icon className="mx-auto h-4 w-4 fill-white" />
          </th>
          <th headers="title" className="sticky left-0 col-span-5 !text-left">
            {title}
          </th>
          <th headers="range" className="col-span-1 overflow-hidden">
            {title === 'Ranged Weapons' && 'Range'}
          </th>
          <th headers="attacks" className="col-span-1">
            A
          </th>
          <th headers="weapon-skill" className="col-span-1">
            {title === 'Ranged Weapons' ? 'BS' : 'WS'}
          </th>
          <th headers="strength" className="col-span-1">
            S
          </th>
          <th headers="armor-penetration" className="col-span-1">
            AP
          </th>
          <th headers="damage" className="col-span-1">
            D
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-dotted">
        {weapons
          .filter((profile) => {
            if (!simplify) return profile;
            if (profile.quantity > 0) return profile;
          })
          .map((profile) => {
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
                className="flex flex-col gap-1 py-1"
              >
                <td headers="icon" className="col-span-1 pr-2 text-right">
                  {quantity > 0 ? `${quantity}x` : ''}
                </td>
                <td headers="title" className="col-span-5 !text-left">
                  {profiled && <span className="text-red-900">➤</span>}{' '}
                  {name}{' '}
                </td>
                <td headers="range" className="col-span-1">
                  {title === 'Ranged Weapons' ? `${range}"` : ''}
                </td>
                <td headers="attacks" className="col-span-1">
                  {attacks}
                </td>
                <SkillCell profile={profile} />
                <td headers="strength" className="col-span-1">
                  {strength}
                </td>
                <td
                  headers="armor-penetration"
                  className="col-span-1"
                >{`${armorPen > 0 ? '-' : ''}${armorPen}`}</td>
                <td headers="damage" className="col-span-1">
                  {damage}
                </td>
                {keywords.length > 0 && (
                  <div className="col-span-12 col-start-2 flex gap-1">
                    {keywords.map((text) => (
                      <Badge text={text} />
                    ))}
                  </div>
                )}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
