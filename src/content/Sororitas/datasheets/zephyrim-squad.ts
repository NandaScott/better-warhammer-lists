import type { Datasheet } from '../../core/types';

export const ZehpyrimSquad: Datasheet = {
  id: '',
  stats: [
    {
      name: 'Zehpyrim Squad',
      movement: 12,
      toughness: 3,
      save: 3,
      invuln: 5,
      wounds: 1,
      leadership: 7,
      objective: 1,
    },
  ],
  enhancements: {},
  rangedWeapons: {
    BoltPistol: {
      model: 'Zehpyrim Squad',
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
    PlasmaPistolStandard: {
      model: 'Zehpyrim Squad',
      type: 'ranged',
      quantity: 0,
      name: 'Plasma pistol',
      subtitle: 'Standard',
      profiled: true,
      keywords: ['Pistol'],
      range: 12,
      attacks: 1,
      ballisticSkill: 3,
      strength: 7,
      armorPen: 2,
      damage: 1,
    },
    PlasmaPistolSupercharge: {
      model: 'Zehpyrim Squad',
      type: 'ranged',
      quantity: 0,
      name: 'Plasma pistol',
      subtitle: 'Supercharge',
      profiled: true,
      keywords: ['Hazardous', 'Pistol'],
      range: 12,
      attacks: 1,
      ballisticSkill: 3,
      strength: 8,
      armorPen: 3,
      damage: 2,
    },
  },
  meleeWeapons: {
    PowerWeapon: {
      model: 'Zehpyrim Squad',
      type: 'melee',
      quantity: 0,
      name: 'Power weapon',
      subtitle: '',
      profiled: false,
      keywords: [],
      range: 'Melee',
      attacks: 3,
      weaponSkill: 3,
      strength: 4,
      armorPen: 2,
      damage: 1,
    },
  },
  abilities: {
    core: ['Deep Strike'],
    faction: 'Acts of Faith',
    datasheetAbilities: [
      {
        name: 'Embodied Prophecy',
        effect:
          'Each time this unit is selected to fight, select one of the following abilities to apply to melee weapons equipped by models in this unit until the end of the phase: - Sustained Hits 1 - Lethal Hits. If this unit made a Charge move this turn, until the end of the phase, select both abilities above to apply to melee weapons equipped by models in this unit instead.',
      },
    ],
  },
  wargearAbilities: {
    SacredBanner: {
      name: 'Sacred Banner',
      effect:
        "You can re-roll Advance and Charge rolls made for the bearer's unit.",
      equipped: false,
    },
  },
  leaderAbility: [],
  wargearOptions: [
    {
      entry: 'The Zehpyrim Superior can be equipped with 1 sacred banner.',
    },
    {
      entry:
        "The Zehpyrim Superior's bolt pistol can be replaced with 1 plasma pistol.",
    },
  ],
  unitComposition: {
    models: ['1 Zehpyrim Superior', '4-9 Zehpyrim'],
    defaultWeapons: [
      'Each Zehpyrim is equipped with: bolt pistol; power weapon',
    ],
    points: [
      {
        quantity: '5 Zehpyrim',
        total: 80,
      },
      {
        quantity: '10 Zehpyrim',
        total: 160,
      },
    ],
    baseSizes: [
      {
        model: 'Zehpyrim',
        size: 32,
      },
    ],
  },
  keywords: [
    'Infantry',
    'Jump Pack',
    'Fly',
    'Grenades',
    'Imperium',
    'Zehpyrim Squad',
  ],
  factionKeywords: ['Adepta Sororitas'],
  setupAbilities: [],
};
