# lazy

### `<T>(factory: () => T): () => T`

Returns a lazily-evaluated function that will only run once.

Example:
```ts
let invokeCount = 0;

const lazyLoaded = lazy(() => ++invokeCount);

expect(lazyLoaded()).toBe(1);
expect(lazyLoaded()).toBe(1);
```

```ts
const getExpensiveValue = lazy(() => getExpensiveApiCall());

await getExpensiveValue(); // will call the API
await getExpensiveValue(); // will return the API results
```
