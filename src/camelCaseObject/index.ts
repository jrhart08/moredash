import { camelCase } from 'lodash/fp';
import mapKeysRecursive from '../mapKeysRecursive';

const camelCaseObject = mapKeysRecursive(camelCase);

export default camelCaseObject;
