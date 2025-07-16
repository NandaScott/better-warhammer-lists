import type { SororitasArmyRuleKeys } from '../../panels/RulesPanel';
import type { Datasheet, DetatchmentData } from '../core/types';
import ArmyOfFaithDetatchment from '../Sororitas/detatchments/army-of-faith';
import type { DatasheetProps } from '../../components/Datasheet';
import { v4 as uuidV4 } from 'uuid';

interface Points {
  used: number;
  total: number;
}

interface Faction {
  name: string;
  armyRules: SororitasArmyRuleKeys[];
}

export type ListDatasheets = DatasheetProps & {
  attachedUnits: DatasheetProps[];
};

export interface Unit {
  id: string;
  datasheets: Datasheet[];
}

interface ArmyList {
  name: string;
  faction: Faction;
  detatchment: DetatchmentData;
  points: Points;
  description: string;
  units: Unit[];
}

export const list: ArmyList = {
  name: 'Miracle Army',
  faction: { name: 'Adepta Sororitas', armyRules: ['Miracle Dice'] },
  detatchment: ArmyOfFaithDetatchment,
  points: { used: 2000, total: 2000 },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla tortor eu mauris vestibulum imperdiet. Maecenas imperdiet sapien in elit luctus vehicula. Proin lectus urna, aliquet et fringilla nec, vulputate nec enim. Phasellus quis quam fringilla urna mattis interdum sit amet ut lectus. Donec convallis orci nec quam dictum, ornare ullamcorper justo posuere. Morbi in pharetra mauris, sit amet blandit tortor. Etiam odio odio, dignissim at nisi euismod, rutrum pharetra mauris. Nullam dignissim sagittis pretium. Nunc sed rutrum erat.',
  units: [
    {
      id: uuidV4(),
      datasheets: [
        {
          stats: [
            {
              name: 'Dominion Squad',
              movement: 6,
              toughness: 3,
              save: 3,
              invuln: 6,
              wounds: 1,
              leadership: 7,
              objective: 1,
            },
          ],
          enhancements: [],
          rangedWeapons: [
            {
              type: 'ranged',
              quantity: 0,
              name: 'Artificer-crafted storm bolter',
              subtitle: '',
              keywords: ['Rapid Fire 2', 'Assault'],
              range: 24,
              attacks: 2,
              ballisticSkill: 3,
              strength: 4,
              armorPen: 0,
              damage: 2,
            },
            {
              type: 'ranged',
              quantity: 6,
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
            {
              type: 'ranged',
              quantity: 0,
              name: 'Boltgun',
              subtitle: '',
              keywords: ['Assault', 'Rapid Fire 1'],
              range: 24,
              attacks: 1,
              ballisticSkill: 3,
              strength: 4,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Combi-weapon',
              subtitle: '',
              keywords: [
                'Anti-Infantry 4+',
                'Devastating Wounds',
                'Rapid Fire 1',
              ],
              range: 24,
              attacks: 1,
              ballisticSkill: 4,
              strength: 4,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Condemnor boltgun',
              subtitle: '',
              keywords: [
                'Anti-Psyker 2+',
                'Devastating Wounds',
                'Precision',
                'Rapid Fire 1',
              ],
              range: 24,
              attacks: 1,
              ballisticSkill: 3,
              strength: 4,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Inferno pistol',
              subtitle: '',
              keywords: ['Melta 2', 'Pistol'],
              range: 6,
              attacks: 1,
              ballisticSkill: 3,
              strength: 8,
              armorPen: 4,
              damage: 'D3',
            },
            {
              type: 'ranged',
              quantity: 4,
              name: 'Meltagun',
              subtitle: '',
              keywords: ['Assault', 'Melta 2'],
              range: 12,
              attacks: 1,
              ballisticSkill: 3,
              strength: 9,
              armorPen: 4,
              damage: 'D6',
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Ministorum flamer',
              subtitle: '',
              keywords: ['Assault', 'Ignores Cover', 'Torrent'],
              range: 12,
              attacks: 'D6',
              ballisticSkill: 'N/A',
              strength: 5,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Ministorum hand flamer',
              subtitle: '',
              keywords: ['Ignores Cover', 'Pistol', 'Torrent'],
              range: 12,
              attacks: 'D6',
              ballisticSkill: 'N/A',
              strength: 4,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              profiled: true,
              name: 'Plasma pistol',
              subtitle: 'Standard',
              keywords: ['Pistol'],
              range: 12,
              attacks: 1,
              ballisticSkill: 3,
              strength: 7,
              armorPen: 2,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              profiled: true,
              name: 'Plasma pistol',
              subtitle: 'Supercharge',
              keywords: ['Hazardous', 'Pistol'],
              range: 12,
              attacks: 1,
              ballisticSkill: 3,
              strength: 8,
              armorPen: 3,
              damage: 2,
            },
          ],
          meleeWeapons: [
            {
              type: 'melee',
              quantity: 0,
              name: 'Chainsword',
              subtitle: '',
              keywords: [],
              range: 'Melee',
              attacks: 3,
              weaponSkill: 4,
              strength: 3,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'melee',
              quantity: 9,
              name: 'Close combat weapon',
              subtitle: '',
              keywords: [],
              range: 'Melee',
              attacks: 1,
              weaponSkill: 4,
              strength: 3,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'melee',
              quantity: 1,
              name: 'Power weapon',
              subtitle: '',
              keywords: [],
              range: 'Melee',
              attacks: 2,
              weaponSkill: 4,
              strength: 4,
              armorPen: 2,
              damage: 1,
            },
          ],
          abilities: {
            core: ['Scouts 6"'],
            faction: 'Acts of Faith',
            datasheetAbilities: [
              {
                name: 'Cherub',
                effect:
                  'Once per battle, after this unit has performed an Act of Faith, you gain 1 Miracle dice.',
                note: "Designer's Note: Place a Cherub token next to the unit, removing it once this ability has been used.",
              },
              {
                name: 'Righteous Awareness',
                effect:
                  'Once per turn, when an enemy unit ends a Normal, Advance, or Fall Back move within 9" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6"',
              },
            ],
          },
          wargearAbilities: [
            {
              equipped: true,
              name: 'Simulacrum Imperialis',
              effect:
                'At the end of your Command phase, for each objective marker you control that has one or more units from your army with this ability within range of it, roll one D6: on a 4+, you gain 1 Miracle dice showing a value equal to that result.',
            },
          ],
          setupAbilities: [
            {
              name: 'Holy Vanguard',
              effect:
                'If this unit has a Leader unit attached to it during the Declare Battle Formations step and this unit starts the battle embarked within a TRANSPORT, that Leader unit gains the Scouts 6" ability.',
            },
          ],
          wargearOptions: [
            {
              entry:
                "The Dominion Superior's boltgun can be replaced with one of the following:",
              options: [
                '1 bolt pistol',
                '1 combi-weapon',
                '1 condemnor boltgun',
                '1 inferno pistol',
                '1 Ministorum hand flamer',
                '1 plasma pistol',
              ],
            },
            {
              entry:
                'The Dominion Superior can be equipped with one of the following:',
              options: ['1 chainsword', '1 power weapon'],
            },
            {
              entry:
                'Up to 4 Dominions can each have their boltgun replaced with one of the following:',
              options: [
                '1 artificer-crafted storm bolter',
                '1 meltagun',
                '1 Ministorum flamer',
              ],
            },
            {
              entry:
                "1 Dominion equipped with 1 boltgun can be equipped with 1 simulacrum imperialis (that model's boltgun cannot be replaced).",
            },
          ],
          unitComposition: {
            models: ['1 Dominion Superior', '9 Dominions'],
            defaultWeapons: [
              'Each Dominion is equipped with: bolt pistol; boltgun; close combat weapon.',
            ],
            points: [
              {
                quantity: '10 Dominions',
                total: 115,
              },
            ],
            baseSizes: [
              {
                model: 'Dominions',
                size: 32,
              },
            ],
          },
          keywords: ['Infantry', 'Grenades', 'Imperium', 'Dominion Squad'],
          leaderAbility: [],
          factionKeywords: ['Adepta Sororitas'],
        },
        {
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
          enhancements: [
            ArmyOfFaithDetatchment.enhancements['Blade of Saint Ellynor'],
          ],
          rangedWeapons: [
            {
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
            {
              type: 'ranged',
              quantity: 0,
              name: 'Brazier of holy fire',
              subtitle: '',
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
              subtitle: '',
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
              subtitle: '',
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
              quantity: 1,
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
            {
              type: 'ranged',
              quantity: 1,
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
          ],
          meleeWeapons: [
            {
              type: 'melee',
              quantity: 0,
              name: 'Blessed Blade',
              subtitle: '',
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
              subtitle: '',
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
              quantity: 1,
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
              equipped: true,
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
              options: [
                '1 condemnor boltgun',
                '1 inferno pistol',
                '1 plasma pistol',
              ],
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
              'This Canoness is equipped with: bolt pistol; hallowed chainsword.',
            ],
            points: [
              {
                quantity: '1 Canoness',
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
          keywords: [
            'Infantry',
            'Character',
            'Grenades',
            'Imperium',
            'Canoness',
          ],
          factionKeywords: ['Adepta Sororitas'],
          setupAbilities: [],
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
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
          enhancements: [],
          rangedWeapons: [],
          meleeWeapons: [
            {
              armorPen: 0,
              attacks: 4,
              damage: 1,
              keywords: ['Sustained Hits 1'],
              name: 'Arco-flails',
              quantity: 10,
              range: 'Melee',
              strength: 5,
              subtitle: '',
              type: 'melee',
              weaponSkill: 4,
              profiled: false,
            },
          ],
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
            defaultWeapons: [
              'Arco-flagellants are equipped with: arco-flails.',
            ],
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
          wargearAbilities: [],
          setupAbilities: [],
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
          stats: [
            {
              name: 'Battle Sisters Squad',
              movement: 6,
              toughness: 3,
              save: 3,
              invuln: 6,
              wounds: 1,
              leadership: 7,
              objective: 2,
            },
          ],
          enhancements: [],
          rangedWeapons: [
            {
              type: 'ranged',
              quantity: 0,
              name: 'Artificer-crafted storm bolter',
              subtitle: '',
              keywords: ['Rapid Fire 2'],
              range: 24,
              attacks: 2,
              ballisticSkill: 3,
              strength: 4,
              armorPen: 0,
              damage: 2,
            },
            {
              type: 'ranged',
              quantity: 10,
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
            {
              type: 'ranged',
              quantity: 10,
              name: 'Boltgun',
              subtitle: '',
              keywords: ['Rapid Fire 1'],
              range: 24,
              attacks: 1,
              ballisticSkill: 3,
              strength: 4,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Combi-weapon',
              subtitle: '',
              keywords: [
                'Anti-Infantry 4+',
                'Devastating Wounds',
                'Rapid Fire 1',
              ],
              range: 24,
              attacks: 1,
              ballisticSkill: 4,
              strength: 4,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Condemnor boltgun',
              subtitle: '',
              keywords: [
                'Anti-Psyker 2+',
                'Devastating Wounds',
                'Precision',
                'Rapid Fire 1',
              ],
              range: 24,
              attacks: 1,
              ballisticSkill: 3,
              strength: 4,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Heavy Bolter',
              subtitle: '',
              keywords: ['Heavy', 'Sustained Hits 1'],
              range: 24,
              attacks: 3,
              ballisticSkill: 4,
              strength: 5,
              armorPen: 1,
              damage: 2,
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Inferno pistol',
              subtitle: '',
              keywords: ['Melta 2', 'Pistol'],
              range: 6,
              attacks: 1,
              ballisticSkill: 3,
              strength: 8,
              armorPen: 4,
              damage: 'D3',
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Meltagun',
              subtitle: '',
              keywords: ['Melta 2'],
              range: 12,
              attacks: 1,
              ballisticSkill: 3,
              strength: 9,
              armorPen: 4,
              damage: 'D6',
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Ministorum flamer',
              subtitle: '',
              keywords: ['Ignores Cover', 'Torrent'],
              range: 12,
              attacks: 'D6',
              ballisticSkill: 'N/A',
              strength: 5,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Ministorum hand flamer',
              subtitle: '',
              keywords: ['Ignores Cover', 'Pistol', 'Torrent'],
              range: 12,
              attacks: 'D6',
              ballisticSkill: 'N/A',
              strength: 4,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Ministorum heavy flamer',
              subtitle: '',
              keywords: ['Ignores Cover', 'Torrent'],
              range: 12,
              attacks: 'D6',
              ballisticSkill: 'N/A',
              strength: 6,
              armorPen: 1,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              name: 'Multi-melta',
              subtitle: '',
              keywords: ['Heavy', 'Melta 2'],
              range: 18,
              attacks: 2,
              ballisticSkill: 4,
              strength: 9,
              armorPen: 4,
              damage: 'D6',
            },
            {
              type: 'ranged',
              quantity: 0,
              profiled: true,
              name: 'Plasma pistol',
              subtitle: 'Standard',
              keywords: ['Pistol'],
              range: 12,
              attacks: 1,
              ballisticSkill: 3,
              strength: 7,
              armorPen: 2,
              damage: 1,
            },
            {
              type: 'ranged',
              quantity: 0,
              profiled: true,
              name: 'Plasma pistol',
              subtitle: 'Supercharge',
              keywords: ['Hazardous', 'Pistol'],
              range: 12,
              attacks: 1,
              ballisticSkill: 3,
              strength: 8,
              armorPen: 3,
              damage: 2,
            },
          ],
          meleeWeapons: [
            {
              type: 'melee',
              quantity: 0,
              name: 'Chainsword',
              subtitle: '',
              keywords: [],
              range: 'Melee',
              attacks: 3,
              weaponSkill: 4,
              strength: 3,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'melee',
              quantity: 10,
              name: 'Close combat weapon',
              subtitle: '',
              keywords: [],
              range: 'Melee',
              attacks: 1,
              weaponSkill: 4,
              strength: 3,
              armorPen: 0,
              damage: 1,
            },
            {
              type: 'melee',
              quantity: 0,
              name: 'Power weapon',
              subtitle: '',
              keywords: [],
              range: 'Melee',
              attacks: 2,
              weaponSkill: 4,
              strength: 4,
              armorPen: 2,
              damage: 1,
            },
          ],
          abilities: {
            core: [],
            faction: 'Acts of Faith',
            datasheetAbilities: [
              {
                name: 'Cherub',
                effect:
                  'Once per battle, after this unit has performed an Act of Faith, you gain 1 Miracle dice.',
                note: "Designer's Note: Place a Cherub token next to the unit, removing it once this ability has been used.",
              },
              {
                name: 'Defenders of the Faith',
                effect:
                  'At the end of your Command phase, if this unit is within range of an objective marker you control, that object marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.',
              },
            ],
          },
          wargearAbilities: [
            {
              equipped: false,
              name: 'Simulacrum Imperialis',
              effect:
                'At the end of your Command phase, for each objective marker you control that has one or more units from your army with this ability within range of it, roll one D6: on a 4+, you gain 1 Miracle dice showing a value equal to that result.',
            },
          ],
          setupAbilities: [],
          wargearOptions: [
            {
              entry:
                "The Sister Superior's boltgun can be replaced with one of the following:",
              options: [
                '1 bolt pistol',
                '1 combi-weapon',
                '1 condemnor boltgun',
                '1 inferno pistol',
                '1 Ministorum hand flamer',
                '1 plasma pistol',
              ],
            },
            {
              entry:
                'The Sister Superior can be equipped with one of the following:',
              options: ['1 chainsword', '1 power weapon'],
            },
            {
              entry:
                "1 Battle Sister's boltgun can be replaced with one of the following:",
              options: [
                '1 artificer-crafted storm bolter',
                '1 meltagun',
                '1 Ministorum flamer',
              ],
            },
            {
              entry:
                "1 Battle Sister\'s boltgun can be replaced with one of the following:",
              options: [
                '1 artificer-crafted storm bolter',
                '1 heavy bolter',
                '1 meltagun',
                '1 Ministorum flamer',
                '1 Ministorum heavy flamer',
                '1 multi-melta',
              ],
            },
            {
              entry:
                "1 Battle Sister equipped with 1 boltgun can be equipped with 1 simulacrum imperialis (that model\'s boltgun cannot be replaced).",
            },
          ],
          unitComposition: {
            models: ['1 Sister Superior', '9 Battle Sisters'],
            defaultWeapons: [
              'Every Battle Sister is equipped with: bolt pistol; boltgun; close combat weapon.',
            ],
            points: [
              {
                quantity: '10 models',
                total: 105,
              },
            ],
            baseSizes: [
              {
                model: 'Battle Sister Squad',
                size: 32,
              },
            ],
          },
          keywords: [
            'Infantry',
            'Grenades',
            'Battleline',
            'Imperium',
            'Battle Sisters Squad',
          ],
          leaderAbility: [],
          factionKeywords: ['Adepta Sororitas'],
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
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
              quantity: 1,
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
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
          stats: [
            {
              name: 'Castigator',
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
          rangedWeapons: [
            {
              armorPen: 1,
              attacks: 4,
              ballisticSkill: 3,
              damage: 3,
              keywords: ['Twin-linked', 'Rapid Fire 4'],
              name: 'Castigator autocannons',
              quantity: 1,
              range: 48,
              strength: 9,
              subtitle: '',
              type: 'ranged',
              profiled: false,
            },
            {
              armorPen: 1,
              attacks: 'D6+3',
              ballisticSkill: 3,
              damage: 3,
              keywords: ['Blast', 'Ignores Cover'],
              name: 'Castigator battle cannon',
              quantity: 0,
              range: 48,
              strength: 10,
              subtitle: '',
              type: 'ranged',
              profiled: false,
            },
            {
              armorPen: 1,
              attacks: 3,
              ballisticSkill: 3,
              damage: 2,
              keywords: ['Sustained Hits 1'],
              name: 'Heavy bolter',
              quantity: 3,
              range: 36,
              strength: 5,
              subtitle: '',
              type: 'ranged',
              profiled: false,
            },
            {
              armorPen: 3,
              attacks: 1,
              ballisticSkill: 2,
              damage: 'D6',
              keywords: ['One Shot'],
              name: 'Hunter-killer missile',
              quantity: 0,
              range: 48,
              strength: 14,
              subtitle: '',
              type: 'ranged',
              profiled: false,
            },
            {
              armorPen: 0,
              attacks: 2,
              ballisticSkill: 3,
              damage: 1,
              keywords: ['Rapid Fire 2'],
              name: 'Storm bolter',
              quantity: 0,
              range: 24,
              strength: 4,
              subtitle: '',
              type: 'ranged',
              profiled: false,
            },
          ],
          meleeWeapons: [
            {
              armorPen: 0,
              attacks: 3,
              damage: 1,
              keywords: [],
              name: 'Armoured tracks',
              quantity: 1,
              range: 'Melee',
              strength: 6,
              subtitle: '',
              type: 'melee',
              weaponSkill: 4,
              profiled: false,
            },
          ],
          abilities: {
            core: ['Deadly Demise D3'],
            faction: 'Acts of Faith',
            datasheetAbilities: [
              {
                name: 'Rites of Castigation',
                effect:
                  'In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly Adepta Sororitas unit makes a ranged attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. The same enemy unit can only be affected by this ability once per turn.',
              },
            ],
          },
          damaged: {
            title: '1-4 Wounds Remaining',
            text: 'While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.',
          },
          wargearAbilities: [],
          leaderAbility: [],
          wargearOptions: [
            {
              entry:
                "This model's Castigator autocannons can be replaced with 1 Castigator battle cannon.",
            },
            {
              entry:
                'This Castigator can be equipped with 1 hunter-killer missile.',
            },
            {
              entry: 'This Castigator can be equipped with 1 storm bolter.',
            },
          ],
          unitComposition: {
            models: ['1 Castigator'],
            defaultWeapons: [
              'This Castigator is equipped with: Castigator autocannons; 3 heavy bolters; armoured tracks.',
            ],
            points: [
              {
                quantity: '1 Castigator',
                total: 160,
              },
            ],
            baseSizes: [
              {
                model: 'Castigator',
                size: 'Hull',
              },
            ],
          },
          keywords: ['Vehicle', 'Smoke', 'Imperium', 'Castigator'],
          factionKeywords: ['Adepta Sororitas'],
          setupAbilities: [],
        },
      ],
    },
  ],
};
