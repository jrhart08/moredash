import {
  curry,
  map,
  iteratee,
  LodashIteratee,
} from 'lodash/fp';

export default curry(<T>(
  // eslint-disable-next-line @typescript-eslint/ban-types
  predicate: LodashIteratee | string | object,
  modification: (v: T) => T,
  array: T[],
): T[] => map((v: T) => (iteratee(predicate)(v) ? modification(v) : v), array));
