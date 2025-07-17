import type { SororitasArmyRuleKeys } from '../../panels/RulesPanel';
import type { Datasheet, DetatchmentData } from '../core/types';
import ArmyOfFaithDetatchment from '../Sororitas/detatchments/army-of-faith';
import type { DatasheetProps } from '../../components/Datasheet';
import { v4 as uuidV4 } from 'uuid';
import { DominionSquad } from '../Sororitas/datasheets/dominion-squad';
import { Canoness } from '../Sororitas/datasheets/canoness';
import { CanonessWithJumpPack } from '../Sororitas/datasheets/canoness-with-jump-pack';
import { SeraphimSquad } from '../Sororitas/datasheets/seraphim-squad';

interface Points {
  used: number;
  total: number;
}

interface Faction {
  name: string;
  armyRules: SororitasArmyRuleKeys[];
}

export type ListDatasheets = DatasheetProps & {
  attachedUnits: DatasheetProps[];
};

export interface Unit {
  id: string;
  datasheets: Array<[Datasheet, updates: string[]]>;
}

interface ArmyList {
  name: string;
  faction: Faction;
  detatchment: DetatchmentData;
  points: Points;
  description: string;
  units: Unit[];
}

console.log(Canoness);

export const list: ArmyList = {
  name: 'Miracle Army',
  faction: { name: 'Adepta Sororitas', armyRules: ['Miracle Dice'] },
  detatchment: ArmyOfFaithDetatchment,
  points: { used: 2000, total: 2000 },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla tortor eu mauris vestibulum imperdiet. Maecenas imperdiet sapien in elit luctus vehicula. Proin lectus urna, aliquet et fringilla nec, vulputate nec enim. Phasellus quis quam fringilla urna mattis interdum sit amet ut lectus. Donec convallis orci nec quam dictum, ornare ullamcorper justo posuere. Morbi in pharetra mauris, sit amet blandit tortor. Etiam odio odio, dignissim at nisi euismod, rutrum pharetra mauris. Nullam dignissim sagittis pretium. Nunc sed rutrum erat.',
  units: [
    {
      id: uuidV4(),
      datasheets: [
        [
          DominionSquad,
          [
            'rangedWeapons.1.quantity:10',
            'rangedWeapons.2.quantity:6',
            'rangedWeapons.6.quantity:4',
            'meleeWeapons.1.quantity:9',
            'meleeWeapons.2.quantity:1',
            'wargearAbilities.0.equipped:true',
          ],
        ],
        [
          Canoness,
          [
            'rangedWeapons.4.quantity:1',
            'rangedWeapons.5.quantity:1',
            'meleeWeapons.2.quantity:1',
            'wargearAbilities.0.equipped:true',
          ],
        ],
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        [CanonessWithJumpPack, []],
        [SeraphimSquad, []],
      ],
    },
  ],
};
