import { Fragment } from 'react/jsx-runtime';
import type { DiceType, OneToSix } from './Datasheet';
import SkullIcon from '../../assets/skull-icon.svg?react';

type CoreAbilities =
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
};

type WargearAbility = Ability & {
  equipped: boolean;
};

export interface AbilitiesBlockProps {
  simplify: boolean;
  abilities: {
    core: CoreAbilities[];
    faction: 'Acts of Faith';
    datasheetAbilities: Ability[];
  };
  wargearAbilities: WargearAbility[];
  setupAbilities: Ability[];
  unitComposition: {
    models: string[];
    defaultWeapons: string[];
    points: { quantity: string; total: number }[];
    baseSizes: { model: string; size: number | string }[];
  };
  damaged?: { title: string; text: string };
  supremeCommander?: { text: string };
}

export default function AbilitiesBlock(props: AbilitiesBlockProps) {
  const {
    simplify,
    abilities,
    wargearAbilities,
    setupAbilities,
    unitComposition,
    damaged,
    supremeCommander,
  } = props;

  const wargear = wargearAbilities.filter((val) => {
    if (!simplify) return true;
    if (!val.equipped) return false;
    return true;
  });

  return (
    <div className="col-span-4 divide-stone-900 border-red-900 bg-stone-100 lg:col-span-1">
      <div className="flex items-center bg-red-950 p-2 py-3 font-bold text-white uppercase lg:h-10">
        Abilities
      </div>
      <div className="divide-y divide-dotted">
        <div className="p-2">
          CORE: <span>{abilities.core.join(', ')}</span>
        </div>
        <div className="p-2">
          FACTION: <span>{abilities.faction}</span>
        </div>
        <div className="flex flex-col gap-2 p-2">
          {abilities.datasheetAbilities.map(({ name, effect, note }) => (
            <div key={name}>
              <span className="font-semibold underline underline-offset-2">
                {name}
              </span>{' '}
              <br /> {effect} <br />
              <span className="italic">{note}</span>
            </div>
          ))}
        </div>
      </div>
      {damaged && (
        <>
          <div className="flex items-center gap-2 bg-red-950 p-2 py-3 font-bold text-white uppercase md:gap-4 lg:h-10">
            <SkullIcon className="h-6 w-6 fill-white" />
            {damaged.title}
          </div>
          <div className="p-2">{damaged.text}</div>
        </>
      )}
      {supremeCommander && (
        <>
          <div className="bg-red-950 p-2 py-3 font-bold text-white uppercase md:gap-4 lg:h-10">
            Supreme Commander
          </div>
          <div className="p-2">{supremeCommander.text}</div>
        </>
      )}

      {wargear.length > 0 && (
        <>
          <div className="flex items-center bg-red-950 p-2 py-3 font-bold text-white uppercase lg:h-10">
            Wargear Abilities
          </div>
          <div className="flex flex-col gap-2 p-2">
            {wargear.map(({ name, effect }) => (
              <div key={name}>
                <span className="font-semibold underline underline-offset-2">
                  {name}
                </span>
                <br />
                {effect}
              </div>
            ))}
          </div>
        </>
      )}
      {!simplify && (
        <>
          <div className="flex items-center bg-red-950 p-2 py-3 font-bold text-white uppercase lg:h-10">
            Unit Composition
          </div>
          <div className="flex flex-col gap-2 divide-y divide-gray-300 p-2">
            <div className="pb-2">
              <ul className="list-inside list-disc">
                {unitComposition.models.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul>
                {unitComposition.defaultWeapons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {unitComposition.points.map(({ quantity, total }) => (
              <div
                key={total}
                className="flex w-full items-baseline justify-between border-b-2 border-dotted border-black"
              >
                <div>{quantity}</div> <div>{total} pts</div>
              </div>
            ))}
            <div className="flex flex-col gap-1">
              {unitComposition.baseSizes.map(({ model, size }) => (
                <div key={model}>
                  {model}: {size}mm
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {setupAbilities.length > 1 &&
        setupAbilities.map(({ name, effect }) => (
          <Fragment key={name}>
            <div className="flex items-center bg-red-950 p-2 py-3 font-bold text-white uppercase lg:h-10">
              {name}
            </div>
            <div className="flex flex-col gap-2 p-2">{effect}</div>
          </Fragment>
        ))}
    </div>
  );
}
