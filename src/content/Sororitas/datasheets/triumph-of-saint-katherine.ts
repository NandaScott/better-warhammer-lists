import type { Datasheet } from '../../core/types';

export const TriumphOfSaintKatherine: Datasheet = {
  id: '',
  stats: [
    {
      name: 'Triumph of Saint Katherine',
      movement: 6,
      toughness: 3,
      save: 3,
      invuln: 4,
      wounds: 18,
      leadership: 6,
      objective: 6,
    },
  ],
  enhancements: [],
  rangedWeapons: [
    {
      type: 'ranged',
      quantity: 0,
      name: 'Bolt pistols',
      subtitle: '',
      keywords: ['Pistol'],
      range: 12,
      attacks: 6,
      ballisticSkill: 2,
      strength: 4,
      armorPen: 0,
      damage: 1,
    },
  ],
  meleeWeapons: [
    {
      type: 'melee',
      quantity: 0,
      name: 'Relic Weapons',
      subtitle: '',
      keywords: [],
      range: 'Melee',
      attacks: 18,
      weaponSkill: 2,
      strength: 5,
      armorPen: 2,
      damage: 1,
    },
  ],
  abilities: {
    core: ['Leader'],
    faction: 'Acts of Faith',
    datasheetAbilities: [
      {
        name: 'Relics of the Matriarchs',
        effect:
          'At the start of the battle round, select up to two of the abilities in the Relics of the Matriarchs section. Until the start of the next battle rounds, this model has those abilities.',
      },
      {
        name: 'Solemn Procession',
        effect:
          'Each time you gain 1 Miracle dice at the start of the battle round, if this model is on the battlefield, do not roll one D6 to determine the value of that Miracle dice; it has a value of 6.',
      },
    ],
  },
  uniqueAbilities: {
    title: 'Relics of the Matriarchs',
    abilities: [
      {
        name: 'The Fiery Heart (Aura)',
        text: 'While a friendly ADEPTA SORORITAS unit is within 6" of this model, add 2" to that unit\'s Move characteristic and add 1 to the Advance and Charge rolls made for that unit.',
      },
      // TODO: Finish these
    ],
  },
  wargearAbilities: [],
  leaderAbility: ['Battle Sisters Squad'],
  wargearOptions: [],
  damaged: {
    title: '1-6 Wounds Remaining',
    text: 'While this model has 1-6 wounds remaining, the Attacks characteristics of all its weapons are halved, and you can only select one ability when using its Relics of the Matriarchs ability, instead of up to two.',
  },
  unitComposition: {
    models: ['1 Triumph of Saint Katherine - EPIC HERO'],
    defaultWeapons: [
      'Triumph of Saint Katherine is equipped with: bolt pistols; relic weapons.',
    ],
    points: [
      {
        quantity: '1 Triumph of Saint Katherine',
        total: 235,
      },
    ],
    baseSizes: [
      {
        model: 'Triumph of Saint Katherine',
        size: '120 x 92mm Oval Base',
      },
    ],
  },
  keywords: [
    'Infantry',
    'Grenades',
    'Character',
    'Epic Hero',
    'Imperium',
    'Triumph of Saint Katherine',
  ],
  factionKeywords: ['Adepta Sororitas'],
  setupAbilities: [],
};
