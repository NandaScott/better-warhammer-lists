import type { Datasheet } from '../../core/types';

export const JunithEruita: Datasheet = {
  id: '',
  stats: [
    {
      name: 'Junith Eruita',
      movement: 8,
      toughness: 5,
      save: 2,
      invuln: 4,
      wounds: 8,
      leadership: 6,
      objective: 2,
    },
  ],
  enhancements: [],
  rangedWeapons: [
    {
      type: 'ranged',
      quantity: 0,
      name: 'Twin Ministorum heavy flamer',
      subtitle: '',
      keywords: ['Ignores Cover', 'Torrent', 'Twin-linked'],
      range: 12,
      attacks: 'D6',
      ballisticSkill: 'N/A',
      strength: 6,
      armorPen: 1,
      damage: 1,
    },
  ],
  meleeWeapons: [
    {
      type: 'melee',
      quantity: 0,
      name: 'Mace of Castigation',
      subtitle: '',
      keywords: [],
      range: 'Melee',
      attacks: 4,
      weaponSkill: 2,
      strength: 6,
      armorPen: 2,
      damage: 2,
    },
  ],
  abilities: {
    core: ['Deadly Demise 1', 'Leader'],
    faction: 'Acts of Faith',
    datasheetAbilities: [
      {
        name: "The Pulpit of Saint Holline's Basilica",
        effect:
          'While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll.',
      },
      {
        name: 'Fiery Conviction',
        effect:
          'If this model is on the battlefield at the start of your Command phase, you can choose one of the following: - Discard 1 Miracle dice and gain 1 CP. - Take a Leadership test for this model; if that test is passed, gain 1 CP.',
      },
    ],
  },
  wargearAbilities: [],
  leaderAbility: [
    'Battle Sisters Squad',
    'Celestian Sacresancts',
    'Dominion Squad',
    'Retributor Squad',
    'Sisters Novitiate Squad',
  ],
  wargearOptions: [],
  unitComposition: {
    models: ['1 Junith Eruita - EPIC HERO'],
    defaultWeapons: [
      'Junith Eruita is equipped with: twin Ministorum heavy flamer; Mace of Castigation.',
    ],
    points: [
      {
        quantity: '1 Junith Eruita',
        total: 80,
      },
    ],
    baseSizes: [
      {
        model: 'Junith Eruita',
        size: 50,
      },
    ],
  },
  keywords: [
    'Mounted',
    'Character',
    'Fly',
    'Epic Hero',
    'Imperium',
    'Junith Eruita',
  ],
  factionKeywords: ['Adepta Sororitas'],
  setupAbilities: [],
};
