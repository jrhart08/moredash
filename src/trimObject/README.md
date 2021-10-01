# trimObject

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
