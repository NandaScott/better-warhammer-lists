import type { HeaderButtonProps } from '../../components/Datasheet/HeaderButton';
import type {
  Ability,
  CoreAbilities,
  WargearAbility,
} from '../../components/Datasheet/datasheet-types';
import type {
  DatasheetTableMeleeProps,
  DatasheetTableRangedProps,
} from '../../components/DatasheetTable/datasheet-table-types';
import type { StratagemProps } from '../../components/Stratagem';

export type StratagemData = Omit<
  StratagemProps,
  'simple' | 'currentPhase' | 'currentTurn'
>;

export interface Datasheet {
  id: string;
  stats: HeaderButtonProps['stats'];
  enhancements: string[];
  rangedWeapons: DatasheetTableRangedProps['weapons'];
  meleeWeapons: DatasheetTableMeleeProps['weapons'];
  wargearOptions: {
    entry: string;
    options?: string[];
  }[];
  leaderAbility: string[];
  abilities: {
    core: CoreAbilities[];
    faction: 'Acts of Faith';
    datasheetAbilities: Ability[];
  };
  wargearAbilities: Record<string, WargearAbility>;
  setupAbilities: Ability[];
  unitComposition: {
    models: string[];
    defaultWeapons: string[];
    points: { quantity: string; total: number }[];
    baseSizes: { model: string; size: number | string }[];
  };
  damaged?: { title: string; text: string };
  supremeCommander?: { text: string };
  uniqueAbilities?: {
    title: string;
    abilities: { name: string; text: string }[];
  };
  keywords: string[];
  factionKeywords: string[];
}

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
