import MapEntries from "../Types/MapEntry";
export default class Collection<K, V> {
    private map;
    get(key: K): V | undefined;
    set({ key, value }: MapEntries<K, V>): void;
    put(kv: MapEntries<K, V>): void;
    remove(key: K): MapEntries<K, V>;
    toString(): string;
    toArray(): MapEntries<K, V>[];
    count(): number;
    has(key: K): boolean;
    missing(key: K): boolean;
    toJSONString(): string;
}
