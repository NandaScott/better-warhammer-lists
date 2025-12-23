import ArmyOfFaithDetatchment from '../Sororitas/detatchments/army-of-faith';
import type { Datasheet } from '../core/types';
import { isModified } from '../../components/Datasheet/modified-value';
import type { ModifiedValue } from '../../components/Datasheet/datasheet-types';
import type { ModifiedKeyword } from '../../components/DatasheetTable/datasheet-table-types';

/** Fields that should create ModifiedValue objects when updated */
const MODIFIABLE_FIELDS = ['strength', 'armorPen', 'damage'];

/** Fields that should create ModifiedKeyword objects when updated */
const MODIFIABLE_ARRAY_FIELDS = ['keywords'];

/**
 * Recursively traverses an object along a given path and updates the end value.
 * @param obj An object to traverse
 * @param path A dot separated path
 * @param update The update value
 * @param source The source of the modification (ability/enhancement name)
 * @returns The original object
 */
function traverseAndUpdate(
  obj: any,
  path: string,
  update: any,
  source?: string
) {
  const [nextNode, ...rest] = path.split('.');
  const restOfPath = rest.join('.');

  if (obj[nextNode] === undefined) {
    throw new Error('Target ends with undefined');
  }

  if (restOfPath.length !== 0) {
    obj[nextNode] = traverseAndUpdate(obj[nextNode], restOfPath, update, source);
    return obj;
  }

  // Handle array fields (e.g., keywords) - add ModifiedKeyword
  if (Array.isArray(obj[nextNode])) {
    if (source && MODIFIABLE_ARRAY_FIELDS.includes(nextNode)) {
      const modifiedKeyword: ModifiedKeyword = {
        value: update,
        source,
      };
      obj[nextNode] = [...obj[nextNode], modifiedKeyword];
    } else {
      obj[nextNode] = [...obj[nextNode], update];
    }
    return obj;
  }

  // Handle numeric fields - create ModifiedValue
  if (typeof obj[nextNode] === 'number' && typeof update === 'number') {
    if (source && MODIFIABLE_FIELDS.includes(nextNode)) {
      const modifiedValue: ModifiedValue<number> = {
        base: obj[nextNode],
        modified: obj[nextNode] + update,
        source,
      };
      obj[nextNode] = modifiedValue;
    } else {
      obj[nextNode] = obj[nextNode] + update;
    }
    return obj;
  }

  // Handle already-modified values (stacking modifications)
  if (isModified(obj[nextNode]) && typeof update === 'number') {
    const currentModified = obj[nextNode] as ModifiedValue<number>;
    obj[nextNode] = {
      base: currentModified.base,
      modified: currentModified.modified + update,
      source: source
        ? `${currentModified.source}, ${source}`
        : currentModified.source,
    };
    return obj;
  }

  if (typeof obj[nextNode] === 'object' && typeof update === 'string') {
    obj[nextNode] = { ...obj[nextNode], [nextNode]: update };
    return obj;
  }

  obj[nextNode] = update;

  return obj;
}

function parseDatasheetUpdates(
  update: string[]
): Array<[path: string, update: string | number | boolean]> {
  return update.map((chunks) => {
    const [path, update] = chunks.split(':');
    if (update === 'true' || update === 'false') {
      return [path, update === 'true'];
    }
    if (Number.isNaN(Number(update))) {
      return [path, update];
    }

    return [path, parseInt(update)];
  });
}

function processEnhancementUpdates(
  obj: Datasheet,
  updates: string[]
): string[] {
  return updates
    .map((update) => {
      const category = update.split('.')[0];
      return Object.keys((obj as any)[category]).map((key) =>
        update.replace('all', key)
      );
    })
    .reduce((prev, curr) => [...prev, ...curr], []);
}

export default function datasheetUpdater(
  datasheet: Datasheet,
  updates: string[],
  source?: string
): Datasheet {
  const parsedUpdates = parseDatasheetUpdates(updates);

  if (parsedUpdates.length === 0) return datasheet;

  let newDatasheet = datasheet;
  for (let i = 0; i < parsedUpdates.length; i++) {
    const [location, value] = parsedUpdates[i];

    if (location === 'enhancements' && typeof value === 'string') {
      const enhancement = ArmyOfFaithDetatchment.enhancements[value];
      newDatasheet = traverseAndUpdate(newDatasheet, location, enhancement);

      if (enhancement.updates) {
        const fullUpdates = processEnhancementUpdates(
          newDatasheet,
          enhancement.updates
        );
        // Pass enhancement name as the source for these updates
        newDatasheet = datasheetUpdater(
          newDatasheet,
          fullUpdates,
          enhancement.name
        );
      }
      continue;
    }

    newDatasheet = traverseAndUpdate(newDatasheet, location, value, source);
  }

  return newDatasheet;
}
