# sleep

### `(ms: number) => Promise`

Creates a promise that resolves after X milliseconds.

Usage:
```ts
const getProductFromFutureApi = async () => {
    const product = { name: 'Item 1', price: 10, sku: 'sku123' };

    await sleep(500);

    return product;
};
```
