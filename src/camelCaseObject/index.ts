import {
  camelCase,
  isArray,
  map,
  toPairs,
  isObject,
} from 'lodash/fp';

const camelCaseObject = (source: unknown): unknown => {
  if (isArray(source)) {
    return map(camelCaseObject, source);
  }

  if (isObject(source)) {
    /* eslint-disable no-param-reassign */
    return toPairs(source).reduce((result, [key, val]) => {
      result[camelCase(key)] = camelCaseObject(val);

      return result;
    }, {});
    /* eslint-enable no-param-reassign */
  }

  return source;
};

export default camelCaseObject;
