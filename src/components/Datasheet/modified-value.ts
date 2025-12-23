import type { ModifiedValue, Modifiable } from './datasheet-types';
import type { ModifiedKeyword } from '../DatasheetTable/datasheet-table-types';

export function isModified<T>(value: Modifiable<T>): value is ModifiedValue<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    'base' in value &&
    'modified' in value &&
    'source' in value
  );
}

export function isModifiedKeyword(
  keyword: string | ModifiedKeyword
): keyword is ModifiedKeyword {
  return (
    typeof keyword === 'object' &&
    keyword !== null &&
    'value' in keyword &&
    'source' in keyword
  );
}

export function getDisplayValue<T>(value: Modifiable<T>, showBase = false): T {
  if (isModified(value)) {
    return showBase ? value.base : value.modified;
  }
  return value;
}

export function getKeywordValue(
  keyword: string | ModifiedKeyword,
  showBase = false
): string {
  if (isModifiedKeyword(keyword)) {
    return showBase ? '' : keyword.value;
  }
  return keyword;
}
