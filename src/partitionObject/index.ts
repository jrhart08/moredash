import includes from 'lodash/fp/includes';
import partitionObjectBy from '../partitionObjectBy';
import { Dict } from '../types';

const partitionObject = <T extends Dict<any>>(
  pickKeys: string[] | null | undefined,
  source: T | null | undefined,
): [Partial<T>, Partial<T>] => {
  const predicate = (val: any, key: string) => includes(key, pickKeys);

  return partitionObjectBy(predicate, source);
};

export default partitionObject;
