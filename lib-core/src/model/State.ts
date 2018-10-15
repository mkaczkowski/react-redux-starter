import { Set } from 'immutable';

export interface ImmutableState<T> {
  toJS(): T;
  get<K extends keyof T>(key: K): Set<T[K]>;
  set<K extends keyof T>(key: K, value: T[K]): ImmutableState<T>;
}
