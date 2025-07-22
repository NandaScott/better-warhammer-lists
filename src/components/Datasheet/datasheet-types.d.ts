export type DiceType = 'D3' | 'D6';
export type OneToSix = 1 | 2 | 3 | 4 | 5 | 6;

export type CoreAbilities =
  | 'Deep Strike'
  | `Deadly Demise ${OneToSix | DiceType}`
  | `Feel No Pain ${OneToSix}+`
  | 'Fights First'
  | 'Firing Deck'
  | 'Infiltrators'
  | 'Leader'
  | 'Lone Operative'
  | `Scouts ${OneToSix}"`
  | 'Stealth';

export type Ability = {
  name: string;
  effect: string;
  note?: string;
};

export type WargearAbility = Ability & {
  equipped: boolean;
};
