export default class ImprovedArray<T> extends Array<T> {
    constructor(..._elements: T[]);
    getRandomIndex(): number;
    getRandomElement(): T;
    remove(index: number): void;
    insertAt(index: number, ...items: T[]): void;
    clear(): void;
    clone(): ImprovedArray<T>;
    isEmpty(): boolean;
    none(predicate: Function): boolean;
    rejected(predicate: Function): ImprovedArray<T>;
    sum(): T | string;
    removeDuplicates(): void;
    scramble(): this;
    countOccurrences(value: T): number;
}
