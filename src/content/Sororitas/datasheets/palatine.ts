import type { Datasheet } from '../../core/types';

export const Palatine: Datasheet = {
  id: '',
  stats: [
    {
      name: 'Palatine',
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
  rangedWeapons: {
    BoltPistol: {
      model: 'Palatine',
      type: 'ranged',
      quantity: 0,
      name: 'Bolt pistol',
      subtitle: '',
      keywords: ['Pistol'],
      range: 12,
      attacks: 1,
      ballisticSkill: 2,
      strength: 4,
      armorPen: 0,
      damage: 1,
    },
    PlasmaPistolStandard: {
      model: 'Palatine',
      type: 'ranged',
      quantity: 0,
      name: 'Plasma pistol',
      subtitle: 'Standard',
      profiled: true,
      keywords: ['Pistol'],
      range: 12,
      attacks: 1,
      ballisticSkill: 2,
      strength: 7,
      armorPen: 2,
      damage: 1,
    },
    PlasmaPistolSupercharge: {
      model: 'Palatine',
      type: 'ranged',
      quantity: 0,
      name: 'Plasma pistol',
      subtitle: 'Supercharge',
      profiled: true,
      keywords: ['Hazardous', 'Pistol'],
      range: 12,
      attacks: 1,
      ballisticSkill: 2,
      strength: 8,
      armorPen: 3,
      damage: 2,
    },
  },
  meleeWeapons: {
    PalatineBlade: {
      model: 'Palatine',
      type: 'melee',
      quantity: 0,
      name: 'Palatine Blade',
      subtitle: '',
      keywords: [],
      range: 'Melee',
      attacks: 4,
      weaponSkill: 2,
      strength: 4,
      armorPen: 2,
      damage: 2,
    },
  },
  abilities: {
    core: ['Leader'],
    faction: 'Acts of Faith',
    datasheetAbilities: [
      {
        name: 'Fury of the Righteous',
        effect:
          'While this model is leading a unit, weapons equipped by models in that unit have the [Lethal Hits] ability.',
      },
      {
        name: 'Rapturous Blows',
        effect:
          "Each time this model's unit is selected to fight, you can discard 1 Miracle dice. If you do, until the end of the phase, each time a melee attack made by this model scores a wound, the target of that attack suffers 1 mortal wound in addition to any normal damage.",
      },
    ],
  },
  wargearAbilities: {},
  leaderAbility: [
    'Battle Sisters Squad',
    'Celestian Sacresancts',
    'Dominion Squad',
    'Retributor Squad',
    'Sisters Novitiate Squad',
  ],
  wargearOptions: [
    {
      entry: "The Palatine's bolt pistol can be replaced with 1 plasma pistol",
    },
  ],
  unitComposition: {
    models: ['1 Palatine'],
    defaultWeapons: [
      'This model is equipped with: bolt pistol; Palatine blade.',
    ],
    points: [
      {
        quantity: '1 Palatine',
        total: 50,
      },
    ],
    baseSizes: [
      {
        model: 'Palatine',
        size: 32,
      },
    ],
  },
  keywords: ['Infantry', 'Character', 'Grenades', 'Imperium', 'Palatine'],
  factionKeywords: ['Adepta Sororitas'],
  setupAbilities: [],
};
