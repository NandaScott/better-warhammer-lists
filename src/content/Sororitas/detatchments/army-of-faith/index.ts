import type {
  DetatchmentData,
  Enhancement,
  StratagemData,
} from '../../../core/types';

const AngelicDescent: StratagemData = {
  name: 'Angelic Descent',
  subtitle: 'Non Engaged: Put a Jump Pack unit back in Reserves',
  cost: 1,
  detatchment: 'Army of Faith',
  type: 'Strategic Ploy',
  timing: ["Opponent's Turn"],
  phases: ['Fight'],
  when: { oracle: "End of your opponent's Fight phase." },
  target: { oracle: 'One ADEPTA SORORITAS JUMP PACK unit from your army.' },
  effect: {
    oracle:
      'Remove your unit from the battlefield and place it into Strategic Reserves.',
  },
  restrictions: {
    oracle:
      'You cannot select a unit that is within Engagement Range of one or more enemy units.',
  },
};

const BlindingRadiance: StratagemData = {
  name: 'Blinding Radiance',
  subtitle: 'After selected targets: Subtract 1 from the Hit roll.',
  cost: 1,
  detatchment: 'Army of Faith',
  type: 'Strategic Ploy',
  timing: ['Your Turn', "Opponent's Turn"],
  phases: ['Shooting', 'Fight'],
  when: {
    oracle:
      "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
  },
  target: {
    oracle: `One ADEPTA SORORITAS unit from your army that was selected as the target of one or more of the attack unit\'s attacks, or one friendly ADEPTA SORORITAS JUMP PACK unit within 3" of such a unit.`,
  },
  effect: {
    oracle:
      'Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll. If you targeted an ADEPTA SORORITAS JUMP PACK unit from your army with this Stratagem, then until the end of the phase, while a friendly ADEPTA SORORITAS unit is within 3" of your unit, each time an attack targets that unit, subtract 1 from the Hit roll.',
  },
};

const DivineGuidance: StratagemData = {
  name: 'Divine Guidance',
  subtitle: 'Non selected: +1 Armour Pen and killing models gains Miracle dice',
  cost: 1,
  detatchment: 'Army of Faith',
  type: 'Battle Tactic',
  timing: ['Your Turn', "Opponent's Turn"],
  phases: ['Shooting', 'Fight'],
  when: { oracle: 'Your Shooting Phase or the Fight phase.' },
  target: {
    oracle:
      'One ADEPTA SORORITAS unit from your army that has not been selected to shoot or fight this phase.',
  },
  effect: {
    oracle:
      'Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1. If one or more enemy models are destroyed as the result of any of those attacks, you gain 1 Miracle dice.',
  },
};

const FaithAndFury: StratagemData = {
  name: 'Faith and Fury',
  subtitle:
    'Non selected: Melee weapons gain [LANCE] and killing models gains Miracle dice',
  cost: 1,
  detatchment: 'Army of Faith',
  type: 'Battle Tactic',
  timing: ['Your Turn', "Opponent's Turn"],
  phases: ['Fight'],
  when: { oracle: 'Fight phase.' },
  target: {
    oracle:
      'One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.',
  },
  effect: {
    oracle:
      "Until end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If one or more enemy models are destroyed as a result of your unit's attacks this phase, you gain 1 Miracle dice",
  },
};

const LightOfTheEmperor: StratagemData = {
  name: 'Light of the Emperor',
  subtitle: "Ignore modifications to your unit's datasheets",
  cost: 1,
  detatchment: 'Army of Faith',
  type: 'Battle Tactic',
  timing: ['Your Turn', "Opponent's Turn"],
  phases: ['Command'],
  when: { oracle: 'Command phase.' },
  target: { oracle: 'One ADEPTA SORORITAS unit from your army.' },
  effect: {
    oracle:
      'Until the end of the turn, your unit is blessed. While a unit is blessed, it can ignore any or all modifiers to the following: the profile characteristics of its models; the Weapon Skill or Ballistic Skill characteristics of weapons equipped by its models; any roll or test made for it (excluding modifiers to saving throws). If your unit has the JUMP PACK keyword, until end of turn, while a friendly ADEPTA SORORITAS unit is within 3" of your unit, that friendly unit is also blessed.',
  },
};

const ShieldOfFaith: StratagemData = {
  name: 'Shield of Faith',
  subtitle: 'After a mortal wound: Feel No Pain 5+',
  cost: 1,
  detatchment: 'Army of Faith',
  type: 'Battle Tactic',
  timing: ['Your Turn', "Opponent's Turn"],
  phases: ['Command', 'Movement', 'Shooting', 'Charge', 'Fight'],
  when: {
    oracle:
      'Any phase, just after an ADEPTA SORORITAS unit from your army suffers a mortal wound.',
  },
  target: {
    oracle:
      'That ADEPTA SORORITAS unit, or one friendly ADEPTA SORORITAS JUMP PACK unit within 3" of it.',
  },
  effect: {
    oracle:
      'Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds. If you targeted an ADEPTA SORORITAS JUMP PACK unit from your army with this Stratagem, then until the end of the phase, while a friendly ADEPTA SORORITAS unit is within 3" of your unit, models in that unit have the Feel No Pain 5+ ability against mortal wounds.',
  },
};

const LitaniesOfFaith: Enhancement = {
  name: 'Litanies of Faith',
  points: 10,
  effect: {
    oracle:
      'CANONESS or PALATINE model only. At the start of your Command phase, if the bearer is on the battlefield, take a Leadership test for the bearer. If that test is passed, you gain 1 Miracle dice.',
  },
};

const BladeOfSaintEllynor: Enhancement = {
  name: 'Blade of Saint Ellynor',
  points: 15,
  effect: {
    oracle:
      "ADEPTA SORORITAS model only. Improve the Strength and Armour Penetration characteristics of the bearer's melee weapons by 1, and those weapons have the [PRECISION] ability. In addition, each time the bearer fights, if one or more enemy models are destroyed by those attacks, you gain 1 Miracle dice.",
  },
  updates: [
    'meleeWeapons.all.strength:1',
    'meleeWeapons.all.armorPen:1',
    'meleeWeapons.all.keywords:Precision',
  ],
};

const DivineAspect: Enhancement = {
  name: 'Divine Aspect',
  points: 5,
  effect: {
    oracle:
      'ADEPTA SORORITAS model only. In your Movement phase, you can select one enemy unit within 12" of the bearer; that unit must take a Battle-shock test. If that test is failed, you gain 1 Miracle dice.',
  },
};

const TriptychOfTheMacharianCrusade: Enhancement = {
  name: 'Triptych of the Macharian Crusade',
  points: 20,
  effect: {
    oracle:
      'ADEPTA SORORITAS model only. Each time the bearer uses an Act of Faith to substitute a saving throw, that saving throw is successful, irrespective of the value of the Miracle dice used.',
  },
};

const ArmyOfFaithDetatchment: DetatchmentData = {
  name: 'Army of Faith',
  enhancements: {
    LitaniesOfFaith,
    BladeOfSaintEllynor,
    DivineAspect,
    TriptychOfTheMacharianCrusade,
  },
  stratagems: [
    AngelicDescent,
    BlindingRadiance,
    DivineGuidance,
    FaithAndFury,
    LightOfTheEmperor,
    ShieldOfFaith,
  ],
  rules: [
    {
      name: 'Sacred Rites',
      effect: {
        oracle:
          'Each ADEPTA SORORITAS unit from your army can perform up to two Acts of Faith per phase, instead of just one.',
      },
    },
  ],
};

export default ArmyOfFaithDetatchment;
