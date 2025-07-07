import type { StratagemData } from './types';

const CommandReRoll: StratagemData = {
  name: 'Command Re-Roll',
  subtitle: 'Re-roll a die',
  cost: 1,
  detatchment: 'Core',
  type: 'Battle Tactic',
  timing: ['Your Turn', "Opponent's Turn"],
  phases: ['Command', 'Movement', 'Shooting', 'Charge', 'Fight'],
  when: {
    oracle:
      'Any phase, just after you make an Advance roll, a Charge roll, a Desperate Escape test, or a Hazardous test for a unit from your army, or a Hit roll, a Wound roll, a Damage roll or a saving throw for a model in that unit, or a roll to determine the number of attacks made with a weapon equipped by a model in that unit. If you are using fast dice rolling, this Stratagem can still be used after rolling multiple rolls or saving throws at once.',
  },
  target: { oracle: 'That unit or model from your army.' },
  effect: {
    oracle:
      'You re-roll that roll, test or saving throw. If you are using fast dice rolling, select one of those rolls or saving throws to re-roll.',
  },
};

const CounterOffensive: StratagemData = {
  name: 'Counter-Offensive',
  subtitle: 'Immediately fight back',
  cost: 2,
  detatchment: 'Core',
  type: 'Strategic Ploy',
  timing: ['Your Turn', "Opponent's Turn"],
  phases: ['Fight'],
  when: { oracle: 'Fight phase, just after an enemy unit has fought.' },
  target: {
    oracle:
      'One unit from your army that is within Engagement Range of one or more enemy units and that has not already been selected to fight this phase.',
  },
  effect: { oracle: 'Your unit fights next.' },
};

const EpicChallenge: StratagemData = {
  name: 'Epic Challenge',
  subtitle: 'Give a Character in a fight [PRECISION]',
  cost: 1,
  detatchment: 'Core',
  type: 'Epic Deed',
  timing: ['Your Turn', "Opponent's Turn"],
  phases: ['Fight'],
  when: {
    oracle:
      'Fight phase, when a CHARACTER unit from your army that is within Engagement Range of one or more Attached units is selected to fight.',
  },
  target: { oracle: 'One CHARACTER model in your unit.' },
  effect: {
    oracle:
      'Until the end of the phase, all melee attacks made by that model have the [PRECISION] ability.',
  },
};

const FireOverwatch: StratagemData = {
  name: 'Fire Overwatch',
  subtitle: 'Fire at an enemy in response to movement',
  cost: 1,
  detatchment: 'Core',
  type: 'Strategic Ploy',
  timing: ["Opponent's Turn"],
  phases: ['Movement', 'Charge'],
  when: {
    oracle:
      "Your opponent's Movement or Charge phase, just after an enemy unit is set up or when an enemy unit starts or ends a Normal, Advance or Fall Back mvoe or declares a Charge.",
  },
  target: {
    oracle:
      'One unit from your army (excluding TITANIC units) that is within 24" of that enemy unit that would be eligible to shoot if it were your Shooting phase.',
  },
  effect: {
    oracle:
      'If that enemy unit is visible to your unit, your unit can shoot that enemy unit as if it were your Shooting phase.',
  },
  restrictions: {
    oracle:
      "You cannot target a TITANIC unit with this Stratagem. Until the end of the phase, each time a model in your unit makes a ranged attack, an unmodified Hit roll of 6 is required to score a hit, irrespective of the attack weapon's Ballistic Skill or any modifiers. You can only use this Stratagem once per turn.",
  },
};

const GoToGround: StratagemData = {
  name: 'Go To Ground',
  subtitle: 'After targeting: Benefit of Cover and 6+ invuln',
  cost: 1,
  detatchment: 'Core',
  type: 'Battle Tactic',
  timing: ["Opponent's Turn"],
  phases: ['Shooting'],
  when: {
    oracle:
      "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
  },
  target: {
    oracle:
      "One INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
  },
  effect: {
    oracle:
      'Until the end of the phase, all models in your unit have a 6+ invulnerable save and have the Benefit of Cover.',
  },
};

