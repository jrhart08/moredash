import { findIndex, iteratee } from 'lodash/fp';
import move from '../move';
import { Predicate, PredicateIteratee } from '../types';

const moveWhere = <T>(
  predicate: PredicateIteratee<T>,
  toIndex: number,
  list: T[],
): T[] => {
  const pred = iteratee(predicate) as Predicate<T>;

  const index = findIndex(pred, list);

  return index === -1
    ? list
    : move(index, toIndex, list);
};

export default moveWhere;
