import type { DatasheetProps } from '../../../components/Datasheet';

export const Canoness: DatasheetProps = {
  stats: [
    {
      name: 'Canoness',
      movement: 6,
      toughness: 3,
      save: 3,
      invuln: 4,
      wounds: 4,
      leadership: 7,
      objective: 1,
    },
  ],
  enhancements: [],
  rangedWeapons: [
    {
      type: 'ranged',
      quantity: 0,
      name: 'Bolt pistol',
      keywords: ['Pistol'],
      range: 12,
      attacks: 1,
      ballisticSkill: 2,
      strength: 4,
      armorPen: 0,
      damage: 1,
    },
    {
      type: 'ranged',
      quantity: 0,
      name: 'Brazier of holy fire',
      keywords: ['Ignores Cover', 'One Shot', 'Torrent'],
      range: 12,
      attacks: 'D6',
      ballisticSkill: 'N/A',
      strength: 6,
      armorPen: 1,
      damage: 2,
    },
    {
      type: 'ranged',
      quantity: 0,
      name: 'Condemnor boltgun',
      keywords: [
        'Anti-Psyker 2+',
        'Devastating Wounds',
        'Precision',
        'Rapid Fire 1',
      ],
      range: 24,
      attacks: 1,
      ballisticSkill: 2,
      strength: 4,
      armorPen: 0,
      damage: 1,
    },
    {
      type: 'ranged',
      quantity: 0,
      name: 'Inferno pistol',
      keywords: ['Melta 2', 'Pistol'],
      range: 6,
      attacks: 1,
      ballisticSkill: 2,
      strength: 8,
      armorPen: 4,
      damage: 'D3',
    },
    {
      type: 'ranged',
      quantity: 0,
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
      quantity: 0,
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
  ],
  meleeWeapons: [
    {
      type: 'melee',
      quantity: 0,
      name: 'Blessed Blade',
      keywords: ['Lethal Hits'],
      range: 'Melee',
      attacks: 4,
      weaponSkill: 2,
      strength: 6,
      armorPen: 2,
      damage: 2,
    },
    {
      type: 'melee',
      quantity: 0,
      name: 'Hallowed chainsword',
      keywords: [],
      range: 'Melee',
      attacks: 5,
      weaponSkill: 2,
      strength: 3,
      armorPen: 1,
      damage: 1,
    },
    {
      type: 'melee',
      quantity: 0,
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
  abilities: {
    core: ['Leader'],
    faction: 'Acts of Faith',
    datasheetAbilities: [
      {
        name: 'Sacred Command',
        effect:
          'One per battle round, one unit from your army with this ability can use it when it is targeted with a Stratagem. If it does, reduce the CP cost of that usage of that Stratagem by 1CP',
      },
      {
        name: "The Emperor's Grace",
        effect:
          'Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, this model has a 2+ invulnerable save.',
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
  leaderAbility: [
    'Battle Sisters Squad',
    'Celestian Sacresancts',
    'Dominion Squad',
    'Retributor Squad',
    'Sisters Novitiate Squad',
  ],
  wargearOptions: [
    {
      entry:
        "This model's bolt pistol can be replaced with one of the following:",
      options: ['1 condemnor boltgun', '1 inferno pistol', '1 plasma pistol'],
    },
    {
      entry:
        "This model's hallowed chainsword can be replaced with one of the following:",
      options: ['1 blessed blade', '1 power weapon'],
    },
    {
      entry:
        'If this model is equipped with a hallowed chainsword, it can be equipped with one of the following:',
      options: ['1 brazier of holy fire', '1 null rod'],
    },
    {
      entry:
        'If this model is equipped with a plasma pistol and a power weapon, it can be equipped with:',
      options: ['1 rod of office'],
    },
  ],
  unitComposition: {
    models: ['1 Canoness'],
    defaultWeapons: [
      'This model is equipped with: bolt pistol; hallowed chainsword.',
    ],
    points: [
      {
        quantity: '1 model',
        total: 50,
      },
    ],
    baseSizes: [
      {
        model: 'Canoness',
        size: 32,
      },
    ],
  },
  keywords: ['Infantry', 'Character', 'Grenades', 'Imperium', 'Canoness'],
  factionKeywords: ['Adepta Sororitas'],
  setupAbilities: [],
};
