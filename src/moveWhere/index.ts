import findIndex from 'lodash/fp/findIndex';
import iteratee from 'lodash/fp/iteratee';
import isNumber from 'lodash/fp/isNumber';
import { Predicate, PredicateIteratee, Nil } from '../types';
import move from '../move';

const moveWhere = <T>(
  predicate: PredicateIteratee<T>,
  to: number | PredicateIteratee<T>,
  list: Nil<T[]>,
): T[] => {
  const pred = iteratee(predicate) as Predicate<T>;

  const fromIndex = findIndex(pred, list);
  const toIndex = isNumber(to)
    ? to as number
    : findIndex(iteratee(to), list);

  return move(fromIndex, toIndex, list);
};

export default moveWhere;
