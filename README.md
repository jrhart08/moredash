# moredash
General-purpose utility functions for when lodash isn't enough


# Objects

## camelCaseObject
### `(source: object) => object`

Converts an object's keys to camelCase, recursively.

Usage:
```ts
const apiResponseModel = {
  FirstName: 'Joseph',
  LastName: 'Joestar',
};

const camelCasedModel = camelCaseObject(apiResponseModel);

console.log(camelCasedModel); // { firstName: 'Joseph', lastName: 'Joestar' }
```



## mapKeysRecursive
### `(key: string, value: any) => (source: object) => object`

Like `lodash/mapKeys`, but maps recursively. Used internally by `camelCaseObject`

Usage:

```ts
// Example 1
import { camelCase } from 'lodash';

// how camelCaseObject works
const camelCaseObject = mapKeysRecursive(camelCase);


// Example 2
import { snakeCase } from 'lodash';

const snake_case_object = mapKeysRecursive(snakeCase);

console.log(snake_case_object({
  firstName: 'Jonathan',
  lastName: 'Joestar',
}));
// { first_name: 'Jonathan', last_name: 'Joestar' }
```



## partitionObject
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



## partitionObjectBy
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



## pickDeep
### `<T>(paths: string[], obj: T): DeepPartial<T>`

Similar to `lodash/pick`, but supports deep path selection similar to that of `lodash/get`.

Usage:
```ts
const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@compuserve.com'
  address: {
    street: '123 Oak Street',
    city: 'Houston',
    state: 'TX',
  },
};

const emailAndState = pickDeep(['email', 'address.state'], user);

// pass
expect(emailAndState).toEqual({
  email: 'john.doe@compuserve.com'
  address: {
    state: 'TX',
  },
});
```



## trimObject
### `<T>(source: T) => Partial<T>`

Omits any nil (null/undefined) values on an object.

Usage:
```ts
const fooBarBazBuz = {
  foo: 'foo',
  bar: 'bar',
  baz: null,
  buz: undefined,
};

const fooBar = trimObject(fooBarBazBuz);

console.log(fooBar); // { foo: 'foo', bar: 'bar' }
```



# Arrays

## joinWith
### `<T, TJoin>(separator: TJoin, arrays: Array<T[]>) => (T | TJoin)[]`

Flat-maps the arrays, joined by the given separator.

Usage:
```ts
const _123 = [1, 2, 3];
const _456 = [4, 5, 6];
const _789 = [7, 8, 9];

joinWith('|', [_123, _456, _789]); // [1, 2, 3, '|', 4, 5, 6, '|', 7, 8, 9]
```

## move
### `<T>(from: number, to: number, source: Nil<T[]>): T[]`

Moves an element to the destination index.

If start > destination, elements will be pushed to the right.

If start < destination, elements will be pushed to the left.

Usage:
```ts
// NOTE: moved elements are capitalized and double-quoted

// moving element to the left
const qwertY = ['q', 'w', 'e', 'r', 't', "_Y_"];
const qwYert = move(5, 2, qwertY);

expect(qwYert.join('')).toBe('qw_Y_ert');

// moving element to the right
const Dvorak = ["_D_", 'v', 'o', 'r', 'a', 'k'];
const vorakD = move(0, 5, Dvorak);

expect(vorakD.join('')).toBe('vorak_D_');
```

# Functions




# Promises
