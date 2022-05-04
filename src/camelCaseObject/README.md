# camelCaseObject

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
