import type { Datasheet } from '../../core/types';

export const AestredThurgaAndAgathaeDolan: Datasheet = {
  stats: [
    {
      name: 'Aestred Thurga',
      movement: 6,
      toughness: 3,
      save: 2,
      invuln: 4,
      wounds: 4,
      leadership: 6,
      objective: 1,
    },
    {
      name: 'Agathae Dolan',
      movement: 6,
      toughness: 3,
      save: 6,
      invuln: 4,
      wounds: 3,
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
      name: 'Blade of Vigil',
      subtitle: '',
      keywords: [],
      range: 'Melee',
      attacks: 4,
      weaponSkill: 2,
      strength: 5,
      armorPen: 2,
      damage: 2,
    },
    {
      type: 'melee',
      quantity: 0,
      name: "Scribe's Staff",
      subtitle: '',
      keywords: [],
      range: 'Melee',
      attacks: 3,
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
        name: "Auto-Tapestry of the Emperor's Judgement",
        effect:
          'While this unit is leading a unit and contains an Aestred Thurga model, weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.',
      },
      {
        name: 'Recount the Deeds of the Saints',
        effect:
          'While this unit is leading a unit and contains an Agathe Dolan model, each time that unit destroys an enemy unit, you gain 1 Miracle dice. When that Agathe Dolan model is destroyed, you gain D3 Miracle dice.',
      },
    ],
  },
  leaderAbility: [
    'Battle Sisters Squad',
    'Celestian Sacresancts',
    'Dominion Squad',
    'Retributor Squad',
    'Sisters Novitiate Squad',
  ],
  unitComposition: {
    models: ['1 Aestred Thurga - EPIC HERO', '1 Agathae Dolan - EPIC HERO'],
    defaultWeapons: [
      'Aestred Thurga is equipped with: bolt pistol; Blade of Vigil.',
      "Agathae Dolan is equipped with: bolt pistol; scribe's staff.",
    ],
    points: [
      {
        quantity: '2 models',
        total: 85,
      },
    ],
    baseSizes: [
      {
        model: 'Aestred Thurga',
        size: 32,
      },
      {
        model: 'Agathae Dolan',
        size: 25,
      },
    ],
  },
  keywords: [
    'Infantry',
    'Grenades',
    'Character',
    'Epic Hero',
    'Imperium',
    'Aestred Thurga',
    'Agathae Dolan',
  ],
  factionKeywords: ['Adepta Sororitas'],
  wargearOptions: [],
  wargearAbilities: [],
  setupAbilities: [],
};
