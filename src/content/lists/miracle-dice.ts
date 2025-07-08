import type { SororitasArmyRuleKeys } from '../../panels/RulesPanel';
import type { Datasheet, DetatchmentData } from '../core/types';
import ArmyOfFaithDetatchment from '../Sororitas/detatchments/army-of-faith';
import type { DatasheetProps } from '../../components/Datasheet';

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
      id: '23f94252-dcf1-4514-a1c7-ebefaa8c1722',
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
              name: 'Plasma pistol - standard',
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
              name: 'Plasma pistol - supercharge',
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
              quantity: 1,
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
              quantity: 1,
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
              quantity: 1,
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
  ],
};
