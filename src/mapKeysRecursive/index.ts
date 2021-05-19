import {
  isArray,
  map,
  toPairs,
  isObject,
} from 'lodash/fp';

const mapKeysRecursive = (
  keyMapper: (key: string, value: any) => string,
) => (source: unknown): unknown => {
  if (isArray(source)) {
    return map(mapKeysRecursive(keyMapper), source);
  }

  if (isObject(source)) {
    /* eslint-disable no-param-reassign */
    const keyMap = mapKeysRecursive(keyMapper);
    return toPairs(source).reduce((result, [key, val]) => {
      result[keyMapper(key, val)] = keyMap(val);

      return result;
    }, {});
    /* eslint-enable no-param-reassign */
  }

  return source;
};

export default mapKeysRecursive;
