const move = <T>(from: number, to: number, list: T[]): T[] => {
  const newList = [...list];

  const [elem] = newList.splice(from, 1);

  newList.splice(to, 0, elem);

  return newList;
};

export default move;
