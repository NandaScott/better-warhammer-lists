import { TabPanel } from '@headlessui/react';
import { Datasheet } from '../components/Datasheet';

interface DatasheetsPanelProps {}

export default function DatasheetsPanel(props: DatasheetsPanelProps) {
  const {} = props;
  return (
    <TabPanel>
      <Datasheet
        name='Dominion Squad'
        movement={6}
        toughness={3}
        save={3}
        invuln={6}
        wounds={1}
        leadership={7}
        objective={1}
        rangedWeapons={[
          {
            type: 'ranged',
            quantity: 1,
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
            quantity: 5,
            name: 'Boltgun',
            keywords: ['Rapid Fire 1', 'Assault'],
            range: 24,
            attacks: 1,
            ballisticSkill: 3,
            strength: 4,
            armorPen: 0,
            damage: 1,
          },
          {
            type: 'ranged',
            quantity: 10,
            name: 'Bolt pistol',
            keywords: ['Pistol'],
            range: 12,
            attacks: 1,
            ballisticSkill: 3,
            strength: 4,
            armorPen: 0,
            damage: 1,
          },
        ]}
        meleeWeapons={[
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
        ]}
        abilities={{
          core: ['Scouts 6"'],
          faction: 'Acts of Faith',
          other: [
            {
              name: 'Cherub',
              effect:
                'Once per battle, after this unit has performed an Act of Faith, you gain 1 Miracle dice.',
            },
            {
              name: 'Righteous Awareness',
              effect:
                'Once per turn, when an enemy unit ends a Normal, Advance, or Fall Back move within 9" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6"',
            },
          ],
        }}
        wargearAbilities={[
          {
            name: 'Simulacrum Imperialis',
            effect:
              'At the end of your Command phase, for each objective marker you control that has one or more units from your army with this ability within range of it, roll one D6: on a 4+, you gain 1 Miracle dice showing a value equal to that result.',
          },
        ]}
        keywords={['Infantry', 'Grenades', 'Imperium', 'Dominion Squad']}
        factionKeywords={['Adepta Sororitas']}
      />
    </TabPanel>
  );
}