const Grenade: StratagemData = {
  name: 'Grenade',
  subtitle: 'Deal mortal wounds directly',
  cost: 1,
  detatchment: 'Core',
  type: 'Wargear',
  timing: ['Your Turn'],
  phases: ['Shooting'],
  when: { oracle: 'Your shooting phase.' },
  target: {
    oracle:
      'One GRENADES unit from your army (excluding units that Advanced, Fell Back, or have shot this turn) that is not within Engagement Range of one or more enemy units.',
  },
  effect: {
    oracle:
      'Select one GRENADES model in your unit and one enemy unit that is not within Engagement Range of one or more units from your army and is within 8" of and visible to your GRENADES model. Roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.',
  },
};

const HeroicIntervension: StratagemData = {
  name: 'Heroic Intervention',
  subtitle: 'Counter charge an enemy unit',
  cost: 1,
  detatchment: 'Core',
  type: 'Strategic Ploy',
  timing: ["Opponent's Turn"],
  phases: ['Charge'],
  when: {
    oracle:
      "Your opponent's Charge phase, just after an enemy unit ends a Charge move.",
  },
  target: {
    oracle:
      'One unit from your army that is within 6" of that enemy unit and would be eligible to declare a charge against that enemy unit as if it were your Charge phase.',
  },
  effect: {
    oracle:
      'Your unit now declares a charge that targets only that enemy unit, and you resolve the charge as if it were your Charge phase.',
  },
  restrictions: {
    oracle:
      'You can only select a VEHICLE unit from your army if it is a WALKER. Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.',
  },
};

const InsaneBravery: StratagemData = {
  name: 'Insane Bravery',
  subtitle: 'Automatically pass a Battle-shock test',
  cost: 1,
  detatchment: 'Core',
  type: 'Epic Deed',
  timing: ['Your Turn'],
  phases: ['Command'],
  when: {
    oracle:
      'Battle-shock step of your Command phase, just before you take a Battle-shock test for a unit from your army.',
  },
  target: { oracle: 'That unit from your army.' },
  effect: {
    oracle: 'Your unit automatically passes that Battle-shock test.',
  },
  restrictions: {
    oracle: 'You cannot use this Stratagem more than once per battle.',
  },
};

const RapidIngress: StratagemData = {
  name: 'Rapid Ingress',
  subtitle: "Deep strike on your opponent's turn",
  cost: 1,
  detatchment: 'Core',
  type: 'Strategic Ploy',
  timing: ["Opponent's Turn"],
  phases: ['Movement'],
  when: { oracle: "End of your opponent's Movement phase." },
  target: { oracle: 'One unit from your army that is in Reserves.' },
  effect: {
    oracle:
      'Your unit can arrive on the battlefield as if it were the reinforcements step of your Movement phase, and if every model in that unit has the Deep Strike ability, you can set that unit up as described in the Deep Strike ability (even though it is not your Movement phase).',
  },
  restrictions: {
    oracle:
      'You cannot use this Stratagem to enable a unit to arrive on the battlefield during a battle round it would not normally be able to do so in.',
  },
};

const Smokescreen: StratagemData = {
  name: 'Smokescreen',
  subtitle: 'After targeting: Benefit of Cover + Stealth',
  cost: 1,
  detatchment: 'Core',
  type: 'Wargear',
  timing: ["Opponent's Turn"],
  phases: ['Shooting'],
  when: {
    oracle:
      "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
  },
  target: {
    oracle:
      "One SMOKE unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
  },
  effect: {
    oracle:
      'Until the end of the phase, all models in your unit have the Benefit of Cover and the Stealth ability.',
  },
};

const TankShock: StratagemData = {
  name: 'Tank Shock',
  subtitle: 'Use a vehicle that charged to deal mortal wounds',
  cost: 1,
  detatchment: 'Core',
  type: 'Strategic Ploy',
  timing: ['Your Turn'],
  phases: ['Charge'],
  when: {
    oracle:
      'Your Charge phase, just after a VEHICLE unit from your army ends a Charge move.',
  },
  target: { oracle: 'That VEHICLE unit.' },
  effect: {
    oracle:
      'Select one enemy unit within Engagement Range of your unit, and select one Vehicle model in your unit that is within Engagement Range of that enemy unit. Roll a number of D6 equal to the Toughness characterstic of the selected VEHICLE model. For each 5+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).',
  },
};

const CoreStratagems = [
  CommandReRoll,
  CounterOffensive,
  EpicChallenge,
  FireOverwatch,
  GoToGround,
  Grenade,
  HeroicIntervension,
  InsaneBravery,
  RapidIngress,
  Smokescreen,
  TankShock,
];

export default CoreStratagems;
