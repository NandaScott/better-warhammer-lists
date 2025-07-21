import type { Datasheet } from '../../core/types';

export const Dialogus: Datasheet = {
  stats: [
    {
      name: 'Palatine',
      movement: 6,
      toughness: 3,
      save: 3,
      invuln: 4,
      wounds: 3,
      leadership: 6,
      objective: 1,
    },
  ],
  enhancements: [],
  rangedWeapons: [
    {
      type: 'ranged',
      quantity: 0,
      name: 'Bolt pistol',
      subtitle: '',
      keywords: ['Pistol'],
      range: 12,
      attacks: 1,
      ballisticSkill: 3,
      strength: 4,
      armorPen: 0,
      damage: 1,
    },
  ],
  meleeWeapons: [
    {
      type: 'melee',
      quantity: 0,
      name: 'Dialogus staff',
      subtitle: '',
      keywords: [],
      range: 'Melee',
      attacks: 4,
      weaponSkill: 4,
      strength: 4,
      armorPen: 0,
      damage: 1,
    },
  ],
  abilities: {
    core: ['Leader'],
    faction: 'Acts of Faith',
    datasheetAbilities: [
      {
        name: 'Laud Hailer',
        effect:
          'Once per battle, at the start of any phase, you can select one friendly ADEPTA SORORITAS unit that is Battle-shocked and within 12" of this model. That unit is no longer Battle-shocked.',
      },
      {
        name: 'Stirring Rhetoric',
        effect:
          'While this model is leading a unit, each time that unit performs an Act of Faith, the value of one of the Miracle dice used in that Act of Faith is first changed to a 6.',
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
  // TODO: Add the double leader note to this field.
  leaderAbility: [
    'Battle Sisters Squad',
    'Celestian Sacresancts',
    'Dominion Squad',
    'Retributor Squad',
    'Sisters Novitiate Squad',
  ],
  wargearOptions: [],
  unitComposition: {
    models: ['1 Dialogus'],
    defaultWeapons: [
      'This model is equipped with: bolt pistol; Dialogus staff.',
    ],
    points: [
      {
        quantity: '1 Dialogus',
        total: 40,
      },
    ],
    baseSizes: [
      {
        model: 'Dialogus',
        size: 40,
      },
    ],
  },
  keywords: ['Infantry', 'Character', 'Imperium', 'Dialogus'],
  factionKeywords: ['Adepta Sororitas'],
  setupAbilities: [],
};
