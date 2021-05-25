import { Dictionary } from 'lodash';
import includes from 'lodash/fp/includes';
import partitionObjectBy from '../partitionObjectBy';

const partitionObject = <T extends Dictionary<any>>(
  pickKeys: string[] | null | undefined,
  source: T | null | undefined,
): [Partial<T>, Partial<T>] => {
  const predicate = (val: any, key: string) => includes(key, pickKeys);

  return partitionObjectBy(predicate, source);
};

export default partitionObject;
