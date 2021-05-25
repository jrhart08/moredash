import isEmpty from 'lodash/fp/isEmpty';
import { Nil } from '../types';

const move = <T>(from: number, to: number, source: Nil<T[]>): T[] => {
  if (isEmpty(source)) {
    return [];
  }

  const list = source as T[];

  if (!(from in list && to in list)) {
    return list;
  }

  const newList = [...list];

  const [elem] = newList.splice(from, 1);

  newList.splice(to, 0, elem);

  return newList;
};

export default move;
