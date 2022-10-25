import IndexOutOfBoundsError from "../Error/IndexOutOfBoundsError";
import ImprovedArray from "./ImprovedArray";
export default class Set {
    constructor(...items) {
        this.items = new ImprovedArray();
        this.checkFunction = (arrayParam, newItem) => arrayParam === newItem;
        for (let index = 0; index < items.length; index++) {
            const item = items.shift();
            if (item && !items.includes(item)) {
                this.items.push(item);
            }
        }
    }
    push(item) {
        if (!this.items.some((item2) => this.checkFunction(item2, item))) {
            this.items.push(item);
        }
    }
    delete(item) {
        this.items.find((v, i) => {
            if (v === item) {
                this.items.remove(i);
            }
        });
    }
    get(index) {
        if (index < 0 || index >= this.length()) {
            throw new IndexOutOfBoundsError(`Index: ${index} is out of bounds for length ${this.length()}`);
        }
        return this.items[index];
    }
    isEmpty() {
        return this.items.isEmpty();
    }
    length() {
        return this.items.length;
    }
    clear() {
        this.items.clear();
    }
    clone() {
        return new Set(...this.items);
    }
    remove(index) {
        if (index < 0 || index >= this.length()) {
            throw new IndexOutOfBoundsError(`Index: ${index} is out of bounds for length ${this.length()}`);
        }
        this.items.remove(index);
    }
    toArray() {
        return [...this.items];
    }
    changeCheckFunction(fun) {
        this.checkFunction = fun;
    }
    toString() {
        return `Set: ${this.items.toString()}`;
    }
}
