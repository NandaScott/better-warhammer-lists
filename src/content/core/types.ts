import type { StratagemProps } from '../../components/Stratagem';

export type StratagemData = Omit<
  StratagemProps,
  'simple' | 'currentPhase' | 'currentTurn'
>;

export type DetatchmentRulesData = {
  name: string;
  effect: {
    oracle: string;
    simple?: string;
  };
};

export interface DetatchmentData {
  name: string;
  stratagems: StratagemData[];
  rules: DetatchmentRulesData[];
}
