import type { Datasheet } from '../../core/types';

export const Canoness: Datasheet = {
  stats: [
    {
      name: 'Canoness',
      movement: 12,
      toughness: 3,
      save: 3,
      invuln: 4,
      wounds: 3,
      leadership: 7,
      objective: 1,
    },
  ],
  enhancements: [],
  rangedWeapons: [
    {
      armorPen: 0,
      attacks: 'D6',
      ballisticSkill: 'N/A',
      damage: 1,
      keywords: ['Ignores Cover', 'Pistol', 'Torrent'],
      name: 'Ministorum hand flamer',
      quantity: 0,
      range: 12,
      strength: 4,
      subtitle: '',
      type: 'ranged',
      profiled: false,
    },
  ],
  meleeWeapons: [
    {
      type: 'melee',
      quantity: 0,
      name: 'Blessed Halberd',
      subtitle: '',
      keywords: [],
      range: 'Melee',
      attacks: 5,
      weaponSkill: 2,
      strength: 5,
      armorPen: 2,
      damage: 2,
    },
    {
      type: 'melee',
      quantity: 0,
      name: 'Holy eviscerator',
      subtitle: '',
      keywords: ['Sustained Hits 1'],
      range: 'Melee',
      attacks: 3,
      weaponSkill: 2,
      strength: 6,
      armorPen: 2,
      damage: 2,
    },
    {
      type: 'melee',
      quantity: 0,
      name: 'Power weapon',
      subtitle: '',
      keywords: [],
      range: 'Melee',
      attacks: 4,
      weaponSkill: 2,
      strength: 4,
      armorPen: 2,
      damage: 2,
    },
  ],
  abilities: {
    core: ['Deep Strike', 'Leader'],
    faction: 'Acts of Faith',
    datasheetAbilities: [
      {
        name: 'Sacred Command',
        effect:
          'One per battle round, one unit from your army with this ability can use it when it is targeted with a Stratagem. If it does, reduce the CP cost of that usage of that Stratagem by 1CP',
      },
      {
        name: 'Divine Deliverance',
        effect:
          'Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until end of the phase, add 3 to the Attacks characterstic of melee weapons equipped by this model and those weapons have the [DEVASTATING WOUNDS] ability.',
      },
    ],
  },
  wargearAbilities: [
    {
      equipped: false,
      name: 'Null Rod',
      effect:
        "Models in this bearer's unit have the Feel No Pain 4+ ability against mortal wounds and Psychic Attacks.",
    },
    {
      equipped: false,
      name: 'Rod of Office',
      effect:
        "Each time a model in the bearer's unit make an attack, re-roll a Hit roll of 1.",
    },
  ],
  leaderAbility: ['Seraphim Squad', 'Zephyrim Squad'],
  wargearOptions: [
    {
      entry:
        "This model's blessed halberd can be replaced with one of the following:",
      options: [
        '1 holy eviscerator',
        '1 Ministorum hand flamer and 1 power weapon',
      ],
    },
  ],
  unitComposition: {
    models: ['1 Canoness with Jump Pack'],
    defaultWeapons: [
      'Canoness with Jump Pack is equipped with: blessed halberd.',
    ],
    points: [
      {
        quantity: '1 model',
        total: 75,
      },
    ],
    baseSizes: [
      {
        model: 'Canoness with Jump Pack',
        size: 32,
      },
    ],
  },
  keywords: [
    'Infantry',
    'Character',
    'Jump Pack',
    'Fly',
    'Grenades',
    'Imperium',
    'Canoness',
  ],
  factionKeywords: ['Adepta Sororitas'],
  setupAbilities: [],
};
