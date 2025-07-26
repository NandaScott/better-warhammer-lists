import type { Datasheet } from '../../core/types';

export const Exorcist: Datasheet = {
  id: '',
  stats: [
    {
      name: 'Exorcist',
      movement: 10,
      toughness: 10,
      save: 3,
      invuln: 6,
      wounds: 11,
      leadership: 7,
      objective: 3,
    },
  ],
  enhancements: [],
  rangedWeapons: {
    ExorcistConflagrationRockets: {
      model: 'Exorcist',
      type: 'ranged',
      quantity: 0,
      name: 'Exorcist conflagration rockets',
      subtitle: '',
      keywords: ['Blast', 'Ignores Cover', 'Indirect Fire'],
      range: 36,
      attacks: '3D6',
      ballisticSkill: 3,
      strength: 6,
      armorPen: 1,
      damage: 1,
    },
    ExorcistMissileLauncher: {
      model: 'Exorcist',
      type: 'ranged',
      quantity: 0,
      name: 'Exorcist missile launcher',
      subtitle: '',
      keywords: ['Indirect Fire'],
      range: 36,
      attacks: 'D6+2',
      ballisticSkill: 3,
      strength: 10,
      armorPen: 3,
      damage: 'D6',
    },
    HeavyBolter: {
      model: 'Exorcist',
      type: 'ranged',
      quantity: 0,
      name: 'Heavy bolter',
      subtitle: '',
      keywords: ['Sustained Hits 1'],
      range: 36,
      attacks: 3,
      ballisticSkill: 3,
      strength: 5,
      armorPen: 1,
      damage: 2,
    },
    HunterKillerMissile: {
      model: 'Exorcist',
      type: 'ranged',
      quantity: 0,
      name: 'Hunter-killer missile',
      subtitle: '',
      keywords: ['One Shot'],
      range: 48,
      attacks: 1,
      ballisticSkill: 2,
      strength: 14,
      armorPen: 3,
      damage: 'D6',
    },
  },
  meleeWeapons: {
    ArmouredTracks: {
      model: 'Exorcist',
      type: 'melee',
      quantity: 0,
      name: 'Armoured tracks',
      subtitle: '',
      keywords: [],
      range: 'Melee',
      attacks: 3,
      weaponSkill: 4,
      strength: 6,
      armorPen: 0,
      damage: 1,
    },
  },
  abilities: {
    core: ['Deadly Demise D3'],
    faction: 'Acts of Faith',
    datasheetAbilities: [
      {
        name: 'Devastating Refrain',
        effect:
          'In your Shooting phase, after this model has shot, if one or more of those attacks made with an Indirect Fire weapon scored a hit against an enemy unit, that unit must take a Battle-shock test. Each time such an attack destroys an enemy model that has the Deadly Demise ability, that models Deadly Demise ability inflicts mortal wounds on a D6 roll of 5+ instead of on a 6.',
      },
    ],
  },
  damaged: {
    title: '1-4 Wounds Remaining',
    text: 'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.',
  },
  wargearAbilities: {},
  leaderAbility: [],
  wargearOptions: [
    {
      entry:
        "This model's Exorcist missile launcher can be replaced with 1 Exorcist conflagration rockets.",
    },
    {
      entry: 'This Exorcist can be equipped with 1 hunter-killer missile.',
    },
  ],
  unitComposition: {
    models: ['1 Exorcist'],
    defaultWeapons: [
      'This Exorcist is equipped with: Exorcist missile launcher; heavy bolter; armoured tracks.',
    ],
    points: [
      {
        quantity: '1 Exorcist',
        total: 210,
      },
    ],
    baseSizes: [
      {
        model: 'Exorcist',
        size: 'Hull',
      },
    ],
  },
  keywords: ['Vehicle', 'Smoke', 'Imperium', 'Exorcist'],
  factionKeywords: ['Adepta Sororitas'],
  setupAbilities: [],
};
