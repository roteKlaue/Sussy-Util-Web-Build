import MapEntries from "../Interfaces/MapEntry";
export default class Collection<K, V> {
    private map;
    get(key: K): V | undefined;
    set({ key, value }: {
        key: K;
        value: V;
    }): void;
    remove(key: K): void;
    toString(): string;
    toArray(): MapEntries<K, V>[];
}
