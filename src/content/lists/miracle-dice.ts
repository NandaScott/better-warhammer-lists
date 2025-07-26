import type { SororitasArmyRuleKeys } from '../../panels/RulesPanel';
import type { Datasheet, DetatchmentData } from '../core/types';
import ArmyOfFaithDetatchment from '../Sororitas/detatchments/army-of-faith';
import type { DatasheetProps } from '../../components/Datasheet';
import { v4 as uuidV4 } from 'uuid';
import { DominionSquad } from '../Sororitas/datasheets/dominion-squad';
import { Canoness } from '../Sororitas/datasheets/canoness';
import { CanonessWithJumpPack } from '../Sororitas/datasheets/canoness-with-jump-pack';
import { SeraphimSquad } from '../Sororitas/datasheets/seraphim-squad';
import { TriumphOfSaintKatherine } from '../Sororitas/datasheets/triumph-of-saint-katherine';
import { Palatine } from '../Sororitas/datasheets/palatine';
import { Dialogus } from '../Sororitas/datasheets/dialogus';
import { BattleSistersSquad } from '../Sororitas/datasheets/battle-sisters-squad';
import { JunithEruita } from '../Sororitas/datasheets/junith-eruita';
import { MorvennVahl } from '../Sororitas/datasheets/morven-vahl';
import { ParagonWarsuits } from '../Sororitas/datasheets/paragon-warsuits';
import { SistersNovitiateSquad } from '../Sororitas/datasheets/sisters-novitiate-squad';
import { Exorcist } from '../Sororitas/datasheets/exorcist';
import { ZehpyrimSquad } from '../Sororitas/datasheets/zephyrim-squad';
import datasheetUpdater from './datasheet-updater';
import datasheetCombiner from '../../components/Datasheet/datasheet-combiner';

interface Points {
  used: number;
  total: number;
}

interface Faction {
  name: string;
  armyRules: SororitasArmyRuleKeys[];
}

export type ListDatasheets = DatasheetProps & {
  attachedUnits: DatasheetProps[];
};

export interface Unit {
  id: string;
  datasheets: { datasheet: Datasheet; updates: string[] }[];
}

interface ArmyList {
  name: string;
  faction: Faction;
  detatchment: DetatchmentData;
  points: Points;
  description: string;
  units: Unit[];
}

