# pickDeep

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
