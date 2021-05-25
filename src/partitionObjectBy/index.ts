import { Dictionary } from 'lodash';
import { toPairs, iteratee } from 'lodash/fp';
import {
  Predicate2,
  Predicate2Iteratee,
  Nil,
} from '../types';

const partitionObjectBy = <T extends Dictionary<any>>(
  predicate: Predicate2Iteratee<any, string>,
  source: Nil<T>,
): [Partial<T>, Partial<T>] => {
  const yes = {} as Partial<T>;
  const no = {} as Partial<T>;

  const pred = iteratee(predicate) as Predicate2<any, string>;

  toPairs(source || {}).forEach(([key, val]) => {
    const target: Dictionary<any> = pred(val, key) ? yes : no;

    target[key] = val;
  });

  return [yes, no];
};

export default partitionObjectBy;
