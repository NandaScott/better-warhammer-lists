import type { Datasheet } from '../core/types';

/**
 * Recursively traverses an object along a given path and updates the end value.
 * @param obj An object to traverse
 * @param path A dot separated path
 * @param update The update value
 * @returns The original object
 */
function traverseAndUpdate(
  obj: unknown,
  path: string,
  update: string | number | boolean
) {
  const [nextNode, ...rest] = path.split('.');
  const restOfPath = rest.join('.');
  const isIndex = Number.isNaN(parseInt(nextNode));

  let clonedObj: any;
  if (Array.isArray(obj)) {
    clonedObj = [...obj];
  } else if (obj && typeof obj === 'object') {
    clonedObj = { ...obj };
  } else {
    clonedObj = isIndex ? [] : {};
  }

  if (restOfPath.length === 0) {
    const target = clonedObj[nextNode];

    if (Array.isArray(target)) {
      clonedObj[nextNode] = [...target, update];
    } else if (target === undefined && isIndex) {
      const index = parseInt(nextNode, 10);
      clonedObj[index] = update;
    } else {
      clonedObj[nextNode] = update;
    }

    return clonedObj;
  }

  clonedObj[nextNode] = traverseAndUpdate(
    clonedObj[nextNode],
    restOfPath,
    update
  );
  return clonedObj;
}

function parseDatasheetUpdates(
  update: string[]
): Array<[path: string, update: string | number | boolean]> {
  return update
    .map((chunks) => chunks.split(':'))
    .map(([path, update]) => {
      if (Number.isNaN(update)) {
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

  let newDatasheet = datasheet;
  for (let i = 0; i < parsedUpdates.length; i++) {
    const [location, value] = parsedUpdates[i];

    newDatasheet = traverseAndUpdate(newDatasheet, location, value);
  }

  return newDatasheet;
}
