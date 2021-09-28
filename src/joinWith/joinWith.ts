import {
  flatMap,
} from 'lodash/fp';
import withKey from '../withKey';

export default <T, TJoin>(
  separator: TJoin,
  arrays: Array<T[]>,
): (T | TJoin)[] => withKey(flatMap)(
  (arr: T[], i: number) => {
    if (i < arrays.length - 1) {
      return [arr, separator];
    }
    return [arr];
  },
  arrays,
);
