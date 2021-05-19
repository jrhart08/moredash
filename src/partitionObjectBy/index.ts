import { toPairs, iteratee } from 'lodash/fp';
import { Predicate2, Predicate2Iteratee } from '../types';

// eslint-disable-next-line @typescript-eslint/ban-types
const partitionObjectBy = <T extends object>(
  predicate: Predicate2Iteratee<any, string>,
  source: T,
): [Partial<T>, Partial<T>] => {
  const yes = {} as Partial<T>;
  const no = {} as Partial<T>;

  const pred = iteratee(predicate) as Predicate2<any, string>;

  toPairs(source).forEach(([key, val]) => {
    const target = pred(val, key) ? yes : no;

    target[key] = val;
  });

  return [yes, no];
};

export default partitionObjectBy;
