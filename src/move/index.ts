import { isEmpty } from 'lodash/fp';

const move = <T>(from: number, to: number, list: T[]): T[] => {
  if (isEmpty(list)) {
    return [];
  }

  if (!(from in list && to in list)) {
    return list;
  }

  const newList = [...list];

  const [elem] = newList.splice(from, 1);

  newList.splice(to, 0, elem);

  return newList;
};

export default move;
