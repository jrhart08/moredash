# partitionObjectBy

### `<T>(predicate: (value: any, key: string) => boolean, source: T) => [Partial<T>, Partial<T>]`

Acts as a combination of `lodash/pickBy` and `lodash/omitBy`.

Similar to `partitionObject`, but accepts a predicate rather than a list of keys.

Usage:

```ts
const daysByMonth = {
  january: 31,
  february: 28,
  march: 31,
  april: 30,
};

const isOdd = (num: number) => num % 2 === 1;

const [oddMonths, evenMonths] = partitionObject(isOdd, daysByMonth);

console.log(oddMonths);   // { january: 31, march: 31 }
console.log(evenMonths);  // { february: 28, april: 30 }
```
