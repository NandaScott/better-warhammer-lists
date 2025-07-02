import type { DatasheetProps } from './Datasheet';

export default function datasheetCombiner(
  sheet1: DatasheetProps,
  sheet2: DatasheetProps
): DatasheetProps {
  return {
    stats: [...sheet1.stats, ...sheet2.stats],
    rangedWeapons: [...sheet1.rangedWeapons, ...sheet2.rangedWeapons],
    meleeWeapons: [...sheet1.meleeWeapons, ...sheet2.meleeWeapons],
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
    keywords: Array.from(new Set([...sheet1.keywords, ...sheet2.keywords])),
    factionKeywords: Array.from(
      new Set([...sheet1.factionKeywords, ...sheet2.factionKeywords])
    ),
  };
}
