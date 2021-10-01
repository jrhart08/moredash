# withKey

```
<T, TResult>(func: (value: T) => TResult)
    => ((func: (value: T, key: string | number)) => TResult)
```

Simply calls `.convert({ cap: false })` on a `lodash/fp` function. By default, functions like `lodash/fp/map` don't pass in the key/index as a 2nd parameter.

Example:

```ts
import { map } from 'lodash/fp';

// these 2 functions are identical
const map2 = map.convert({ cap: false });
const map3 = withKey(map);
```
