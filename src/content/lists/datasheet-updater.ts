import ArmyOfFaithDetatchment from '../Sororitas/detatchments/army-of-faith';
import type { Datasheet } from '../core/types';

/**
 * Recursively traverses an object along a given path and updates the end value.
 * @param obj An object to traverse
 * @param path A dot separated path
 * @param update The update value
 * @returns The original object
 */
function traverseAndUpdate(obj: any, path: string, update: any) {
  const [nextNode, ...rest] = path.split('.');
  const restOfPath = rest.join('.');

  if (obj[nextNode] === undefined) {
    throw new Error('Target ends with undefined');
  }

  if (restOfPath.length !== 0) {
    obj[nextNode] = traverseAndUpdate(obj[nextNode], restOfPath, update);
    return obj;
  }

  if (Array.isArray(obj[nextNode])) {
    obj[nextNode] = [...obj[nextNode], update];
    return obj;
  }

  if (typeof obj[nextNode] === 'number' && typeof update === 'number') {
    obj[nextNode] = obj[nextNode] + update;
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
  updates: string[]
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
        newDatasheet = datasheetUpdater(newDatasheet, fullUpdates);
      }
      continue;
    }

    newDatasheet = traverseAndUpdate(newDatasheet, location, value);
  }

  return newDatasheet;
}
