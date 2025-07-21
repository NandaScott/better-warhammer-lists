import type { Datasheet } from '../core/types';

/**
 * Recursively traverses an object along a given path and updates the end value.
 * @param obj An object to traverse
 * @param path A dot separated path
 * @param update The update value
 * @returns The original object
 */
function traverseAndUpdate(
  obj: any,
  path: string,
  update: string | number | boolean
) {
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

  obj[nextNode] = update;

  return obj;
}

function parseDatasheetUpdates(
  update: string[]
): Array<[path: string, update: string | number | boolean]> {
  return update
    .map((chunks) => chunks.split(':'))
    .map(([path, update]) => {
      if (Number.isNaN(Number(update))) {
        return [path, update];
      }
      if (update === 'true' || update === 'false') {
        return [path, Boolean(update)];
      }

      return [path, parseInt(update)];
    });
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

    newDatasheet = traverseAndUpdate(newDatasheet, location, value);
  }

  return newDatasheet;
}
