import type { DatasheetProps } from './Datasheet';

function combineArraysUniquely(arr1: any[], arr2: any[]) {
  const arr1String = arr1.map((val) => JSON.stringify(val));
  const arr2String = arr2.map((val) => JSON.stringify(val));
  const combined = [...arr1String, ...arr2String];
  const combinedSet = new Set(combined);
  return Array.from(combinedSet).map((val) => JSON.parse(val));
}

function alphabetize(arr1: any[], key: string): any[] {
  return arr1.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
}

export default function datasheetCombiner(
  sheet1: DatasheetProps,
  sheet2: DatasheetProps
): DatasheetProps {
  return {
    stats: [...sheet1.stats, ...sheet2.stats],
    enhancements: [...sheet1.enhancements, ...sheet2.enhancements],
    rangedWeapons: alphabetize(
      combineArraysUniquely(sheet1.rangedWeapons, sheet2.rangedWeapons),
      'name'
    ),
    meleeWeapons: alphabetize(
      combineArraysUniquely(sheet1.meleeWeapons, sheet2.meleeWeapons),
      'name'
    ),
    abilities: {
      core: [...sheet1.abilities.core, ...sheet2.abilities.core],
      faction: sheet2.abilities.faction,
      datasheetAbilities: [
        ...sheet1.abilities.datasheetAbilities,
        ...sheet2.abilities.datasheetAbilities,
      ],
    },
    wargearAbilities: sheet1.wargearAbilities?.concat(
      sheet2.wargearAbilities ?? []
    ),
    setupAbilities: sheet1.setupAbilities?.concat(sheet2.setupAbilities ?? []),
    wargearOptions: sheet1.wargearOptions?.concat(sheet2.wargearOptions ?? []),
    unitComposition: {
      models: [
        ...sheet1.unitComposition.models,
        ...sheet2.unitComposition.models,
      ],
      defaultWeapons: [
        ...sheet1.unitComposition.defaultWeapons,
        ...sheet2.unitComposition.defaultWeapons,
      ],
      points: [
        ...sheet1.unitComposition.points,
        ...sheet2.unitComposition.points,
      ],
      baseSizes: [
        ...sheet1.unitComposition.baseSizes,
        ...sheet2.unitComposition.baseSizes,
      ],
    },
    keywords: combineArraysUniquely(sheet1.keywords, sheet2.keywords),
    factionKeywords: combineArraysUniquely(
      sheet1.factionKeywords,
      sheet2.factionKeywords
    ),
    leaderAbility: [...sheet1.leaderAbility, ...sheet2.leaderAbility],
  };
}
