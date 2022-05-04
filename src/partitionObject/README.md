# partitionObject

### `<T>(pickKeys: string[], source: T) => [Partial<T>, Partial<T>]`

Acts as a combination of `lodash/pick` and `lodash/omit`

Similar to `lodash/partition`, this will return a pair of objects. 1 with the picked properties, and 1 with the remaining properties.

Usage:

```ts
const protagonist = {
  firstName: 'Jotaro',
  lastName: 'Kujo',
  stand: 'Star Platinum',
  series: 'Stardust Crusaders',
};

const [name, info] = partitionObject(['firstName', 'lastName'], protagonist);

console.log(name); // { firstName: 'Jotaro', lastName: 'Kujo' }

console.log(info); // { stand: 'Star Platinum', series: 'Stardust Crusaders' }
```
