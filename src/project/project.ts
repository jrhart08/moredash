/* eslint-disable @typescript-eslint/no-explicit-any */
import flow from 'lodash/fp/flow';
import set from 'lodash/fp/set';
import mapValues from 'lodash/fp/mapValues';
import reduce from 'lodash/fp/reduce';

type Converter<T> = (obj: T) => any;
export type ProjectionMap<T> = {
  [path: string]: Converter<T>,
};

const reduceWithKey = (reduce as any).convert({ cap: false });

export default <T>(projection: ProjectionMap<T>, obj: T) => flow(
  mapValues((mappingFn: Converter<T>) => mappingFn(obj)),
  reduceWithKey(
    (newObj: T, value: any, path: string) => set(path, value, newObj as any),
    {},
  ),
)(projection);
