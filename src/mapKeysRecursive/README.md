# mapKeysRecursive

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
