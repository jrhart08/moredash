import isArray from 'lodash/fp/isArray';
import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';
import isObject from 'lodash/fp/isObject';
import isFunction from 'lodash/fp/isFunction';
import reduce from 'lodash/fp/reduce';
import flow from 'lodash/fp/flow';

const mapKeysRecursive = (
  keyMapper: (key: string, value: any) => string,
) => (source: unknown): unknown => {
  if (isArray(source)) {
    return map(mapKeysRecursive(keyMapper), source);
  }

  if (isObject(source) && !isFunction(source)) {
    /* eslint-disable no-param-reassign */
    const keyMap = mapKeysRecursive(keyMapper);
    return flow(
      toPairs,
      reduce((result, [key, val]) => {
        result[keyMapper(key, val)] = keyMap(val);

        return result;
      }, {} as Record<string, any>),
    )(source);
    /* eslint-enable no-param-reassign */
  }

  return source;
};

export default mapKeysRecursive;
