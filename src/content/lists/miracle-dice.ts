import type { StratagemProps } from '../../components/Stratagem';

interface Points {
  used: number;
  total: number;
}

interface Detatchment {
  name: string;
  detatchmentRules: string[];
  stratagems: StratagemProps[];
}

interface Faction {
  name: string;
  armyRules: string[];
}

interface ArmyList {
  name: string;
  faction: Faction;
  detatchment: Detatchment;
  points: Points;
  description: string;
  units: any[];
}

export const list: ArmyList = {
  name: 'Miracle Army',
  faction: { name: 'Adepta Sororitas', armyRules: ['Miracle Dice'] },
  detatchment: {
    name: 'Army of Faith',
    detatchmentRules: ['Sacred Rites'],
    stratagems: [], // TODO: Actually add stratagems
  },
  points: { used: 2000, total: 2000 },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla tortor eu mauris vestibulum imperdiet. Maecenas imperdiet sapien in elit luctus vehicula. Proin lectus urna, aliquet et fringilla nec, vulputate nec enim. Phasellus quis quam fringilla urna mattis interdum sit amet ut lectus. Donec convallis orci nec quam dictum, ornare ullamcorper justo posuere. Morbi in pharetra mauris, sit amet blandit tortor. Etiam odio odio, dignissim at nisi euismod, rutrum pharetra mauris. Nullam dignissim sagittis pretium. Nunc sed rutrum erat.',
  units: [
    {
      name: 'Dominion Squad',
      modelNumbers: 10,
      points: 125,
      attachedUnits: [
        {
          name: 'Canoness',
          enhancements: [{ name: 'Blade of Saint Ellynor', points: 15 }],
          modelNumbers: 1,
          points: 50,
        },
      ],
      wargearOptions: [
        {
          weapon: 'power weapon',
          count: 1,
        },
        {
          weapon: 'meltagun',
          count: 4,
        },
        {
          weapon: 'boltgun',
          count: 6,
        },
        {
          weapon: 'bolt pistol',
          count: 10,
        },
        {
          weapon: 'close combat weapon',
          count: 10,
        },
      ],
    },
  ],
};
