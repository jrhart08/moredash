import { includes } from 'lodash/fp';
import partitionObjectBy from '../partitionObjectBy';

// eslint-disable-next-line @typescript-eslint/ban-types
const partitionObject = <T extends object>(
  pickKeys: string[],
  source: T,
): [Partial<T>, Partial<T>] => {
  const predicate = (val: any, key: string) => includes(key, pickKeys);

  return partitionObjectBy(predicate, source);
};

export default partitionObject;
