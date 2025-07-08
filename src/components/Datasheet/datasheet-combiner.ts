import uniqBy from 'lodash/uniqBy';
import isArray from 'lodash/isArray';
import mergeWith from 'lodash/mergeWith';
import orderBy from 'lodash/orderBy';
import type { Datasheet } from '../../content/core/types';

/**
 * Combines two datasheets into a single datasheet for rendering.
 * Ensures that objects in arrays are unique, and ordered by 'name' if available.
 * @param sheet1 A datasheet
 * @param sheet2 A datasheet
 * @returns The combined datasheet
 */
export default function datasheetCombiner(
  sheet1: Datasheet,
  sheet2: Datasheet
): Datasheet {
  return mergeWith({}, sheet1, sheet2, (objVal, srcVal) => {
    if (isArray(objVal)) {
      return orderBy(uniqBy(objVal.concat(srcVal), JSON.stringify), ['name']);
    }
  });
}
