export default class Set<T> {
    private items;
    private checkFunction;
    constructor(...items: T[]);
    push(item: T): void;
    delete(item: T): void;
    get(index: number): T;
    isEmpty(): boolean;
    length(): number;
    clear(): void;
    clone(): Set<T>;
    remove(index: number): void;
    toArray(): T[];
    changeCheckFunction(fun: Function): void;
    toString(): string;
}