export const initialList: ArmyList = {
  name: 'Miracle Army',
  faction: { name: 'Adepta Sororitas', armyRules: ['Miracle Dice'] },
  detatchment: ArmyOfFaithDetatchment,
  points: { used: 2000, total: 2000 },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla tortor eu mauris vestibulum imperdiet. Maecenas imperdiet sapien in elit luctus vehicula. Proin lectus urna, aliquet et fringilla nec, vulputate nec enim. Phasellus quis quam fringilla urna mattis interdum sit amet ut lectus. Donec convallis orci nec quam dictum, ornare ullamcorper justo posuere. Morbi in pharetra mauris, sit amet blandit tortor. Etiam odio odio, dignissim at nisi euismod, rutrum pharetra mauris. Nullam dignissim sagittis pretium. Nunc sed rutrum erat.',
  units: [
    {
      id: uuidV4(),
      datasheets: [
        {
          datasheet: structuredClone(DominionSquad),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.BoltPistol.quantity:10',
            'rangedWeapons.Boltgun.quantity:6',
            'rangedWeapons.Meltagun.quantity:4',
            'meleeWeapons.CloseCombatWeapon.quantity:9',
            'meleeWeapons.PowerWeapon.quantity:1',
            'wargearAbilities.SimulacrumImperialis.equipped:true',
          ],
        },
        {
          datasheet: structuredClone(Canoness),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.PlasmaPistolStandard.quantity:1',
            'rangedWeapons.PlasmaPistolSupercharge.quantity:1',
            'meleeWeapons.PowerWeapon.quantity:1',
            'wargearAbilities.NullRod.equipped:true',
            'enhancements:BladeOfSaintEllynor',
          ],
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
          datasheet: structuredClone(CanonessWithJumpPack),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.MinistorumHandFlamer.quantity:1',
            'meleeWeapons.PowerWeapon.quantity:1',
            'enhancements:DivineAspect',
          ],
        },
        {
          datasheet: structuredClone(SeraphimSquad),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.BoltPistol.quantity:12',
            'rangedWeapons.MinistorumHandFlamer.quantity:8',
            'rangedWeapons.PlasmaPistolStandard.quantity:1',
            'rangedWeapons.PlasmaPistolSupercharge.quantity:1',
            'meleeWeapons.CloseCombatWeapon.quantity:10',
            'meleeWeapons.PowerWeapon.quantity:1',
          ],
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
          datasheet: structuredClone(Palatine),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.PlasmaPistolStandard.quantity:1',
            'rangedWeapons.PlasmaPistolSupercharge.quantity:1',
            'meleeWeapons.PalatineBlade.quantity:1',
            'enhancements:LitaniesOfFaith',
          ],
        },
        {
          datasheet: structuredClone(Dialogus),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.BoltPistol.quantity:1',
            'meleeWeapons.DialogusStaff.quantity:1',
          ],
        },
        {
          datasheet: structuredClone(BattleSistersSquad),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.BoltPistol.quantity:10', // Bolt Pistol
            'rangedWeapons.Boltgun.quantity:7', // Bolt Gun
            'rangedWeapons.CondemnorBoltgun.quantity:1', // Condemnor
            'rangedWeapons.Meltagun.quantity:2', // Meltagun
            'meleeWeapons.CloseCombatWeapon.quantity:9', // CCW
            'meleeWeapons.PowerWeapon.quantity:1', // Powersword
            'wargearAbilities.SimulacrumImperialis.equipped:true',
          ],
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
          datasheet: structuredClone(JunithEruita),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.TwinMinistorumHeavyFlamer.quantity:1',
            'meleeWeapons.MaceOfCastigation.quantity:1',
          ],
        },
        {
          datasheet: structuredClone(BattleSistersSquad),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.BoltPistol.quantity:10',
            'rangedWeapons.Boltgun.quantity:7',
            'rangedWeapons.MinistorumFlamer.quantity:1',
            'rangedWeapons.MinistorumHeavyFlamer.quantity:1',
            'meleeWeapons.CloseCombatWeapon.quantity:9',
            'meleeWeapons.PowerWeapon.quantity:1',
            'wargearAbilities.SimulacrumImperialis.equipped:true',
          ],
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
          datasheet: structuredClone(MorvennVahl),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.Fidelis.quantity:1',
            'rangedWeapons.ParagonMissileLauncherPrioris.quantity:1',
            'rangedWeapons.ParagonMissileLauncherSanctorum.quantity:1',
            'meleeWeapons.LanceOfIlluminationStrike.quantity:1',
            'meleeWeapons.LanceOfIlluminationSweep.quantity:1',
          ],
        },
        {
          datasheet: structuredClone(ParagonWarsuits),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.BoltPistol.quantity:3',
            'rangedWeapons.MultiMelta.quantity:3',
            'rangedWeapons.ParagonGrenadeLaunchers.quantity:3',
            'meleeWeapons.ParagonWarBlade.quantity:1',
            'meleeWeapons.ParagonWarMace.quantity:2',
          ],
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
          datasheet: structuredClone(TriumphOfSaintKatherine),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.BoltPistol.quantity:1',
            'meleeWeapons.RelicWeapons.quantity:1',
          ],
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
          datasheet: structuredClone(DominionSquad),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.ArtificerCraftedStormBolter.quantity:4',
            'rangedWeapons.BoltPistol.quantity:10',
            'rangedWeapons.Boltgun.quantity:6',
            'meleeWeapons.CloseCombatWeapon.quantity:9',
            'meleeWeapons.PowerWeapon.quantity:1',
            'wargearAbilities.SimulacrumImperialis.equipped:true',
          ],
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
          datasheet: structuredClone(SistersNovitiateSquad),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.Autogun.quantity:9',
            'rangedWeapons.Autopistol.quantity:9',
            'rangedWeapons.BoltPistol.quantity:1',
            'rangedWeapons.Boltgun.quantity:1',
            'meleeWeapons.CloseCombatWeapon.quantity:10',
          ],
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
          datasheet: structuredClone(Exorcist),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.ExorcistMissileLauncher.quantity:1',
            'rangedWeapons.HeavyBolter.quantity:1',
            'rangedWeapons.HunterKillerMissile.quantity:1',
            'meleeWeapons.ArmouredTracks.quantity:1',
          ],
        },
      ],
    },
    {
      id: uuidV4(),
      datasheets: [
        {
          datasheet: structuredClone(ZehpyrimSquad),
          updates: [
            `id:${uuidV4()}`,
            'rangedWeapons.BoltPistol.quantity:5',
            'meleeWeapons.PowerWeapon.quantity:5',
          ],
        },
      ],
    },
  ],
};

function processList(list: ArmyList) {
  const { units, ...rest } = list;
  const processedUnits = units.map(({ datasheets, ...rest }) => {
    const processedDatasheets = datasheets
      .map(({ datasheet, updates }) => datasheetUpdater(datasheet, updates))
      .reduce((prev, curr) => datasheetCombiner(prev, curr));
    return { ...rest, datasheets: processedDatasheets };
  });
  return { ...rest, units: processedUnits };
}

export const list = processList(initialList);
