/**
 * Recursively traverses an object along a given path and updates the end value.
 * @param obj An object to traverse
 * @param path A dot separated path
 * @param update The update value
 * @returns The original object
 */
export function datasheetUpdater(
  obj: unknown,
  path: string,
  update: string | number
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

  clonedObj[nextNode] = datasheetUpdater(
    clonedObj[nextNode],
    restOfPath,
    update
  );
  return clonedObj;
}
