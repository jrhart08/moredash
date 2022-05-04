# delay

### `(ms: number) => <T>(data: T | Promise<T>): Promise<T>`

Returns a resolved promise after X milliseconds. Useful for adding a delay to a mocked API response.

Usage:
```tsx
// src/api/getUserData.ts
export default (): User => Promise
    .resolve({
        firstName: 'Place',
        lastName: 'Holder',
    })
    .then(delay(500)); // delay by 500ms


// src/pages/UserDetails.tsx
import getUserData from '../api/getUserData';

const UserDetails = () => {
    const [user, setUser] = useState({} as User);

    useEffect(() => {
        getUserData().then((user) => setUser(user));
    });

    return <div />;
};
```
