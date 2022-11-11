import IndexOutOfBoundsError from "../Error/IndexOutOfBoundsError";
import Set from "./Set";
export default class ImprovedArray extends Array {
    constructor(..._elements) {
        super(_elements.length);
        _elements.forEach((_e, i) => this[i] = _e);
    }
    getRandomIndex() {
        return Math.floor(Math.random() * this.length);
    }
    getRandomElement() {
        return this[this.getRandomIndex()];
    }
    remove(index) {
        if (typeof index !== 'number')
            throw new TypeError('index must be a number');
        if (index >= this.length || index < 0)
            throw new IndexOutOfBoundsError(`${index} is out of bounds for length: ${this.length}`);
        return this.splice(Math.floor(index), 1)[0];
    }
    insertAt(index, ...items) {
        if (typeof index !== 'number')
            throw new TypeError('index must be a number');
        if (index >= this.length || index < 0)
            throw new IndexOutOfBoundsError(`${index} is out of bounds for length: ${this.length}`);
        this.push(...items, ...this.splice(index, this.length - index - 1));
    }
    clear() {
        this.splice(0, this.length);
    }
    clone() {
        return new ImprovedArray(...this);
    }
    isEmpty() {
        return this.length === 0;
    }
    none(predicate) {
        return this.reduce((acc, value) => !acc && !predicate(value), false);
    }
    rejected(predicate) {
        return new ImprovedArray(...this.filter((val, ind, arr) => !predicate(val, ind, arr)));
    }
    sum() {
        return this.reduce(function (acc, value) {
            return acc + value;
        });
    }
    removeDuplicates() {
        const newArray = new Set(...this).toArray();
        this.clear();
        this.push(...newArray);
    }
    scramble() {
        let lengthArr = this.length;
        while (lengthArr) {
            lengthArr -= 1;
            const randomIndex = Math.floor(Math.random() * lengthArr);
            const temp = this[lengthArr];
            this[lengthArr] = this[randomIndex];
            this[randomIndex] = temp;
        }
    }
    countOccurrences(value) {
        return this.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
    }
    static flat(arr) {
        const result = [];
        for (const item of arr) {
            if (Array.isArray(item)) {
                result.push(...this.flat(item));
            }
            else {
                result.push(item);
            }
        }
        return result;
    }
    flatten() {
        const newARR = ImprovedArray.flat(this);
        this.clear();
        this.push(...newARR);
    }
}
