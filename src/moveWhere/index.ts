import { findIndex, iteratee, isNumber } from 'lodash/fp';
import { Predicate, PredicateIteratee } from '../types';
import move from '../move';

const moveWhere = <T>(
  predicate: PredicateIteratee<T>,
  to: number | PredicateIteratee<T>,
  list: T[],
): T[] => {
  const pred = iteratee(predicate) as Predicate<T>;

  const fromIndex = findIndex(pred, list);
  const toIndex = isNumber(to)
    ? to as number
    : findIndex(iteratee(to), list);

  return move(fromIndex, toIndex, list);
};

export default moveWhere;
