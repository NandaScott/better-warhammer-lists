export type Phases =
  | 'Command Phase'
  | 'Movement Phase'
  | 'Shooting Phase'
  | 'Charge Phase'
  | 'Fight Phase';

export type Turn = 'Your Turn' | "Opponent's Turn";

export interface Simplified {
  simplified?: boolean;
}

export interface PhaseOnly {
  phase: Phases;
}

export interface TurnOnly {
  turn: Turn;
}
