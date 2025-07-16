import { v4 as uuidv4 } from 'uuid';
import type { OneToSix } from './Datasheet';
import { Badge } from '../Badge';
import { type JSX } from 'react';
import './DatasheetTable.css';
import clsx from 'clsx';

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
  subtitle: string;
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
    <div role="region" aria-labelledby={title} tabIndex={0}>
      <table
        id={title}
        className="min-w-xl overflow-x-clip text-sm md:w-full lg:border-b-2 lg:border-stone-300"
      >
        <caption id={title} className="sr-only">
          {title}
        </caption>
        <thead>
          <tr>
            <th id="quantity" scope="col">
              <Icon className="h-4 w-4 fill-white" />
            </th>
            <th id="title" scope="col">
              {title}
            </th>
            <th id="range" scope="col">
              Range
            </th>
            <th id="attacks" scope="col">
              A
            </th>
            <th id="weapon-skill" scope="col">
              {title === 'Ranged Weapons' ? 'BS' : 'WS'}
            </th>
            <th id="strength" scope="col">
              S
            </th>
            <th id="armor-penetration" scope="col">
              AP
            </th>
            <th id="damage" scope="col">
              D
            </th>
            <th id="keywords" scope="col">
              Keywords
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-dotted">
          {weapons
            .filter((profile) => {
              if (!simplify) return profile;
              if (profile.quantity > 0) return profile;
            })
            .map((profile) => (
              <tr key={`${profile.name}-${uuidv4()}`}>
                <td headers="quantity">
                  {profile.quantity > 0 ? `${profile.quantity}x` : ''}
                </td>
                <td headers="title">
                  <div
                    className={clsx({
                      'before:mr-2 before:text-red-900 before:content-["➤"]':
                        profile.profiled,
                    })}
                  >
                    {profile.name}
                  </div>
                  <div className="pl-6 text-sm text-gray-500">
                    {profile.subtitle}
                  </div>
                </td>
                <td
                  headers="range"
                  className={clsx({
                    'after:content-["“"]': profile.range !== 'Melee',
                  })}
                >
                  {profile.range}
                </td>
                <td headers="attacks">{profile.attacks}</td>
                <td headers="weapon-skill" className='after:content-["+"]'>
                  {profile.type === 'ranged'
                    ? profile.ballisticSkill
                    : profile.weaponSkill}
                </td>
                <td headers="strength">{profile.strength}</td>
                <td
                  headers="armor-penetration"
                  className={clsx({
                    'before:content-["-"]': profile.armorPen > 0,
                  })}
                >
                  {profile.armorPen}
                </td>
                <td headers="damage">{profile.damage}</td>
                <td
                  headers="keywords"
                  className={clsx(
                    profile.keywords.length === 0 && '-mt-4 hidden'
                  )}
                >
                  {profile.keywords.map((text) => (
                    <Badge
                      key={`${profile.name}-${uuidv4()}-${text}`}
                      text={text}
                    />
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
