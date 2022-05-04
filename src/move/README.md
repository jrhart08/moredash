# move

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
