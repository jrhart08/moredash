/* eslint-disable @typescript-eslint/no-explicit-any */
import omitBy from 'lodash/fp/omitBy';
import isNil from 'lodash/fp/isNil';
import { Dict } from '../types';

const trimObject: <T extends Dict<any>>(source: T) => Partial<T> = omitBy(isNil);

export default trimObject;
