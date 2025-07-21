import type { DatasheetProps } from '../../components/Datasheet';
import type { StratagemProps } from '../../components/Stratagem';

export type StratagemData = Omit<
  StratagemProps,
  'simple' | 'currentPhase' | 'currentTurn'
>;

export type Datasheet = Omit<
  DatasheetProps,
  'onClick' | 'open' | 'simplify'
> & { id: string };

export type DetatchmentRulesData = {
  name: string;
  effect: {
    oracle: string;
    simple?: string;
  };
};

export interface Enhancement<T = string> {
  name: T;
  points: number;
  effect: {
    oracle: string;
    simple?: string;
  };
}

export interface DetatchmentData {
  name: string;
  enhancements: Record<Enhancement['name'], Enhancement>;
  stratagems: StratagemData[];
  rules: DetatchmentRulesData[];
}
