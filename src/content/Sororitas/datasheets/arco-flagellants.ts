import type { Datasheet } from '../../core/types';

export const ArcoFlagellants: Datasheet = {
  id: '',
  stats: [
    {
      name: 'Arco-Flagellants',
      movement: 7,
      toughness: 3,
      save: 7,
      invuln: 6,
      wounds: 2,
      leadership: 8,
      objective: 1,
    },
  ],
  enhancements: {},
  rangedWeapons: {},
  meleeWeapons: {
    ArcoFlails: {
      model: 'ArcoFlagellants',
      armorPen: 0,
      attacks: 4,
      damage: 1,
      keywords: ['Sustained Hits 1'],
      name: 'Arco-flails',
      quantity: 0,
      range: 'Melee',
      strength: 5,
      subtitle: '',
      type: 'melee',
      weaponSkill: 4,
      profiled: false,
    },
  },
  abilities: {
    core: ['Feel No Pain 5+'],
    faction: 'Acts of Faith',
    datasheetAbilities: [
      {
        name: 'Extremis Trigger Word',
        effect:
          'Each time this unit is selected to fight, you can choose to invoke its extremis trigger word. If you do, until the end of the phase, arco-flails equipped by models in this unit have an Attacks characteristic of 6 and the [HAZARDOUS] ability.',
      },
    ],
  },
  leaderAbility: [],
  unitComposition: {
    baseSizes: [
      {
        model: 'Arco-flagellant',
        size: 25,
      },
    ],
    defaultWeapons: ['Arco-flagellants are equipped with: arco-flails.'],
    models: ['3-10 Arco-flagellants'],
    points: [
      {
        quantity: '3 Arco-flagellants',
        total: 45,
      },
      {
        quantity: '4-10 Arco-flagellants',
        total: 140,
      },
    ],
  },
  keywords: ['Infantry', 'Imperium', 'Penitent', 'Arco-Flagellants'],
  factionKeywords: ['Adepta Sororitas'],
  wargearOptions: [],
  wargearAbilities: {},
  setupAbilities: [],
};
