import reduceAsync from '../reduceAsync';

const findAsync = <T, TReturn>(
  predicate: (element: T) => Promise<TReturn>,
  data: T[],
): Promise<TReturn[]> => reduceAsync(
    async (memo: TReturn[], element: T) => [
      ...memo, await predicate(element),
    ],
    [],
    data,
  );
export default findAsync;
