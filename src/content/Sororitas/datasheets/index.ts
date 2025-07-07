import { AestredThurgaAndAgathaeDolan } from './aestred-thurga-and-agathae-dolan';
import { Canoness } from './canoness';
import { DominionSquad } from './dominion-squad';

const SororitasDatasheets = {
  'Aestred Thurga And Agathae Dolan': AestredThurgaAndAgathaeDolan,
  'Dominion Squad': DominionSquad,
  Canoness: Canoness,
};

export const SororitasDatasheetsTypes = {
  'Aestred Thurga And Agathae Dolan': {
    ...AestredThurgaAndAgathaeDolan,
  } as const,
  'Dominion Squad': { ...DominionSquad } as const,
  Canoness: { ...Canoness } as const,
};

export default SororitasDatasheets;
