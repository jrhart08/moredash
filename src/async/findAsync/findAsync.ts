import reduceAsync from '../reduceAsync';

const findAsync = <T>(
  predicate: (element: T) => Promise<boolean>,
  data: T[],
): Promise<T | undefined> => reduceAsync(
    async (memo: T | undefined, element: T) => {
      if (memo) {
        return memo;
      }

      return await predicate(element)
        ? element
        : undefined;
    },
    undefined,
    data,
  );
export default findAsync;
