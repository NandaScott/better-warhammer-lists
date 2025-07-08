import type { SororitasArmyRuleKeys } from '../../panels/RulesPanel';
import type { DetatchmentData } from '../core/types';
import ArmyOfFaithDetatchment from '../Sororitas/detatchments/army-of-faith';
import type { DatasheetProps } from '../../components/Datasheet';
import SororitasDatasheets from '../Sororitas/datasheets';

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
  datasheets: DatasheetProps[];
}

interface ArmyList {
  name: string;
  faction: Faction;
  detatchment: DetatchmentData;
  points: Points;
  description: string;
  units: Unit[];
}

export const list: ArmyList = {
  name: 'Miracle Army',
  faction: { name: 'Adepta Sororitas', armyRules: ['Miracle Dice'] },
  detatchment: ArmyOfFaithDetatchment,
  points: { used: 2000, total: 2000 },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla tortor eu mauris vestibulum imperdiet. Maecenas imperdiet sapien in elit luctus vehicula. Proin lectus urna, aliquet et fringilla nec, vulputate nec enim. Phasellus quis quam fringilla urna mattis interdum sit amet ut lectus. Donec convallis orci nec quam dictum, ornare ullamcorper justo posuere. Morbi in pharetra mauris, sit amet blandit tortor. Etiam odio odio, dignissim at nisi euismod, rutrum pharetra mauris. Nullam dignissim sagittis pretium. Nunc sed rutrum erat.',
  units: [
    {
      id: '23f94252-dcf1-4514-a1c7-ebefaa8c1722',
      datasheets: [
        SororitasDatasheets['Canoness'],
        SororitasDatasheets['Dominion Squad'],
      ],
    },
  ],
};
