import reduceAsync from '../reduceAsync';

const findAsync = <T>(
  predicate: (element: T) => Promise<boolean>,
  data: T[],
): Promise<T[]> => reduceAsync(
    async (memo: T[], element: T) => (await predicate(element)
      ? [...memo, element]
      : memo),
    [],
    data,
  );
export default findAsync;
