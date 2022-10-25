export default class Stack<T> {
    private items;
    constructor();
    push(...elm: T[]): void;
    peek(): T;
    pop(): T;
    empty(): boolean;
    toString(): string;
    toArray(): T[];
}
