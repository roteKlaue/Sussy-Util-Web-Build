import isObject from "./isObject";
export default function clone(obj) {
    if (Array.isArray(obj)) {
        return obj.map(clone);
    }
    if (isObject(obj)) {
        const _clone = {};
        for (const key in obj) {
            _clone[key] = clone(obj[key]);
        }
        return _clone;
    }
    return obj;
}
