import {
  curry,
  map,
  iteratee,
  LodashIteratee,
} from 'lodash/fp';

export default curry(<T>(
  // eslint-disable-next-line @typescript-eslint/ban-types
  predicate: LodashIteratee | string | object,
  replacement: T,
  array: T[],
): T[] => map((v: T) => (iteratee(predicate)(v) ? replacement : v), array));
