import IndexOutOfBoundsError from "../Error/IndexOutOfBoundsError";
import ImprovedArray from "./ImprovedArray";
export default class Stack {
    constructor() {
        this.items = new ImprovedArray();
    }
    ;
    push(...elm) {
        this.items.push(...elm);
    }
    peek() {
        if (this.items.length < 0)
            throw new IndexOutOfBoundsError();
        return this.items[this.items.length - 1];
    }
    pop() {
        if (this.items.length < 0)
            throw new IndexOutOfBoundsError();
        const sus = this.items.pop();
        if (!sus)
            throw new IndexOutOfBoundsError();
        return sus;
    }
    empty() {
        return this.items.isEmpty();
    }
    toString() {
        return `Stack: ${this.items.toString()}`;
    }
    toArray() {
        return this.items;
    }
    toJSONString() {
        return JSON.stringify(this.items);
    }
}
