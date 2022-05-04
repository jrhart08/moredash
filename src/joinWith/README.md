# joinWith

### `<T, TJoin>(separator: TJoin, arrays: Array<T[]>) => (T | TJoin)[]`

Flat-maps the arrays, joined by the given separator.

Usage:
```ts
const _123 = [1, 2, 3];
const _456 = [4, 5, 6];
const _789 = [7, 8, 9];

joinWith('|', [_123, _456, _789]); // [1, 2, 3, '|', 4, 5, 6, '|', 7, 8, 9]
```
