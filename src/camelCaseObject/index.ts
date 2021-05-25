import camelCase from 'lodash/fp/camelCase';
import mapKeysRecursive from '../mapKeysRecursive';

const camelCaseObject = mapKeysRecursive(camelCase);

export default camelCaseObject;
