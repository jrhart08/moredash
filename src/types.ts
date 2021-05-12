export type Predicate<T> = (item: T) => boolean;
export type Predicate2<V, K> = (elem: V, key: K) => boolean;
export type PredicateIteratee<T> = Predicate<T> | Partial<T> | string;
export type Predicate2Iteratee<V, K> = Predicate2<V, K> | Partial<V> | string;
