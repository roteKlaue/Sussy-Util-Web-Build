import AlreadyExistsInCollectionError from "../Error/AlreadyExistsInCollectionError";
import impArray from "./ImprovedArray";
export default class Collection {
    constructor() {
        this.map = new impArray();
    }
    get(key) {
        return this.map.find((e) => e.key === key)?.value;
    }
    set({ key, value }) {
        const object = this.map.find((e) => e.key === key);
        if (object) {
            throw new AlreadyExistsInCollectionError("There is already a key value pair with this key");
        }
        this.map.push({ key: key, value: value });
    }
    remove(key) {
        const object = this.map.find((e) => e.key === key);
        if (!object) {
            throw new AlreadyExistsInCollectionError("There is no a key value pair with this key");
        }
        return this.map.remove(this.map.indexOf(object));
    }
    toString() {
        return `Collection: ${this.map.toString()}`;
    }
    toArray() {
        return this.map;
    }
}
