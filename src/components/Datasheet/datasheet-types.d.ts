export type DiceType = 'D3' | 'D6';
export type OneToSix = 1 | 2 | 3 | 4 | 5 | 6;

export type ModifiedValue<T> = {
  base: T;
  modified: T;
  source: string;
};

export type Modifiable<T> = T | ModifiedValue<T>;

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
  updates?: string[];
};

export type WargearAbility = Ability & {
  equipped: boolean;
};
