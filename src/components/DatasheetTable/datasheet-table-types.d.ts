import type { DiceType, Modifiable, OneToSix } from '../Datasheet/datasheet-types';

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

export type ModifiedKeyword = {
  value: WeaponAbilities;
  source: string;
};

type Weapon = {
  quantity: number;
  name: string;
  model: string;
  subtitle: string;
  keywords: (WeaponAbilities | ModifiedKeyword)[];
  attacks:
    | number
    | DiceType
    | `${DiceType}+${OneToSix}`
    | `${OneToSix}${DiceType}`;
  strength: Modifiable<number>;
  armorPen: Modifiable<number>;
  damage: Modifiable<number | DiceType>;
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
  weapons: Record<string, RangedWeapon>;
}
export interface DatasheetTableMeleeProps extends DatasheetTableCommonProps {
  weapons: Record<string, MeleeWeapon>;
}

type DatasheetTableProps = DatasheetTableRangedProps | DatasheetTableMeleeProps;
