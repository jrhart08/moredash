import reduce from 'lodash/fp/reduce';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
};

export default <T>(paths: string[], obj: T): DeepPartial<T> => reduce(
  (newObj, path) => set(path, get(path, obj), newObj),
  {},
  paths,
);
