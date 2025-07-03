export type Phases = 'Command' | 'Movement' | 'Shooting' | 'Charge' | 'Fight';

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
