import { drop, first, isEmpty } from 'lodash/fp';

const reduceAsync = <T, TReturn>(
  callback: (memo: TReturn, element: T) => Promise<TReturn>,
  memo: TReturn,
  data: T[],
): Promise<TReturn> => {
  if (isEmpty(data)) {
    return Promise.resolve(memo);
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- checked for empty
  return callback(memo, first(data)!)
    .then((newMemo) => reduceAsync(callback, newMemo, drop(1, data)));
};

export default reduceAsync;
