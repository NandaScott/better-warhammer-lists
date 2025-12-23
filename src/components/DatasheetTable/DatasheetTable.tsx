import { v4 as uuidv4 } from 'uuid';
import { Badge } from '../Badge';
import { type JSX } from 'react';
import './DatasheetTable.css';
import clsx from 'clsx';
import type {
  DatasheetTableMeleeProps,
  DatasheetTableProps,
  DatasheetTableRangedProps,
} from './datasheet-table-types';
import {
  isModified,
  isModifiedKeyword,
  getDisplayValue,
} from '../Datasheet/modified-value';
import type { Modifiable } from '../Datasheet/datasheet-types';

type ValueOf<O, V extends keyof O = keyof O> = O[V];

/** Renders a value that may be modified, with asterisk and red color if modified */
function ModifiableCell({
  value,
  showBase = false,
}: {
  value: Modifiable<number | string>;
  showBase?: boolean;
}) {
  const displayValue = getDisplayValue(value, showBase);
  const modified = isModified(value);

  if (modified && !showBase) {
    return (
      <span className="text-red-600" title={`Modified by: ${value.source}`}>
        {displayValue}*
      </span>
    );
  }

  return <>{displayValue}</>;
}

export default function DatasheetTable(
  props: DatasheetTableRangedProps
): JSX.Element;
export default function DatasheetTable(
  props: DatasheetTableMeleeProps
): JSX.Element;
export default function DatasheetTable(
  props: DatasheetTableProps
): JSX.Element | null {
  const { simplify, icon: Icon, weapons: pWeapons, title } = props;

  const weapons = Object.values(pWeapons) as ValueOf<typeof pWeapons>[];

  if (weapons.length === 0) return null;

  return (
    <div role="region" aria-labelledby={title} tabIndex={0}>
      <table
        id={title}
        className="min-w-xl overflow-x-clip text-sm md:w-full lg:border-b-2 lg:border-stone-300"
      >
        <caption id={title} className="sr-only">
          {title}
        </caption>
        <thead>
          <tr>
            <th id="quantity" scope="col">
              <Icon className="h-4 w-4 fill-white" />
            </th>
            <th id="title" scope="col">
              {title}
            </th>
            <th id="range" scope="col">
              Range
            </th>
            <th id="attacks" scope="col">
              A
            </th>
            <th id="weapon-skill" scope="col">
              {title === 'Ranged Weapons' ? 'BS' : 'WS'}
            </th>
            <th id="strength" scope="col">
              S
            </th>
            <th id="armor-penetration" scope="col">
              AP
            </th>
            <th id="damage" scope="col">
              D
            </th>
            <th id="keywords" scope="col">
              Keywords
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-dotted">
          {weapons
            .filter((profile) => {
              if (!simplify) return profile;
              if (profile.quantity > 0) return profile;
            })
            .map((profile) => (
              <tr key={`${profile.name}-${uuidv4()}`}>
                <td headers="quantity">
                  {profile.quantity > 0 ? `${profile.quantity}x` : ''}
                </td>
                <td headers="title">
                  <div className="flex flex-col">
                    <div
                      className={clsx({
                        'before:mr-2 before:text-red-900 before:content-["➤"]':
                          profile.profiled,
                      })}
                    >
                      {profile.name}
                    </div>
                    <div className="text-sm text-gray-700">
                      {profile.subtitle}
                    </div>
                    <div className="font-light text-gray-400 italic">
                      ({profile.model})
                    </div>
                  </div>
                </td>
                <td
                  headers="range"
                  className={clsx({
                    'after:content-["“"]': profile.range !== 'Melee',
                  })}
                >
                  {profile.range}
                </td>
                <td headers="attacks">{profile.attacks}</td>
                <td headers="weapon-skill" className='after:content-["+"]'>
                  {profile.type === 'ranged'
                    ? profile.ballisticSkill
                    : profile.weaponSkill}
                </td>
                <td headers="strength">
                  <ModifiableCell value={profile.strength} showBase={!simplify} />
                </td>
                <td
                  headers="armor-penetration"
                  className={clsx({
                    'before:content-["-"]':
                      getDisplayValue(profile.armorPen, !simplify) > 0,
                  })}
                >
                  <ModifiableCell value={profile.armorPen} showBase={!simplify} />
                </td>
                <td headers="damage">
                  <ModifiableCell value={profile.damage} showBase={!simplify} />
                </td>
                <td
                  headers="keywords"
                  className={clsx(
                    profile.keywords.length === 0 && '-mt-4 hidden'
                  )}
                >
                  {profile.keywords
                    .filter((kw) => {
                      // When simplify is off, hide modified keywords (show base)
                      if (!simplify && isModifiedKeyword(kw)) return false;
                      return true;
                    })
                    .map((kw) => {
                      const text = isModifiedKeyword(kw) ? kw.value : kw;
                      const modified = isModifiedKeyword(kw);
                      return (
                        <Badge
                          key={`${profile.name}-${uuidv4()}-${text}`}
                          text={text}
                          modified={modified}
                          source={modified ? kw.source : undefined}
                        />
                      );
                    })}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
