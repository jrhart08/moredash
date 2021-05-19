/* eslint-disable @typescript-eslint/no-explicit-any */
import { omitBy, isNil } from 'lodash/fp';

const trimObject: <T>(source: T) => Partial<T> = omitBy(isNil);

export default trimObject;
