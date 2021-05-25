/* eslint-disable @typescript-eslint/no-explicit-any */
import omitBy from 'lodash/fp/omitBy';
import isNil from 'lodash/fp/isNil';
import { Dictionary } from 'lodash';

const trimObject: <T extends Dictionary<any>>(source: T) => Partial<T> = omitBy(isNil);

export default trimObject;
