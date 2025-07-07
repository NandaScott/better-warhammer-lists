import type { SororitasArmyRuleKeys } from '../../panels/RulesPanel';
import type { DetatchmentData } from '../core/types';
import ArmyOfFaithDetatchment from '../Sororitas/detatchments/army-of-faith';
import SororitasDatasheets from '../Sororitas/datasheets';

interface Points {
  used: number;
  total: number;
}

interface Faction {
  name: string;
  armyRules: SororitasArmyRuleKeys[];
}

// TODO: Tie this to the datasheet somehow
interface Unit {
  name: keyof typeof SororitasDatasheets;
  modelNumbers: number;
  points: number;
  attachedUnits: Unit[];
  wargearAbilities: (typeof SororitasDatasheets)[Unit['name']]['wargearAbilities'];
  enhancements?: keyof DetatchmentData['enhancements'];
  wargearOptions: (typeof SororitasDatasheets)[Unit['name']][
    | 'rangedWeapons'
    | 'meleeWeapons'][number][];
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
      name: 'Dominion Squad',
      modelNumbers: 10,
      points: 125,
      attachedUnits: [
        {
          name: 'Canoness',
          enhancements: '',
          modelNumbers: 1,
          points: 50,
          attachedUnits: [],
          wargearAbilities: [
            {
              name: 'Rod of Office',
              effect:
                "Each time a model in the bearer's unit make an attack, re-roll a Hit roll of 1.",
            },
          ],
          wargearOptions: [
            {
              type: 'ranged',
              quantity: 1,
              name: 'Plasma pistol - standard',
              profiled: true,
              keywords: ['Pistol'],
              range: 12,
              attacks: 1,
              ballisticSkill: 2,
              strength: 7,
              armorPen: 2,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 1,
              name: 'Plasma pistol - supercharge',
              profiled: true,
              keywords: ['Hazardous', 'Pistol'],
              range: 12,
              attacks: 1,
              ballisticSkill: 2,
              strength: 8,
              armorPen: 3,
              damage: 2,
            },
            {
              type: 'melee',
              quantity: 1,
              name: 'Power weapon',
              keywords: [],
              range: 'Melee',
              attacks: 4,
              weaponSkill: 2,
              strength: 4,
              armorPen: 2,
              damage: 2,
            },
          ],
        },
      ],
      wargearAbilities: [],
      wargearOptions: [
        {
          type: 'ranged',
          quantity: 10,
          name: 'Bolt pistol',
          keywords: ['Pistol'],
          range: 12,
          attacks: 1,
          ballisticSkill: 3,
          strength: 4,
          armorPen: 0,
          damage: 1,
        },
        {
          type: 'ranged',
          quantity: 6,
          name: 'Boltgun',
          keywords: ['Assault', 'Rapid Fire 1'],
          range: 24,
          attacks: 1,
          ballisticSkill: 3,
          strength: 4,
          armorPen: 0,
          damage: 1,
        },
        {
          type: 'ranged',
          quantity: 4,
          name: 'Meltagun',
          keywords: ['Assault', 'Melta 2'],
          range: 12,
          attacks: 1,
          ballisticSkill: 3,
          strength: 9,
          armorPen: 4,
          damage: 'D6',
        },
        {
          type: 'melee',
          quantity: 10,
          name: 'Close combat weapon',
          keywords: [],
          range: 'Melee',
          attacks: 1,
          weaponSkill: 4,
          strength: 3,
          armorPen: 0,
          damage: 1,
        },
        {
          type: 'melee',
          quantity: 1,
          name: 'Power weapon',
          keywords: [],
          range: 'Melee',
          attacks: 2,
          weaponSkill: 4,
          strength: 4,
          armorPen: 2,
          damage: 1,
        },
      ],
    },
  ],
};
