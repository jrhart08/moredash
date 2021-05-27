import toPairs from 'lodash/fp/toPairs';
import iteratee from 'lodash/fp/iteratee';
import {
  Predicate2,
  Predicate2Iteratee,
  Nil,
  Dict,
} from '../types';

const partitionObjectBy = <T extends Dict<any>>(
  predicate: Predicate2Iteratee<any, string>,
  source: Nil<T>,
): [Partial<T>, Partial<T>] => {
  const yes = {} as Partial<T>;
  const no = {} as Partial<T>;

  const pred = iteratee(predicate) as Predicate2<any, string>;

  toPairs(source || {}).forEach(([key, val]) => {
    const target: Dict<any> = pred(val, key) ? yes : no;

    target[key] = val;
  });

  return [yes, no];
};

export default partitionObjectBy;
